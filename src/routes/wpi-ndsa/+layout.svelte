<script lang="ts">
	let { children } = $props();
	let open = $state(false);

	const site = {
		name: 'Neurodivergent Student Association',
		description:
				"WPI's Neurodivergent Student Association supports students with autism, ADHD, dyslexia, OCD, and other neurodiverse identities through events, community, and resources.",
		shortDescription:
				'A student organization at WPI supporting neurodivergent voices and community.',
		url: 'https://lmsalustri.github.io/wpi-ndsa/',
		logo: {
			src: '/wpi-ndsa/images/ndsa.png',
			absoluteSrc: 'https://lmsalustri.github.io/wpi-ndsa/images/ndsa.png',
			alt: 'NDSA logo'
		},
		robots: 'index, follow',
		social: {
			instagram: 'https://www.instagram.com/wpi.ndsa/'
		}
	};

	const navLinks = [
		{ href: '/wpi-ndsa/', label: 'Home' },
		{ href: '/wpi-ndsa/about/', label: 'About' },
		{ href: '/wpi-ndsa/officers/', label: 'Officers' },
		{ href: '/wpi-ndsa/resources/', label: 'Resources' }
	];

	const footer = {
		organization: 'Worcester Polytechnic Institute',
		rights: 'All rights reserved.',
		address: '100 Institute Rd, Worcester, MA 01609'
	};

	const organizationSchema = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: site.name,
		url: site.url,
		logo: site.logo.absoluteSrc,
		sameAs: [site.social.instagram],
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
	};
	const organizationSchemaJson = JSON.stringify(organizationSchema);
</script>

<svelte:head>
	<meta name="description" content={site.description} />
	<meta name="robots" content={site.robots} />

	<meta property="og:type" content="website" />
	<meta property="og:title" content={`WPI ${site.name}`} />
	<meta property="og:description" content={site.shortDescription} />
	<meta property="og:image" content={site.logo.absoluteSrc} />
	<meta property="og:url" content={site.url} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={`WPI ${site.name}`} />
	<meta name="twitter:description" content={site.shortDescription} />
	<meta name="twitter:image" content={site.logo.absoluteSrc} />

	<link rel="icon" type="image/png" href={site.logo.src} />

	{@html `<script type="application/ld+json">${organizationSchemaJson}</script>`}
</svelte:head>

<div class="min-h-screen">
	<header class="sticky top-0 z-50 bg-(--color-site-primary) text-white shadow-md">
		<div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
			<a href="/wpi-ndsa/" class="flex items-center gap-3">
				<img
						src={site.logo.src}
						alt={site.logo.alt}
						class="h-12 w-12 rounded-md object-cover"
				/>

				<span class="text-base font-extrabold leading-tight sm:text-xl md:text-2xl">
					{site.name}
				</span>
			</a>

			<nav class="hidden items-center gap-6 text-base font-semibold md:flex">
				{#each navLinks as link}
					<a
							href={link.href}
							class="rounded-md px-4 py-3 transition hover:bg-white/15 hover:text-blue-100"
					>
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
				<div class="mx-auto flex max-w-6xl flex-col items-end gap-3 text-right">
					{#each navLinks as link}
						<a
								href={link.href}
								onclick={() => (open = false)}
								class="rounded-md px-4 py-2 text-right font-semibold hover:bg-white/15 hover:text-blue-100"
						>
							{link.label}
						</a>
					{/each}
				</div>
			</nav>
		{/if}
	</header>

	{@render children()}

	<footer class="mt-16 bg-(--color-site-primary) px-4 py-8 text-center text-sm text-white">
		<p>
			© {new Date().getFullYear()} {footer.organization}. {footer.rights}
		</p>

		<p class="mt-1">
			{footer.address}
		</p>

		<nav class="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2">
			{#each navLinks as link}
				<a href={link.href} class="hover:underline">
					{link.label}
				</a>
			{/each}
		</nav>
	</footer>
</div>