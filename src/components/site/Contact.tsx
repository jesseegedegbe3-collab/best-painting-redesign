import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { api } from "@/convex/_generated/api";
import { CheckCircle2, Clock, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { useMutation } from "convex/react";
import { useState, type FormEvent } from "react";
import { BUSINESS, FAQS, PROJECT_TYPES } from "@/lib/site-data";
import { Container, Reveal, SectionHeading } from "./ui";

export function FaqSection() {
  return (
    <section id="faq" className="bg-paper-2 py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Straightforward answers about pricing, services, and getting started."
          />
          <a
            href="/contact"
            className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-clay-strong transition-colors hover:text-clay-deep"
          >
            Still have questions? Get in touch
            <span aria-hidden>→</span>
          </a>
        </div>

        <Reveal className="lg:col-span-8">
          <Accordion
            type="single"
            collapsible
            className="rounded-lg border border-ink/5 bg-paper px-5"
          >
            {FAQS.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger className="py-5 text-base font-semibold text-ink hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[15px] leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Container>
    </section>
  );
}

export function QuoteSection() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submitQuoteRequest = useMutation(api.quotes.submitQuoteRequest);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setError(null);
    setIsSubmitting(true);
    try {
      await submitQuoteRequest({
        name: String(data.get("name") ?? "").trim(),
        email: String(data.get("email") ?? "").trim(),
        phone: String(data.get("phone") ?? "").trim(),
        projectType: String(data.get("project-type") ?? "").trim(),
        message: String(data.get("message") ?? "").trim(),
      });
      setSubmitted(true);
    } catch {
      setError(
        "Something went wrong saving your request. Please try again, or call the company directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-ink py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-clay">
            Free, no-obligation estimates
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-paper text-balance sm:text-4xl">
            Let's Talk About Your Project
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-paper/70 sm:text-lg">
            Tell us about your project and request a free, no-obligation
            estimate.
          </p>

          <ul className="mt-10 space-y-5">
            <li className="flex items-center gap-4">
              <span className="grid size-11 place-items-center rounded-md bg-paper/10 text-clay">
                <Phone className="size-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-paper/50">
                  Call
                </p>
                <a
                  href={BUSINESS.phoneHref}
                  className="text-base font-semibold text-paper transition-colors hover:text-clay"
                >
                  {BUSINESS.phoneDisplay}
                </a>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <span className="grid size-11 place-items-center rounded-md bg-paper/10 text-clay">
                <Mail className="size-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-paper/50">
                  Email
                </p>
                <a
                  href={BUSINESS.emailHref}
                  className="text-base font-semibold text-paper transition-colors hover:text-clay"
                >
                  {BUSINESS.email}
                </a>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <span className="grid size-11 place-items-center rounded-md bg-paper/10 text-clay">
                <MapPin className="size-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-paper/50">
                  Location
                </p>
                <p className="text-base font-semibold text-paper">
                  Winnipeg, MB
                </p>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <span className="grid size-11 place-items-center rounded-md bg-paper/10 text-clay">
                <Clock className="size-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-paper/50">
                  Hours
                </p>
                <p className="text-base font-semibold text-paper">
                  {BUSINESS.hours}
                </p>
              </div>
            </li>
          </ul>
        </div>

        <Reveal delay={0.1}>
          <div className="rounded-lg bg-paper p-6 shadow-2xl sm:p-8">
            {submitted ? (
              <div className="flex min-h-[26rem] flex-col items-center justify-center text-center">
                <span className="grid size-12 place-items-center rounded-full bg-clay-soft text-clay-strong">
                  <CheckCircle2 className="size-6" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-ink">
                  Thanks — your request was saved
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  Your request has been stored in this demo's database, exactly
                  where it would land for a business owner to follow up.
                  Because this is a redesign concept, it was never sent to Best
                  Quality Painting — to reach the real company, call{" "}
                  <a
                    href={BUSINESS.phoneHref}
                    className="font-semibold text-clay-strong underline-offset-2 hover:underline"
                  >
                    {BUSINESS.phoneDisplay}
                  </a>{" "}
                  or email{" "}
                  <a
                    href={BUSINESS.emailHref}
                    className="font-semibold text-clay-strong underline-offset-2 hover:underline"
                  >
                    {BUSINESS.email}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                aria-label="Quote request form"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      autoComplete="name"
                      required
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@email.com"
                      autoComplete="email"
                      required
                      className="h-11"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="204-000-0000"
                    autoComplete="tel"
                    required
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="project-type">Project Type</Label>
                  <select
                    id="project-type"
                    name="project-type"
                    required
                    defaultValue=""
                    className="h-11 w-full rounded-md border border-input bg-transparent px-3 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                  >
                    <option value="" disabled>
                      Select a project type
                    </option>
                    {PROJECT_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project — rooms, surfaces, and anything else we should know."
                    required
                    className="min-h-28"
                  />
                </div>

                {error && (
                  <p
                    role="alert"
                    className="rounded-md border border-destructive/30 bg-destructive/5 px-3 py-2.5 text-sm text-destructive"
                  >
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-clay-strong px-6 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-clay-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting && <Loader2 className="size-4 animate-spin" />}
                  {isSubmitting ? "Saving…" : "Request My Free Estimate"}
                </button>
                <p className="text-center text-xs leading-relaxed text-muted-foreground">
                  Demo form — requests are stored in this demo's database and
                  are never sent to Best Quality Painting.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
