import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { navItems } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="border-t border-dark-3 bg-dark py-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-secondary">
          Built by Moses Simbeye - Lusaka, Zambia © 2025
        </p>
        <div className="flex flex-wrap items-center gap-5">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="font-mono text-xs uppercase tracking-[0.08em] text-secondary transition-colors hover:text-coral"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#hero"
            aria-label="Back to top"
            className="inline-flex h-10 w-10 items-center justify-center border border-dark-3 text-light transition-colors hover:border-coral hover:text-coral"
          >
            <ArrowUp size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
