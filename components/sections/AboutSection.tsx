"use client";
import { motion } from "framer-motion";
import { EXPERIENCE } from "@/lib/data";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative z-[2] px-6 md:px-12 lg:px-16 py-20 md:py-24"
    >
      <SectionLabel>INTEL</SectionLabel>

      {/* Grid */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Heading */}
          <h2 className="mb-6 text-3xl md:text-5xl font-black leading-tight font-orbitron">
            ABOUT <br />
            <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]">
              THE PLAYER
            </span>
          </h2>

          {/* Paragraphs */}
          <div className="space-y-5 text-gray-400 text-base leading-relaxed font-light">
            <p>
              I&apos;m a{" "}
              <span className="text-cyan-400 font-semibold">
                full-stack developer and UI designer
              </span>{" "}
              who bridges the gap between engineering precision and visual storytelling.
              Based in Tamil Nadu, India — working globally.
            </p>

            <p>
              With{" "}
              <span className="text-cyan-400 font-semibold">5+ years</span> of experience,
              I&apos;ve shipped products for startups, agencies, and direct clients —
              from concept sketches in Figma to production code in React. I care deeply about{" "}
              <span className="text-cyan-400 font-semibold">
                performance, accessibility, and design details
              </span>{" "}
              that most people don&apos;t notice but everyone feels.
            </p>

            <p>
              When I&apos;m not building, I&apos;m studying what makes great interfaces feel great —
              motion, hierarchy, the weight of a single pixel.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8 ">
            <motion.a
              href="#contact"
              className="md:inline-block px-8 py-3 text-xs font-bold text-2xl uppercase tracking-wider flex items-center justify-center
              bg-cyan-400 text-black
              hover:shadow-[0_0_40px_rgba(34,211,238,0.6)]
              transition-all duration-300 font-orbitron"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Download CV →
            </motion.a>
          </div>
        </motion.div>

        {/* Experience Panel */}
        <motion.div
          className="relative bg-[var(--panel-bg)] border border-cyan-400/10 p-6 md:p-8 lg:p-9"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <SectionLabel className="mb-5">EXPERIENCE LOG</SectionLabel>

          {EXPERIENCE.map((item, i) => (
            <motion.div
              key={i}
              className={`flex gap-4 py-5 ${
                i !== EXPERIENCE.length - 1
                  ? "border-b border-cyan-400/10"
                  : ""
              }`}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            >
              {/* Year */}
              <span className="min-w-[55px] text-[13px] text-cyan-400/60 font-mono whitespace-pre-line">
                {item.year.replace("—", "\n—\n")}
              </span>

              {/* Details */}
              <div>
                <div className="text-lg font-bold text-white font-rajdhani mb-1">
                  {item.role}
                </div>
                <div className="text-xs text-gray-400 font-light">
                  {item.company}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}