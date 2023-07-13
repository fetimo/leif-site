
<style>
    img {
        max-width: 45vw;
        width: 400px;
    }

    main {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;

        @media (width <= 900px) {
            flex-direction: column;
        }
    }
    
    h1 {
        font-size: 3.375rem;
        font-size: clamp(1.5rem, -1.8333rem + 8.3333vw, 3.375rem);
    }


    .downloads {
        display: flex;
        justify-content: center;
        gap: 1rem;
    }

    .downloads img {
        height: 44px;
        width: auto;
    }
</style>

<svelte:head>
  <title>Leif</title>
  <style >
    body {
        background-color: rgb(21, 40, 51);
        background-image: url('./backgrounds/leif-blue.jpg');
    }
  </style>
</svelte:head>

<main class="container">
    <div >
        <img src="./logo-stacked.png" alt='Leif logo, a smiling cartoon, green leaf' />
    </div>
    <div >
        <h1>Observe, change</h1>
        <p>Learn about energy in your area</p>
        <p>Discover the greenest time to charge</p>
        <p>Reduce your carbon impact</p>
        <div class="downloads">
            <a href="https://apps.apple.com/gb/app/leif/id1635425240">
                <img src="./apple-store.png" alt="Download on the Mac App Store" width="195">
            </a>
            <a href="https://apps.microsoft.com/store/detail/?launch=true&mode=full">
                <img src="https://get.microsoft.com/images/en-GB%20dark.svg" alt="Get it from Microsoft" />
            </a>
        </div>
    </div>
</main>
