"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from '../styles/Body.module.css';

const HomeBody: React.FC = () => {
  return (
    <div className={styles.bodyWrapper}>

      <section className={styles.hero}>
  <Image
    src="/images/cover-image.jpg"
    alt="Solar-powered home"
    className={styles.heroImage}
    fill
    sizes="100vw"
    priority
  />

  <div className={styles.heroOverlay} />

  <div className={styles.heroContent}>
    <span className={styles.eyebrow}>LET’S TALK SOLAR</span>

    <h1>Save ₹1 Lakh On Rooftop Solar</h1>

    <p className={styles.heroSubtitle}>
      with the right Solar Partner
    </p>

    <p className={styles.subText}>
      Get <span>₹22,000</span> Aurorean Energy Discount +{" "}
      <span>₹78,000</span> Government Subsidy.
    </p>

    {/* <div className={styles.heroActions}>
      <a href="tel:+917995541071">
        <FaPhoneAlt aria-hidden="true" /> Call now
      </a>

      <a
        href="https://wa.me/917995541071"
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp aria-hidden="true" /> WhatsApp us
      </a>
    </div> */}
  </div>
</section>


      {/* About Section */}
      <section className={styles.about}>
        <div className={styles.aboutText}>
          <p>
            Aurorean Solar is a leading provider of solar solutions for commercial and industrial rooftops.
            Our mission is to empower businesses to harness the power of solar energy, reducing their carbon
            footprint and energy costs. With our expertise and commitment to quality, we deliver customized
            solar solutions that meet the unique needs of our clients.
          </p>
          <p>
            Our values include sustainability, innovation, and customer satisfaction.
            Join us in our journey towards a greener future.
          </p>
          <p className={styles.signature}>— Devoji Hanuchand, Managing Partner</p>
        </div>
        <div className={styles.aboutImage}>
          <Image src="/images/cover.jpg" alt="AuroRean solar installation" width={900} height={650} sizes="(max-width: 900px) 100vw, 45vw" />
        </div>
      </section>



      {/* Solutions */}
      <section className={styles.solutions}>
        <h2 className={styles.HeadingMain}>Our Solutions :</h2>
        <div className={styles.solutionGrid}>
          <Link href="/residential" className={styles.solutionCard}>
            <Image src="/images/Residential.jpg" alt="Residential rooftop solar" width={600} height={400} sizes="(max-width: 650px) 100vw, 33vw" />
            <h3>Rooftop Solar</h3>
          </Link>
          <Link href="/commercial" className={styles.solutionCard}>
            <Image src="/images/Commercial.jpg" alt="Industrial solar installation" width={600} height={400} sizes="(max-width: 650px) 100vw, 33vw" />
            <h3>Industrial Solar</h3>
          </Link>
          <Link href="/housing-society" className={styles.solutionCard}>
            <Image src="/images/Housing-society.png" alt="Housing society solar installation" width={600} height={400} sizes="(max-width: 650px) 100vw, 33vw" />
            <h3>Housing Society Solar</h3>
          </Link>
        </div>
      </section>

      {/* Mission & Values */}
      <section className={styles.values}>
        <h2 className={styles.HeadingMain}>Why Choose Us?</h2>
        <div className={styles.valueCards}>
          <div className={styles.card}>
            <Image src="/images/choose_1.jpg" alt="" width={80} height={80} />
            <h3>Cost Savings</h3>
          </div>
          <div className={styles.card}>
            <Image src="/images/choose_2.jpg" alt="" width={80} height={80} />
            <h3>Eco-Friendly</h3>
          </div>
          <div className={styles.card}>
            <Image src="/images/choose_3.jpg" alt="" width={80} height={80} />
            <h3>Reliable Support</h3>
          </div>
          <div className={styles.card}>
            <Image src="/images/choose_4.jpg" alt="" width={80} height={80} />
            <h3>Quality Assurance</h3>
          </div>
          <div className={styles.card}>
            <Image src="/images/choose_5.jpg" alt="" width={80} height={80} />
            <h3>Quick & Professional Installation</h3>
          </div>
          <div className={styles.card}>
            <Image src="/images/choose_6.jpg" alt="" width={80} height={80} />
            <h3>Flexible Financing Options</h3>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <p className={styles.italic}>Good For Your Pocket. Good For Your Planet.</p>
        <Link href="/contact">Request a Quote</Link>
      </section>
    </div>
  );
};

export default HomeBody;
