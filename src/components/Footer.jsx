import { Github, Instagram, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { personal } from "../data/siteData";

const socials = [
  { label: "GitHub", href: personal.github, icon: Github },
  { label: "Instagram", href: personal.instagram, icon: Instagram },
  { label: "LinkedIn", href: personal.linkedin, icon: Linkedin },
  { label: "WhatsApp", href: personal.whatsapp, icon: FaWhatsapp },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 sm:px-8 lg:px-10 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-xl font-extrabold">Yug Pandav</h2>
          <p className="mt-1 text-sm text-slate-400">BCA Student | Web Developer</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Link className="rounded-lg px-3 py-2 text-sm text-slate-400 hover:text-white" to="/">Home</Link>
          <Link className="rounded-lg px-3 py-2 text-sm text-slate-400 hover:text-white" to="/education-skills">Education & Skills</Link>
          <Link className="rounded-lg px-3 py-2 text-sm text-slate-400 hover:text-white" to="/projects">Projects</Link>
          <Link className="rounded-lg px-3 py-2 text-sm text-slate-400 hover:text-white" to="/contact">Contact</Link>
        </div>

        <div className="flex gap-2">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition hover:border-cyan-300/20 hover:text-cyan-300"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-white/5 px-5 py-5 text-center text-xs text-slate-500">
        © 2026 Yug Pandav. All Rights Reserved.
      </div>
    </footer>
  );
}