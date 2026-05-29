<script lang="ts">
	const wpiResources = [
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
	];

	const externalResources = [
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
	];
</script>

<svelte:head>
	<title>Resources | WPI Neurodivergent Student Association</title>
	<link rel="canonical" href="https://lmsalustri.github.io/wpi-ndsa/resources/" />
</svelte:head>

<main class="mx-auto max-w-6xl px-4 py-12">
	<section class="text-center">
		<h1 class="text-4xl font-extrabold text-[#8F0002] md:text-5xl">Resources</h1>
		<p class="mx-auto mt-4 max-w-3xl text-lg leading-8 text-neutral-700">
			A collection of WPI and external resources for neurodivergent students and allies.
		</p>
	</section>

	<section class="mt-10">
		<h2 class="text-3xl text-center font-bold text-[#8F0002]">WPI Resources</h2>

		<div class="mt-6 grid gap-5">
			{#each wpiResources as resource}
				<article class="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
					<a
						href={resource.href}
						target="_blank"
						rel="noopener noreferrer"
						class="text-2xl font-bold text-[#8F0002] hover:text-blue-600 hover:underline"
					>
						{resource.name}
					</a>
					<p class="mt-3 text-lg leading-8 text-neutral-700">{resource.description}</p>
				</article>
			{/each}
		</div>
	</section>

	<section class="mt-12">
		<h2 class="text-3xl text-center font-bold text-[#8F0002]">External Resources</h2>

		<div class="mt-6 grid gap-5">
			{#each externalResources as resource}
				<article class="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
					<a
						href={resource.href}
						target="_blank"
						rel="noopener noreferrer"
						class="text-2xl font-bold text-[#8F0002] hover:text-blue-600 hover:underline"
					>
						{resource.name}
					</a>
					<p class="mt-3 text-lg leading-8 text-neutral-700">{resource.description}</p>
				</article>
			{/each}
		</div>
	</section>
</main>
