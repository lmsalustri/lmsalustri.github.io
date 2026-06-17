<script lang="ts">
  let open = $state(false);
  const siteName = 'Laurie Salustri';
  const siteDescription = 'Personal portfolio website';
  const navItems = [
    { label: 'About', href: '/#about' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Contact', href: '/#contact' }
  ];

  const footerText = 'Built with SvelteKit + Tailwind.';
  const about = {
    image: {
      src: '/salustri.jpg',
      alt: 'Laurie Salustri'
    },
    heading: "Hi, I'm Laurie!",
    paragraphs: [
      {
        before: "I'm a senior at Worcester Polytechnic Institute studying ",
        emphasis: 'Computer Science',
        after: '.'
      },
      {
        before: 'My area of expertise is ',
        emphasis: 'human-computer interaction',
        after: ', particularly user-centric, accessible design.'
      },
      {
        before: "I am the founding president of WPI's ",
        emphasis: 'Neurodivergent Student Association',
        after: ', a safe space for neurodivergent students to bond.'
      }
    ],
    dogs: {
      before: 'I have 2 wonderful dogs, ',
      first: 'Lucy',
      middle: ' and ',
      second: 'Ruby',
      after: '.'
    }
  };

  type Project =
          | {
    title: string;
    subtitle: string;
    description: string;
    icon: string;
    image?: never;
    href?: never;
  }
          | {
    title: string;
    subtitle: string;
    description: string;
    image: {
      src: string;
      alt: string;
    };
    href: string;
    icon?: never;
  };

  const projectsSection = {
    heading: 'Projects',
    items: [
      {
        title: 'Developing Opportunities for a Sustainability Dashboard',
        subtitle: 'Publication Pending',
        description:
                'An IQP applying iterative prototyping and stakeholder-informed HCI methods to developing sustainability-focused dashboard concepts.',
        icon: '📊'
      },
      {
        title: 'WPI Neurodivergent Student Association Website',
        subtitle: 'Svelte',
        description: "A website for WPI's Neurodivergent Student Association.",
        image: {
          src: '/wpi-ndsa/images/ndsa.png',
          alt: 'WPI Neurodivergent Student Association logo'
        },
        href: '/wpi-ndsa/'
      }
    ] satisfies Project[]
  };

  const contactSection = {
    heading: 'Contact',
    links: [
      {
        label: 'Email',
        href: 'mailto:lauriesalustri+website@proton.me',
        external: false
      },
      {
        label: 'GitHub',
        href: 'https://github.com/lmsalustri',
        external: true
      }
    ],
    separator: '·'
  };
</script>

<svelte:head>
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
    <!-- ABOUT -->
    <section id="about" class="mx-auto max-w-205 px-4 pt-14 pb-10 text-center">
      <img
              src={about.image.src}
              alt={about.image.alt}
              class="mx-auto mb-6 h-64 w-64 rounded-full object-cover shadow-lg"
      />

      <h1 class="mb-4 text-4xl font-extrabold text-(--color-site-primary)">
        {about.heading}
      </h1>

      {#each about.paragraphs as paragraph}
        <p class="mb-4 text-lg text-neutral-300">
          {paragraph.before}<span class="font-semibold">{paragraph.emphasis}</span>{paragraph.after}
        </p>
      {/each}
      <p class="text-lg text-neutral-300">
        {about.dogs.before}
        <span class="font-semibold">{about.dogs.first}</span>
        {about.dogs.middle}
        <span class="font-semibold">{about.dogs.second}</span>{about.dogs.after}
      </p>
    </section>

    <!-- PROJECTS -->
    <section id="projects" class="mx-auto max-w-245 px-4 py-12">
      <h2 class="mb-6 text-center text-2xl font-extrabold">
        {projectsSection.heading}
      </h2>

      <ul class="grid gap-6 md:grid-cols-2">
        {#each projectsSection.items as project}
          <li class="rounded-2xl border border-white/10 p-5 text-center hover:border-white/20">
            {#if 'icon' in project}
              <div class="mx-auto mb-8 flex h-40 w-40 items-center justify-center rounded-full border border-white/10 bg-white/5 text-8xl">
                {project.icon}
              </div>
            {:else if 'image' in project}
              <div class="mx-auto mb-8 flex h-40 w-40 items-center justify-center">
                <img
                        src={project.image.src}
                        alt={project.image.alt}
                        class="h-full w-full object-contain"
                />
              </div>
            {/if}

            <h3 class="text-lg font-semibold text-white">
              {#if 'href' in project}
                <a
                        href={project.href}
                        class="underline decoration-white/40 underline-offset-4 hover:text-blue-300 hover:decoration-blue-300"
                >
                  {project.title}<span aria-hidden="true" class="ml-1 inline-block text-base no-underline">↗</span>
                </a>
              {:else}
                {project.title}
              {/if}
            </h3>

            <p class="mt-1 text-sm text-neutral-400">
              {project.subtitle}
            </p>

            <p class="mt-3 text-neutral-300">
              {project.description}
            </p>
          </li>
        {/each}
      </ul>
    </section>

    <!-- CONTACT -->
    <!-- CONTACT -->
    <section id="contact" class="mx-auto max-w-205 px-4 py-12 text-center">
      <h2 class="mb-4 text-2xl font-extrabold">
        {contactSection.heading}
      </h2>

      <p class="text-neutral-300">
        {#each contactSection.links as link, index}
          {#if index > 0}
            {' '}
            <span>{contactSection.separator}</span>
            {' '}
          {/if}

          <a
                  class="underline decoration-white/70 hover:text-white"
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noreferrer noopener' : undefined}
          >
            {link.label}
          </a>
        {/each}
      </p>
    </section>
  </main>

  <footer class="border-t border-white/10 px-4 py-6 text-center text-sm text-neutral-400">
    © {new Date().getFullYear()} {siteName}. {footerText}
  </footer>
</div>