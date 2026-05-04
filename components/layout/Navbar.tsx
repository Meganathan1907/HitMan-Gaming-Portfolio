"use client";
import { NAV_LINKS } from "@/lib/data";
import { motion } from "framer-motion"; 


export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex md:items-center items-center  md:justify-between justify-between px-5 md:px-[60px] py-[20px] 
      bg-[rgba(5,8,16,0.8)] backdrop-blur-[20px] border-b border-[rgba(0,245,255,0.3)]">

      {/* Logo */}
      <div className="md:text-lg text-3xl  font-black tracking-[3px] text-[var(--neon-cyan)] 
        [text-shadow:0_0_20px_var(--neon-cyan)] font-[var(--font-orbitron)]">
        DEV<span className="text-[var(--neon-purple)]">.</span>X
      </div>
    
      {/* Links */}
     
         <ul className="hidden md:flex gap-10 list-none">
        {NAV_LINKS.map((link) => (
          <li key={link.href} className="transition-all hover:-translate-y-1 ease-in">
            <a
              href={link.href}
              className="relative text-base font-semibold uppercase tracking-[2px]
              text-[var(--text-muted)] no-underline transition-all duration-300
              hover:text-[var(--neon-cyan)] font-[var(--font-rajdhani)]"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      
     

      {/* CTA Button */}
      <button
        className="clip-hex-sm md:text-base
         text-xl font-bold uppercase tracking-[2px] px-6 py-2.5
        border border-[var(--neon-cyan)] text-[var(--neon-cyan)]
        transition-all duration-300
        hover:bg-[var(--neon-cyan)] hover:text-[var(--dark-bg)]
        hover:shadow-[0_0_30px_rgba(0,245,255,0.4)]
        font-[var(--font-orbitron)] "
      >
        Hire Me
      </button>
    </nav>
  );
}