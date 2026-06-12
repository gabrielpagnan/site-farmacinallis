import { cn } from "@/lib/utils";

/** Folha decorativa que ecoa o símbolo do logotipo. Puramente visual. */
const LeafMotif = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    aria-hidden="true"
    className={cn("pointer-events-none select-none", className)}
  >
    <path
      d="M100 190C60 150 30 110 38 62 88 54 150 70 168 118c12 32-8 58-40 66-12 3-20 4-28 6Z"
      fill="currentColor"
    />
    <path
      d="M100 190C80 140 70 100 60 70"
      stroke="hsl(var(--forest-deep))"
      strokeOpacity="0.25"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

export default LeafMotif;
