"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { CONTACT_DETAILS } from "@/lib/data";
import { SectionLabel } from "@/components/ui/SectionLabel";

interface FormState {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

/* ---------------- Input ---------------- */
function FormInput({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  isTextarea = false,
}: {
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  isTextarea?: boolean;
}) {
  const base =
    "w-full px-4 py-3 text-sm font-light outline-none transition-all duration-300 " +
    "bg-cyan-400/[0.03] border border-cyan-400/10 text-white " +
    "focus:bg-cyan-400/[0.06] focus:border-cyan-400/40 " +
    "clip-hex";

  return (
    <div className="mb-5">
      <label className="block mb-2 text-[10px] tracking-[2px] text-cyan-400/60 font-mono">
        {label}
      </label>

      {isTextarea ? (
        <textarea
          className={`${base} min-h-[120px] resize-none`}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <input
          type={type}
          className={base}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </div>
  );
}

/* ---------------- Section ---------------- */
export function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const set =
    (key: keyof FormState) =>
    (v: string) =>
      setForm((f) => ({ ...f, [key]: v }));

  return (
    <section
      id="contact"
      className="relative z-[2] px-6 md:px-12 lg:px-16 py-20 md:py-24"
    >
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
        
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionLabel>ESTABLISH LINK</SectionLabel>

          {/* Heading */}
          <h2 className="mb-6 text-3xl md:text-5xl font-black leading-tight font-orbitron">
            LET&apos;S <br /> BUILD <br />
            <span className="text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.9)]">
              TOGETHER
            </span>
          </h2>

          {/* Text */}
          <p className="mb-10 text-base text-gray-400 leading-relaxed font-light">
            Have a project in mind? A product to launch? Or just want to talk
            design and code? I&apos;m open to the right opportunities.
          </p>

          {/* Contact Details */}
          {CONTACT_DETAILS.map((detail, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 py-4 text-sm ${
                i !== CONTACT_DETAILS.length - 1
                  ? "border-b border-cyan-400/10"
                  : ""
              }`}
            >
              <div
                className="flex items-center justify-center flex-shrink-0 w-9 h-9
                border border-cyan-400/20 text-sm clip-hex-xs"
              >
                {detail.icon}
              </div>

              {detail.href ? (
                <a
                  href={detail.href}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  {detail.text}
                </a>
              ) : (
                <span className="text-gray-400">{detail.text}</span>
              )}
            </div>
          ))}
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <FormInput
            label="// NAME"
            placeholder="Your name"
            value={form.name}
            onChange={set("name")}
          />

          <FormInput
            label="// EMAIL"
            type="email"
            placeholder="your@email.com"
            value={form.email}
            onChange={set("email")}
          />

          <FormInput
            label="// PROJECT TYPE"
            placeholder="e.g. Web App, Landing Page, UI Design..."
            value={form.projectType}
            onChange={set("projectType")}
          />

          <FormInput
            label="// MESSAGE"
            placeholder="Tell me about your project..."
            value={form.message}
            onChange={set("message")}
            isTextarea
          />

          {/* Button */}
          <motion.button
            className="w-full py-3  font-bold uppercase tracking-wider
            bg-cyan-400 text-black
            hover:shadow-[0_0_40px_rgba(34,211,238,0.6)]
            transition-all duration-300 font-orbitron"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            TRANSMIT MESSAGE
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}