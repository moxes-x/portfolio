"use client";

import { motion } from "framer-motion";
import { FaBehance, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Button } from "@/components/ui/Button";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="noise relative flex min-h-screen items-center overflow-hidden bg-dark px-6 py-24"
    >
      <motion.div
        className="relative z-10 mx-auto w-full max-w-5xl"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={item}
          className="font-mono text-sm uppercase tracking-[0.08em] text-coral"
        >
          Hi, I&apos;m
        </motion.p>
        <motion.h1
          variants={item}
          className="mt-5 max-w-4xl font-display text-5xl font-bold leading-[1.05] text-light sm:text-6xl lg:text-7xl"
        >
          Moses Simbeye
        </motion.h1>
        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-2xl font-medium leading-snug text-secondary"
        >
          Software Engineer | Systems & IT Support
        </motion.p>
        <motion.p variants={item} className="mt-4 text-sm text-muted">
          Lusaka, Zambia
        </motion.p>
        <motion.div
          variants={item}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <Button href="#projects">View My Work</Button>
          <Button href="/images/cv-moses-simbeye.pdf" variant="secondary" download>
            Download CV
          </Button>
        </motion.div>
        <motion.div variants={item} className="mt-10 flex items-center gap-5">
          <a
            href="https://github.com/moxes-x"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-secondary transition-colors hover:text-coral"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/moses-simbeye-78b766255"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-secondary transition-colors hover:text-coral"
          >
            <FaLinkedinIn size={24} />
          </a>
          <a
            href="https://behance.net/mosessimbeye"
            target="_blank"
            rel="noreferrer"
            aria-label="Behance"
            className="text-secondary transition-colors hover:text-coral"
          >
            <FaBehance size={24} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
