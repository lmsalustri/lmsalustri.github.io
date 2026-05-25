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
	<link rel="icon" href="/wpi-ndsa/images/ndsa.png" />
</svelte:head>

<div class="min-h-screen bg-white text-neutral-900">
	<header class="sticky top-0 z-50 border-b border-red-900/20 bg-[#8F0002] text-white shadow">
		<div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
			<a href="/wpi-ndsa/" class="flex items-center gap-3">
				<img src="/wpi-ndsa/images/ndsa.png" alt="NDSA logo" class="h-12 w-12 rounded" />
				<span class="text-lg font-bold leading-tight md:text-2xl">
					Neurodivergent Student Association
				</span>
			</a>

			<nav class="hidden items-center gap-6 text-sm font-semibold md:flex">
				{#each links as link}
					<a href={link.href} class="hover:underline">{link.label}</a>
				{/each}
			</nav>

			<button
				class="rounded-md p-2 md:hidden"
				aria-label="Toggle menu"
				aria-expanded={open}
				onclick={() => (open = !open)}
			>
				<div class="space-y-1.5">
					<span class="block h-0.5 w-6 bg-white"></span>
					<span class="block h-0.5 w-6 bg-white"></span>
					<span class="block h-0.5 w-6 bg-white"></span>
				</div>
			</button>
		</div>

		{#if open}
			<nav class="border-t border-white/20 px-4 py-3 md:hidden">
				<div class="mx-auto flex max-w-6xl flex-col gap-3">
					{#each links as link}
						<a href={link.href} onclick={() => (open = false)} class="font-semibold hover:underline">
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

		<nav class="mt-4 flex justify-center gap-4">
			{#each links as link}
				<a href={link.href} class="hover:underline">{link.label}</a>
			{/each}
		</nav>
	</footer>
</div>
