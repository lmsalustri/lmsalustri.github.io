<script lang="ts">
	const aboutPage = {
		title: 'About | WPI Neurodivergent Student Association',
		canonical: 'https://lmsalustri.github.io/wpi-ndsa/about/',
		heading: 'About NDSA',
		sections: [
			{
				heading: 'Our Mission',
				body:
						"The WPI Neurodivergent Student Association (NDSA) is dedicated to building a supportive and empowering community for neurodivergent students of all identities. Our mission is to foster belonging, self-advocacy, and mutual support among students with autism, ADHD, dyslexia, OCD, Tourette's, and other neurodiverse experiences, whether formally diagnosed or self-identified. Through community-building events, educational resources, and partnerships with WPI offices, we aim to help neurodivergent students thrive both academically and socially while promoting a campus culture that values diverse minds."
			},
			{
				heading: 'History',
				body:
						"The Neurodivergent Student Association, formerly known as Spectrum Friends, was founded in 2021 by Kathryn Stovall '24 to provide a voice and support system for autistic students at WPI. It was later expanded by Stovall and Laurie Salustri '27 to include all neurodiverse identities. In 2024, under the administration of Salustri, Valerie Bennett '24, Abigail Deichert '24, and Ian Grzembski '24, the NDSA became officially recognized by WPI. The association has since partnered with key WPI offices, including the Heebner Career Development Center and the Office of Diversity, Inclusion, & Multicultural Education (ODIME)."
			}
		],
		founder: {
			sectionHeading: 'Our Founder',
			name: 'Kathryn Stovall',
			role: 'Robotics Engineering, Alumni 2024',
			image: {
				src: '/wpi-ndsa/images/stovall.jpg',
				alt: 'Kathryn Stovall'
			},
			bio:
					'I was evaluated for autism around the age of 7 because my mother wanted to prove to my autistic father that I was "normal." However, the testing revealed that I likely had autism and definitely had severe ADHD. Instead of seeing my diagnosis as something being horribly wrong with me, my mother saw it as a sign that I just needed a little extra support. She became my biggest advocate, fighting for me to be treated as an intelligent person rather than just a learning disability. It is important for neurodivergent people to feel empowered enough to advocate for themselves, and this is something my mother taught me how to do. I was fortunate to grow up with parents who gave me the skills to self-advocate, as that is not the reality for most people. This is why I started the Discord server and helped found the Neurodivergent Student Association at WPI. I wanted to create a space where the neurodivergent community at WPI could come together to support each other and help one another advocate for themselves in both academic and social settings.'
		}
	};
</script>

<svelte:head>
	<title>{aboutPage.title}</title>
	<link rel="canonical" href={aboutPage.canonical} />
</svelte:head>

<main class="mx-auto max-w-6xl px-4 py-12">
	<section class="text-center">
		<h1 class="text-4xl font-extrabold text-(--color-site-primary) md:text-5xl">
			{aboutPage.heading}
		</h1>
	</section>

	<section class="mt-10 grid gap-8">
		{#each aboutPage.sections as section}
			<article class="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
				<h2 class="text-center text-3xl font-bold text-(--color-site-primary)">
					{section.heading}
				</h2>

				<p class="mt-4 text-lg leading-8 text-neutral-700">
					{section.body}
				</p>
			</article>
		{/each}

		<article class="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
			<h2 class="text-center text-3xl font-bold text-(--color-site-primary)">
				{aboutPage.founder.sectionHeading}
			</h2>

			<div class="mt-6 grid gap-6 md:grid-cols-[260px_1fr] md:items-start">
				<img
						src={aboutPage.founder.image.src}
						alt={aboutPage.founder.image.alt}
						class="mx-auto h-64 w-64 rounded-2xl object-cover shadow-md md:mx-0"
				/>

				<div class="text-center md:text-left">
					<p class="text-2xl font-bold text-(--color-site-primary)">
						{aboutPage.founder.name}
					</p>

					<p class="mt-1 text-lg italic text-neutral-500">
						{aboutPage.founder.role}
					</p>

					<p class="mt-4 text-left text-lg leading-8 text-neutral-700">
						{aboutPage.founder.bio}
					</p>
				</div>
			</div>
		</article>
	</section>
</main>