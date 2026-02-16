import { useState } from "react";

export default function PersonalSite() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0f0b0a] text-neutral-100 antialiased">
      {/* HEADER — NDSA red */}
      <header className="sticky top-0 z-50 bg-[#c00000] text-white shadow">
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <span className="text-[1.05rem] font-extrabold tracking-tight">Laurie Salustri</span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 text-[0.95rem] font-medium md:flex">
            <a href="#about" className="hover:underline">About</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden rounded-md px-2 py-1"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen(v => !v)}
          >
            <span className="block h-[2px] w-6 bg-white relative before:absolute before:-top-[7px] before:block before:h-[2px] before:w-6 before:bg-white after:absolute after:top-[7px] after:block after:h-[2px] after:w-6 after:bg-white" />
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-white/20">
            <nav className="mx-auto max-w-[1100px] px-4 py-2">
              {[
                ["#about", "About"],
                ["#projects", "Projects"],
                ["#contact", "Contact"],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block py-1 hover:underline"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* ABOUT — systems-first framing */}
        <section id="about" className="mx-auto max-w-[820px] px-4 pt-14 pb-10 text-center">
		  <img src="/salustri.jpg" alt="Laurie Salustri" className="mx-auto mb-6 w-64 h-64 rounded-full object-cover shadow-lg"/>
          <h1 className="mb-4 text-4xl font-extrabold">Hi, I'm Laurie!</h1>
             <p className="mb-4 text-lg text-neutral-300">
    I’m a junior <span className="font-semibold">Computer Science student</span> at 
    Worcester Polytechnic Institute with a strong interest in 
    <span className="font-semibold"> human-computer interaction</span> and 
    <span className="font-semibold">  user-centric design</span>.
  </p>

  <p className="mb-4 text-lg text-neutral-300">
    My academic work includes courses in <span className="italic">software engineering, operating systems, </span> 
    and <span className="italic"> networks</span>, where I’ve developed skills in 
    <span className="font-mono"> C, C++, Python,</span> and <span className="font-mono">Kotlin</span>.  
    I’ve also gained industry experience through an 
    <span className="italic"> embedded systems firmware</span> internship at <span className="font-semibold">THINKLOGICAL</span>.
  </p>

  <p className="mb-4 text-lg text-neutral-300">
    Beyond my technical work, I’m passionate about 
    <span className="font-semibold"> neurodiversity advocacy</span>. I co-founded the <span className="font-semibold">Neurodivergent Student Association</span>, a safe space for neurodivergent students at WPI.
  </p>

  <p className="text-lg text-neutral-300">
    Outside of school, I crochet and sew, and spend time with my 2 wonderful dogs, <span className="font-semibold">Lucy</span> and <span className="font-semibold">Ruby</span>.
</section>

        {/* PROJECTS — case-study style (not bullets) */}
        <section id="projects" className="mx-auto max-w-[980px] px-4 py-12">
          <h2 className="mb-6 text-2xl font-extrabold text-center">Projects</h2>
          <ul className="grid gap-6 md:grid-cols-2">
            {/* Embedded configurator */}
            <li className="rounded-2xl border border-white/10 p-5 hover:border-white/20">
              <h3 className="text-lg font-semibold text-white">Embedded Switch Configurator</h3>
              <p className="mt-1 text-sm text-neutral-400">C, NIOS, memory-mapped I/O</p>
              <p className="mt-3 text-neutral-300">
                Wrote embedded C to configure duplex/speed modes on proprietary KVM switches via NIOS MMIO.
                Debugged timing with serial tools and logic analysis; documented safe defaults and rollback paths.
              </p>
            </li>

			{/* NDSA website */}
            <li className="rounded-2xl border border-white/10 p-5 hover:border-white/20">
              <h3 className="text-lg font-semibold text-white"><a href="/wpi-ndsa/index.html" className="underline decoration-white hover:text-blue-400 hover:decoration-blue-400">WPI Neurodivergent Student Association Website</a></h3>
              <p className="mt-1 text-sm text-neutral-400">HTML, CSS</p>
              <p className="mt-3 text-neutral-300">
                Built and maintained a website for WPI's Neurodivergent Student Association.
              </p>
            </li>
          </ul>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mx-auto max-w-[820px] px-4 py-12 text-center">
          <h2 className="mb-4 text-2xl font-extrabold">Contact</h2>
          <p className="text-neutral-300">
            <a className="underline decoration-white/70 hover:text-white" href="mailto:lauriesalustri+work@proton.me">Email</a>{" "}
            · <a className="underline decoration-white/70 hover:text-white" href="https://github.com/lmsalustri" target="_blank" rel="noreferrer noopener">GitHub</a>{" "}
            · <a className="underline decoration-white/70 hover:text-white" href="/laurie_salustri_resume.docx" target="_blank" rel="noreferrer noopener">Résumé (Download)</a>
          </p>
        </section>
      </main>

      <footer className="border-t border-white/10 px-4 py-6 text-center text-sm text-neutral-400">
        © {new Date().getFullYear()} Laurie Salustri. Built with REACT + Tailwind v4.
      </footer>
    </div>
  );
}






