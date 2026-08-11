import { Gamepad2, ReceiptIndianRupee, ShoppingCart } from "lucide-react";
import PageHeader from "../components/PageHeader";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/siteData";

export default function Projects() {
  return (
    <div className="section-shell">
      <PageHeader
        eyebrow="My Work"
        title="Projects"
        description="A selection of projects I’ve built to practice frontend development, backend concepts, databases, and real-world problem solving."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
      <section className="mt-20">
        <div className="max-w-2xl">
          <span className="eyebrow">More Work</span>
          <h2 className="text-3xl font-extrabold">Mini & Ongoing Projects</h2>
          <p className="mt-4 leading-7 text-slate-400">
            A few additional projects I have built or am currently developing
            while improving my programming and web development skills.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">

          
          <article className="glass card-hover rounded-2xl p-6">
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-cyan-400/10 text-cyan-300">
              <ShoppingCart />
            </div>

            <h3 className="text-xl font-bold">Yune Computer Shop</h3>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              An e-commerce web project for an online computer and accessories
              shop, focused on creating a clean product browsing experience with
              a responsive interface.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-cyan-300/5 px-3 py-1 text-xs text-cyan-200">
                E-commerce
              </span>
              <span className="rounded-full bg-cyan-300/5 px-3 py-1 text-xs text-cyan-200">
                Product Management
              </span>
              <span className="rounded-full bg-cyan-300/5 px-3 py-1 text-xs text-cyan-200">
                Responsive UI
              </span>
            </div>
          </article>

          <article className="glass card-hover rounded-2xl p-6">
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-violet-400/10 text-violet-300">
              <Gamepad2 />
            </div>

            <h3 className="text-xl font-bold">Tic-Tac-Toe</h3>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              An interactive Tic-Tac-Toe game created to practice JavaScript
              logic, user interaction, game state handling, and responsive
              interface design.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-violet-300/5 px-3 py-1 text-xs text-violet-200">
                JavaScript
              </span>
              <span className="rounded-full bg-violet-300/5 px-3 py-1 text-xs text-violet-200">
                Game Logic
              </span>
              <span className="rounded-full bg-violet-300/5 px-3 py-1 text-xs text-violet-200">
                DOM
              </span>
            </div>
          </article>

          <article className="glass card-hover rounded-2xl border-cyan-300/10 p-6">
            <div className="mb-5 flex items-center justify-between">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-emerald-400/10 text-emerald-300">
                <ReceiptIndianRupee />
              </div>

              <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs font-semibold text-amber-200">
                Ongoing
              </span>
            </div>

            <h3 className="text-xl font-bold">
              Invora — Invoice Management System
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              An ongoing invoice management system designed to simplify
              creating, managing, and organizing invoices. The project is
              currently under development with new features being added
              progressively.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-emerald-300/5 px-3 py-1 text-xs text-emerald-200">
                Invoice Management
              </span>
              <span className="rounded-full bg-emerald-300/5 px-3 py-1 text-xs text-emerald-200">
                Data Handling
              </span>
              <span className="rounded-full bg-emerald-300/5 px-3 py-1 text-xs text-emerald-200">
                Web Application
              </span>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
