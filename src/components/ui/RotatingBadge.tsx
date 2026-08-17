import { Play } from "lucide-react";

interface RotatingBadgeProps {
  text: string;
  onClick?: () => void;
}

/** Circular rotating text with a centered play button — "see how it works" style badge. */
export function RotatingBadge({ text, onClick }: RotatingBadgeProps) {
  const repeated = `${text} • `.repeat(3);

  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative h-28 w-28 shrink-0"
      aria-label={text}
    >
      <svg
        viewBox="0 0 100 100"
        className="h-full w-full animate-[spin_16s_linear_infinite]"
      >
        <defs>
          <path
            id="rotating-badge-path"
            d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
          />
        </defs>
        <circle cx="50" cy="50" r="49" className="fill-white drop-shadow-md" />
        <text
          fontSize="7"
          fontWeight="700"
          letterSpacing="1.5"
          className="fill-slate-900"
        >
          <textPath href="#rotating-badge-path" startOffset="0%">
            {repeated}
          </textPath>
        </text>
      </svg>
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white shadow-md transition group-hover:bg-orange-600">
          <Play className="h-4 w-4 fill-white" />
        </span>
      </span>
    </button>
  );
}
