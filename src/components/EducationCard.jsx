import { GraduationCap, CalendarDays } from "lucide-react";

export default function EducationCard({ title, institution, board, period, percentage, description }) {
  return (
    <article className="glass card-hover relative rounded-2xl p-6">
      <div className="flex gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-cyan-400/10 text-cyan-300">
          <GraduationCap size={23} />
        </div>
        <div className="min-w-0">
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <p className="mt-1 font-medium text-cyan-300">{institution}</p>
          <p className="text-sm text-slate-400">{board}</p>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-400">
            <span className="inline-flex items-center gap-1.5"><CalendarDays size={15} /> {period}</span>
            {percentage && <span className="rounded-full bg-cyan-400/10 px-3 py-1 font-semibold text-cyan-200">{percentage}</span>}
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-400">{description}</p>
        </div>
      </div>
    </article>
  );
}