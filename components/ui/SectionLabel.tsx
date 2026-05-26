type SectionLabelProps = {
  children: string;
};

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="mb-4 border-l-4 border-coral pl-4 font-mono text-xs uppercase tracking-[0.08em] text-coral">
      {children}
    </p>
  );
}
