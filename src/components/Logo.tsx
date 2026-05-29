export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="28" height="28" rx="7" fill="currentColor" />
        <path
          d="M9 9.5C9 9.22386 9.22386 9 9.5 9H18.5C18.7761 9 19 9.22386 19 9.5V11C19 11.2761 18.7761 11.5 18.5 11.5H11.5V13.25H17C17.2761 13.25 17.5 13.4739 17.5 13.75V15.25C17.5 15.5261 17.2761 15.75 17 15.75H11.5V18.5H18.5C18.7761 18.5 19 18.7239 19 19V20.5C19 20.7761 18.7761 21 18.5 21H9.5C9.22386 21 9 20.7761 9 20.5V9.5Z"
          fill="white"
        />
      </svg>
      <span className="text-[15px] font-medium tracking-tight text-ink">
        Evonor Consulting
      </span>
    </div>
  );
}
