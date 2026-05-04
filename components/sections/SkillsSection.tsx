"use client";
import { motion } from "framer-motion";
import { SKILL_CARDS } from "@/lib/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { SkillCard } from "@/types";

/* ─── Color maps using Tailwind-compatible arbitrary values ─── */
const barColor: Record<SkillCard["color"], string> = {
  cyan:   "bg-[var(--neon-cyan)] shadow-[0_0_6px_var(--neon-cyan)]",
  purple: "bg-[var(--neon-purple)] shadow-[0_0_6px_var(--neon-purple)]",
  green:  "bg-[var(--neon-green)] shadow-[0_0_6px_var(--neon-green)]",
};

const pctColor: Record<SkillCard["color"], string> = {
  cyan:   "text-[var(--neon-cyan)]",
  purple: "text-[var(--neon-purple)]",
  green:  "text-[var(--neon-green)]",
};

/* ─── Single Skill Card ─── */
function SkillCardComponent({
  card,
  index,
}: {
  card: SkillCard;
  index: number;
}) {
  return (
    <motion.div
      className="
        skill-card-sweep relative overflow-hidden
        bg-[var(--panel-bg)]
        border border-[rgba(0,245,255,0.08)]
        p-6 sm:p-7 md:p-8
        transition-colors duration-300
        hover:border-[rgba(0,245,255,0.25)]
        hover:bg-[rgba(0,245,255,0.03)]
      "
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Icon */}
      <span className="block text-3xl mb-4">{card.icon}</span>

      {/* Card name */}
      <div className="
        mb-2 font-orbitron text-[14px] font-bold tracking-[1px]
        text-[var(--text-primary)]
      ">
        {card.name}
      </div>

      {/* Description */}
      <div className="
        mb-5 text-sm font-light leading-relaxed
        text-[var(--text-muted)]
      ">
        {card.desc}
      </div>

      {/* Skill bars */}
      <div className="flex flex-col gap-2">
        {card.bars.map((bar) => (
          <div key={bar.label} className="flex items-center gap-3">
            {/* Label */}
            <span className="
              min-w-[60px] font-share-tech-mono text-[10px]
              text-[var(--text-muted)]
            ">
              {bar.label}
            </span>

            {/* Track */}
            <div className="
              flex-1 h-[2px] overflow-hidden rounded-sm
              bg-white/5
            ">
              <motion.div
                className={`h-full rounded-sm origin-left ${barColor[card.color]}`}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.5,
                  delay: (bar.delay ?? 0) + index * 0.1,
                  ease: "easeOut",
                }}
                style={{ width: `${bar.pct}%` }}
              />
            </div>

            {/* Percentage */}
            <span className={`
              min-w-[30px] text-right font-share-tech-mono text-[10px]
              ${pctColor[card.color]}
            `}>
              {bar.pct}%
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* ─── Skills Section ─── */
export function SkillsSection() {
  return (
    <section
      id="skills"
      className="
        relative z-[2]
        px-6 sm:px-10 md:px-16 lg:px-[60px]
        py-20 sm:py-24 md:py-[100px]
      "
    >
      <SectionLabel>CAPABILITIES</SectionLabel>

      <motion.h2
        className="
          mb-12 md:mb-16
          font-orbitron font-black leading-[1.1]
          text-[clamp(28px,4vw,48px)]
        "
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        SKILL
        <br />
        <span className="text-[var(--neon-cyan)] drop-shadow-[0_0_20px_var(--neon-cyan)]">
          MATRIX
        </span>
      </motion.h2>

      <div className="grid gap-0.5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_CARDS.map((card, i) => (
          <SkillCardComponent key={card.name} card={card} index={i}  />
        ))}
      </div>
    </section>
  );
}