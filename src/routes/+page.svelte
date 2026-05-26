<script>
  let open = false;
</script>

<svelte:head>
  <title>Laurie Salustri</title>
  <meta
    name="description"
    content="Personal portfolio website"
  />
</svelte:head>

<div class="min-h-screen bg-[#0f0b0a] text-neutral-100 antialiased">
  <!-- HEADER -->
  <header class="sticky top-0 z-50 bg-[#8F0002] text-white shadow">
    <div class="mx-auto flex max-w-[1100px] items-center justify-between px-4 py-3">
      <div class="flex items-center gap-3">
        <span class="text-[1.05rem] font-extrabold tracking-tight">Laurie Salustri</span>
      </div>

      <!-- Desktop nav -->
      <nav class="hidden items-center gap-6 text-[0.95rem] font-medium md:flex">
        <a href="#about" class="hover:underline">About</a>
        <a href="#projects" class="hover:underline">Projects</a>
        <a href="#contact" class="hover:underline">Contact</a>
      </nav>

      <!-- Mobile toggle -->
      <button
        class="rounded-md px-2 py-1 md:hidden"
        aria-expanded={open}
        aria-label="Toggle menu"
        on:click={() => (open = !open)}
      >
        <span
          class="relative block h-[2px] w-6 bg-white before:absolute before:-top-[7px] before:block before:h-[2px] before:w-6 before:bg-white after:absolute after:top-[7px] after:block after:h-[2px] after:w-6 after:bg-white"
        ></span>
      </button>
    </div>

    <!-- Mobile menu -->
    {#if open}
      <div class="border-t border-white/20 md:hidden">
        <nav class="mx-auto max-w-[1100px] px-4 py-2">
          <a
            href="#about"
            on:click={() => (open = false)}
            class="block py-1 hover:underline"
          >
            About
          </a>
          <a
            href="#projects"
            on:click={() => (open = false)}
            class="block py-1 hover:underline"
          >
            Projects
          </a>
          <a
            href="#contact"
            on:click={() => (open = false)}
            class="block py-1 hover:underline"
          >
            Contact
          </a>
        </nav>
      </div>
    {/if}
  </header>

  <main>
    <!-- ABOUT -->
    <section id="about" class="mx-auto max-w-[820px] px-4 pt-14 pb-10 text-center">
      <img
        src="/salustri.jpg"
        alt="Laurie Salustri"
        class="mx-auto mb-6 h-64 w-64 rounded-full object-cover shadow-lg"
      />

      <h1 class="mb-4 text-4xl font-extrabold">Hi, I'm Laurie!</h1>

      <p class="mb-4 text-lg text-neutral-300">
        I'm a senior at Worcester Polytechnic Institute studying
        <span class="font-semibold">Computer Science</span>.
      </p>

      <p class="mb-4 text-lg text-neutral-300">
        My area of expertise is <span class="font-semibold">human-computer interaction</span>, particularly user-centric, accessible design.
      </p>

      <p class="mb-4 text-lg text-neutral-300">
        I am the founding president of WPI's
        <span class="font-semibold">Neurodivergent Student Association</span>, a safe
        space for neurodivergent students to bond.
      </p>

      <p class="text-lg text-neutral-300">
        I have 2 wonderful dogs,
        <span class="font-semibold">Lucy</span> and
        <span class="font-semibold">Ruby</span>.
      </p>
    </section>

    <!-- PROJECTS -->
    <section id="projects" class="mx-auto max-w-[980px] px-4 py-12">
      <h2 class="mb-6 text-center text-2xl font-extrabold">Projects</h2>
    
      <ul class="grid gap-6 md:grid-cols-3">
        <li class="rounded-2xl border border-white/10 p-5 hover:border-white/20">
          <h3 class="text-lg font-semibold text-white">
            Developing Opportunities for a Sustainability Dashboard
          </h3>
          <p class="mt-1 text-sm text-neutral-400">Publication Pending</p>
          <p class="mt-3 text-neutral-300">
            Applied participatory design, iterative prototyping, and stakeholder-informed
            HCI methods to develop sustainability-focused dashboard concepts.
          </p>
        </li>
    
        <li class="rounded-2xl border border-white/10 p-5 hover:border-white/20">
          <h3 class="text-lg font-semibold text-white">
            <a href="/wpi-ndsa/" class="underline decoration-white/40 underline-offset-4 hover:text-blue-300 hover:decoration-blue-300">
              WPI Neurodivergent Student Association Website
            </a>
          </h3>
          <p class="mt-1 text-sm text-neutral-400">HTML, CSS</p>
          <p class="mt-3 text-neutral-300">
            Built and maintained a website for WPI's Neurodivergent Student Association.
          </p>
        </li>
    
        <li class="rounded-2xl border border-white/10 p-5 hover:border-white/20">
          <h3 class="text-lg font-semibold text-white">Embedded Switch Configurator @ THINKLOGICAL</h3>
          <p class="mt-1 text-sm text-neutral-400">C, NIOS</p>
          <p class="mt-3 text-neutral-300">
            Wrote embedded C to configure duplex/speed modes on proprietary KVM switches
            via NIOS MMIO.
          </p>
        </li>
      </ul>
    </section>

    <!-- CONTACT -->
    <section id="contact" class="mx-auto max-w-[820px] px-4 py-12 text-center">
      <h2 class="mb-4 text-2xl font-extrabold">Contact</h2>

      <p class="text-neutral-300">
        <a class="underline decoration-white/70 hover:text-white" href="mailto:lauriesalustri+website@proton.me">
          Email
        </a>
        ·
        <a
          class="underline decoration-white/70 hover:text-white"
          href="https://github.com/lmsalustri"
          target="_blank"
          rel="noreferrer noopener"
        >
          GitHub
        </a>
      </p>
    </section>
  </main>

  <footer class="border-t border-white/10 px-4 py-6 text-center text-sm text-neutral-400">
    © {new Date().getFullYear()} Laurie Salustri. Built with SvelteKit + Tailwind.
  </footer>
</div>
