import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import SocialLinks from "../components/SocialLinks";
import { personal } from "../data/siteData";

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-grid">
        <div className="pointer-events-none absolute left-1/2 top-20 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-1/3 -z-10 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

        <div className="section-shell flex min-h-[calc(100vh-5rem)] items-center py-16">
          <div className="grid w-full items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="max-w-2xl">
              <span className="eyebrow p-2 ">
                <Sparkles size={13} /> Welcome to my portfolio
              </span>
              <p className="text-lg font-medium text-slate-300">Heyy, I'm</p>
              <h1 className="mt-2 text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
                Yug Pandav
              </h1>
              <h2 className="mt-5 text-xl font-semibold text-slate-200 sm:text-2xl">
                {personal.role}
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
                I’m passionate about web development and technology, building
                responsive digital experiences while continuously learning
                modern tools and best practices.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a className="primary-btn" href={`mailto:${personal.email}`}>
                  <Mail size={18} /> Email Me
                </a>
                <a
                  className="secondary-btn"
                  href="/My_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Download size={18} /> My Resume
                </a>
              </div>

              <div className="mt-8">
                <SocialLinks />
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute inset-8 rounded-full bg-cyan-400/20 blur-3xl animate-pulse-soft" />
              <div className="absolute -right-3 top-8 h-20 w-20 rounded-2xl border border-violet-300/20 bg-violet-400/10 animate-float-slow" />
              <div className="absolute -bottom-5 -left-5 h-24 w-24 rounded-full border border-cyan-300/20 bg-cyan-400/10" />
              <div className=" flex justify-center relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/10 via-slate-900 to-violet-400/10 p-3 shadow-2xl shadow-cyan-950/40">
                <img
                  src="/Passpord_size_photo.jpeg"
                  alt="Yug Pandav"
                  className="h-full rounded-[1.6rem] object-contain "
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell border-t border-white/5">
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="glass rounded-3xl p-7 sm:p-9">
            <span className="eyebrow p-2">About Me</span>
            <h2 className="text-3xl font-extrabold">
              A learner who loves building.
            </h2>
            <p className="mt-5 leading-8 text-slate-400">
              I am a BCA student passionate about web development and
              technology. I enjoy creating responsive and user-friendly websites
              using modern technologies. I love learning new skills, solving
              problems, and building real-world projects. My goal is to become a
              skilled professional web developer and create impactful digital
              solutions.
            </p>
          </article>

          <article className="relative overflow-hidden rounded-3xl border border-cyan-300/10 bg-gradient-to-br from-cyan-400/[0.08] to-violet-400/[0.06] p-7 sm:p-9">
            <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-cyan-400/10 blur-2xl" />
            <span className="eyebrow p-2">Career Objective</span>
            <h2 className="text-3xl font-extrabold">
              Growing through real work.
            </h2>
            <p className="mt-5 leading-8 text-slate-400">
              Aspiring Web Developer seeking opportunities to apply my technical
              skills, gain hands-on experience, and contribute to innovative
              projects while continuously learning and growing in the field of
              web development.
            </p>
            <Link
              to="/projects"
              className="mt-7 inline-flex items-center gap-2 font-semibold text-cyan-300 hover:text-cyan-200"
            >
              Explore my projects <ArrowRight size={17} />
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}
