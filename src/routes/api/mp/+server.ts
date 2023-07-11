import { error } from "@sveltejs/kit";
import { TWFY_KEY } from '$env/static/private';

import generateTemplate from "./template";

async function getCarbonData(postcode: string) {
  const from = new Date();
  from.setDate(from.getDate() - 13);
  const firstPartOfPostcode = postcode.split(" ")[0];
  const res = await fetch(
    `https://api.carbonintensity.org.uk/regional/intensity/${from.toISOString()}/${
      new Date().toISOString()
    }/postcode/${firstPartOfPostcode}`,
  );
  const json = await res.json();

  const renewables = ["biomass", "hydro", "solar", "wind"];
  const overallMix = json.data.data.reduce((accum, datum) => {
    const boop = datum.generationmix.reduce((acc, mix) => {
      if (renewables.includes(mix.fuel)) {
        return { ...acc, renewable: acc.renewable + mix.perc };
      } else {
        return { ...acc, fossil: acc.fossil + mix.perc };
      }
    }, { fossil: 0, renewable: 0 });

    return {
      fossil: accum.fossil + boop.fossil,
      renewable: accum.renewable + boop.renewable,
    };
  }, { fossil: 0, renewable: 0 });

  return overallMix.fossil / json.data.data.length;
}

async function getMPData(postcode: string) {
  try {
    const res = await fetch(
      `https://www.theyworkforyou.com/api/getMP?postcode=${postcode}&always_return=true&key=${TWFY_KEY}`,
    );
    const json = await res.json();

    return {
      mp: json.full_name,
      constituency: json.constituency,
    };
  } catch {
    return {
      mp: "<< Insert your MP name here >>",
      constituency: "<< Insert your constituency here >>",
    };
  }
}

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
  const { searchParams } = new URL(url);
  const postcode = searchParams.get("postcode");

  if (!postcode) {
    throw error(400, 'a postcode is required');
  }

  if (!postcode.includes(" ")) {
    throw error(400, 'the postcode requires a space');
  }

  const [carbonPercent, politics] = await Promise.all([
    getCarbonData(postcode),
    getMPData(postcode),
  ]);

  const { mp, constituency } = politics;

  const letter = generateTemplate({
    mp,
    constituency,
    postcode,
    carbonPercent: carbonPercent.toFixed(2),
  });

  return new Response(letter, { status: 200 });
}
