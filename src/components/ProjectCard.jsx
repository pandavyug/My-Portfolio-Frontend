import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <article className="glass card-hover overflow-hidden rounded-2xl">
      <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
        <img
          src={project.image}
          alt={`${project.name} project preview`}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold">{project.name}</h3>
        <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-400">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded-full border border-cyan-300/10 bg-cyan-300/5 px-2.5 py-1 text-xs text-cyan-200">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          <a className="secondary-btn flex-1" href={project.github} target="_blank" rel="noreferrer">
            <Github size={17} /> GitHub
          </a>
          {project.live ? (
            <a className="primary-btn flex-1" href={project.live} target="_blank" rel="noreferrer">
              <ExternalLink size={17} /> Live Demo
            </a>
          ) : (
            <span className="secondary-btn flex-1 cursor-not-allowed opacity-50" aria-disabled="true">
              Demo Soon
            </span>
          )}
        </div>
      </div>
    </article>
  );
}