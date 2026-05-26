"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
import { navItems } from "@/data/navigation";
import { Button } from "@/components/ui/Button";

type Theme = "dark" | "light";

export function Navbar() {
  const [activeId, setActiveId] = useState("about");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const currentTheme =
      document.documentElement.dataset.theme === "light" ? "light" : "dark";
    setTheme(currentTheme);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) {
      return;
    }

    const updateActiveSection = () => {
      const anchorY = window.scrollY + 120;
      const pageBottom = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (pageBottom >= documentHeight - 2) {
        setActiveId("contact");
        return;
      }

      const current = sections.find((section) => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        return anchorY >= top && anchorY < bottom;
      });

      if (current) {
        setActiveId(current.id);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  const themeLabel = `Switch to ${theme === "dark" ? "light" : "dark"} mode`;

  return (
    <header
      className={`sticky top-0 z-50 border-b border-dark-3/80 bg-dark/95 transition-colors ${
        isScrolled ? "backdrop-blur" : ""
      }`}
    >
      <nav
        className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6"
        aria-label="Main navigation"
      >
        <Link
          href="#hero"
          className="font-display text-2xl font-bold text-coral"
          aria-label="Moses Simbeye home"
        >
          MS
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`nav-link font-sans text-sm transition-colors hover:text-coral ${
                activeId === item.id ? "active text-coral" : "text-secondary"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Button href="/cv-moses-simbeye.pdf" download className="h-10 px-4">
            Download CV
          </Button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-dark-3 text-light transition-colors hover:border-coral hover:text-coral"
            aria-label={themeLabel}
            title={themeLabel}
            onClick={toggleTheme}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-dark-3 text-light transition-colors hover:border-coral hover:text-coral"
            aria-label={themeLabel}
            title={themeLabel}
            onClick={toggleTheme}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-dark-3 text-light transition-colors hover:border-coral hover:text-coral"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div className="border-t border-dark-3 bg-dark px-6 py-5 md:hidden">
          <div className="mx-auto flex max-w-5xl flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`font-sans text-sm transition-colors hover:text-coral ${
                  activeId === item.id ? "text-coral" : "text-secondary"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button href="/cv-moses-simbeye.pdf" download className="mt-2">
              Download CV
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
