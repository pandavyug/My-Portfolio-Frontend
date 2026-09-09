import { useState } from "react";
import {
  CheckCircle2,
  Code2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
} from "lucide-react";

import PageHeader from "../components/PageHeader";
import { personal } from "../data/siteData";
import { UserData } from "../data/userData";

const contactItems = [
  {
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "View my repositories",
    href: personal.github,
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "Connect with me",
    href: personal.linkedin,
    icon: Linkedin,
  },
  {
    label: "Location",
    value: personal.location,
    href: "#",
    icon: MapPin,
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submittedData, setSubmittedData] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const values = Object.fromEntries(form.entries());

    const nextErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = "Name is required.";
    }

    if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      nextErrors.email = "Enter a valid email.";
    }

    if (!values.subject.trim()) {
      nextErrors.subject = "Subject is required.";
    }

    if (values.message.trim().length < 10) {
      nextErrors.message = "Message should be at least 10 characters.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      
      setSubmittedData(data);

      setSubmitted(true);

      setData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      event.currentTarget.reset();
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Remove error when user starts correcting the field
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));

    // Hide success message when user starts typing again
    if (submitted) {
      setSubmitted(false);
    }
  }

  return (
    <div className="section-shell">
      <PageHeader
        eyebrow="Get In Touch"
        title="Let's Connect"
        description="I’m always interested in learning, collaborating, and exploring new opportunities. Feel free to reach out to me."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">

        {/* LEFT SIDE */}
        <div className="space-y-4">
          {contactItems.map(({ label, value, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="glass card-hover flex items-center gap-4 rounded-2xl p-5"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cyan-400/10 text-cyan-300">
                <Icon size={20} />
              </span>

              <span>
                <span className="block text-xs uppercase tracking-widest text-slate-500">
                  {label}
                </span>

                <span className="mt-1 block text-sm font-semibold text-slate-200">
                  {value}
                </span>
              </span>
            </a>
          ))}

          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <Code2 size={19} className="text-cyan-300" />

              <p className="font-semibold">
                Open to learning & collaboration
              </p>
            </div>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Whether it’s a web project, internship opportunity, or a chance
              to learn together, I’d be happy to connect.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - CONTACT FORM */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="glass rounded-3xl p-6 sm:p-8"
        >
          {/* SUCCESS MESSAGE */}
          {submitted && (
            <div
              role="status"
              className="mb-6 flex items-center gap-3 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm text-emerald-200"
            >
              <CheckCircle2 size={19} />

              Message submitted successfully.
            </div>
          )}

          {/* NAME + EMAIL */}
          <div className="grid gap-5 sm:grid-cols-2">

            {/* NAME */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-slate-200"
              >
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={data.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className={`mt-2 w-full rounded-xl border ${
                  errors.name
                    ? "border-red-400/50"
                    : "border-white/10"
                } bg-slate-950/60 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-300/40 focus:ring-2 focus:ring-cyan-300/10`}
              />

              {errors.name && (
                <p className="mt-1 text-xs text-red-300">
                  {errors.name}
                </p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-slate-200"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={data.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={`mt-2 w-full rounded-xl border ${
                  errors.email
                    ? "border-red-400/50"
                    : "border-white/10"
                } bg-slate-950/60 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-300/40 focus:ring-2 focus:ring-cyan-300/10`}
              />

              {errors.email && (
                <p className="mt-1 text-xs text-red-300">
                  {errors.email}
                </p>
              )}
            </div>

          </div>

          {/* SUBJECT */}
          <div className="mt-5">
            <label
              htmlFor="subject"
              className="block text-sm font-semibold text-slate-200"
            >
              Subject
            </label>

            <input
              id="subject"
              name="subject"
              type="text"
              value={data.subject}
              onChange={handleChange}
              placeholder="Enter your subject"
              className={`mt-2 w-full rounded-xl border ${
                errors.subject
                  ? "border-red-400/50"
                  : "border-white/10"
              } bg-slate-950/60 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-300/40 focus:ring-2 focus:ring-cyan-300/10`}
            />

            {errors.subject && (
              <p className="mt-1 text-xs text-red-300">
                {errors.subject}
              </p>
            )}
          </div>

          {/* MESSAGE */}
          <div className="mt-5">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-slate-200"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              value={data.message}
              onChange={handleChange}
              rows="6"
              placeholder="Tell me about your idea or opportunity..."
              className={`mt-2 w-full resize-none rounded-xl border ${
                errors.message
                  ? "border-red-400/50"
                  : "border-white/10"
              } bg-slate-950/60 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-300/40 focus:ring-2 focus:ring-cyan-300/10`}
            />

            {errors.message && (
              <p className="mt-1 text-xs text-red-300">
                {errors.message}
              </p>
            )}
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="primary-btn mt-6 w-full sm:w-auto"
          >
            <Send size={20} />
            Send Message
          </button>
        </form>
      </div>

      {/* USER DATA */}
      <UserData data={submittedData} submitted={submitted}/>
    </div>
  );
}

