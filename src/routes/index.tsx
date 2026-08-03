import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  MapPin,
  Phone,
  Clock,
  Users,
  Timer,
  Flame,
  Axe,
  Dices,
  Mic2,
  Sparkles,
  Coffee,
  Instagram,
  Facebook,
  MessageCircle,
  Star,
  Check,
} from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import axeImg from "@/assets/axe.jpg";
import cafeImg from "@/assets/cafe.jpg";
import prisonImg from "@/assets/room-prison.jpg";
import karaokeImg from "@/assets/karaoke.jpg";
import celebrateImg from "@/assets/celebrate.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Game Production — Escape Rooms & Games in Tunis" },
      {
        name: "description",
        content:
          "Escape rooms, 400+ board games, axe throwing, karaoke and more on 1000 m² in Ain Zaghouane, Tunis. Open daily. Book on +216 20 641 111.",
      },
      { property: "og:title", content: "The Game Production — Fun HQ in Tunis" },
      {
        property: "og:description",
        content:
          "Tunis' ultimate indoor entertainment complex: escape rooms, board game café, axe throwing, karaoke. Open every day in Ain Zaghouane.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const PHONE = "+21620641111";
const WHATSAPP = `https://wa.me/${PHONE.replace("+", "")}`;

const activities = [
  {
    icon: Flame,
    title: "Escape Room Tunisia",
    text: "Six immersive worlds — Prison Break, Sabotage, Virus, The Hangover Hotel and more. 60 minutes, one exit.",
    tag: "Most booked",
  },
  {
    icon: Dices,
    title: "Game On Coffee Shop",
    text: "400+ board games, from party classics to strategy monsters, with a full café menu and game masters to teach you.",
    tag: "400+ games",
  },
  {
    icon: Axe,
    title: "Axe Throwing",
    text: "Coached lanes, real axes, real thunk. The loudest 45 minutes of your week — and the best team photo.",
    tag: "Adrenaline",
  },
  {
    icon: Sparkles,
    title: "Interactivity",
    text: "Interactive projection games, reflex walls and light battles. Fast rounds, endless rematches.",
    tag: "Kids friendly",
  },
  {
    icon: Coffee,
    title: "Chill Room / Nest Room",
    text: "Low light, deep sofas, good music. Where your group lands between two games — or stays all night.",
    tag: "Private",
  },
  {
    icon: Mic2,
    title: "Karaoke & more",
    text: "Private karaoke box, consoles and party games. Bring your voice, we bring the sound system.",
    tag: "Groups",
  },
];

const rooms = [
  {
    name: "Prison Break",
    img: prisonImg,
    text: "Cuffed, locked, watched. Find the guard's mistake before the shift changes and walk out clean.",
    duration: "60 min",
    players: "2–6",
    difficulty: "Hard",
  },
  {
    name: "Sabotage",
    img: heroImg,
    text: "A device is armed somewhere in the facility. Split up, decode the plans and cut the right wire.",
    duration: "60 min",
    players: "2–6",
    difficulty: "Medium",
  },
  {
    name: "Virus",
    img: celebrateImg,
    text: "The lab is sealed and the sample is loose. Synthesize the antidote before contamination hits 100%.",
    duration: "60 min",
    players: "3–7",
    difficulty: "Hard",
  },
  {
    name: "The Hangover Hotel",
    img: karaokeImg,
    text: "Last night was legendary. Nobody remembers a thing and the wedding starts in an hour. Good luck.",
    duration: "60 min",
    players: "2–6",
    difficulty: "Easy / Fun",
  },
];

const gallery = [
  { src: axeImg, alt: "Friends laughing during an axe throwing session" },
  { src: heroImg, alt: "Neon-lit escape room corridor at The Game Production" },
  { src: cafeImg, alt: "Board game café with shelves of games and players" },
  { src: celebrateImg, alt: "Team celebrating after escaping a room" },
  { src: karaokeImg, alt: "Group singing in the private karaoke room" },
  { src: prisonImg, alt: "Prison Break escape room set" },
];

const testimonials = [
  {
    name: "Yassine Ben Salah",
    text: "We came for one escape room and stayed five hours. Prison Break was insane — the game master really plays with you.",
  },
  {
    name: "Mariem Trabelsi",
    text: "Best birthday I've organised. Axe throwing first, then karaoke, then coffee. Everything in the same place, zero stress.",
  },
  {
    name: "Skander Gharbi",
    text: "Team building with 18 colleagues. Perfectly handled, and people who never talk at the office were screaming together.",
  },
  {
    name: "Nour Abdelli",
    text: "Game On has games I couldn't even find online. The staff explains the rules in 5 minutes, the coffee is genuinely good.",
  },
  {
    name: "Hamza Kefi",
    text: "Came with my kids on a Sunday. Interactivity + board games, they didn't want to leave. On y retourne, sûr.",
  },
];

const faqs = [
  {
    q: "How do I book?",
    a: "Fill the booking form on this page or send us a WhatsApp message on +216 20 641 111. We confirm your slot by phone or WhatsApp, usually within the hour.",
  },
  {
    q: "Is there an age limit?",
    a: "Escape rooms are recommended from 12 years old (under 16 with an adult in the group). Axe throwing is from 15 years old for safety. The café, interactivity and board games are open to everyone.",
  },
  {
    q: "How many people can come?",
    a: "Escape rooms host 2 to 7 players per room, but with several rooms and activities running in parallel we regularly welcome groups of 30+ people across the 1000 m².",
  },
  {
    q: "Do you host corporate events and team building?",
    a: "Yes — that's one of our specialities. We build custom half-day formats mixing escape rooms, axe throwing and challenges, with a private area and catering options.",
  },
  {
    q: "Is it suitable for kids and family outings?",
    a: "Absolutely. Board games, interactivity and the lighter escape rooms work great for families. Tell us the kids' ages and we'll suggest the right mix.",
  },
  {
    q: "When are you open?",
    a: "Every single day. Walk-ins are welcome for the café and board games, but escape rooms and axe throwing fill up fast — booking ahead is strongly recommended.",
  },
];

function Home() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <Offer />
      <Rooms />
      <Cafe />
      <Gallery />
      <Reviews />
      <Booking sent={sent} onSubmit={handleSubmit} />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 sm:flex sm:justify-between">
        <a href="#top" className="flex min-w-0 items-center gap-2">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg btn-neon font-display text-lg">
            G
          </span>
          <span className="truncate font-display text-xl tracking-wide">
            The Game <span className="neon-text">Production</span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground lg:flex">
          <a href="#offer" className="transition-colors hover:text-foreground">Activities</a>
          <a href="#rooms" className="transition-colors hover:text-foreground">Escape Rooms</a>
          <a href="#cafe" className="transition-colors hover:text-foreground">Coffee Shop</a>
          <a href="#faq" className="transition-colors hover:text-foreground">FAQ</a>
          <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
        </nav>
        <a
          href="#booking"
          className="shrink-0 rounded-full btn-neon px-5 py-2 text-sm font-semibold"
        >
          Book Now
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-24">
      <img
        src={heroImg}
        alt="Neon corridor of escape rooms at The Game Production Tunis"
        width={1920}
        height={1088}
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-60"
      />
      <div className="veil absolute inset-0 -z-10" />
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-16 sm:pt-24">
        <div className="animate-fade-in max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-accent" />
            Ain Zaghouane • Route de la Marsa
          </span>
          <h1 className="mt-6 text-5xl sm:text-7xl lg:text-8xl">
            The ultimate destination for{" "}
            <span className="neon-text">fun in Tunis</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Escape rooms • Board games • Axe throwing • Interactivity • Karaoke &amp; more — all in
            one place.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#booking"
              className="rounded-full btn-neon px-8 py-3.5 text-center font-semibold"
            >
              Book Now
            </a>
            <a
              href="#offer"
              className="rounded-full btn-ghost-neon px-8 py-3.5 text-center font-semibold"
            >
              Discover Activities
            </a>
          </div>
        </div>

        <dl className="mt-14 grid gap-3 sm:grid-cols-3">
          {[
            { k: "1000 m²", v: "of pure playground under one roof" },
            { k: "Open daily", v: "7 days a week, late in the evening" },
            { k: "Friends, families & teams", v: "birthdays, dates and team building" },
          ].map((s) => (
            <div key={s.k} className="glass-card rounded-2xl p-5">
              <dt className="font-display text-3xl neon-text">{s.k}</dt>
              <dd className="mt-1 text-sm text-muted-foreground">{s.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function SectionTitle({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="max-w-2xl">
      <span className="text-xs uppercase tracking-[0.25em] text-accent">{eyebrow}</span>
      <h2 className="mt-3 text-4xl sm:text-5xl">{title}</h2>
      {sub ? <p className="mt-4 text-muted-foreground">{sub}</p> : null}
    </div>
  );
}

function Offer() {
  return (
    <section id="offer" className="grid-glow border-y border-border/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle
          eyebrow="What we offer"
          title="Six ways to lose track of time"
          sub="One ticket desk, one building, an entire evening of things to do. Mix and match — most groups do."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((a) => (
            <article key={a.title} className="glass-card rounded-2xl p-6">
              <div className="flex items-start justify-between gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-surface-2 text-accent">
                  <a.icon className="h-5 w-5" />
                </span>
                <span className="shrink-0 rounded-full border border-border px-3 py-1 text-[11px] uppercase tracking-widest text-muted-foreground">
                  {a.tag}
                </span>
              </div>
              <h3 className="mt-5 text-2xl">{a.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Rooms() {
  return (
    <section id="rooms" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle
          eyebrow="Escape Room Tunisia"
          title="60 minutes. One way out."
          sub="Hand-built sets, live game masters and stories that actually scare, confuse and make you laugh."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {rooms.map((r) => (
            <article key={r.name} className="glass-card overflow-hidden rounded-3xl">
              <div className="relative h-56 sm:h-64">
                <img
                  src={r.img}
                  alt={`${r.name} escape room`}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover"
                />
                <div className="veil absolute inset-0" />
                <h3 className="absolute bottom-4 left-5 text-4xl">{r.name}</h3>
              </div>
              <div className="p-6">
                <p className="text-sm leading-relaxed text-muted-foreground">{r.text}</p>
                <div className="mt-5 flex flex-wrap gap-4 text-xs uppercase tracking-widest text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Timer className="h-4 w-4 text-accent" /> {r.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Users className="h-4 w-4 text-accent" /> {r.players} players
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Flame className="h-4 w-4 text-primary" /> {r.difficulty}
                  </span>
                </div>
                <a
                  href="#booking"
                  className="mt-6 inline-block rounded-full btn-neon px-6 py-2.5 text-sm font-semibold"
                >
                  Book this room
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cafe() {
  return (
    <section id="cafe" className="border-y border-border/60 bg-surface/40 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl border border-border">
          <img
            src={cafeImg}
            alt="Game On Coffee Shop with shelves of board games"
            loading="lazy"
            width={1200}
            height={900}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <SectionTitle
            eyebrow="Game On Coffee Shop"
            title="400+ board games and a very good coffee"
            sub="The heart of the complex: choose a game from the wall, we teach you the rules, you order and you stay."
          />
          <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
            {[
              "Party games, strategy, co-op, bluff — something for every group size",
              "Full café menu: coffee, fresh juices, snacks, pizzas and desserts",
              "Game masters on the floor to explain rules in five minutes",
              "The perfect place to continue the fun after your escape room or axe session",
            ].map((li) => (
              <li key={li} className="flex gap-3">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{li}</span>
              </li>
            ))}
          </ul>
          <a
            href="#booking"
            className="mt-8 inline-block rounded-full btn-ghost-neon px-7 py-3 font-semibold"
          >
            Reserve a table
          </a>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle eyebrow="Gallery" title="Inside the 1000 m²" />
        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {gallery.map((g, i) => (
            <div
              key={g.alt}
              className={`group overflow-hidden rounded-2xl border border-border ${
                i === 0 || i === 3 ? "col-span-2 lg:col-span-2" : ""
              }`}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                width={1200}
                height={900}
                className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-60"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="grid-glow border-y border-border/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle eyebrow="Testimonials" title="What Tunis says about us" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="glass-card rounded-2xl p-6">
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-5 font-display text-lg tracking-wide">{t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

const fieldClass =
  "w-full rounded-xl border border-border bg-input/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

function Booking({
  sent,
  onSubmit,
}: {
  sent: boolean;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <section id="booking" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionTitle
            eyebrow="Booking"
            title="Lock your slot"
            sub="Send your request and we confirm the exact time by phone or WhatsApp. Weekends fill up days in advance — book early."
          />
          <div className="mt-8 space-y-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full btn-neon px-7 py-4 font-semibold"
            >
              <MessageCircle className="h-5 w-5" /> Book on WhatsApp
            </a>
            <a
              href={`tel:${PHONE}`}
              className="flex items-center justify-center gap-2 rounded-full btn-ghost-neon px-7 py-4 font-semibold"
            >
              <Phone className="h-5 w-5" /> +216 20 641 111
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="glass-card rounded-3xl p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
                Full name
              </label>
              <input required name="name" placeholder="Ahmed Ben Ali" className={fieldClass} />
            </div>
            <div>
              <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
                Phone
              </label>
              <input
                required
                name="phone"
                type="tel"
                defaultValue="+216 "
                className={fieldClass}
              />
            </div>
            <div>
              <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
                Number of people
              </label>
              <input
                required
                name="people"
                type="number"
                min={1}
                defaultValue={4}
                className={fieldClass}
              />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
                Activity
              </label>
              <select name="activity" className={fieldClass} defaultValue="Escape Room">
                {[
                  "Escape Room",
                  "Game On Coffee Shop",
                  "Axe Throwing",
                  "Interactivity",
                  "Chill / Nest Room",
                  "Karaoke",
                  "Birthday or team building",
                ].map((o) => (
                  <option key={o} value={o} className="bg-surface">
                    {o}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
                Preferred date
              </label>
              <input required name="date" type="date" className={fieldClass} />
            </div>
            <div>
              <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
                Preferred time
              </label>
              <input required name="time" type="time" className={fieldClass} />
            </div>
          </div>

          <button type="submit" className="mt-6 w-full rounded-full btn-neon py-4 font-semibold">
            Request booking
          </button>

          {sent ? (
            <p className="mt-4 rounded-xl border border-accent/40 bg-accent/10 p-4 text-sm text-foreground">
              Request received — we'll call or WhatsApp you shortly to confirm your slot.
            </p>
          ) : (
            <p className="mt-4 text-center text-xs text-muted-foreground">
              Every booking is confirmed by phone or WhatsApp before it's final.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="border-y border-border/60 bg-surface/40 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5">
        <SectionTitle eyebrow="FAQ" title="Good to know before you come" />
        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((f) => (
            <AccordionItem key={f.q} value={f.q} className="border-border">
              <AccordionTrigger className="text-left text-base font-semibold hover:text-accent">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2">
        <div>
          <SectionTitle eyebrow="Contact & location" title="Find us in Ain Zaghouane" />
          <ul className="mt-8 space-y-5 text-sm">
            <li className="flex gap-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <span>
                Route de la Marsa GP9, Ain Zaghouane, Tunis 1100
                <br />
                <span className="text-muted-foreground">Free parking on site</span>
              </span>
            </li>
            <li className="flex gap-4">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <a href={`tel:${PHONE}`} className="transition-colors hover:text-accent">
                +216 20 641 111
              </a>
            </li>
            <li className="flex gap-4">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <span>
                Open every day
                <br />
                <span className="text-muted-foreground">Including weekends & holidays</span>
              </span>
            </li>
          </ul>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full btn-neon px-7 py-3.5 font-semibold"
          >
            <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
          </a>
          <div className="mt-8 flex gap-3">
            {[
              { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
              { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
              { icon: Mic2, label: "TikTok", href: "https://tiktok.com" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-11 w-11 place-items-center rounded-full btn-ghost-neon"
              >
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl border border-border">
          <iframe
            title="The Game Production location map"
            src="https://www.google.com/maps?q=Route%20de%20la%20Marsa%20GP9%2C%20Ain%20Zaghouane%2C%20Tunis&output=embed"
            loading="lazy"
            className="h-80 w-full lg:h-full"
            style={{ border: 0, filter: "invert(0.92) hue-rotate(180deg)" }}
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-5 text-center text-sm text-muted-foreground sm:flex-row sm:justify-between sm:text-left">
        <span className="font-display text-lg tracking-wide text-foreground">
          The Game <span className="neon-text">Production</span>
        </span>
        <span>© 2026 The Game Production</span>
      </div>
    </footer>
  );
}
