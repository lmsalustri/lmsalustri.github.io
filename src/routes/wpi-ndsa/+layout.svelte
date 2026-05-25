<script lang="ts">
	import './ndsa.css';

	let { children } = $props();
	let open = false;
</script>

<svelte:head>
	<link rel="icon" href="/wpi-ndsa/images/ndsa.png" />
</svelte:head>

<header>
	<div class="header-left">
		<a href="/wpi-ndsa/">
			<img src="/wpi-ndsa/images/ndsa.png" alt="NDSA logo" />
		</a>
		<h1>Neurodivergent Student Association</h1>
	</div>

	<nav>
		<button
			class="nav__toggle"
			aria-label="Toggle menu"
			aria-expanded={open}
			onclick={() => (open = !open)}
		>
			<span class="hamburger"></span>
		</button>

		<ul class:nav__menu={true} class:open>
			<li><a href="/wpi-ndsa/">Home</a></li>
			<li><a href="/wpi-ndsa/about/">About</a></li>
			<li><a href="/wpi-ndsa/officers/">Officers</a></li>
			<li><a href="/wpi-ndsa/resources/">Resources</a></li>
		</ul>
	</nav>
</header>

{@render children()}

<footer>
	<p>&copy; 2025 Worcester Polytechnic Institute. All rights reserved.</p>
	<p>100 Institute Rd, Worcester, MA 01609</p>
	<nav>
		<a href="/wpi-ndsa/">Home</a> |
		<a href="/wpi-ndsa/about/">About</a> |
		<a href="/wpi-ndsa/officers/">Officers</a> |
		<a href="/wpi-ndsa/resources/">Resources</a>
	</nav>
</footer>
