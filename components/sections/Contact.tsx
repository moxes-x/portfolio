import { Mail, Phone } from "lucide-react";
import { FaBehance, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

export function Contact() {
  return (
    <section id="contact" className="bg-dark px-6 py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <div className="flex justify-center">
          <SectionLabel>Contact</SectionLabel>
        </div>
        <h2 className="font-display text-4xl font-bold text-light">
          Let&apos;s Work Together
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-secondary">
          Reach out for full-stack development work, production web systems, or
          collaboration on clean, useful digital products.
        </p>

        <div className="mt-10 grid gap-4 text-left sm:grid-cols-2">
          <a
            href="mailto:mosessimbeye54@gmail.com"
            className="flex items-center gap-3 border border-dark-3 bg-dark-2 p-5 font-mono text-sm text-light transition-colors hover:border-coral hover:text-coral"
          >
            <Mail size={18} />
            mosessimbeye54@gmail.com
          </a>
          <a
            href="tel:+260971228992"
            className="flex items-center gap-3 border border-dark-3 bg-dark-2 p-5 font-mono text-sm text-light transition-colors hover:border-coral hover:text-coral"
          >
            <Phone size={18} />
            +260 971 228 992
          </a>
        </div>

        <div className="mt-8 flex justify-center gap-5">
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
        </div>

        <div className="mt-10">
          <Button href="mailto:mosessimbeye54@gmail.com">
            Start a Conversation
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
