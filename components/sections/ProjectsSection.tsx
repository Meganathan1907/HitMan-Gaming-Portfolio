"use client";
import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Tag } from "@/components/ui/Tag";
import type { Project } from "@/types";

/* ---------------- Mock UI ---------------- */
function MockUIDisplay({ mock }: { mock: Project["mock"] }) {
  return (
    <div className="absolute inset-0 p-4 flex flex-col gap-2">
      <div
        className="h-[2px] rounded"
        style={{ background: mock.barColor, width: mock.barWidth }}
      />
      <div
        className="h-[2px] rounded"
        style={{
          background: mock.barShortColor,
          width: mock.barShortVariant === "xshort" ? "25%" : "40%",
        }}
      />

      <div
        className="flex-1 mt-2 border rounded-sm p-2 grid gap-1 grid-cols-2
        bg-cyan-400/[0.02]"
        style={{ borderColor: mock.windowBorderColor }}
      >
        {mock.blocks.map((b, i) => (
          <div
            key={i}
            className={`rounded-sm border ${
              b.colSpan2 ? "col-span-2" : ""
            }`}
            style={{
              background: b.isCyan
                ? "rgba(0,245,255,0.06)"
                : b.style?.background ?? "rgba(191,0,255,0.08)",
              borderColor: b.isCyan
                ? "rgba(0,245,255,0.15)"
                : b.style?.borderColor ?? "rgba(191,0,255,0.15)",
              ...b.style,
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* ---------------- Card ---------------- */
function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.div
      className={`relative overflow-hidden bg-[var(--panel-bg)]
      border border-cyan-400/10 p-6 md:p-8 lg:p-10
      col-span-12 sm:col-span-6 lg:col-span-${project.span}
       hover:border-cyan-400/30 cursor-pointer transition-all duration-300 hover:transform hover:translate-y-[-4px] ease-in `}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Number */}
      <div className="mb-4 text-[11px] tracking-[2px] text-cyan-400/40 font-mono">
        {project.num}
      </div>

      {/* Thumbnail */}
      <div className="w-full h-[160px] md:h-[180px] relative overflow-hidden mb-6
        bg-gradient-to-br from-[#0a1628] to-[#160a28]
        border border-cyan-400/10">
        <MockUIDisplay mock={project.mock} />
      </div>

      {/* Title */}
      <div className="mb-2 text-base font-bold tracking-wide text-white font-orbitron">
        {project.name}
      </div>

      {/* Description */}
      <p className="mb-5 text-sm text-gray-400 leading-relaxed font-light">
        {project.desc}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag.label} {...tag} />
        ))}
      </div>
    </motion.div>
  );
}

/* ---------------- Section ---------------- */
export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-[2] px-6 md:px-12 lg:px-16 py-20 md:py-24 "
    >
      <SectionLabel>WORK LOG</SectionLabel>

      {/* Heading */}
      <motion.h2
        className="mb-12 md:mb-16 text-3xl md:text-5xl font-black leading-tight font-orbitron"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        SELECTED <br />
        <span className="text-purple-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.7)]">
          PROJECTS
        </span>
      </motion.h2>

      {/* Grid */}
      
      <div className="grid grid-cols-12 gap-[2px] ">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}