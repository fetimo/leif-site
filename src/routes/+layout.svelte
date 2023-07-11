<title>Leif</title>

<link href="https://fonts.cdnfonts.com/css/inter" rel="stylesheet">
                
<nav>
	<a href="/">How it works</a>
	<a href="/mp">Write to your MP</a>
	<a href="/faq">FAQs</a>
	<a href="/contact">Contact</a>
</nav>

<slot />

<style>
	nav {
		display: flex;
		justify-content: flex-end;
		padding: 2rem 6.25rem;

		@media (width <= 900px) {
			flex-direction: column;
			padding: 2rem;
		}

		& a {
			color: #fff;
			text-decoration: none;
			padding-left: 2.8125rem;
			font-weight: 700;
			font-size: 1.25rem;

			&:hover {
				text-decoration: underline;
			}

			@media (width <= 900px) {
				padding: 0.5rem 0;
			}
		}
	}
</style>
