"use client";
import React from "react";
import styles from "../../styles/Solarstreetlight.module.css";
import Link from "next/link";
import Image from "next/image";

const SolarStreetLight: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Back to Home */}
      <Link href="/" className={styles.backLink}>
        Back to Home
      </Link>

      {/* Category */}
      <span className={styles.category}>Lighting</span>

      {/* Title */}
      <h1 className={styles.title}>
        Solar Street Light: Working, Components, Applications & Benefits
      </h1>

      {/* Meta Info */}
      <div className={styles.meta}>
        <span>Created: August 27, 2025</span>
        <span> • Ajay</span>
        <span> • 3500 Reads</span>
        <span> • 18 mins</span>
      </div>

      <div className={styles.contentWrapper}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <h3 className={styles.components}>In this article</h3>
          <ul>
            <li>Introduction</li>
            <li>The Future of Lighting</li>
            <li>How It Works</li>
            <li>Key Components</li>
            <li>Why Choose Us?</li>
            <li>Applications</li>
            <li>Conclusion</li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className={styles.mainContent}>
           <div className={styles.imageWrapper}>
            <Image
              src="/images/solarstreetlight.png"
              alt="On-Grid Solarstreetlight"
              width={500}
              height={300}
              className={styles.image}
            />
          </div>
          <h2 className={styles.components}>Illuminate Your World with Smart Solar Street Lights</h2>
          {/* Intro */}
          <p>
            Harness the power of the sun to light up your communities, reduce
            your carbon footprint, and eliminate electricity bills. Our advanced
            solar street lighting solutions offer reliability, sustainability,
            and unmatched performance.
          </p>

          {/* Future of Lighting */}
          <h2 className={styles.components}>
            The Future of Public & Private Lighting is Here
          </h2>
          <p>
            Traditional street lighting is expensive, reliant on a fragile grid,
            and contributes to carbon emissions. It's time for a smarter
            solution. Our solar-powered street lights are completely
            self-sufficient, drawing clean energy from the sun to provide
            brilliant, reliable illumination all night long.
          </p>
          <p>
            Ideal for highways, residential communities, industrial parks, rural
            areas, and commercial campuses, our lights are an investment in a
            safer, greener, and more cost-effective future.
          </p>

          {/* How It Works */}
          <h2 className={styles.components}>
            How It Works: The Ingenious Working Principle
          </h2>
          <ol className={styles.list}>
            <li className={styles.listItem}>
              <strong>Step 1 – Solar Energy Absorption (Daytime):</strong> PV
              Solar Panel captures sunlight and converts it into DC electricity,
              even on cloudy days.
            </li>
            <li className={styles.listItem}>
              <strong>Step 2 – Intelligent Energy Storage:</strong> The Smart
              Charge Controller manages charging of the LiFePO4 battery,
              protecting its life and preventing overcharging.
            </li>
            <li className={styles.listItem}>
              <strong>Step 3 – Automated Dusk-to-Dawn Detection:</strong> The
              controller detects sunset and automatically activates the light.
            </li>
            <li className={styles.listItem}>
              <strong>Step 4 – Powerful Illumination (Night):</strong> The
              stored energy powers high-efficiency LED luminaires that provide
              bright, clear light all night long.
            </li>
          </ol>

          {/* Key Components */}
          <h2 className={styles.components}>
            Key Components of Our Solar Street Lights
          </h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Solar PV Panel:</strong> High-efficiency mono/poly panels,
              lifespan 25+ years.
            </li>
            <li className={styles.listItem}>
              <strong>LED Luminaire:</strong> Bright, efficient, 50,000+ hours
              lifespan.
            </li>
            <li className={styles.listItem}>
              <strong>Rechargeable Battery:</strong> LiFePO4 battery for 2–3
              nights of backup.
            </li>
            <li className={styles.listItem}>
              <strong>Smart Charge Controller:</strong> Prevents overcharging
              and supports dimming/motion sensors.
            </li>
            <li className={styles.listItem}>
              <strong>Durable Pole & Fixtures:</strong> Galvanized steel,
              corrosion and wind resistant.
            </li>
          </ul>

          {/* Why Choose */}
          <h2 className={styles.components}>Why Choose Our Solar Street Lights?</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>Zero Electricity Bills</li>
            <li className={styles.listItem}>
              Eco-Friendly & Sustainable with reduced carbon footprint
            </li>
            <li className={styles.listItem}>
              Quick & Hassle-Free Installation with no trenching or cabling
            </li>
            <li className={styles.listItem}>
              Energy Independence & Reliability even during blackouts
            </li>
            <li className={styles.listItem}>
              Low Maintenance & Long-Lasting Components
            </li>
            <li className={styles.listItem}>
              Enhanced Safety & Security for communities
            </li>
          </ul>

          {/* Applications */}
          <h2 className={styles.components}>Applications</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>City Streets & Main Roads</li>
            <li className={styles.listItem}>Highways & Expressways</li>
            <li className={styles.listItem}>
              Residential Colonies & Gated Communities
            </li>
            <li className={styles.listItem}>
              Parks, Gardens & Playgrounds
            </li>
            <li className={styles.listItem}>
              Industrial Campuses & Factory Perimeters
            </li>
            <li className={styles.listItem}>Parking Lots</li>
            <li className={styles.listItem}>
              Rural & Remote Village Lighting
            </li>
            <li className={styles.listItem}>
              Military Bases & Secure Facilities
            </li>
          </ul>

          {/* Closing */}
          <h2 className={styles.components}>
            Ready to Make the Switch to Smart, Sustainable Lighting?
          </h2>
          <p className={styles.closing}>
            Join the hundreds of municipalities, businesses, and communities
            that have chosen a brighter, more sustainable path. Our team of
            experts is ready to help you design the perfect solar lighting
            solution for your needs.
          </p>
        </main>
      </div>
    </div>
  );
};

export default SolarStreetLight;
