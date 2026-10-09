import Image from "next/image";
import { companyLogos } from "@/lib/media";

export default function CompanyLogo({
  company,
  className = "",
  muted = false,
}: {
  company: string;
  className?: string;
  muted?: boolean;
}) {
  const logo = companyLogos[company];
  const tone = muted ? "grayscale opacity-70 transition group-hover:grayscale-0 group-hover:opacity-100" : "";

  return (
    <span className={`flex items-center justify-center rounded-lg bg-white px-3 py-2 ${className}`}>
      {logo ? (
        <Image src={logo} alt={company} loading="eager" style={{ width: "auto", height: "100%" }} className={`object-contain ${tone}`} />
      ) : (
        <span className={`text-sm font-bold tracking-tight whitespace-nowrap text-zinc-800 ${tone}`}>{company}</span>
      )}
    </span>
  );
}
