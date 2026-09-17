'use client';

import Image from 'next/image';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from 'framer-motion';

import {
  ArrowUpRight,
  ChevronDown,
  Mail,
  MapPin,
  Menu,
  Phone,
  Quote,
  X,
} from 'lucide-react';

import {
  contact,
  gallery,
  maggam,
  men,
  services,
  wa,
  women,
  type ImageItem,
} from '../data/site';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   INSTAGRAM ICON
   We use a local SVG instead of lucide-react Instagram
   so there is no dependency/export issue.
========================================================= */

function InstagramIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* =========================================================
   REUSABLE REVEAL
========================================================= */

function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 28 }}
      whileInView={
        reduced
          ? undefined
          : {
              opacity: 1,
              y: 0,
            }
      }
      viewport={{
        once: true,
        amount: 0.18,
      }}
      transition={{
        duration: 0.7,
        delay,
        ease,
      }}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   SECTION HEADING
========================================================= */

function Heading({
  eyebrow,
  title,
  light = false,
}: {
  eyebrow: string;
  title: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <div
        className={`mb-4 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] ${
          light ? 'text-[#e2bd78]' : 'text-[#9d773d]'
        }`}
      >
        <span className="gold-rule" />
        {eyebrow}
      </div>

      <h2
        className={`font-display text-4xl leading-[0.98] sm:text-5xl md:text-6xl ${
          light ? 'text-[#fffaf1]' : 'text-[#4a1525]'
        }`}
      >
        {title}
      </h2>
    </div>
  );
}

/* =========================================================
   NAVBAR
========================================================= */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 36);
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const links = [
    'Home',
    'About',
    'Services',
    'Collections',
    'Maggam Work',
    'Gallery',
    'Contact',
  ];

  const getHref = (label: string) =>
    `#${label.toLowerCase().replaceAll(' ', '-')}`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#fffdf8]/95 text-[#3c2228] shadow-[0_8px_30px_rgba(60,20,30,.08)] backdrop-blur-md'
          : 'text-white'
      }`}
    >
      <div className="container-premium flex h-[76px] items-center justify-between">
        {/* LOGO */}
        <a
          href="#home"
          className="group flex items-center gap-3"
          aria-label="SAM Embroidery and Maggam Designs home"
        >
          <span
            className={`font-display text-3xl font-bold tracking-[0.08em] ${
              scrolled ? 'text-[#5a1027]' : 'text-white'
            }`}
          >
            SAM
          </span>

          <span
            className={`hidden border-l pl-3 text-[9px] uppercase tracking-[0.22em] sm:block ${
              scrolled
                ? 'border-[#b58a45]/50'
                : 'border-white/30'
            }`}
          >
            Embroidery
            <br />
            Maggam Designs
          </span>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link}
              href={getHref(link)}
              className="text-[11px] font-semibold uppercase tracking-[0.12em] opacity-80 transition hover:opacity-100"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* CTA + MOBILE MENU */}
        <div className="flex items-center gap-3">
          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-[#b58a45] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5 hover:bg-[#9d773d] sm:block"
          >
            WhatsApp Us
          </a>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className={`rounded-full border p-2.5 lg:hidden ${
              scrolled
                ? 'border-[#5a1027]/20'
                : 'border-white/30'
            }`}
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              x: '100%',
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: '100%',
            }}
            transition={{
              duration: 0.4,
              ease,
            }}
            className="fixed inset-0 bg-[#5a1027] p-7 text-white lg:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-3xl font-bold">
                SAM
              </span>

              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="rounded-full border border-white/20 p-2"
              >
                <X />
              </button>
            </div>

            <nav className="mt-20 flex flex-col gap-6">
              {links.map((link, index) => (
                <motion.a
                  key={link}
                  href={getHref(link)}
                  onClick={() => setOpen(false)}
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  className="font-display text-4xl"
                >
                  {link}
                </motion.a>
              ))}
            </nav>

            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              className="mt-12 inline-flex rounded-full bg-[#b58a45] px-6 py-4 font-semibold"
            >
              Chat on WhatsApp
              <ArrowUpRight className="ml-2" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* =========================================================
   HERO
========================================================= */

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[720px] items-end overflow-hidden bg-[#2b0915] text-white sm:min-h-screen"
    >
      <motion.div
        initial={{
          scale: 1.08,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
          ease,
        }}
        className="absolute inset-0"
      >
        <Image
          src="/images/crops/maggam-jewelry.jpg"
          alt="Maggam embroidery detail"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      <div className="hero-vignette absolute inset-0" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#240611]/75 via-transparent to-transparent" />

      <div className="container-premium relative z-10 pb-20 pt-36 sm:pb-28">
        <Reveal>
          <div className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-[#e2bd78]">
            <span className="gold-rule" />
            Hyderabad • India
          </div>

          <h1 className="max-w-4xl font-display text-6xl font-semibold leading-[0.84] sm:text-7xl md:text-[7.5rem]">
            SAM{' '}
            <span className="text-[#e2bd78]">
              Embroidery
            </span>
            <br />
            <span className="text-white">
              &amp; Maggam Designs
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
            Premium embroidery, Maggam work and customized
            designs crafted for weddings, celebrations and
            every special occasion.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#collections"
              className="group inline-flex items-center rounded-full bg-[#fffdf8] px-6 py-3.5 text-sm font-semibold text-[#5a1027] transition hover:-translate-y-0.5"
            >
              Explore Our Designs
              <ArrowUpRight className="ml-2 size-4 transition group-hover:translate-x-0.5" />
            </a>

            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold backdrop-blur transition hover:bg-white/10"
            >
              WhatsApp Us
            </a>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/60">
        <div className="flex flex-col items-center gap-2 text-[9px] uppercase tracking-[0.3em]">
          <span>Scroll</span>

          <motion.span
            animate={{
              y: [0, 7, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            <ChevronDown size={18} />
          </motion.span>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   INTRO
========================================================= */

function Intro() {
  return (
    <section
      id="about"
      className="section-pad bg-[#fffdf8] noise"
    >
      <div className="container-premium grid items-center gap-12 md:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal>
          <div className="relative mx-auto max-w-md md:max-w-none">
            <div className="absolute -inset-3 rounded-[2rem] border border-[#b58a45]/25" />

            <Image
              src="/images/crops/celebration-group.jpg"
              width={853}
              height={460}
              alt="Celebration fashion collection"
              className="relative aspect-[1.25/1] w-full rounded-[1.7rem] object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Heading
            eyebrow="The Studio"
            title="Crafted With Tradition. Designed For You."
          />

          <p className="mt-7 max-w-xl text-[15px] leading-7 text-[#604f50]">
            SAM Embroidery &amp; Maggam Designs brings
            together traditional craftsmanship and modern
            design to create beautiful customized embroidery
            for sarees, blouses, lehengas, sherwanis, kurtas,
            accessories and more.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <span className="font-display text-4xl text-[#b58a45]">
              01
            </span>

            <p className="max-w-sm text-sm leading-6 text-[#806d6d]">
              Thoughtful detailing, personalized choices and
              a focus on the character of every garment.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================
   SERVICES
========================================================= */

function Services() {
  return (
    <section
      id="services"
      className="section-pad bg-[#f3eadc]"
    >
      <div className="container-premium">
        <Reveal>
          <Heading
            eyebrow="What We Do"
            title="Our Services"
          />

          <p className="mt-5 max-w-xl text-sm leading-6 text-[#6e5d5c]">
            From traditional embroidery to modern
            customization.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <Reveal
              key={service.title}
              delay={(index % 4) * 0.04}
            >
              <article className="group overflow-hidden border border-[#b58a45]/20 bg-[#fffdf8] transition duration-500 hover:-translate-y-1 hover:border-[#b58a45]/50">
                <div className="relative aspect-[1.1/1] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,25vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-[#2e0918]/0 transition group-hover:bg-[#2e0918]/15" />
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-2xl leading-none text-[#4d1527]">
                      {service.title}
                    </h3>

                    <span className="text-lg text-[#b58a45]">
                      {service.icon}
                    </span>
                  </div>

                  <p className="mt-3 text-xs leading-5 text-[#786767]">
                    {service.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   LIGHTBOX
========================================================= */

function Lightbox({
  item,
  onClose,
}: {
  item: ImageItem | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!item) return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKey);

    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[#17060d]/92 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{
              scale: 0.96,
              y: 12,
            }}
            animate={{
              scale: 1,
              y: 0,
            }}
            exit={{
              scale: 0.96,
              y: 12,
            }}
            className="relative max-h-[90vh] w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close image"
              onClick={onClose}
              className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-2 text-[#5a1027]"
            >
              <X size={20} />
            </button>

            <Image
              src={item.src}
              alt={item.alt}
              width={1200}
              height={900}
              className="max-h-[82vh] w-full object-contain"
            />

            <div className="mt-3 text-center text-white">
              <div className="font-display text-2xl">
                {item.title}
              </div>

              <div className="text-xs uppercase tracking-[0.25em] text-[#e2bd78]">
                {item.category}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* =========================================================
   EDITORIAL GALLERY
========================================================= */

function EditorialGallery({
  items,
  title,
  eyebrow,
  id,
}: {
  items: ImageItem[];
  title: string;
  eyebrow: string;
  id: string;
}) {
  const [active, setActive] = useState<ImageItem | null>(
    null
  );

  return (
    <section
      id={id}
      className="section-pad bg-[#fffdf8]"
    >
      <div className="container-premium">
        <Reveal>
          <Heading
            eyebrow={eyebrow}
            title={title}
          />
        </Reveal>

        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[210px] sm:grid-cols-3 lg:grid-cols-4">
          {items.map((item, index) => (
            <Reveal
              key={`${item.title}-${index}`}
              delay={(index % 4) * 0.05}
              className={`${index % 7 === 0 ? 'sm:row-span-2' : ''} ${
                index % 5 === 0
                  ? 'col-span-2 sm:col-span-1'
                  : ''
              }`}
            >
              <button
                type="button"
                onClick={() => setActive(item)}
                className="group relative h-full w-full overflow-hidden text-left"
                aria-label={`View ${item.title}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width:640px) 50vw,(max-width:1024px) 33vw,25vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#2b0915]/75 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="absolute bottom-0 left-0 right-0 translate-y-3 p-4 text-white opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[#e2bd78]">
                    {item.category}
                  </div>

                  <div className="mt-1 font-display text-xl">
                    {item.title}
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Lightbox
        item={active}
        onClose={() => setActive(null)}
      />
    </section>
  );
}

/* =========================================================
   MEN'S COLLECTION
========================================================= */

function Men() {
  return (
    <section
      id="men"
      className="section-pad bg-[#4a0f24] text-white"
    >
      <div className="container-premium">
        <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
          <Reveal>
            <Heading
              eyebrow="Editorial Edit"
              title="Men's Collection"
              light
            />

            <p className="mt-5 max-w-xl text-sm leading-6 text-white/65">
              A refined selection of embroidered sherwanis,
              kurtas and occasion wear designed to carry
              traditional craft with a contemporary finish.
            </p>
          </Reveal>

          <Reveal>
            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-[#e2bd78]/40 px-5 py-3 text-sm text-[#f8e6bf] transition hover:bg-[#e2bd78] hover:text-[#4a0f24]"
            >
              Discuss a Custom Look
              <ArrowUpRight className="ml-2 size-4" />
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {men.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.08}
            >
              <article className="group relative aspect-[1.5/1] overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width:768px) 100vw,50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />

                <div className="absolute bottom-0 p-6">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-[#e2bd78]">
                    {item.category}
                  </div>

                  <h3 className="mt-1 font-display text-3xl">
                    {item.title}
                  </h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   MAGGAM
========================================================= */

function Maggam() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    if (
      window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.maggam-track',
        {
          x: 0,
        },
        {
          x: () =>
            -(ref.current!.scrollWidth -
              ref.current!.clientWidth),
          ease: 'none',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 80%',
            end: '+=900',
            scrub: 1,
            pin: false,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="maggam-work"
      className="section-pad overflow-hidden bg-[#f3eadc]"
    >
      <div className="container-premium">
        <Reveal>
          <Heading
            eyebrow="Handcrafted Detail"
            title="Exclusive Maggam Work"
          />

          <p className="mt-5 max-w-xl text-sm leading-6 text-[#6e5d5c]">
            Tradition meets perfection. Every stitch is
            carefully crafted to bring depth, detail and
            elegance to your special attire.
          </p>
        </Reveal>
      </div>

      <div
        ref={ref}
        className="mt-12 overflow-x-auto px-[max(20px,calc((100vw - 1180px)/2))] pb-4 sm:overflow-hidden"
      >
        <div className="maggam-track flex w-max gap-5">
          {maggam.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              className="w-[250px] shrink-0 sm:w-[290px]"
            >
              <div className="relative aspect-square overflow-hidden rounded-full border border-[#b58a45]/30 p-2">
                <div className="relative h-full w-full overflow-hidden rounded-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="290px"
                    className="object-cover transition duration-700 hover:scale-105"
                  />
                </div>
              </div>

              <div className="mt-4 text-center">
                <h3 className="font-display text-2xl text-[#4d1527]">
                  {item.title}
                </h3>

                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#8d6d43]">
                  {item.category}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CUSTOMIZATION
========================================================= */

function Customization() {
  const customizationItems = [
    'T-Shirt Logos',
    'Photo Printing',
    'Jeans Logos',
    'Caps',
    'Jackets',
    'Bags & Accessories',
    'Custom Embroidery',
  ];

  return (
    <section
      id="customization"
      className="section-pad bg-[#fffdf8]"
    >
      <div className="container-premium grid overflow-hidden border border-[#b58a45]/20 bg-[#f3eadc] md:grid-cols-2">
        <div className="relative min-h-[420px]">
          <Image
            src="/images/crops/custom-tshirt.jpg"
            alt="Custom T-shirt logo"
            fill
            sizes="(max-width:768px) 100vw,50vw"
            className="object-cover"
          />
        </div>

        <div className="p-8 sm:p-12 lg:p-16">
          <Heading
            eyebrow="Personalization"
            title="Made Personal. Made Yours."
          />

          <p className="mt-6 text-sm leading-6 text-[#6e5d5c]">
            Turn garments and everyday pieces into something
            unmistakably yours.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-3 text-sm text-[#4e3c3f]">
            {customizationItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 border-b border-[#b58a45]/20 py-3"
              >
                <span className="size-1.5 rounded-full bg-[#b58a45]" />
                {item}
              </div>
            ))}
          </div>

          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            className="mt-9 inline-flex rounded-full bg-[#5a1027] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5"
          >
            Create Your Custom Design
            <ArrowUpRight className="ml-2 size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   T-SHIRT LOGOS
========================================================= */

function TshirtPhoto() {
  return (
    <section className="section-pad bg-[#f3eadc]">
      <div className="container-premium grid gap-16 md:grid-cols-2 md:items-center">
        <Reveal>
          <Heading
            eyebrow="Custom Prints"
            title="All Types of T-Shirt Logos"
          />

          <p className="mt-5 text-sm leading-6 text-[#6e5d5c]">
            Business{' '}
            <span className="text-[#b58a45]">|</span> Team{' '}
            <span className="text-[#b58a45]">|</span> College{' '}
            <span className="text-[#b58a45]">|</span> Event{' '}
            <span className="text-[#b58a45]">|</span> Company
          </p>

          <p className="mt-6 font-display text-2xl text-[#5a1027]">
            We can print any logo you want.
          </p>

          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex rounded-full border border-[#5a1027] px-5 py-3 text-sm font-semibold text-[#5a1027] transition hover:bg-[#5a1027] hover:text-white"
          >
            Get Your Logo Printed
            <ArrowUpRight className="ml-2 size-4" />
          </a>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-2 gap-3">
            <Image
              src="/images/crops/custom-tshirt.jpg"
              alt="T-shirt logo customization"
              width={600}
              height={600}
              className="aspect-square object-cover"
            />

            <Image
              src="/images/crops/custom-jeans.jpg"
              alt="Custom apparel logo"
              width={600}
              height={600}
              className="mt-8 aspect-square object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================
   PHOTO PRINTING
========================================================= */

function PhotoPrinting() {
  return (
    <section className="section-pad bg-[#fffdf8]">
      <div className="container-premium">
        <div className="grid gap-10 md:grid-cols-[0.75fr_1.25fr] md:items-end">
          <Reveal>
            <Heading
              eyebrow="Memories To Wear"
              title="Photo Printing on T-Shirts"
            />

            <p className="mt-5 text-sm leading-6 text-[#6e5d5d]">
              Your memories, printed with care.
            </p>

            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex rounded-full bg-[#5a1027] px-5 py-3 text-sm font-semibold text-white"
            >
              Print My Photo
              <ArrowUpRight className="ml-2 size-4" />
            </a>
          </Reveal>

          <Reveal>
            <div className="grid grid-cols-3 gap-3">
              <Image
                src="/images/crops/photo-family.jpg"
                alt="Family photo printing"
                width={500}
                height={500}
                className="aspect-square object-cover"
              />

              <Image
                src="/images/crops/photo-kids.jpg"
                alt="Kids photo printing"
                width={500}
                height={500}
                className="mt-8 aspect-square object-cover"
              />

              <Image
                src="/images/crops/custom-photo.jpg"
                alt="Custom photo printing"
                width={500}
                height={500}
                className="aspect-square object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   WHY CHOOSE US
========================================================= */

function Why() {
  const items = [
    'Premium Quality',
    'Custom Designs',
    'Perfect For Weddings',
    'Bulk Orders Accepted',
  ];

  return (
    <section className="section-pad bg-[#5a1027] text-white">
      <div className="container-premium">
        <Reveal>
          <Heading
            eyebrow="The Difference"
            title="Why Choose SAM?"
            light
          />
        </Reveal>

        <div className="mt-12 grid border-t border-white/15 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <Reveal
              key={item}
              delay={index * 0.08}
            >
              <div className="border-b border-white/15 p-7 sm:border-r lg:border-b-0">
                <div className="font-display text-4xl text-[#e2bd78]">
                  0{index + 1}
                </div>

                <h3 className="mt-5 font-display text-2xl">
                  {item}
                </h3>

                <p className="mt-2 text-xs leading-5 text-white/55">
                  Thoughtful customization with attention to
                  finish and detail.
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PROCESS
========================================================= */

function Process() {
  const steps = [
    'Share Your Design',
    'Choose Your Customization',
    'We Craft Your Design',
    'Receive Your Finished Work',
  ];

  return (
    <section className="section-pad bg-[#f3eadc]">
      <div className="container-premium">
        <Reveal>
          <Heading
            eyebrow="How It Works"
            title="From Idea To Finished Detail"
          />
        </Reveal>

        <div className="relative mt-14 grid gap-8 md:grid-cols-4">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-[#b58a45]/30 md:block" />

          {steps.map((step, index) => (
            <Reveal
              key={step}
              delay={index * 0.08}
            >
              <div className="relative">
                <div className="relative z-10 flex size-12 items-center justify-center rounded-full border border-[#b58a45] bg-[#f3eadc] font-display text-xl text-[#5a1027]">
                  0{index + 1}
                </div>

                <h3 className="mt-5 font-display text-2xl text-[#4d1527]">
                  {step}
                </h3>

                <p className="mt-2 text-xs leading-5 text-[#786767]">
                  A simple, personal step toward your finished
                  piece.
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   TESTIMONIALS
========================================================= */

function Testimonials() {
  const testimonials = [
    'Beautiful detailing and a very personal design process.',
    'The customization made our occasion wear feel truly special.',
    'Loved the attention to the little embroidery details.',
  ];

  return (
    <section className="section-pad bg-[#fffdf8]">
      <div className="container-premium">
        <Reveal>
          <Heading
            eyebrow="Client Notes"
            title="Kind Words"
          />
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {testimonials.map((text, index) => (
            <Reveal
              key={index}
              delay={index * 0.08}
            >
              <blockquote className="border border-[#b58a45]/20 bg-[#f7f1e6] p-7">
                <Quote className="size-6 text-[#b58a45]" />

                <p className="mt-5 font-display text-2xl leading-tight text-[#4d1527]">
                  “{text}”
                </p>

                <footer className="mt-6 text-[10px] uppercase tracking-[0.2em] text-[#8b7072]">
                  Customer testimonial
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CONTACT
========================================================= */

function Contact() {
  return (
    <section
      id="contact"
      className="section-pad bg-[#4a0f24] text-white"
    >
      <div className="container-premium grid gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <Heading
            eyebrow="Visit / Enquire"
            title="Let's Create Something Beautiful"
            light
          />

          <p className="mt-6 max-w-lg text-sm leading-6 text-white/60">
            For custom embroidery, Maggam work, apparel
            personalization or bulk orders, reach out directly.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#b58a45] px-5 py-3 text-sm font-semibold text-white"
            >
              WhatsApp
            </a>

            <a
              href={`tel:${contact.mahi}`}
              className="rounded-full border border-white/20 px-5 py-3 text-sm"
            >
              Call Mahi
            </a>

            <a
              href={`tel:${contact.shiva}`}
              className="rounded-full border border-white/20 px-5 py-3 text-sm"
            >
              Call Shiva
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="border-t border-white/15 pt-6 text-sm">
            <div className="grid gap-5">
              <a
                href={`tel:${contact.mahi}`}
                className="flex items-center gap-3"
              >
                <Phone className="size-4 text-[#e2bd78]" />
                Mahi — {contact.mahi}
              </a>

              <a
                href={`tel:${contact.shiva}`}
                className="flex items-center gap-3"
              >
                <Phone className="size-4 text-[#e2bd78]" />
                Shiva — {contact.shiva}
              </a>

              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 break-all"
              >
                <Mail className="size-4 shrink-0 text-[#e2bd78]" />
                {contact.email}
              </a>

              <div className="flex gap-3">
                <MapPin className="mt-1 size-4 shrink-0 text-[#e2bd78]" />

                <span>{contact.address}</span>
              </div>

              <a
                href="https://instagram.com/sam_embroidery_designs"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3"
              >
                <InstagramIcon className="size-4 text-[#e2bd78]" />
                @{contact.instagram}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================
   FOOTER
========================================================= */

function Footer() {
  const links = [
    'Home',
    'About',
    'Services',
    'Collections',
    'Maggam Work',
    'Gallery',
    'Contact',
  ];

  return (
    <footer className="bg-[#2b0915] py-10 text-white">
      <div className="container-premium">
        <div className="grid gap-8 border-b border-white/10 pb-8 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* BRAND */}
          <div>
            <div className="font-display text-3xl">
              SAM
            </div>

            <p className="mt-2 text-xs text-white/45">
              Embroidery &amp; Maggam Designs
            </p>

            <p className="mt-4 max-w-sm font-display text-xl text-[#e2bd78]">
              Stitching Elegance, Creating Emotions
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-[#e2bd78]">
              Explore
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-white/60">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link
                    .toLowerCase()
                    .replaceAll(' ', '-')}`}
                  className="hover:text-white"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-[#e2bd78]">
              Contact
            </div>

            <div className="mt-4 space-y-2 text-xs text-white/60">
              <a
                href={wa}
                target="_blank"
                rel="noreferrer"
                className="block hover:text-white"
              >
                WhatsApp
              </a>

              <a
                href={`mailto:${contact.email}`}
                className="block break-all hover:text-white"
              >
                {contact.email}
              </a>

              <a
                href="https://instagram.com/sam_embroidery_designs"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-white"
              >
                <InstagramIcon className="size-4" />
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-3 pt-6 text-[10px] uppercase tracking-[0.2em] text-white/40 sm:flex-row">
          <span>
            Traditional Art • Modern Designs • Timeless
            Beauty • Tailored For You
          </span>

          <span>
            © 2026 SAM Embroidery &amp; Maggam Designs. All
            rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   FLOATING WHATSAPP
========================================================= */

function WhatsAppButton() {
  return (
    <a
      href={wa}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#2b7a3d] px-4 py-3 text-xs font-semibold text-white shadow-[0_10px_30px_rgba(43,122,61,.25)] transition hover:-translate-y-1"
    >
      <span className="relative flex size-6 items-center justify-center">
        <span className="absolute inset-0 animate-ping rounded-full bg-white/20" />

        <span className="relative text-base">
          ◔
        </span>
      </span>

      <span className="hidden sm:inline">
        Chat on WhatsApp
      </span>
    </a>
  );
}

/* =========================================================
   MAIN SITE
========================================================= */

export default function Site() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Intro />

        <Services />

        <EditorialGallery
          id="collections"
          eyebrow="For Her"
          title="Women's Collection"
          items={women}
        />

        <Men />

        <Maggam />

        <Customization />

        <TshirtPhoto />

        <PhotoPrinting />

        <Why />

        <Process />

        <EditorialGallery
          id="gallery"
          eyebrow="Selected Work"
          title="Our Work"
          items={gallery}
        />

        <Testimonials />

        <Contact />
      </main>

      <Footer />

      <WhatsAppButton />
    </>
  );
}