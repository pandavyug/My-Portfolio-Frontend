import EducationCard from "../components/EducationCard";
import SkillCard from "../components/SkillCard";
import PageHeader from "../components/PageHeader";
import { skillGroups } from "../data/siteData";

const semesters = [
  ["Semester 1", "6.55"],
  ["Semester 2", "7.27"],
  ["Semester 3", "7.73"],
  ["Semester 4", "7.91"],
];

export default function EducationSkills() {
  return (
    <div className="section-shell">
      <PageHeader
        eyebrow="My Background"
        title="Education & Skills"
        description="My academic journey and the technical, language, and professional skills I’m developing as a BCA student."
      />

      <section className="mt-16">
        <h2 className="text-2xl font-extrabold">Education</h2>
        <div className="mt-6 grid gap-5">
          <EducationCard
            title="Bachelor of Computer Applications (BCA)"
            institution="Sutex Bank College of Computer Applications & Science"
            board="Veer Narmad South Gujarat University"
            period="2024 - Present"
            description="I am currently pursuing a Bachelor of Computer Applications (BCA) at Sutex Bank College of Computer Applications & Science, where I am building a strong foundation in programming, web development, and modern computer technologies."
          />
          <EducationCard
            title="Higher Secondary Education (12th Grade)"
            institution="Gujarat Board"
            board=""
            period="2023-24"
            percentage="71.14%"
            description="Completed Higher Secondary Education (12th Grade) from Gujarat Board with 71.14%, demonstrating a strong academic foundation and commitment to learning."
          />
        </div>
      </section>

      <section className="mt-16">
        <div className="max-w-2xl">
          <span className="eyebrow p-2">Academic Performance</span>
          <h2 className="text-3xl font-extrabold">Steady academic growth</h2>
          <p className="mt-4 leading-7 text-slate-400">
            Throughout my BCA journey, I have consistently improved my academic performance while developing my technical and practical knowledge.
          </p>
        </div>

        <div className="mt-7 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {semesters.map(([semester, sgpa]) => (
            <div key={semester} className="glass card-hover rounded-2xl p-6">
              <p className="text-sm font-medium text-slate-400">{semester}</p>
              <p className="mt-3 text-4xl font-black gradient-text">{sgpa}</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">SGPA</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <span className="eyebrow p-2">Technical Toolkit</span>
        <h2 className="text-3xl font-extrabold">Skills I’m building</h2>
        <div className="mt-7 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <SkillCard key={group.title} group={group} />
          ))}
        </div>
      </section>
    </div>
  );
}