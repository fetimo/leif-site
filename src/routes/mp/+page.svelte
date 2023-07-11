
<style>
main {
  margin: 0 auto;
  max-width: 44rem;
  position: relative;
  padding-left: 6.25rem;
  padding-right: 6.25rem;

  @media (width <= 900px) {
    margin-left: 2rem;
    margin-right: 2rem;
  }
}

h1 {
  font-size: 67px;
  font-size: clamp(2rem, 0.5417rem + 6.4815vw, 4.1875rem);
  line-height: 1.2;
}

p {
  font-size: 1rem;
  line-height: 1.75;

  &:last-of-type {
    margin-bottom: 2.8125rem;
  }
}

.letter {
  white-space: pre-wrap;
  background-color: #fff;
  color: #000;
  padding: 2rem;
  margin: 2rem 0;
}

input {
  margin-top: 0.5rem;
  border: 1px solid #51BA7D;
  border-radius: 5px;
  padding: 0.625rem;
  font-size: 1rem;
  line-height: 1.75;
}

.cta {
  border: 1px solid #F0F2F1;
  border-radius: 25px;
  display: block;
  appearance: none;
  background: transparent;
  color: #fff;
  padding: 1rem;
  width: 100%;
  font-weight: 700;
  font-size: 1.3125rem;
  cursor: pointer;
}

.inline {
  border: 1px solid #F0F2F1;
  border-radius: 25px;
  appearance: none;
  background: transparent;
  color: #fff;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  padding: 1rem;
  margin-left: 1rem;
}

.loading {
  padding-top: 1rem;
}

.group {
  display: flex;

  & label {
    flex: 0 1 auto;
    display: block;
  }
}
</style>

<svelte:head>
  <title>Write to your MP | Leif</title>
  <style>
    body {
        background-color: rgb(21, 40, 51);
        background-image: url('./backgrounds/leif-green.jpg');
        background-size: fill;
        color: #fff;
        font-family: 'Inter', sans-serif;
    }
  </style>
</svelte:head>

<script>
	let postcode = '';
  let letter = '';
  let isLoading = false;
  let showForm = false;

  async function handlePostcodeSubmit() {
    if (postcode.length > 4) {
      isLoading = true;
      const res = await fetch(`/api/mp?postcode=${encodeURIComponent(postcode)}`);
      letter = await res.text();
      isLoading = false;
    }
  }
</script>

<main>
  <h1>Help make the change!</h1>
  <p>Sad of seeing Leif upset most of the time? Sadly there are no quick solutions but you can write to your MP using statistics specific to your area using the template below.</p>
  {#if !showForm}
  <button class="cta" on:click={() => showForm = !showForm}>
    Write to your MP now!
  </button>
  {/if}

  {#if showForm}
  <div class='group'>
    <label>Your postcode:
      <input 
        bind:value={postcode} 
        on:blur={handlePostcodeSubmit} 
        type='text' 
        name='postcode' 
        id='postcode' 
        placeholder="AA11 1AA"
        autocomplete="postal-code"
      />
    </label>
    <button class='inline'>
      Empower me
    </button>
  </div>
  {/if}

  {#if letter}
    <article class='letter'>
      {letter}
    </article>
  {/if}
  {#if isLoading}
    <div class="loading">Hold tight, Leif is generating your persuasive, data-accurate, irrefutable letter…</div>
  {/if}
</main>
