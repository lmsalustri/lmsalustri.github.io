<script lang="ts">
	let { children } = $props();
	let open = false;

	const links = [
		{ href: '/wpi-ndsa/', label: 'Home' },
		{ href: '/wpi-ndsa/about/', label: 'About' },
		{ href: '/wpi-ndsa/officers/', label: 'Officers' },
		{ href: '/wpi-ndsa/resources/', label: 'Resources' }
	];
</script>

<svelte:head>
	<meta
		name="description"
		content="WPI's Neurodivergent Student Association supports students with autism, ADHD, dyslexia, OCD, and other neurodiverse identities through events, community, and resources."
	/>
	<meta name="robots" content="index, follow" />

	<meta property="og:type" content="website" />
	<meta property="og:title" content="WPI Neurodivergent Student Association" />
	<meta
		property="og:description"
		content="A student organization at WPI supporting neurodivergent voices and community."
	/>
	<meta property="og:image" content="https://lmsalustri.github.io/wpi-ndsa/images/ndsa.png" />
	<meta property="og:url" content="https://lmsalustri.github.io/wpi-ndsa/" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="WPI Neurodivergent Student Association" />
	<meta
		name="twitter:description"
		content="A student organization at WPI supporting neurodivergent voices and community."
	/>
	<meta name="twitter:image" content="https://lmsalustri.github.io/wpi-ndsa/images/ndsa.png" />

	<link rel="icon" type="image/png" href="/wpi-ndsa/images/ndsa.png" />

	<script type="application/ld+json">
		{JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'Organization',
			name: 'Neurodivergent Student Association',
			url: 'https://lmsalustri.github.io/wpi-ndsa/',
			logo: 'https://lmsalustri.github.io/wpi-ndsa/images/ndsa.png',
			sameAs: ['https://www.instagram.com/wpi.ndsa/'],
			address: {
				'@type': 'PostalAddress',
				streetAddress: '100 Institute Rd',
				addressLocality: 'Worcester',
				addressRegion: 'MA',
				postalCode: '01609',
				addressCountry: 'US'
			},
			parentOrganization: {
				'@type': 'CollegeOrUniversity',
				name: 'Worcester Polytechnic Institute',
				url: 'https://www.wpi.edu'
			}
		})}
	</script>
</svelte:head>

<div class="min-h-screen">
	<header class="sticky top-0 z-50 bg-[#8F0002] text-white shadow-md">
		<div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
			<a href="/wpi-ndsa/" class="flex items-center gap-3">
				<img
					src="/wpi-ndsa/images/ndsa.png"
					alt="NDSA logo"
					class="h-12 w-12 rounded-md object-cover"
				/>
				<span class="text-base font-extrabold leading-tight sm:text-xl md:text-2xl">
					Neurodivergent Student Association
				</span>
			</a>

			<nav class="hidden items-center gap-6 text-base font-semibold md:flex">
				{#each links as link}
					<a href={link.href} class="rounded-md px-4 py-3 transition hover:bg-white/15 hover:text-blue-100">
						{link.label}
					</a>
				{/each}
			</nav>

			<button
				class="rounded-md p-2 md:hidden"
				aria-label="Toggle menu"
				aria-expanded={open}
				onclick={() => (open = !open)}
			>
				<span class="mb-1.5 block h-0.5 w-7 bg-white"></span>
				<span class="mb-1.5 block h-0.5 w-7 bg-white"></span>
				<span class="block h-0.5 w-7 bg-white"></span>
			</button>
		</div>

		{#if open}
			<nav class="border-t border-white/20 px-4 py-3 md:hidden">
				<div class="mx-auto flex max-w-6xl flex-col gap-3">
					{#each links as link}
						<a
							href={link.href}
							onclick={() => (open = false)}
							class="font-semibold hover:underline"
						>
							{link.label}
						</a>
					{/each}
				</div>
			</nav>
		{/if}
	</header>

	{@render children()}

	<footer class="mt-16 bg-[#8F0002] px-4 py-8 text-center text-sm text-white">
		<p>&copy; 2025 Worcester Polytechnic Institute. All rights reserved.</p>
		<p class="mt-1">100 Institute Rd, Worcester, MA 01609</p>

		<nav class="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2">
			{#each links as link}
				<a href={link.href} class="hover:underline">{link.label}</a>
			{/each}
		</nav>
	</footer>
</div>
