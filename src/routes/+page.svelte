
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
    }

    .wrapper {
        @media (width > 900px) {
            padding-left: 4rem;

             &:first-child {
                padding-left: 0;
            }
        }
    }

    .downloads {
        display: flex;
        justify-content: center;
        gap: 1rem;
    }

    .downloads img {
        vertical-align: middle;
        height: 44px;
        padding-top: 1rem;
        width: auto;
    }
</style>

<svelte:head>
  <title>Leif</title>
  <style >
    body {
        background-color: rgb(21, 40, 51);
        background-image: url('./backgrounds/leif-blue.jpg');
        background-size: fill;
        color: #fff;
        font-family: 'Inter', sans-serif;
    }
  </style>
</svelte:head>

<main>
    <div class="wrapper">
        <img src="./logo-stacked.png" alt='Leif logo, a smiling cartoon, green leaf' />
    </div>
    <div class="wrapper">
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
