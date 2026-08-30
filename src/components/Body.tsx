"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  FaArrowRight,
  FaBolt,
  FaBuilding,
  FaCheck,
  FaChevronLeft,
  FaChevronRight,
  FaCity,
  FaHeadset,
  FaHome,
  FaLeaf,
  FaLightbulb,
  FaPhoneAlt,
  FaRoad,
  FaShieldAlt,
  FaSolarPanel,
  FaWater,
} from "react-icons/fa";
import styles from "../styles/Body.module.css";

const heroSlides = [
  {
    eyebrow: "Residential rooftop solar",
    title: "Power your home.",
    accent: "Own your energy.",
    description:
      "A thoughtfully designed rooftop system that reduces electricity bills and makes every ray work harder for your family.",
    image: "/images/home-hero-residential.webp",
    alt: "Modern home powered by rooftop solar panels",
    features: ["Subsidy guidance", "Smart system sizing", "End-to-end installation"],
    primaryHref: "/contact",
    primaryLabel: "Get a solar quote",
    secondaryHref: "/residential",
    secondaryLabel: "Explore residential",
  },
  {
    eyebrow: "Commercial & industrial solar",
    title: "Turn your rooftop into",
    accent: "a business advantage.",
    description:
      "Control operating costs with a high-performance solar plant planned around your load profile, roof and long-term goals.",
    image: "/images/home-hero-commercial.webp",
    alt: "Large commercial rooftop solar installation",
    features: ["Lower operating costs", "Custom engineering", "Performance monitoring"],
    primaryHref: "/contact",
    primaryLabel: "Plan your project",
    secondaryHref: "/commercial",
    secondaryLabel: "Commercial solutions",
  },
  {
    eyebrow: "Housing society solar",
    title: "Shared rooftops.",
    accent: "Smarter communities.",
    description:
      "Use common-area rooftops to reduce shared electricity expenses and create a cleaner, more valuable community.",
    image: "/images/home-hero-community.webp",
    alt: "Housing society with rooftop solar panels",
    features: ["Common-area savings", "Society subsidy support", "Scalable capacity"],
    primaryHref: "/contact",
    primaryLabel: "Request an assessment",
    secondaryHref: "/housing-society",
    secondaryLabel: "Society solar guide",
  },
  {
    eyebrow: "Beyond the rooftop",
    title: "Solar solutions for",
    accent: "everyday independence.",
    description:
      "From off-grid power to solar lighting, water heating and fencing, build a dependable system for the way you live and work.",
    image: "/images/home-hero-offgrid.webp",
    alt: "Off-grid solar energy system",
    features: ["Reliable backup", "Low running costs", "Solutions for every site"],
    primaryHref: "/contact",
    primaryLabel: "Talk to an expert",
    secondaryHref: "/off-grid",
    secondaryLabel: "View solar solutions",
  },
];

const solutions = [
  {
    title: "Residential Solar",
    description: "Right-sized rooftop systems for lower bills and greater energy independence.",
    image: "/images/Residential.jpg",
    href: "/residential",
    icon: FaHome,
  },
  {
    title: "Commercial Solar",
    description: "High-performance plants designed around your business load and operating hours.",
    image: "/images/Commercial.jpg",
    href: "/commercial",
    icon: FaBuilding,
  },
  {
    title: "Housing Societies",
    description: "Shared solar that reduces common-area costs across the whole community.",
    image: "/images/Housing-society.png",
    href: "/housing-society",
    icon: FaCity,
  },
  {
    title: "On-Grid Solar",
    description: "Grid-connected systems with net-metering support and efficient daily generation.",
    image: "/images/Ongrid.png",
    href: "/on-grid",
    icon: FaBolt,
  },
  {
    title: "Off-Grid Solar",
    description: "Independent solar and battery systems for dependable power beyond the grid.",
    image: "/images/Offgrid.png",
    href: "/off-grid",
    icon: FaSolarPanel,
  },
  {
    title: "Solar Water Heating",
    description: "Efficient water heating for homes, hotels, hospitals and commercial facilities.",
    image: "/images/solarwaterheater.png",
    href: "/solar-water-heater",
    icon: FaWater,
  },
  {
    title: "Solar Fencing",
    description: "Reliable perimeter protection for farms, homes and industrial properties.",
    image: "/images/solarfencing.png",
    href: "/solar-fencing",
    icon: FaShieldAlt,
  },
  {
    title: "Solar Street Lights",
    description: "Standalone lighting for roads, campuses, communities and public spaces.",
    image: "/images/solarstreetlight.png",
    href: "/solar-street-lights",
    icon: FaRoad,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description: "We review your electricity usage, goals, site and available roof area.",
  },
  {
    number: "02",
    title: "Design",
    description: "Our team plans the capacity, components, layout and expected energy savings.",
  },
  {
    number: "03",
    title: "Install",
    description: "Trained professionals execute a safe, clean and carefully managed installation.",
  },
  {
    number: "04",
    title: "Support",
    description: "We help with commissioning, monitoring and dependable after-sales assistance.",
  },
];

const strengths = [
  {
    icon: FaLeaf,
    title: "Solutions built for the long term",
    text: "Quality-focused components and practical engineering for dependable clean energy.",
  },
  {
    icon: FaLightbulb,
    title: "Clear guidance, no confusion",
    text: "Straightforward advice on capacity, savings, subsidy, net metering and maintenance.",
  },
  {
    icon: FaHeadset,
    title: "One team from start to support",
    text: "A coordinated experience from the first site discussion through commissioning.",
  },
];

export default function HomeBody() {
  const [activeSlide, setActiveSlide] = useState(0);
  const solutionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-home-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.revealVisible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const goToPreviousSlide = () => {
    setActiveSlide((current) => (current - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToNextSlide = () => {
    setActiveSlide((current) => (current + 1) % heroSlides.length);
  };

  const scrollSolutions = (direction: number) => {
    const container = solutionsRef.current;
    if (!container) return;

    container.scrollBy({
      left: direction * Math.min(container.clientWidth * 0.82, 780),
      behavior: "smooth",
    });
  };

  const slide = heroSlides[activeSlide];

  return (
    <main className={styles.home}>
      <section className={styles.hero} aria-roledescription="carousel" aria-label="AuroRean solar solutions">
        <div className={styles.heroMedia}>
          {heroSlides.map((item, index) => (
            <Image
              key={item.image}
              src={item.image}
              alt={index === activeSlide ? item.alt : ""}
              fill
              priority={index === 0}
              sizes="100vw"
              className={`${styles.heroImage} ${index === activeSlide ? styles.heroImageActive : ""}`}
            />
          ))}
        </div>
        <div className={styles.heroShade} />

        <button className={`${styles.heroArrow} ${styles.heroArrowLeft}`} type="button" onClick={goToPreviousSlide} aria-label="Previous slide">
          <FaChevronLeft />
        </button>
        <button className={`${styles.heroArrow} ${styles.heroArrowRight}`} type="button" onClick={goToNextSlide} aria-label="Next slide">
          <FaChevronRight />
        </button>

        <div className={styles.heroInner} key={activeSlide} aria-live="polite">
          <span className={styles.eyebrow}>{slide.eyebrow}</span>
          <h1>
            {slide.title}
            <span>{slide.accent}</span>
          </h1>
          <p className={styles.heroDescription}>{slide.description}</p>

          <ul className={styles.heroFeatures}>
            {slide.features.map((feature) => (
              <li key={feature}><FaCheck aria-hidden="true" /> {feature}</li>
            ))}
          </ul>

          <div className={styles.heroActions}>
            <Link href={slide.primaryHref} className={styles.primaryButton}>
              {slide.primaryLabel} <FaArrowRight aria-hidden="true" />
            </Link>
            <Link href={slide.secondaryHref} className={styles.secondaryButton}>
              {slide.secondaryLabel}
            </Link>
          </div>
        </div>

        <div className={styles.slideStatus}>
          <span>{String(activeSlide + 1).padStart(2, "0")}</span>
          <div className={styles.slideDots}>
            {heroSlides.map((item, index) => (
              <button
                key={item.title}
                type="button"
                className={index === activeSlide ? styles.activeDot : ""}
                onClick={() => setActiveSlide(index)}
                aria-label={`Show slide ${index + 1}`}
                aria-current={index === activeSlide ? "true" : undefined}
              />
            ))}
          </div>
          <span>{String(heroSlides.length).padStart(2, "0")}</span>
        </div>
      </section>

      <section className={styles.serviceTicker} aria-label="Our solar capabilities">
        <div className={styles.tickerTrack}>
          {[...solutions, ...solutions].map((item, index) => (
            <span key={`${item.title}-${index}`}>
              <item.icon aria-hidden="true" /> {item.title}
            </span>
          ))}
        </div>
      </section>

      <section className={styles.introSection} id="about-solar">
        <div className={`${styles.introVisual} ${styles.reveal}`} data-home-reveal>
          <div className={styles.introImageLarge}>
            <Image src="/images/cover.jpg" alt="Solar panels installed for clean energy generation" width={1004} height={590} sizes="(max-width: 900px) 100vw, 48vw" />
          </div>
        </div>

        <div className={`${styles.introCopy} ${styles.reveal}`} data-home-reveal>
          <span className={styles.sectionLabel}>About AuroRean Solar</span>
          <h2>Solar made clear, practical and personal.</h2>
          <p>
            We help homeowners, businesses and communities move to clean energy with thoughtfully planned solar systems. Every project begins with your actual usage, roof and savings goals—not a one-size-fits-all package.
          </p>
          <p>
            From consultation and design to installation and support, our team keeps the journey straightforward and accountable.
          </p>
          <div className={styles.introChecks}>
            <span><FaCheck /> Site-specific system design</span>
            <span><FaCheck /> Quality-focused installation</span>
            <span><FaCheck /> Subsidy and process guidance</span>
            <span><FaCheck /> After-sales assistance</span>
          </div>
          <Link href="/contact" className={styles.textLink}>Start a conversation <FaArrowRight /></Link>
        </div>
      </section>

      <section className={styles.solutionsSection}>
        <div className={`${styles.sectionHeader} ${styles.reveal}`} data-home-reveal>
          <div>
            <span className={styles.sectionLabel}>What we offer</span>
            <h2>One solar partner. Every solution.</h2>
          </div>
          <div className={styles.sliderControls}>
            <button type="button" onClick={() => scrollSolutions(-1)} aria-label="Scroll solutions left"><FaChevronLeft /></button>
            <button type="button" onClick={() => scrollSolutions(1)} aria-label="Scroll solutions right"><FaChevronRight /></button>
          </div>
        </div>

        <div className={styles.solutionsSlider} ref={solutionsRef}>
          {solutions.map((item, index) => (
            <Link href={item.href} className={`${styles.solutionCard} ${styles.reveal}`} data-home-reveal key={item.title} style={{ "--delay": `${(index % 4) * 80}ms` } as React.CSSProperties}>
              <div className={styles.solutionImage}>
                <Image src={item.image} alt={item.title} fill sizes="(max-width: 650px) 86vw, (max-width: 1050px) 44vw, 31vw" />
                <span className={styles.solutionNumber}>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className={styles.solutionContent}>
                <span className={styles.solutionIcon}><item.icon aria-hidden="true" /></span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className={styles.cardLink}>Explore solution <FaArrowRight /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.impactSection}>
        <div className={styles.impactBackdrop} />
        <div className={`${styles.impactHeading} ${styles.reveal}`} data-home-reveal>
          <span className={styles.sectionLabel}>Why solar now</span>
          <h2>Make your rooftop work for decades.</h2>
          <p>Lower dependence on rising tariffs while building a cleaner and more resilient energy future.</p>
        </div>
        <div className={styles.impactGrid}>
          <div className={`${styles.impactItem} ${styles.reveal}`} data-home-reveal><strong>₹78K</strong><span>Residential subsidy guidance</span></div>
          <div className={`${styles.impactItem} ${styles.reveal}`} data-home-reveal><strong>20+</strong><span>Years of expected solar generation</span></div>
          <div className={`${styles.impactItem} ${styles.reveal}`} data-home-reveal><strong>4</strong><span>Service locations across Telangana</span></div>
          <div className={`${styles.impactItem} ${styles.reveal}`} data-home-reveal><strong>360°</strong><span>Support from planning to commissioning</span></div>
        </div>
      </section>

      <section className={styles.processSection}>
        <div className={`${styles.sectionHeader} ${styles.reveal}`} data-home-reveal>
          <div>
            <span className={styles.sectionLabel}>Our process</span>
            <h2>Understand → Design → Install → Support</h2>
          </div>
          <p>A clear four-step path from your electricity bill to clean energy generation.</p>
        </div>
        <div className={styles.processGrid}>
          {processSteps.map((step, index) => (
            <article className={`${styles.processCard} ${styles.reveal}`} data-home-reveal key={step.number} style={{ "--delay": `${index * 100}ms` } as React.CSSProperties}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.showcaseSection}>
        <div className={`${styles.sectionHeader} ${styles.reveal}`} data-home-reveal>
          <div>
            <span className={styles.sectionLabel}>Solutions in action</span>
            <h2>Clean energy for every kind of space.</h2>
          </div>
          <Link href="/blogs" className={styles.textLink}>Explore solar guides <FaArrowRight /></Link>
        </div>
        <div className={styles.showcaseGrid}>
          <Link href="/residential" className={`${styles.showcaseCard} ${styles.showcaseLarge} ${styles.reveal}`} data-home-reveal>
            <Image src="/images/cover-image.jpg" alt="Residential rooftop solar panels" fill sizes="(max-width: 800px) 100vw, 58vw" />
            <span><small>Homes</small>Residential rooftop solar <FaArrowRight /></span>
          </Link>
          <Link href="/on-grid" className={`${styles.showcaseCard} ${styles.reveal}`} data-home-reveal>
            <Image src="/images/Ongrid_linediagram.jpg" alt="On-grid solar system engineering layout" fill sizes="(max-width: 800px) 100vw, 38vw" />
            <span><small>Engineering</small>Grid-connected solar design <FaArrowRight /></span>
          </Link>
          <Link href="/solar-street-lights" className={`${styles.showcaseCard} ${styles.reveal}`} data-home-reveal>
            <Image src="/images/home-showcase-streetlights.webp" alt="Solar-powered street lights along a modern road" fill sizes="(max-width: 800px) 100vw, 38vw" />
            <span><small>Infrastructure</small>Solar street lighting <FaArrowRight /></span>
          </Link>
        </div>
      </section>

      <section className={styles.strengthsSection}>
        <div className={`${styles.strengthsIntro} ${styles.reveal}`} data-home-reveal>
          <span className={styles.sectionLabel}>Why AuroRean</span>
          <h2>Professional care at every stage.</h2>
          <p>Good solar is more than panels. It is good advice, careful execution and support you can reach.</p>
          <a href="tel:+917995541071" className={styles.phoneLink}><FaPhoneAlt /> +91 79955 41071</a>
        </div>
        <div className={styles.strengthsGrid}>
          {strengths.map((item, index) => (
            <article className={`${styles.strengthCard} ${styles.reveal}`} data-home-reveal key={item.title} style={{ "--delay": `${index * 90}ms` } as React.CSSProperties}>
              <item.icon aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.finalCta}>
        <Image src="/images/home-cta-engineer.webp" alt="" fill sizes="100vw" />
        <div className={styles.finalCtaShade} />
        <div className={`${styles.finalCtaContent} ${styles.reveal}`} data-home-reveal>
          <span className={styles.sectionLabel}>Your rooftop is ready</span>
          <h2>Let’s turn sunlight into long-term savings.</h2>
          <p>Tell us about your electricity needs and get a practical solar recommendation for your property.</p>
          <div>
            <Link href="/contact" className={styles.primaryButton}>Start your solar project <FaArrowRight /></Link>
            <a href="https://wa.me/917995541071" target="_blank" rel="noreferrer" className={styles.secondaryButton}>Chat on WhatsApp</a>
          </div>
        </div>
      </section>
    </main>
  );
}
