export function PortraitDoodle({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 220 220" role="img" aria-label="Ilustracion lineal de Catherine">
      <path d="M46 92c8-39 32-62 67-62 34 0 58 23 65 61" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M34 93c32-18 88-25 154 0-24 5-46 3-69-7-25 11-52 14-85 7Z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
      <path d="M72 74 93 55M105 71l19-24M134 76l15-20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M69 101c-3 42 17 73 45 73s47-31 43-72" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M82 114c8 9 19 9 27 0M123 114c8 9 19 9 27 0M101 142c11 9 25 9 36 0" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M65 122c-17 17-25 37-24 61M160 122c17 17 25 37 24 61M79 176c19 15 49 15 68 0" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function ArrowDoodle({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 34" aria-hidden="true">
      <path d="M4 17c34-8 79-8 142-1" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="7 8" />
      <path d="M132 5 151 16l-20 12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
