
<style>
.letter {
  white-space: pre-wrap;
  background-color: #fff;
  color: #000;
  padding: 2rem;
  margin: 2rem 0;
}
</style>

<svelte:head>
  <title>Write to your MP | Leif</title>
  <style>
    body {
        background-color: rgb(21, 40, 51);
        background-image: url('./backgrounds/leif-green.jpg');
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

<main class="container">
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
    <div class="loading" aria-busy="true">Hold tight, Leif is generating your persuasive, data-accurate, irrefutable letter…</div>
  {/if}
</main>
