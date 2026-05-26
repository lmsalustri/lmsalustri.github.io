<script lang="ts">
	const officers = [
		{
			role: 'President',
			name: 'Laurie Salustri',
			major: 'Computer Science, Class of 2027',
			image: '/salustri.jpg',
			alt: 'Laurie Salustri',
			bio: `I was diagnosed with autism at age 6, and my experiences have shaped my passion for advocacy. My special interests include classic rock, computers, dogs, and crochet. I have two wonderful dogs, Lucy and Ruby, who are a huge part of my life. I enjoy listening to my favorite artists: Billy Joel, Queen, and Van Halen. As president, I’m committed to building an inclusive community where neurodivergent students feel accepted, supported, and empowered. I believe in fostering a community that emphasizes inclusion and understanding, and I’m committed to advocating for our voices to be heard.`
		},
		{
			role: 'Vice President',
			name: 'Alexandra Angell',
			major: 'Chemistry, Class of 2027',
			image: '/wpi-ndsa/images/angell.jpg',
			alt: 'Alexandra Angell',
			bio: `I was recently diagnosed with autism and ADHD, but I've been surrounded by neurodivergence my whole life. My special interests include chemistry, biology, crafting, and dogs. My go-to fun fact for icebreakers is that I have four dogs: two big German shepherds and two little mini mutts. I listen to a lot of different music, but I especially enjoy indie rock, punk, and grunge. I'm excited to be part of the NDSA executive board and help foster a community for neurodivergent students at WPI.`
		},
		{
			role: 'Secretary',
			name: 'Vaughn Carroll',
			major: 'Biomedical Engineering, Class of 2029',
			image: '/wpi-ndsa/images/carroll.png',
			alt: 'Vaughn Carroll',
			bio: `Within academics, I especially like the fields of biomaterials, genetics, and statistics; when I am not in the classroom, I like to watch New England sports teams on TV, go to the beach, and play video games such as Mario Kart with friends. My neurodiversity lies in the fact that I have some strange behaviors that are unusual for a college student, including rubbing my hands against my nose to relieve stress, biting my fingernails, and occasionally having severe overreactions. I look forward to being the secretary for the Neurodivergent Student Association.`
		},
		{
			role: 'Treasurer',
			name: 'Devin Engelbrecht',
			major: 'Aerospace Engineering & Physics, Class of 2029',
			image: '/wpi-ndsa/images/silhouette.png',
			alt: 'Devin Engelbrecht',
			bio: `[Under Construction]`
		},
		{
			role: 'Public Relations Chair',
			name: 'Emma Boyd',
			major: 'Mechanical Engineering, Class of 2029',
			image: '/wpi-ndsa/images/silhouette.png',
			alt: 'Emma Boyd',
			bio: `[Under Construction]`
		},
		{
			role: 'Faculty Advisor',
			name: 'Dr. Stacy Shaw, Ph.D.',
			major: 'Assistant Professor, Learning Science & Technology, Psychological Science',
			image: '/wpi-ndsa/images/shaw.jpg',
			alt: 'Dr. Stacy Shaw, Ph.D.',
			bio: `Stacy Shaw's research focuses on understanding creative thinking in mathematics, how anxiety and other threat experiences affect mathematical cognition and reasoning, as well as how classroom experiences can affect performance and learning in STEM. Recently she has become interested in the role of rest for academic achievement, burnout, and student wellbeing. She graduated with her Ph.D. in psychology from UCLA in 2020, and is an Ambassador for the Center for Open Science, Catalyst for the Berkeley Initiative for Transparency in the Social Sciences, and a part of the Better Book research team for the Coursekata project.`
		}
	];
</script>

<svelte:head>
	<title>Officers | WPI Neurodivergent Student Association</title>
	<link rel="canonical" href="https://lmsalustri.github.io/wpi-ndsa/officers/" />
</svelte:head>

<main class="mx-auto max-w-6xl px-4 py-12">
	<section class="text-center">
		<h1 class="text-4xl font-extrabold text-[#8F0002] md:text-5xl">Officers</h1>
	</section>

	<section class="mt-10 grid gap-8">
		{#each officers as officer}
			<article class="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
				<h2 class="text-center text-3xl font-bold text-[#8F0002]">{officer.role}</h2>

				<div class="mt-6 grid gap-6 md:grid-cols-[260px_1fr] md:items-start">
					<img
						src={officer.image}
						alt={officer.alt}
						class="mx-auto h-64 w-64 rounded-2xl object-cover shadow-md md:mx-0"
					/>

					<div class="text-center md:text-left">
						<p class="text-2xl font-bold text-[#8F0002]">{officer.name}</p>
						<p class="mt-1 text-lg italic text-neutral-500">{officer.major}</p>
						<p class="mt-4 text-left text-lg leading-8 text-neutral-700">{officer.bio}</p>
					</div>
				</div>
			</article>
		{/each}
	</section>
</main>
