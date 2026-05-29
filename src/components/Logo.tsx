import logoSrc from "/logo.png";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src={logoSrc}
        alt=""
        width={28}
        height={28}
        className="h-7 w-7 object-contain"
      />
      <span className="text-[15px] font-medium tracking-tight text-ink">
        Evonor Consulting
      </span>
    </div>
  );
}
