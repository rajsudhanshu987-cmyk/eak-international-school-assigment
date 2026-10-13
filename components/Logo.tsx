export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="logo">
      <svg viewBox="0 0 40 40" width="38" height="38" aria-hidden="true">
        <rect width="40" height="40" rx="11" fill={light ? "#FFC531" : "#0E3B2F"} />
        <path d="M8 27V13c4-2 8-2 12 1 4-3 8-3 12-1v14c-4-2-8-2-12 1-4-3-8-3-12-1z" fill="none" stroke={light ? "#0E3B2F" : "#FFC531"} strokeWidth="2.6" strokeLinejoin="round" />
        <path d="M20 14v14" stroke={light ? "#0E3B2F" : "#FFC531"} strokeWidth="2.6" />
      </svg>
      <span className="logo-text">
        <strong>EAK</strong>
        <span>International School</span>
      </span>
    </span>
  );
}
