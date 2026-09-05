"use client";
import React from "react";
import styles from "../../styles/Residential.module.css";
import Image from "next/image";
import Link from "next/link";
import ServicePageNavigation from "../../components/ServicePageNavigation";

const RooftopSolar: React.FC = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.backLink} aria-label="Back to Home" title="Back to Home">←</Link>

      {/* Category */}
      <span className={styles.category}>Solar Energy</span>
      <ServicePageNavigation next={{ href: "/commercial", label: "Commercial Solar" }} />

      {/* Title */}
      <h1 className={styles.title}>
        Residential Solar: Working, Components, Subsidy, Prices, ROI & Benefits
      </h1>

      {/* Meta Info */}
      <div className={styles.meta}>
        <span>Created: August 27, 2025</span>
        <span> • Ajay</span>
        <span> • 4500 Reads</span>
        <span> • 20 mins</span>
      </div>

      <div className={styles.contentWrapper}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <h3 className={styles.components}>In this article</h3>
          <ul>
            <li>Introduction</li>
            <li>How Rooftop Solar Works</li>
            <li>Key Components</li>
            <li>Government Subsidy & Pricing</li>
            <li>Return on Investment (ROI)</li>
            <li>Benefits of Going Solar</li>
            <li>Conclusion</li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className={styles.mainContent}>

             <div className={styles.imageWrapper}>
            <Image
              src="/images/Residential.jpg"
              alt="Residential"
              width={500}
              height={300}
              className={styles.image}
            />
          </div>
            <h2 className={styles.components}>Power Your Home with the Sun: A Complete Guide to Residential Rooftop
        Solar</h2>
          {/* Intro */}
          <p>
            Unlock energy independence, slash your electricity bills, and
            contribute to a greener planet. This guide provides everything you
            need to know about switching to clean, renewable solar energy for
            your home.
          </p>

          {/* How it works */}
          <h2 className={styles.components}>
            How Rooftop Solar Works: Your Personal Power Plant
          </h2>
          <p>
            A residential rooftop solar system is a simple yet powerful way to
            generate your own electricity. Here&#39;s a breakdown of the process:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Capturing Sunlight:</strong> Solar panels with PV cells
              installed on your rooftop convert sunlight into DC electricity.
            </li>
            <li className={styles.listItem}>
              <strong>Converting to Usable Power:</strong> The inverter converts
              DC electricity into AC, which powers your appliances.
            </li>
            <li className={styles.listItem}>
              <strong>Powering Your Home:</strong> AC electricity runs through
              your home&#39;s panel to power lights, fans, ACs, and more.
            </li>
            <li className={styles.listItem}>
              <strong>Excess Energy and Net Metering:</strong> Surplus power is
              exported to the grid, earning credits against future bills.
            </li>
            <li className={styles.listItem}>
              <strong>Energy Storage (Optional):</strong> Batteries can store
              excess solar energy for use at night or during outages.
            </li>
          </ul>

          {/* Key Components */}
          <h2 className={styles.components}>
            The Anatomy of a Rooftop Solar System: Key Components
          </h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Solar Panels (PV Modules):</strong> Capture sunlight and
              convert it into DC electricity.
            </li>
            <li className={styles.listItem}>
              <strong>Inverter:</strong> Converts DC into AC usable by your
              home.
            </li>
            <li className={styles.listItem}>
              <strong>Mounting Structure:</strong> Secures panels on your
              rooftop safely.
            </li>
            <li className={styles.listItem}>
              <strong>Monitoring System:</strong> Lets you track system
              performance and energy data.
            </li>
            <li className={styles.listItem}>
              <strong>Cables and Wiring:</strong> Weather-resistant, safe
              electrical connections.
            </li>
            <li className={styles.listItem}>
              <strong>Net Meter:</strong> Bidirectional meter for net metering
              credits.
            </li>
            <li className={styles.listItem}>
              <strong>Battery Storage (Optional):</strong> Stores excess energy
              for backup and nighttime use.
            </li>
          </ul>

          {/* Subsidy & Pricing */}
          <h2 className={styles.components}>
            Government Subsidy & Pricing: Making Solar Affordable
          </h2>
          <p>
            The Indian government is actively promoting the adoption of solar
            energy through attractive subsidy schemes.
          </p>
          <h3 className={styles.subHeading}>
            PM Surya Ghar: Muft Bijli Yojana (2025)
          </h3>
          <p>
            This flagship scheme provides substantial financial assistance for
            residential rooftop solar installations. Under this scheme:
          </p>
          <ul className={styles.list}>
            <li>For 1kW – ₹30,000</li>
            <li>For 2kW – ₹60,000</li>
            <li>3kW to 10kW – ₹78,000</li>
          </ul>

          <h3 className={styles.subHeading}>
            Estimated Rooftop Solar Prices in India (2025)
          </h3>
          <p>
            The cost of a residential rooftop solar system depends on its
            capacity, components, and installer. Before subsidy, approximate
            prices are:
          </p>
          <ul className={styles.list}>
            <li>1 kW System: ₹50,000 – ₹70,000</li>
            <li>2 kW System: ₹1,10,000 – ₹1,60,000</li>
            <li>3 kW System: ₹1,90,000 – ₹2,50,000</li>
            <li>5 kW System: ₹2,70,000 – ₹3,60,000</li>
          </ul>
          <p>
            <em>
              Note: Prices are indicative. Always get quotes from multiple
              reputable installers.
            </em>
          </p>

          {/* ROI */}
          <h2 className={styles.components}>
            Return on Investment (ROI): A Smart Financial Decision
          </h2>
          <p>
            Investing in a rooftop solar system offers significant long-term
            financial benefits.
          </p>
          <h3 className={styles.subHeading}>Calculating Your ROI</h3>
          <p>
            The return on investment is the point at which your savings equal
            your initial investment.
          </p>
          <p>Example:</p>
          <ul className={styles.list}>
            <li>System: 3 kW</li>
            <li>Total Cost: ₹2,20,000</li>
            <li>Subsidy: ₹78,000</li>
            <li>Net Investment: ₹1,42,000</li>
            <li>
              Annual Generation (approx.): 4,380 kWh (3 kW × 4 kWh/day × 365)
            </li>
            <li>Average Tariff: ₹7/kWh</li>
            <li>Annual Savings: ₹30,660</li>
            <li>
              Payback Period: ~4.6 years (₹1,42,000 ÷ ₹30,660). After this,
              electricity is free!
            </li>
          </ul>

          {/* Benefits */}
          <h2 className={styles.components}>
            The Abundant Benefits of Going Solar
          </h2>

          <h3 className={styles.subHeading}>Financial Benefits:</h3>
          <ul className={styles.list}>
            <li>Reduced Electricity Bills</li>
            <li>Protection from Rising Tariffs</li>
            <li>Increased Property Value</li>
            <li>Low Maintenance Costs</li>
          </ul>

          <h3 className={styles.subHeading}>Environmental Benefits:</h3>
          <ul className={styles.list}>
            <li>Clean and Green Energy</li>
            <li>Reduced Carbon Footprint</li>
            <li>Conservation of Natural Resources</li>
          </ul>

          <h3 className={styles.subHeading}>Lifestyle Benefits:</h3>
          <ul className={styles.list}>
            <li>Energy Independence</li>
            <li>Uninterrupted Power Supply with storage</li>
            <li>Contribute to a Sustainable Future</li>
          </ul>

          {/* Closing */}
          <h2 className={styles.components}>
            Ready to make the switch to solar?
          </h2>
          <p className={styles.closing}>
            Contact us today for a free consultation and a customized quote for
            your home!
          </p>
        </main>
      </div>
    </div>
  );
};

export default RooftopSolar;
