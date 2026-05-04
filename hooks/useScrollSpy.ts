"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { SECTIONS } from "@/lib/data";

export function useScrollSpy() {
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return activeSection;
}

export function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

export function useCustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);

  const animate = useCallback(() => {
    ring.current.x += (mouse.current.x - ring.current.x) * 0.12;
    ring.current.y += (mouse.current.y - ring.current.y) * 0.12;
    if (ringRef.current) {
      ringRef.current.style.left = ring.current.x + "px";
      ringRef.current.style.top = ring.current.y + "px";
    }
    rafId.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
      }
    };
    document.addEventListener("mousemove", onMove);
    rafId.current = requestAnimationFrame(animate);
    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId.current);
    };
  }, [animate]);

  const onEnter = useCallback(() => {
    if (ringRef.current) {
      ringRef.current.style.width = "56px";
      ringRef.current.style.height = "56px";
      ringRef.current.style.borderColor = "#bf00ff";
    }
    if (cursorRef.current) cursorRef.current.style.background = "#bf00ff";
  }, []);

  const onLeave = useCallback(() => {
    if (ringRef.current) {
      ringRef.current.style.width = "36px";
      ringRef.current.style.height = "36px";
      ringRef.current.style.borderColor = "#00f5ff";
    }
    if (cursorRef.current) cursorRef.current.style.background = "#00f5ff";
  }, []);

  return { cursorRef, ringRef, onEnter, onLeave };
}
