import * as Icons from "lucide-react";

export default function SkillCard({ group }) {
  const Icon = Icons[group.icon] || Icons.Code2;

  return (
    <article className="glass card-hover rounded-2xl p-6">
      <div className="flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-cyan-400/15 to-violet-400/15 text-cyan-300">
          <Icon size={21} />
        </span>
        <h3 className="font-bold">{group.title}</h3>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span key={skill} className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-slate-300">
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}