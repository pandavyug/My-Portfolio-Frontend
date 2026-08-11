import { Github, Instagram, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { personal } from "../data/siteData";

const socials = [
  { label: "GitHub", href: personal.github, icon: Github },
  { label: "Instagram", href: personal.instagram, icon: Instagram },
  { label: "LinkedIn", href: personal.linkedin, icon: Linkedin },
  { label: "WhatsApp", href: personal.whatsapp, icon: FaWhatsapp },
];

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-2">
      {socials.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 transition hover:-translate-y-0.5 hover:border-cyan-300/30 hover:text-cyan-300"
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  );
}