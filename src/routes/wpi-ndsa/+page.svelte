<script lang="ts">
	const homePage = {
		title: 'Home | WPI Neurodivergent Student Association',
		canonical: 'https://lmsalustri.github.io/wpi-ndsa/',
		logo: {
			src: '/wpi-ndsa/images/ndsa.png',
			alt: 'WPI Neurodivergent Student Association logo'
		},
		hero: {
			heading: 'Welcome!',
			description:
					'We are here to help support your experience at WPI through bonding activities, support on neurodiverse issues, and fun social events.',
			emphasis: 'No formal diagnosis required.',
			callToAction: {
				label: 'Join Us!',
				href: 'https://mywpi.wpi.edu/NDSA/login_only?redirect=%2fNDSA%2fclub_signup'
			}
		}
	};
</script>

<svelte:head>
	<title>{homePage.title}</title>
	<link rel="canonical" href={homePage.canonical} />
</svelte:head>

<main>
	<section class="mx-auto max-w-5xl px-4 py-20 text-center md:py-28">
		<img
				src={homePage.logo.src}
				alt={homePage.logo.alt}
				class="mx-auto mb-8 h-44 w-44 object-contain md:h-56 md:w-56"
		/>

		<h1 class="text-5xl font-extrabold text-(--color-site-primary) md:text-6xl">
			{homePage.hero.heading}
		</h1>

		<p class="mx-auto mt-8 max-w-3xl text-2xl leading-9 text-neutral-700">
			{homePage.hero.description}
		</p>

		<p class="mt-6 text-3xl font-extrabold text-neutral-900">
			{homePage.hero.emphasis}
		</p>

		<a
				href={homePage.hero.callToAction.href}
				target="_blank"
				rel="noopener"
				class="mt-10 inline-block rounded-lg bg-(--color-site-primary) px-8 py-4 text-3xl font-bold text-white shadow-md transition hover:bg-blue-600"
		>
			{homePage.hero.callToAction.label}
		</a>
	</section>
</main>