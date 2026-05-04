"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { STATS } from "@/lib/data";
import type { Transition } from "framer-motion";
import Image from "next/image";
import img1 from "@/asset/img2.jpg";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.7,
    delay,
    ease: [0.22, 1, 0.36, 1],
  } as Transition,
});

export function HeroSection() {
  return (
    <section
      className="
        relative min-h-screen flex items-center justify-center 
        md:sm:px-10 md:px-16  lg:px-20
        py-20 sm:py-24 md:py-28
      "
    >
      {/* Main Row */}
      <div className="flex w-full flex-wrap items-center justify-between md:flex-row flex-col-reverse">

        {/* LEFT CONTENT */}
        <div className="flex-1 md:min-w-0 md:max-w-[650px] px-5  ">

          {/* Status */}
          <motion.div
            {...fadeUp(0.1)}
            className="mb-6 inline-flex items-center gap-2 border border-[rgba(57,255,20,0.3)] px-3.5  py-1.5 text-[12px] uppercase tracking-[2px] text-[var(--neon-green)]"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#39ff14]" />
            ONLINE — AVAILABLE FOR PROJECTS
          </motion.div>

          {/* Name */}
          <motion.p
            {...fadeUp(0.2)}
            className="mb-2 font-orbitron text-[clamp(12px,1.5vw,16px)] uppercase tracking-[6px] text-[var(--text-muted)] "
          >
            <span className="text-lg">Hi, I&apos;m</span>
            <span className="text-[var(--neon-cyan)] text-2xl font-semibold"> Hitman</span>
          </motion.p>

          {/* Title */}
          <motion.h1
            {...fadeUp(0.3)}
            className="mb-6 font-orbitron text-[clamp(40px,6vw,82px)] font-black leading-[0.95]"
          >
            <span className="block text-[var(--text-primary)]">WEB</span>
            <span className="block glitch-line" data-text="DEV & UI">
              DEV & UI
            </span>
            <span className="mt-2 block text-[0.45em] tracking-[8px] text-[var(--neon-purple)] drop-shadow-[0_0_25px_var(--neon-purple)]">
              DESIGNER
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            {...fadeUp(0.4)}
            className="mb-10 max-w-[480px] text-[clamp(14px,1.5vw,16px)] leading-[1.7] text-[var(--text-muted)]"
          >
            Crafting immersive digital experiences where precision engineering
            meets bold visual design. I build interfaces that don&apos;t just
            work — they{" "}
            <span className="text-[var(--neon-cyan)]">feel</span>.
          </motion.p>

          {/* Stats */}
          <motion.div
            {...fadeUp(0.5)}
            className="mb-10 flex flex-wrap  md:gap-x-10 gap-10  gap-y-4 border-y border-[rgba(0,245,255,0.25)] py-5"
          >
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="font-orbitron text-[clamp(22px,3vw,30px)] font-black text-[var(--neon-cyan)] drop-shadow-[0_0_15px_var(--neon-cyan)]">
                  {stat.value}
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[2px] text-[var(--text-muted)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            {...fadeUp(0.6)}
            className="flex flex-wrap items-center md:gap-4 gap-12"
          >
            <motion.div
              whileHover={{
                y: -2,
                boxShadow:
                  "0 0 40px rgba(0,245,255,0.5), 0 0 80px rgba(0,245,255,0.2)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="#projects"
                className="clip-hex bg-[var(--neon-cyan)] px-8 py-3 font-orbitron md:text-lg text-sm font-bold uppercase tracking-[2px] text-[var(--dark-bg)]"
              >
                View My Work
              </Link>
            </motion.div>

            <motion.div
              whileHover={{
                color: "var(--text-primary)",
                borderColor: "rgba(122,154,184,0.7)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
              href="#contact"
className="clip-hex border border-[rgba(122,154,184,0.3)] px-8 py-3 
font-orbitron md:text-lg text-sm font-bold uppercase tracking-[2px] 
text-[var(--text-muted)] 
transition-all duration-300 ease-out
transform hover:-translate-y-2 hover:scale-105
hover:border-[rgba(122,154,184,0.7)] hover:text-[var(--text-primary)]
hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
>
  Let&apos;s Talk →
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="  flex-shrink-0  w-[clamp(280px,30vw,420px)] h-[clamp(280px,30vw,420px)] relative mb-10  md:mb-0">

          {/* Rings */}
          {[1, 0.8, 0.6].map((scale, i) => (
            <div
              key={i}
              className={`absolute inset-0 rounded-full border ${
                i === 1 ? "border-dashed" : "border-solid"
              }`}
              style={{
                transform: `scale(${scale})`,
                borderColor:
                  i === 0
                    ? "rgba(0,245,255,0.2)"
                    : i === 1
                    ? "rgba(191,0,255,0.2)"
                    : "rgba(0,245,255,0.15)",
                animation: `hexSpin ${
                  i === 0 ? "20s" : i === 1 ? "15s" : "10s"
                } linear infinite ${i === 1 ? "reverse" : ""}`,
              }}
            />
          ))}

          {/* Avatar */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute inset-[18%] flex items-center  justify-center  rounded-full border-2 border-[var(--neon-cyan)] bg-gradient-to-br from-[#0a1628] to-[#1a0a2e] shadow-[0_0_40px_rgba(0,245,255,0.3)]"
          >
            <Image
              src={img1}
              alt="Avatar"
              fill
              className="rounded-full object-cover"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}