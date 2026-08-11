export default function PageHeader({ eyebrow, title, description }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span className="eyebrow">{eyebrow}</span>
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
      <p className="mt-5 text-base leading-7 text-slate-400">{description}</p>
    </div>
  );
}