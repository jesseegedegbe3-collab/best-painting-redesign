// Verified public business information for Best Quality Painting Ltd.
// Source: https://www.bestqualitypainting.ca/ (official website)

export const BUSINESS = {
  name: "Best Quality Painting Ltd.",
  city: "Winnipeg, Manitoba",
  phoneDisplay: "204-997-9210",
  phoneHref: "tel:+12049979210",
  email: "bqpltd@hotmail.com",
  emailHref: "mailto:bqpltd@hotmail.com",
  hours: "Mon–Sat: 7am–5pm",
  officialSite: "https://www.bestqualitypainting.ca/",
  bbbProfile:
    "https://www.bbb.org/ca/mb/winnipeg/profile/painting-contractors/best-quality-painting-ltd-0057-32228",
  googleReviews:
    "https://www.google.com/search?kgmid=/g/11npfvt1pr&hl=en-CA&q=Best+Quality+Painting+Ltd.",
} as const;

// Official project imagery, served through the official site's image CDN.
const IMAGE_HOST = "https://www.bestqualitypainting.ca/_next/image?url=%2F";

export function projectImage(file: string, width = 1080, quality = 75) {
  return `${IMAGE_HOST}${file}&w=${width}&q=${quality}`;
}

export const NAV_ITEMS = [
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/work" },
  { label: "Why Us", href: "/why-us" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
] as const;

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export const SERVICES: ServiceItem[] = [
  {
    title: "Interior Painting",
    description:
      "Walls, ceilings, trim, doors, baseboards, and accent walls — finished with careful prep and clean lines.",
    icon: "Paintbrush",
  },
  {
    title: "Exterior Painting",
    description:
      "Siding, stucco, trim, soffits, fascia, and other exterior surfaces, with coatings built for Manitoba weather.",
    icon: "Home",
  },
  {
    title: "Residential Painting",
    description:
      "Painting for homeowners and residential properties, from a single room to a whole-home repaint.",
    icon: "House",
  },
  {
    title: "Commercial Painting",
    description:
      "Professional painting for offices, retail spaces, and other commercial environments.",
    icon: "Building2",
  },
  {
    title: "Drywall Repair, Taping & Mudding",
    description:
      "Patching, taping, and mudding to repair and prepare walls and ceilings before painting.",
    icon: "Hammer",
  },
  {
    title: "Cabinet Painting",
    description:
      "Cabinet painting and refinishing for a refreshed kitchen without a full renovation.",
    icon: "DoorOpen",
  },
  {
    title: "Stucco Painting",
    description:
      "Preparation and painting for stucco surfaces using durable, breathable finishes.",
    icon: "Waves",
  },
  {
    title: "Deck & Fence Staining",
    description:
      "Cleaning, sanding, and staining for outdoor wood surfaces to protect them from the elements.",
    icon: "TreePine",
  },
];

export const SHOWCASE = [
  {
    title: "Interior Painting",
    kicker: "Walls, ceilings & trim",
    description:
      "From crisp ceiling lines to smooth, even walls, interior projects are prepared properly and finished with attention to detail.",
    image: projectImage("3interior.jpg", 1200),
    alt: "Living room interior painting project by Best Quality Painting Ltd. in Winnipeg",
  },
  {
    title: "Exterior Painting",
    kicker: "Siding, stucco & trim",
    description:
      "Weather-ready coatings and thorough surface prep that stand up to Winnipeg's freeze-thaw seasons while restoring curb appeal.",
    image: projectImage("1e.jpg", 1200),
    alt: "Exterior house painting project completed by Best Quality Painting Ltd. in Winnipeg",
  },
  {
    title: "Cabinet Painting",
    kicker: "Refinish, don't replace",
    description:
      "A cabinet refresh can modernize the heart of the home for a fraction of the cost and disruption of a full renovation.",
    image: projectImage("4interior.jpg", 1200),
    alt: "Cabinet painting and refinishing project completed by Best Quality Painting Ltd. in Winnipeg",
  },
];

export type GalleryCategory =
  | "Interior"
  | "Exterior"
  | "Drywall / Mudding"
  | "Accent Walls"
  | "Stucco / Brick"
  | "Siding"
  | "Decks & Fences";

export const GALLERY_CATEGORIES: ("All" | GalleryCategory)[] = [
  "All",
  "Interior",
  "Exterior",
  "Accent Walls",
  "Stucco / Brick",
  "Siding",
  "Decks & Fences",
  "Drywall / Mudding",
];

export interface GalleryItem {
  image: string;
  alt: string;
  title: string;
  location: string;
  category: GalleryCategory;
}

export const GALLERY: GalleryItem[] = [
  {
    image: projectImage("1interior.jpg"),
    alt: "Interior wall repaint project by Best Quality Painting Ltd. in Winnipeg",
    title: "Interior Wall Repaint",
    location: "Winnipeg, MB",
    category: "Interior",
  },
  {
    image: projectImage("2interior.jpg"),
    alt: "Bedroom accent wall painting project completed by Best Quality Painting Ltd. in Winnipeg",
    title: "Bedroom Accent Wall",
    location: "Winnipeg, MB",
    category: "Accent Walls",
  },
  {
    image: projectImage("3interior.jpg"),
    alt: "Living room interior painting project by Best Quality Painting Ltd. in Winnipeg",
    title: "Living Room Painting",
    location: "St. Vital, Winnipeg",
    category: "Interior",
  },
  {
    image: projectImage("4interior.jpg"),
    alt: "Cabinet painting and refinishing project completed by Best Quality Painting Ltd. in Winnipeg",
    title: "Cabinet Painting & Refinishing",
    location: "Winnipeg, MB",
    category: "Interior",
  },
  {
    image: projectImage("1e.jpg"),
    alt: "Exterior house painting project completed by Best Quality Painting Ltd. in Winnipeg",
    title: "Exterior Home Painting",
    location: "Winnipeg, MB",
    category: "Exterior",
  },
  {
    image: projectImage("2e.jpg"),
    alt: "Siding and trim repaint project completed by Best Quality Painting Ltd. in Charleswood, Winnipeg",
    title: "Siding & Trim Repaint",
    location: "Charleswood, Winnipeg",
    category: "Siding",
  },
  {
    image: projectImage("3e.jpg"),
    alt: "Stucco exterior painting project completed by Best Quality Painting Ltd. in Winnipeg",
    title: "Stucco Exterior Refresh",
    location: "Winnipeg, MB",
    category: "Stucco / Brick",
  },
  {
    image: projectImage("4e.jpg"),
    alt: "Deck and fence staining project completed by Best Quality Painting Ltd. in Winnipeg",
    title: "Deck & Fence Staining",
    location: "Winnipeg, MB",
    category: "Decks & Fences",
  },
  {
    image: projectImage("5interior.jpg"),
    alt: "Commercial office painting project completed by Best Quality Painting Ltd. in Winnipeg",
    title: "Commercial Office Painting",
    location: "Winnipeg, MB",
    category: "Interior",
  },
  {
    image: projectImage("6interior.jpg"),
    alt: "Retail storefront painting project completed by Best Quality Painting Ltd. in downtown Winnipeg",
    title: "Retail Storefront Painting",
    location: "Downtown Winnipeg",
    category: "Interior",
  },
  {
    image: projectImage("1d.jpg"),
    alt: "Drywall repair, taping, and mudding project completed by Best Quality Painting Ltd. in Winnipeg",
    title: "Drywall Repair & Mudding",
    location: "Winnipeg, MB",
    category: "Drywall / Mudding",
  },
  {
    image: projectImage("2d.jpg"),
    alt: "Ceiling drywall patch and repaint project completed by Best Quality Painting Ltd. in Winnipeg",
    title: "Ceiling Drywall Patch",
    location: "Winnipeg, MB",
    category: "Drywall / Mudding",
  },
];

export interface BeforeAfterItem {
  id: string;
  title: string;
  description: string;
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
}

// Genuine paired before/after imagery displayed on the official website.
export const BEFORE_AFTER: BeforeAfterItem[] = [
  {
    id: "interior",
    title: "Interior Painting",
    description:
      "Smooth, even coverage on walls and ceilings — a clean, professional finish that lasts.",
    before: projectImage("ib1.png", 1200),
    after: projectImage("ia1.png", 1200),
    beforeAlt: "Interior painting project before — Best Quality Painting Ltd., Winnipeg",
    afterAlt: "Interior painting project after — Best Quality Painting Ltd., Winnipeg",
  },
  {
    id: "drywall",
    title: "Drywall & Mudding",
    description:
      "Repairs patched, taped, and sanded smooth before paint — ready for a flawless finish.",
    before: projectImage("d1b.png", 1200),
    after: projectImage("d1a.png", 1200),
    beforeAlt: "Drywall and mudding project before — Best Quality Painting Ltd., Winnipeg",
    afterAlt: "Drywall and mudding project after — Best Quality Painting Ltd., Winnipeg",
  },
];

export const WHY_US = [
  {
    title: "Detailed Surface Preparation",
    description:
      "Patching, sanding, caulking, and priming before paint — because a better finish starts with better preparation.",
    icon: "Ruler",
  },
  {
    title: "Clean, Respectful Work",
    description:
      "Your space is protected, and work areas are kept clean and tidy throughout the project.",
    icon: "Sparkles",
  },
  {
    title: "Interior & Exterior Expertise",
    description:
      "Skilled in both residential and commercial painting, inside and out.",
    icon: "Paintbrush",
  },
  {
    title: "Drywall Repair & Painting",
    description:
      "Repairs and painting can be handled together, saving you time and extra coordination.",
    icon: "Hammer",
  },
  {
    title: "Clear Communication",
    description:
      "Kept in the loop from quote through final walkthrough, so there are no surprises.",
    icon: "MessageSquare",
  },
  {
    title: "Free Estimates",
    description:
      "Free, no-obligation estimates to help you plan with confidence.",
    icon: "FileText",
  },
  {
    title: "Local Winnipeg Service",
    description:
      "A Winnipeg painting company serving the city and surrounding communities.",
    icon: "MapPin",
  },
  {
    title: "Professional Workmanship",
    description:
      "A focus on quality and detail, backed by a 5-year workmanship warranty.",
    icon: "CheckCircle2",
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Request an Estimate",
    description: "Tell us about your project and what you'd like painted.",
  },
  {
    step: "02",
    title: "Consultation & Planning",
    description: "Discuss the project, scope, surfaces, and expectations.",
  },
  {
    step: "03",
    title: "Preparation",
    description:
      "Patch, repair, sand, caulk, prime, and protect surfaces as appropriate.",
  },
  {
    step: "04",
    title: "Painting",
    description: "Complete the agreed painting work with care and attention.",
  },
  {
    step: "05",
    title: "Final Walkthrough",
    description: "Review the finished work and complete appropriate touch-ups.",
  },
];

export const SERVICE_AREAS = [
  "River Heights",
  "Charleswood",
  "St. Vital",
  "Fort Garry",
  "Tuxedo",
  "Linden Woods",
  "Bridgwater",
  "Sage Creek",
  "Transcona",
  "St. James",
];

export interface ReviewItem {
  quote: string;
  name: string;
  source: string;
}

// Short excerpts from publicly displayed Google reviews on the official site.
export const REVIEWS: ReviewItem[] = [
  {
    quote:
      "Best Quality Paint Ltd. worked with me through a very complicated renovation of an older condo with a number of complex problems. I can honestly say that there is nobody that could have done a better job, or tried harder to fix every one of the issues.",
    name: "Jacqueline Fernet",
    source: "Google Review",
  },
  {
    quote:
      "The team were professional, friendly, and paid close attention to detail. The work was done ahead of time and more than exceeded my expectations. I highly recommend Best Quality Painting Ltd.",
    name: "Ryan Saka",
    source: "Google Review",
  },
  {
    quote:
      "We just got the outside of our house painted by Best Quality and the work was outstanding. The workers were very careful about my garden and made sure to not make any mess. I highly recommend them.",
    name: "Sheena K B",
    source: "Google Review",
  },
];

export const STATS = [
  { value: "500+", label: "Projects Completed" },
  { value: "15+", label: "Years Experience" },
  { value: "5", label: "Year Workmanship Warranty" },
  { value: "2011", label: "BBB Accredited Since" },
];

export const TRUST_STRIP = [
  "500+ Projects Completed",
  "15+ Years Experience",
  "5-Year Workmanship Warranty",
  "Residential & Commercial",
  "Fully Insured & WCB Covered",
];

export const FAQS = [
  {
    question: "How much does a painting project cost?",
    answer:
      "Pricing depends on the scope, surfaces, size, preparation work, and requirements of your project. The best way to get an accurate number is to request a free, no-obligation estimate.",
  },
  {
    question: "Do you provide free estimates?",
    answer:
      "Yes. Best Quality Painting Ltd. offers free, no-obligation estimates so you can review your project and options before committing.",
  },
  {
    question: "Do you handle interior and exterior painting?",
    answer:
      "Yes. The company provides both interior and exterior painting for residential and commercial customers across Winnipeg.",
  },
  {
    question: "Do you repair drywall before painting?",
    answer:
      "Yes. Drywall repair, taping, and mudding are part of the service offering, so repairs and painting can be completed together.",
  },
  {
    question: "Do you paint cabinets?",
    answer:
      "Yes. Cabinet painting and refinishing are available as part of the current service list.",
  },
  {
    question: "Do you stain decks and fences?",
    answer:
      "Yes. Deck and fence staining is available to clean, sand, and protect outdoor wood surfaces.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "The company serves Winnipeg and surrounding neighbourhoods, including River Heights, Charleswood, St. Vital, Fort Garry, Tuxedo, Linden Woods, Bridgwater, Sage Creek, Transcona, and St. James.",
  },
  {
    question: "What preparation is involved?",
    answer:
      "Preparation typically includes patching, sanding, caulking, and priming, along with protecting your space and keeping work areas clean.",
  },
  {
    question: "How do I get started?",
    answer:
      "Request a free estimate using the form below, or call 204-997-9210 to talk through your project.",
  },
];

export const PROJECT_TYPES = [
  "Interior Painting",
  "Exterior Painting",
  "Residential Painting",
  "Commercial Painting",
  "Drywall Repair",
  "Cabinet Painting",
  "Stucco Painting",
  "Deck & Fence Staining",
  "Other",
];
