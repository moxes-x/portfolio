type TechTagProps = {
  children: string;
};

export function TechTag({ children }: TechTagProps) {
  return (
    <span className="border border-dark-3 bg-dark-3 px-3 py-1 font-mono text-xs text-coral transition-colors duration-150 hover:border-coral">
      {children}
    </span>
  );
}
