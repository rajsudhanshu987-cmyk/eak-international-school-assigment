import Image from "next/image";
import { photos } from "@/lib/photos";

// The principal's photograph if public/images/principal.* exists, otherwise an illustrated placeholder.
export default function Portrait() {
  const src = photos.principal;
  if (src) {
    return <Image className="scene photo" src={src} alt="Dr. Ananya Rao, Principal" width={800} height={1000} sizes="(min-width: 720px) 380px, 80vw" />;
  }
  return (
    <svg viewBox="0 0 320 400" className="scene" role="img" aria-label="Illustrated portrait of Dr. Ananya Rao, Principal" preserveAspectRatio="xMidYMid slice">
      <rect width="320" height="400" fill="#1E6B55" />
      <circle cx="260" cy="70" r="90" fill="#5FA88E" opacity=".35" />
      <path d="M40 400c0-80 50-120 120-120s120 40 120 120z" fill="#0B2E25" />
      <path d="M130 282l30 40 30-40z" fill="#F3F6F3" />
      <rect x="143" y="240" width="34" height="50" rx="12" fill="#B9774F" />
      <ellipse cx="160" cy="190" rx="54" ry="64" fill="#C98B62" />
      <path d="M104 188c-6-70 40-92 80-84 40 8 40 54 32 84-6-30-20-46-52-46-30 0-50 14-60 46z" fill="#241A16" />
      <path d="M124 196h20M176 196h20" stroke="#241A16" strokeWidth="5" strokeLinecap="round" />
      <path d="M142 226c10 8 26 8 36 0" stroke="#7A3F2A" strokeWidth="4" fill="none" strokeLinecap="round" />
      <circle cx="134" cy="196" r="17" fill="none" stroke="#FFC531" strokeWidth="3" />
      <circle cx="186" cy="196" r="17" fill="none" stroke="#FFC531" strokeWidth="3" />
      <path d="M151 196h18" stroke="#FFC531" strokeWidth="3" />
    </svg>
  );
}
