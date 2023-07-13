<title>Leif</title>

<link href="/css/pico.min.css" rel="stylesheet">
<link href="/css/aestheti.css" rel="stylesheet">
<link href="https://fonts.cdnfonts.com/css/inter" rel="stylesheet">

<nav class="container">
	<!-- <a href="#" class="secondary" aria-label="Menu" on:click|preventDefault>
		<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="16px" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
	</a>
	 -->
	<ul>
		<li><a href="/">How it works</a></li>
		<li><a href="/mp">Write to your MP</a></li>
		<li><a href="/faq">FAQs</a></li>
		<li><a href="/contact">Contact</a></li>
	</ul>
</nav>

<slot />

<style>
	nav {
		justify-content: flex-end;

		& a {
			color: #fff;
			font-weight: 700;

			&:hover {
				text-decoration: underline;
			}
		}
	}
</style>
