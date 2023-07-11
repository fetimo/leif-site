<article class="container paragraphs">
    <img class="inline page-logo" alt="Leif logo" src="/logo-stacked.png">
    <slot />
</article>

<style>
    .inline {
        display: inline-block;
    }

    .page-logo {
        height: 9ch;
        margin-inline-end: 1ch;
    }

    .paragraphs {
        font-size: 20px;
        line-height: 160%;
    }


    .container {
        max-width: 80ch;
        margin: 0 auto;
        padding: 3ch;
    }
</style>


<svelte:head>
    <title>Privacy Policy | Leif</title>
  <style>
    body {
      background-color: rgb(21, 40, 51);
      background-image: url('/backgrounds/leif-green.jpg');
      background-size: fill;
      color: #fff;
      font-family: 'Inter', sans-serif;
    }
  </style>
</svelte:head>