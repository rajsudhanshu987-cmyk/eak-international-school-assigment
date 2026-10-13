import Image from "next/image";
import type { SceneKind } from "@/lib/data";
import { photoAlt, photos } from "@/lib/photos";

// Flat illustrated placeholders drawn in the school palette (no external images needed).
const G9 = "#0B2E25", G8 = "#0E3B2F", G6 = "#1E6B55", G4 = "#5FA88E", MIST = "#DCE8E1", PAPER = "#F3F6F3";
const BUS = "#FFC531", RED = "#D8453B", SKY = "#BFE0EA";

const bg: Record<SceneKind, string> = {
  classroom: "#E7F0EA", lab: "#DDEBF0", library: "#F3E7C9", field: "#CFE8C8", auditorium: "#2A1F3D",
  bus: "#FFE9A6", canteen: "#F6D9C8", medical: "#E3EEF2", computer: "#14352C", hostel: "#E9E3F2",
  campus: "#CFE5DC", art: "#F6D2CB",
};

function Art({ kind }: { kind: SceneKind }) {
  switch (kind) {
    case "classroom":
      return (<>
        <rect x="40" y="40" width="320" height="110" rx="6" fill={G8} />
        <path d="M70 80h120M70 100h180M70 120h90" stroke={MIST} strokeWidth="5" strokeLinecap="round" opacity=".8" />
        <circle cx="300" cy="95" r="22" fill={BUS} />
        {[70, 160, 250].map((x) => (<g key={x}><rect x={x} y="185" width="80" height="14" rx="3" fill={G6} /><rect x={x + 8} y="199" width="6" height="50" fill={G9} /><rect x={x + 66} y="199" width="6" height="50" fill={G9} /></g>))}
      </>);
    case "lab":
      return (<>
        <rect x="0" y="210" width="400" height="90" fill={G8} />
        <path d="M110 70h40v50l36 80H74l36-80z" fill={SKY} stroke={G8} strokeWidth="5" strokeLinejoin="round" />
        <path d="M86 180h88l10 20H76z" fill={G4} />
        <path d="M250 110h30v35l26 55h-82l26-55z" fill="#fff" stroke={G8} strokeWidth="5" strokeLinejoin="round" />
        <path d="M236 175h58l8 25h-74z" fill={BUS} />
        <circle cx="340" cy="70" r="6" fill={RED} /><circle cx="318" cy="48" r="4" fill={G6} />
      </>);
    case "library":
      return (<>
        {[0, 1].map((r) => (<g key={r}><rect x="30" y={50 + r * 100} width="340" height="8" fill={G8} />
          {Array.from({ length: 13 }).map((_, i) => (<rect key={i} x={40 + i * 25} y={r * 100 + 10 + (i % 3) * 6} width="18" height={40 - (i % 3) * 6} fill={[G6, RED, G9, BUS, G4][i % 5]} />))}</g>))}
        <rect x="30" y="250" width="340" height="10" rx="3" fill={G8} />
        <path d="M150 238c20-12 40-12 50 0 10-12 30-12 50 0v12h-100z" fill={PAPER} stroke={G8} strokeWidth="3" />
      </>);
    case "field":
      return (<>
        <rect x="0" y="0" width="400" height="140" fill={SKY} />
        <circle cx="320" cy="60" r="28" fill={BUS} />
        <rect x="0" y="140" width="400" height="160" fill="#7FC27A" />
        <rect x="40" y="170" width="320" height="110" fill="none" stroke="#fff" strokeWidth="4" />
        <path d="M200 170v110" stroke="#fff" strokeWidth="4" /><circle cx="200" cy="225" r="26" fill="none" stroke="#fff" strokeWidth="4" />
        <circle cx="130" cy="215" r="9" fill="#fff" stroke={G9} strokeWidth="3" />
      </>);
    case "auditorium":
      return (<>
        <path d="M0 0h400v50c-60 20-140 28-200 28S60 70 0 50z" fill={RED} />
        <path d="M0 40c40 20 90 30 200 30s160-10 200-30" fill="none" stroke={BUS} strokeWidth="4" />
        <path d="M120 90h160l-20 60H140z" fill={BUS} opacity=".25" />
        <rect x="0" y="150" width="400" height="20" fill="#5B4381" />
        {[0, 1, 2].map((r) => Array.from({ length: 9 - r }).map((_, i) => (<circle key={`${r}-${i}`} cx={50 + r * 20 + i * 38} cy={200 + r * 32} r="12" fill={r === 1 ? "#7A5CB0" : "#4A3470"} />)))}
      </>);
    case "bus":
      return (<>
        <rect x="0" y="230" width="400" height="70" fill="#4A5A54" /><path d="M0 265h400" stroke="#fff" strokeDasharray="30 20" strokeWidth="4" />
        <rect x="40" y="110" width="320" height="120" rx="18" fill={BUS} stroke={G9} strokeWidth="5" />
        {[60, 128, 196, 264].map((x) => (<rect key={x} x={x} y="130" width="52" height="42" rx="6" fill={SKY} stroke={G9} strokeWidth="4" />))}
        <rect x="324" y="130" width="24" height="42" rx="4" fill={SKY} stroke={G9} strokeWidth="4" />
        <path d="M40 195h320" stroke={G9} strokeWidth="5" />
        <circle cx="100" cy="232" r="22" fill={G9} /><circle cx="100" cy="232" r="9" fill={MIST} />
        <circle cx="290" cy="232" r="22" fill={G9} /><circle cx="290" cy="232" r="9" fill={MIST} />
      </>);
    case "canteen":
      return (<>
        <circle cx="200" cy="150" r="100" fill="#fff" stroke={G8} strokeWidth="6" /><circle cx="200" cy="150" r="70" fill="none" stroke={MIST} strokeWidth="4" />
        <circle cx="170" cy="130" r="26" fill="#E58C3A" /><circle cx="225" cy="165" r="30" fill="#7FB35E" /><circle cx="215" cy="115" r="16" fill={RED} />
        <path d="M60 60v90M50 60v30M70 60v30M60 150v100" stroke={G8} strokeWidth="6" strokeLinecap="round" />
        <path d="M340 60c-14 20-14 60 0 80v110" stroke={G8} strokeWidth="6" strokeLinecap="round" fill="none" />
      </>);
    case "medical":
      return (<>
        <rect x="120" y="50" width="160" height="160" rx="22" fill="#fff" stroke={G8} strokeWidth="6" />
        <path d="M200 85v90M155 130h90" stroke={RED} strokeWidth="26" strokeLinecap="round" />
        <rect x="60" y="235" width="280" height="14" rx="6" fill={G6} />
      </>);
    case "computer":
      return (<>
        <rect x="70" y="50" width="260" height="170" rx="10" fill="#0A1F19" stroke={G4} strokeWidth="6" />
        <path d="M95 90l25 20-25 20M140 135h60" stroke={BUS} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M230 90h70M230 110h50M230 130h60" stroke={G4} strokeWidth="5" strokeLinecap="round" />
        <path d="M170 220v26M130 250h140" stroke={G4} strokeWidth="8" strokeLinecap="round" />
      </>);
    case "hostel":
      return (<>
        <rect x="40" y="130" width="320" height="30" rx="8" fill="#7A5CB0" />
        <rect x="40" y="100" width="90" height="40" rx="12" fill="#fff" stroke="#4A3470" strokeWidth="4" />
        <rect x="40" y="160" width="14" height="60" fill="#4A3470" /><rect x="346" y="160" width="14" height="60" fill="#4A3470" />
        <rect x="150" y="30" width="100" height="70" rx="6" fill={SKY} stroke="#4A3470" strokeWidth="5" />
        <path d="M200 30v70M150 65h100" stroke="#4A3470" strokeWidth="4" />
        <circle cx="330" cy="60" r="5" fill={BUS} />
      </>);
    case "art":
      return (<>
        <circle cx="140" cy="130" r="70" fill={BUS} /><circle cx="230" cy="150" r="60" fill={RED} opacity=".85" /><circle cx="290" cy="110" r="42" fill={G6} opacity=".9" />
        <path d="M60 240c60-40 120 20 280-20" stroke={G9} strokeWidth="6" fill="none" strokeLinecap="round" />
      </>);
    default:
      return (<>
        <rect x="0" y="0" width="400" height="150" fill={SKY} />
        <rect x="0" y="210" width="400" height="90" fill="#7FC27A" />
        <rect x="90" y="90" width="220" height="130" fill={PAPER} stroke={G8} strokeWidth="5" />
        <path d="M70 100l130-60 130 60z" fill={G8} />
        <rect x="180" y="150" width="40" height="70" fill={G6} />
        {[110, 250].map((x) => (<rect key={x} x={x} y="120" width="30" height="30" fill={SKY} stroke={G8} strokeWidth="3" />))}
        <circle cx="50" cy="170" r="30" fill={G6} /><rect x="46" y="190" width="8" height="30" fill={G9} />
        <circle cx="350" cy="170" r="30" fill={G6} /><rect x="346" y="190" width="8" height="30" fill={G9} />
        <path d="M200 25v-20l22 7-22 7" fill={BUS} stroke={G8} strokeWidth="2" />
      </>);
  }
}

type SceneProps = { kind: SceneKind; label?: string; className?: string; photoKey?: string; priority?: boolean };

export default function Scene({ kind, label, className = "", photoKey, priority = false }: SceneProps) {
  // A real photo replaces the illustration when one exists in public/images.
  const src = (photoKey && photos[photoKey]) || photos[kind];
  if (src) {
    return (
      <Image
        className={`scene photo ${className}`}
        src={src}
        alt={label ? photoAlt[kind] ?? label : ""}
        width={1200}
        height={900}
        sizes="(min-width: 1060px) 560px, (min-width: 720px) 50vw, 100vw"
        priority={priority}
      />
    );
  }
  return (
    <svg
      className={`scene ${className}`}
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <rect width="400" height="300" fill={bg[kind]} />
      <Art kind={kind} />
    </svg>
  );
}
