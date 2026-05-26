import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "border-coral bg-coral text-white hover:border-coral-dark hover:bg-coral-dark",
  secondary:
    "border-coral bg-transparent text-coral hover:bg-coral hover:text-white",
  ghost:
    "border-dark-3 bg-transparent text-light hover:border-coral hover:text-coral",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const classes = `inline-flex h-12 items-center justify-center border px-5 font-mono text-xs uppercase tracking-[0.08em] transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-dark ${variants[variant]} ${className}`;

  if (href.startsWith("#") || href.startsWith("/")) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a className={classes} href={href} {...props}>
      {children}
    </a>
  );
}
