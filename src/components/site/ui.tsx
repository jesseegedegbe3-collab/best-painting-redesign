import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, PaintRoller } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}

export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "span";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];
  return (
    <MotionTag
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-xs font-semibold uppercase tracking-[0.22em] text-clay-strong",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl",
          dark ? "text-paper" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            dark ? "text-paper/70" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export function BrandMark({ className }: { className?: string }) {
  return (
    <span className={cn("relative inline-flex", className)}>
      <span className="grid size-9 place-items-center rounded-md bg-ink text-paper">
        <PaintRoller className="size-4 text-clay" strokeWidth={1.75} />
      </span>
    </span>
  );
}

export function Wordmark({ dark = false }: { dark?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <BrandMark />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-[15px] font-semibold tracking-tight",
            dark ? "text-paper" : "text-ink",
          )}
        >
          Best Quality Painting
        </span>
        <span
          className={cn(
            "mt-1 text-[11px] font-medium uppercase tracking-[0.18em]",
            dark ? "text-paper/50" : "text-muted-foreground",
          )}
        >
          Ltd. · Winnipeg
        </span>
      </span>
    </span>
  );
}

export function PrimaryCta({
  href,
  children,
  className,
  arrow = true,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  arrow?: boolean;
}) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-clay-strong px-6 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-clay-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2",
        className,
      )}
    >
      {children}
      {arrow && (
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      )}
    </a>
  );
}

export function OutlineCta({
  href,
  children,
  className,
  dark = false,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex h-12 items-center justify-center gap-2 rounded-md border px-6 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2",
        dark
          ? "border-paper/30 text-paper hover:border-paper/60 hover:bg-paper/10"
          : "border-ink/20 text-ink hover:border-ink/50 hover:bg-ink/5",
        className,
      )}
    >
      {children}
    </a>
  );
}
