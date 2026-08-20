import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaClock, FaRegCalendarAlt } from "react-icons/fa";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "../../styles/Blogs.module.css";

const articles = [
  {
    title: "Residential Rooftop Solar: A Complete Homeowner’s Guide",
    excerpt:
      "Understand system components, government subsidy, pricing, payback period and the long-term benefits of powering your home with solar.",
    category: "Residential",
    date: "August 27, 2025",
    readingTime: "20 min read",
    image: "/images/Residential.jpg",
    href: "/residential",
  },
  {
    title: "Commercial Solar: Reduce Operating Costs with Clean Energy",
    excerpt:
      "Learn how businesses can lower electricity expenses, improve energy security and build a more sustainable operation.",
    category: "Commercial",
    date: "August 27, 2025",
    readingTime: "15 min read",
    image: "/images/Commercial.jpg",
    href: "/commercial",
  },
  {
    title: "On-Grid Solar Systems: Working, Subsidy, ROI and Benefits",
    excerpt:
      "A practical guide to grid-connected solar, net metering, system prices and expected savings for Indian homes.",
    category: "Solar Guide",
    date: "August 27, 2025",
    readingTime: "18 min read",
    image: "/images/Ongrid.png",
    href: "/on-grid",
  },
  {
    title: "Off-Grid Solar: Reliable Power Beyond the Electricity Grid",
    excerpt:
      "Explore batteries, inverters and system sizing for locations that need dependable, independent solar power.",
    category: "Solar Guide",
    date: "August 27, 2025",
    readingTime: "14 min read",
    image: "/images/Offgrid.png",
    href: "/off-grid",
  },
  {
    title: "Solar Water Heaters: An Efficient Choice for Everyday Use",
    excerpt:
      "See how solar water heating works, where it performs best and how it can reduce conventional energy consumption.",
    category: "Solar Solutions",
    date: "August 27, 2025",
    readingTime: "10 min read",
    image: "/images/solarwaterheater.png",
    href: "/solar-water-heater",
  },
  {
    title: "Solar Street Lights: Smarter Lighting for Safer Communities",
    excerpt:
      "Discover the components, applications and advantages of standalone solar lighting for roads and public spaces.",
    category: "Solar Solutions",
    date: "August 27, 2025",
    readingTime: "9 min read",
    image: "/images/solarstreetlight.png",
    href: "/solar-street-lights",
  },
];

export default function BlogsPage() {
  const [featuredArticle, ...otherArticles] = articles;

  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <span className={styles.eyebrow}>AuroRean Solar Knowledge Hub</span>
            <h1>Simple answers for a smarter switch to solar</h1>
            <p>
              Expert guides on solar systems, savings, subsidies and sustainable
              energy—written to help you make confident decisions.
            </p>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.kicker}>Featured article</span>
              <h2>Start your solar journey here</h2>
            </div>
            <Link href="/contact" className={styles.consultLink}>
              Get a free consultation <FaArrowRight aria-hidden="true" />
            </Link>
          </div>

          <article className={styles.featuredCard}>
            <div className={styles.featuredImage}>
              <Image
                src={featuredArticle.image}
                alt="Solar panels installed on a residential rooftop"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                priority
              />
            </div>
            <div className={styles.featuredContent}>
              <span className={styles.category}>{featuredArticle.category}</span>
              <h2>{featuredArticle.title}</h2>
              <p>{featuredArticle.excerpt}</p>
              <div className={styles.meta}>
                <span><FaRegCalendarAlt aria-hidden="true" /> {featuredArticle.date}</span>
                <span><FaClock aria-hidden="true" /> {featuredArticle.readingTime}</span>
              </div>
              <Link href={featuredArticle.href} className={styles.readMore}>
                Read full article <FaArrowRight aria-hidden="true" />
              </Link>
            </div>
          </article>

          <div className={styles.latestHeading}>
            <span className={styles.kicker}>Latest insights</span>
            <h2>Explore our solar guides</h2>
          </div>

          <div className={styles.grid}>
            {otherArticles.map((article) => (
              <article className={styles.card} key={article.href}>
                <Link href={article.href} className={styles.cardImage} aria-label={article.title}>
                  <Image
                    src={article.image}
                    alt=""
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 33vw"
                  />
                </Link>
                <div className={styles.cardContent}>
                  <span className={styles.category}>{article.category}</span>
                  <h3><Link href={article.href}>{article.title}</Link></h3>
                  <p>{article.excerpt}</p>
                  <div className={styles.meta}>
                    <span><FaRegCalendarAlt aria-hidden="true" /> {article.date}</span>
                    <span><FaClock aria-hidden="true" /> {article.readingTime}</span>
                  </div>
                  <Link href={article.href} className={styles.readMore}>
                    Read article <FaArrowRight aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.cta}>
          <div>
            <span>Ready to save with solar?</span>
            <h2>Get a system designed around your energy needs.</h2>
          </div>
          <Link href="/contact">Request a free quote</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
