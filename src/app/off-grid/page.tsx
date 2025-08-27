"use client";
import React from "react";
import styles from "../../styles/OffGrid.module.css";
import Image from "next/image";
import Link from "next/link";

const OffGridSolar: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Back to blogs */}
      {/* <Image src='/images/left_arrow.png' alt="back icon" width={14} height={14}/> */}
      <Link href="/" className={styles.backLink}>Back to Home</Link>

      {/* Category */}
      <span className={styles.category}>General</span>

      {/* Title */}
      <h1 className={styles.title}>
        Off-Grid Solar System for Home: Components, Working, and Benefits
      </h1>

      {/* Meta Information */}
      <div className={styles.meta}>
        <span>Created: August 27, 2025</span>
        <span> • Ajay</span>
        <span> • 5120 Reads</span>
        <span> • 15 mins</span>
      </div>

      <div className={styles.contentWrapper}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <h3 className={styles.components}>In this article</h3>
          <ul>
            <li>What is an Off-Grid Solar System?</li>
            <li>Components of an Off-Grid Solar System</li>
            <li>How Does an Off-Grid Solar System Work?</li>
            <li>Key Benefits of Off-Grid Solar Systems</li>
            <li>Is Off-Grid Solar Right for You?</li>
            <li>Conclusion</li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className={styles.mainContent}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/Offgrid.png" // place your image in public/images
              alt="Off-Grid Solar System"
              width={400}
              height={200}
              className={styles.image}
            />
          </div>

          <p>
            An off-grid solar system for a home is a standalone solar power setup
            that operates independently from the main utility grid. It provides
            electricity to a home by converting sunlight into electrical energy,
            storing it, and then supplying power when needed without relying on
            the electrical grid.
          </p>

          <h2 className={styles.components}>Components of an Off-Grid Solar System for Home</h2>
          <ul>
            <li><strong>Solar Panels:</strong> Capture sunlight and convert it into direct current (DC) electricity.</li>
            <li><strong>Charge Controller:</strong> Regulates the flow of electricity from the solar panels to the battery to prevent overcharging and protect battery life.</li>
            <li><strong>Battery Bank:</strong> Stores the electricity generated during the day for use during nighttime or cloudy days.</li>
            <li><strong>Inverter:</strong> Converts the stored DC electricity from the batteries into alternating current (AC) electricity, which is the form used by most household appliances.</li>
            <li><strong>Backup Generator (Optional):</strong> Provides power when solar energy is insufficient and batteries are depleted.</li>
          </ul>

          <h2 className={styles.components}>Working Principle</h2>
           <div className={styles.imageWrapper}>
            <Image
              src="/images/offgrid_linediagram.png" // place your image in public/images
              alt="Off-Grid-line-diagram Solar System"
              width={400}
              height={200}
              className={styles.image}
            />
          </div>
          <ol>
            <li><strong>Solar Energy Capture:</strong> During daylight, solar panels absorb sunlight and convert it into DC electricity.</li>
            <li><strong>Energy Regulation & Storage:</strong> The charge controller manages the charging process, sending electricity to the battery bank to store energy.</li>
            <li><strong>Power Supply:</strong> When sunlight is unavailable (night or cloudy weather), the home draws power from the batteries.</li>
            <li><strong>Conversion to Usable Power:</strong> The inverter converts DC power stored in the batteries to AC power to run home appliances.</li>
            <li><strong>Backup Support:</strong> If batteries are drained and solar input is low, a backup generator can be turned on to supply electricity.</li>
          </ol>

          <h2 className={styles.components}>Key Benefits</h2>
          <ul>
            <li>Complete independence from the utility grid.</li>
            <li>Reliable power supply in remote or rural areas.</li>
            <li>Reduced electricity bills and carbon footprint.</li>
            <li>Energy autonomy with sustainable solar power.</li>
          </ul>
          <h2 className={styles.components}>Join us</h2>
          <p>
            This system requires proper sizing based on your home’s power consumption
            and solar availability to ensure consistent supply and efficiency. It is
            ideal for locations where grid power is unavailable or unreliable.
          </p>
        </main>
      </div>
    </div>
  );
};

export default OffGridSolar;
