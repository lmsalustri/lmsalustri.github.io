<script lang="ts">
	const resourcesPage = {
		title: 'Resources | WPI Neurodivergent Student Association',
		canonical: 'https://lmsalustri.github.io/wpi-ndsa/resources/',
		heading: 'Resources',
		description:
				'A collection of WPI and external resources for neurodivergent students and allies.',
		sections: [
			{
				heading: 'WPI Resources',
				resources: [
					{
						name: 'Heebner Career Development Center',
						href: 'https://cdc.wpi.edu/channels/neurodiverse/',
						description:
								'Provides career resources for neurodivergent students, including the Night with Industry, which takes place the night before the semiannual career fair. Students can network with recruiters in a more relaxed setting. No formal dress code is enforced.'
					},
					{
						name: 'Office of Diversity, Inclusion, & Multicultural Education (ODIME)',
						href: 'https://www.wpi.edu/offices/diversity',
						description:
								'Supports students from diverse backgrounds, including neurodiversity, through programs, resources, and advocacy focused on cultural acceptance, social justice, and community building.'
					},
					{
						name: 'Office of Accessibility Services (OAS)',
						href: 'https://www.wpi.edu/offices/office-accessibility-services/',
						description:
								'Coordinates accommodation services and support to assist students with documented physical, learning, sensory, psychological, and developmental disabilities during their time at WPI.'
					}
				]
			},
			{
				heading: 'External Resources',
				resources: [
					{
						name: 'Autistic Self-Advocacy Network (ASAN)',
						href: 'https://autisticadvocacy.org/',
						description:
								'Provides support, community, and public policy advocacy, by and for people on the autism spectrum.'
					},
					{
						name: 'Autistic Women & Nonbinary Network (AWN)',
						href: 'https://awnnetwork.org/',
						description:
								'Seeks to share information which works to build acceptance and understanding of disability, while dispelling stereotypes and misinformation which perpetuate unnecessary fears surrounding an autism diagnosis.'
					},
					{
						name: 'Self Advocates Becoming Empowered (SABE)',
						href: 'https://sabeusa.com/',
						description:
								'Works to ensure that people with disabilities are treated as equals and are given the same decisions, choices, rights, responsibilities, and chance to speak up to empower themselves as everyone else.'
					}
				]
			}
		]
	};
</script>

<svelte:head>
	<title>{resourcesPage.title}</title>
	<link rel="canonical" href={resourcesPage.canonical} />
</svelte:head>

<main class="mx-auto max-w-6xl px-4 py-12">
	<section class="text-center">
		<h1 class="text-4xl font-extrabold text-(--color-site-primary) md:text-5xl">
			{resourcesPage.heading}
		</h1>

		<p class="mx-auto mt-4 max-w-3xl text-lg leading-8 text-neutral-700">
			{resourcesPage.description}
		</p>
	</section>

	{#each resourcesPage.sections as section, index}
		<section class={index === 0 ? 'mt-10' : 'mt-12'}>
			<h2 class="text-center text-3xl font-bold text-(--color-site-primary)">
				{section.heading}
			</h2>

			<div class="mt-6 grid gap-5">
				{#each section.resources as resource}
					<article class="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
						<a
								href={resource.href}
								target="_blank"
								rel="noopener noreferrer"
								class="inline-flex items-center gap-2 text-2xl font-bold text-(--color-site-primary) underline decoration-(--color-site-primary)/40 underline-offset-4 hover:text-blue-600 hover:decoration-blue-600"
						>
							{resource.name}
							<span aria-hidden="true" class="text-lg">↗</span>
						</a>

						<p class="mt-3 text-lg leading-8 text-neutral-700">
							{resource.description}
						</p>
					</article>
				{/each}
			</div>
		</section>
	{/each}
</main>