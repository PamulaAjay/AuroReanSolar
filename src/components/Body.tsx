"use client";
import React from "react";
import styles from '../styles/Body.module.css';

const HomeBody: React.FC = () => {
  return (
    <div className={styles.bodyWrapper}>

      <section className={styles.hero}>
        <img src="/images/cover-image.jpg" alt="Solar Home" className={styles.heroImage} />

        <div className={styles.heroOverlay}>
          <h2>Save ₹1 Lakh On Rooftop Solar</h2>
          <p>with the right Solar Partner</p>
          <p className={styles.subText}>
            Get <span>₹22,000</span> Aurorean Energy Discount + <span>₹78,000</span> Government Subsidy.
          </p>
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
          <img src="/images/cover.jpg" alt="About Solar" height={400}/>
        </div>
      </section>



      {/* Solutions */}
      <section className={styles.solutions}>
        <h2 className={styles.HeadingMain}>Our Solutions :</h2>
        <div className={styles.solutionGrid}>
          <div className={styles.solutionCard}>
            <img src="/images/Residential.jpg" alt="Rooftop Solar" />
            <h3>Rooftop Solar</h3>
          </div>
          <div className={styles.solutionCard}>
            <img src="/images/Commercial.jpg" alt="Industrial Solar" />
            <h3>Industrial Solar</h3>
          </div>
          <div className={styles.solutionCard}>
            <img src="/images/Housing-society.png" alt="Commercial Solar" />
            <h3>Commercial Solar</h3>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className={styles.values}>
        <h2 className={styles.HeadingMain}>Why Choose Us?</h2>
        <div className={styles.valueCards}>
          <div className={styles.card}>
            <img src="/images/choose_1.jpg" alt="Cost Savings" />
            <h3>Cost Savings</h3>
          </div>
          <div className={styles.card}>
            <img src="/images/choose_2.jpg" alt="Eco Friendly" />
            <h3>Eco-Friendly</h3>
          </div>
          <div className={styles.card}>
            <img src="/images/choose_3.jpg" alt="Reliable Support" />
            <h3>Reliable Support</h3>
          </div>
          <div className={styles.card}>
            <img src="/images/choose_4.jpg" alt="Quality Assurance" />
            <h3>Quality Assurance</h3>
          </div>
          <div className={styles.card}>
            <img src="/images/choose_5.jpg" alt="Quality Assurance" />
            <h3>Quick & Professional Installation</h3>
          </div>
          <div className={styles.card}>
            <img src="/images/choose_6.jpg" alt="Quality Assurance" />
            <h3>Flexible Financing Options</h3>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <h2 className={styles.italic}>Good For Your Pocket. Good For Your Planet.</h2>
        <button>Request a Quote</button>
      </section>
    </div>
  );
};

export default HomeBody;
