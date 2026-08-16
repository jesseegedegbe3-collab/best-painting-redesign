import { ChevronLeft, ChevronRight, MoveHorizontal, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  BEFORE_AFTER,
  GALLERY,
  GALLERY_CATEGORIES,
  type GalleryCategory,
} from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { Container, Reveal, SectionHeading } from "./ui";

function fullImage(src: string) {
  return src.replace(/w=\d+/, "w=1920");
}

export function GallerySection() {
  const [filter, setFilter] = useState<"All" | GalleryCategory>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items =
    filter === "All"
      ? GALLERY
      : GALLERY.filter((item) => item.category === filter);

  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(
    () =>
      setLightbox((i) => (i === null ? null : (i - 1 + items.length) % items.length)),
    [items.length],
  );
  const next = useCallback(
    () => setLightbox((i) => (i === null ? null : (i + 1) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, prev, next]);

  return (
    <section id="work" className="bg-paper-2 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Our work"
          title="See the Transformation"
          description="A curated look at recent interior, exterior, and drywall projects from Best Quality Painting Ltd. across Winnipeg."
        />

        <div className="mt-10 flex flex-wrap gap-2">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setFilter(cat);
                setLightbox(null);
              }}
              aria-pressed={filter === cat}
              className={cn(
                "h-9 rounded-full border px-4 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay",
                filter === cat
                  ? "border-ink bg-ink text-paper"
                  : "border-ink/15 bg-paper text-ink/70 hover:border-ink/40 hover:text-ink",
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal
              key={`${item.title}-${i}`}
              delay={(i % 3) * 0.05}
              className="group relative overflow-hidden rounded-lg"
            >
              <button
                type="button"
                onClick={() => setLightbox(i)}
                aria-label={`View larger: ${item.title}, ${item.location}`}
                className="block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-inset"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent opacity-90 transition-opacity duration-300" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-clay">
                      {item.category}
                    </p>
                    <p className="mt-1 text-base font-semibold text-paper">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-xs text-paper/70">{item.location}</p>
                  </div>
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-paper/15 text-paper backdrop-blur transition-colors group-hover:bg-paper group-hover:text-ink">
                    <ChevronRight className="size-4" />
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        {items.length === 0 && (
          <p className="mt-8 text-sm text-muted-foreground">
            No projects in this category yet.
          </p>
        )}
      </Container>

      {lightbox !== null && items[lightbox] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={items[lightbox].title}
          className="fixed inset-0 z-[60] flex flex-col bg-ink/95 backdrop-blur"
          onClick={close}
        >
          <div
            className="flex items-center justify-between px-5 py-4 sm:px-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-clay">
                {items[lightbox].category}
              </p>
              <p className="text-sm font-semibold text-paper">
                {items[lightbox].title} · {items[lightbox].location}
              </p>
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="grid size-11 place-items-center rounded-md border border-paper/20 text-paper transition-colors hover:bg-paper/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay"
            >
              <X className="size-5" />
            </button>
          </div>

          <div
            className="relative flex flex-1 items-center justify-center px-4 sm:px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={fullImage(items[lightbox].image)}
              alt={items[lightbox].alt}
              className="max-h-[70vh] w-auto max-w-full rounded-md object-contain"
            />
          </div>

          <div
            className="flex items-center justify-between px-5 py-4 sm:px-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={prev}
              aria-label="Previous image"
              className="grid size-11 place-items-center rounded-md border border-paper/20 text-paper transition-colors hover:bg-paper/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay"
            >
              <ChevronLeft className="size-5" />
            </button>
            <p className="text-xs text-paper/60">
              {lightbox + 1} / {items.length}
            </p>
            <button
              type="button"
              onClick={next}
              aria-label="Next image"
              className="grid size-11 place-items-center rounded-md border border-paper/20 text-paper transition-colors hover:bg-paper/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

function BeforeAfterSlider({
  before,
  after,
  beforeAlt,
  afterAlt,
}: {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
}) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(98, Math.max(2, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (dragging.current) updateFromClientX(e.clientX);
  };
  const endDrag = () => {
    dragging.current = false;
  };

  return (
    <div
      ref={ref}
      className="relative aspect-video w-full cursor-ew-resize select-none overflow-hidden rounded-lg bg-ink-2"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
    >
      <img
        src={after}
        alt={afterAlt}
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <img
        src={before}
        alt={beforeAlt}
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />

      <span className="absolute left-4 top-4 rounded-sm bg-ink/70 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-paper backdrop-blur">
        Before
      </span>
      <span className="absolute right-4 top-4 rounded-sm bg-clay-strong px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-white">
        After
      </span>

      <div
        className="absolute inset-y-0 w-0.5 bg-paper shadow-[0_0_0_1px_rgba(0,0,0,0.15)]"
        style={{ left: `${pos}%` }}
      >
        <button
          type="button"
          role="slider"
          aria-label="Before and after comparison slider"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") setPos((p) => Math.max(2, p - 5));
            if (e.key === "ArrowRight") setPos((p) => Math.min(98, p + 5));
          }}
          className="absolute left-1/2 top-1/2 grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-paper text-ink shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay"
        >
          <MoveHorizontal className="size-5" />
        </button>
      </div>
    </div>
  );
}

export function BeforeAfterSection() {
  const [active, setActive] = useState(0);
  const item = BEFORE_AFTER[active];

  return (
    <section className="bg-paper py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Before & After"
          title="Real Projects, Real Results"
          description="Drag the slider to compare the before and after on genuine project imagery from Best Quality Painting's public portfolio."
        />

        <div className="mt-10 flex flex-wrap gap-2">
          {BEFORE_AFTER.map((ba, i) => (
            <button
              key={ba.id}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={active === i}
              className={cn(
                "h-10 rounded-full border px-5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay",
                active === i
                  ? "border-ink bg-ink text-paper"
                  : "border-ink/15 bg-paper-2 text-ink/70 hover:border-ink/40 hover:text-ink",
              )}
            >
              {ba.title}
            </button>
          ))}
        </div>

        <Reveal className="mt-8">
          <BeforeAfterSlider
            before={item.before}
            after={item.after}
            beforeAlt={item.beforeAlt}
            afterAlt={item.afterAlt}
          />
          <div className="mt-5 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
