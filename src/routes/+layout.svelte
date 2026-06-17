<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
	let open = $state(false);

	const siteName = 'Laurie Salustri';
	const siteDescription = 'Personal portfolio website';

	const navItems = [
		{ label: 'About', href: '/#about' },
		{ label: 'Projects', href: '/#projects' },
		{ label: 'Contact', href: '/#contact' }
	];

	const footerText = 'Built with SvelteKit + Tailwind.';
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>{siteName}</title>
	<meta
			name="description"
			content={siteDescription}
	/>
</svelte:head>

<div class="min-h-screen bg-(--color-site-background) text-neutral-100 antialiased">
	<!-- HEADER -->
	<header class="sticky top-0 z-50 bg-(--color-site-primary) text-white shadow-md">
		<div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
			<div class="flex items-center gap-3">
        <span class="text-base font-extrabold leading-tight sm:text-xl md:text-2xl">
          {siteName}
        </span>
			</div>

			<!-- Desktop nav -->
			<nav class="hidden items-center gap-6 text-base font-semibold md:flex">
				{#each navItems as item}
					<a
							href={item.href}
							class="rounded-md px-4 py-3 transition hover:bg-white/15 hover:text-blue-100"
					>
						{item.label}
					</a>
				{/each}
			</nav>

			<button
					class="rounded-md p-2 md:hidden"
					aria-expanded={open}
					aria-label="Toggle menu"
					onclick={() => (open = !open)}
			>
        <span
				class="relative block h-0.5 w-7 bg-white before:absolute before:-top-2 before:block before:h-0.5 before:w-7 before:bg-white after:absolute after:top-2 after:block after:h-0.5 after:w-7 after:bg-white"
		></span>
			</button>
		</div>

		{#if open}
			<div class="border-t border-white/20 px-4 py-3 md:hidden">
				<nav class="mx-auto flex max-w-6xl flex-col gap-3">
					{#each navItems as item}
						<a
								href={item.href}
								onclick={() => (open = false)}
								class="font-semibold hover:underline"
						>
							{item.label}
						</a>
					{/each}
				</nav>
			</div>
		{/if}
	</header>

	<main>
		{@render children()}
	</main>

	<footer class="border-t border-white/10 px-4 py-6 text-center text-sm text-neutral-400">
		© {new Date().getFullYear()} {siteName}. {footerText}
	</footer>
</div>

