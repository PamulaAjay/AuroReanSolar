"use client";
import React from "react";
import styles from "../../styles/Commercial.module.css";
import Link from "next/link";
import Image from "next/image";

const CommercialSolar: React.FC = () => {
    return (
        <div className={styles.container}>
            {/* Back to home */}
            <Link href="/" className={styles.backLink}>
                Back to Home
            </Link>

            {/* Category */}
            <span className={styles.category}>Commercial</span>

            {/* Title */}
            <h1 className={styles.title}>
                Commercial Solar: Working, Components, Prices, ROI & Benefits
            </h1>

            {/* Meta */}
            <div className={styles.meta}>
                <span>Created: August 27, 2025</span>
                <span> • Ajay</span>
                <span> • 10,240 Reads</span>
                <span> • 15 mins</span>
            </div>

            <div className={styles.contentWrapper}>
                {/* Sidebar */}
                <aside className={styles.sidebar}>
                    <h3 className={styles.components}>In this article</h3>
                    <ul>
                        <li>Introduction</li>
                        <li>How Solar Power Works for Your Business</li>
                        <li>Grid Interaction & Net Metering</li>
                        <li>Core Components of a C&amp;I Solar Power Plant</li>
                        <li>Prices, ROI, and Benefits</li>
                        <li>100kW On-Grid Solar System Example</li>
                        <li>Conclusion</li>
                    </ul>
                </aside>

                {/* Main Content */}
                <main className={styles.mainContent}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/images/Commercial.jpg"
                            alt="Commercial Solar"
                            width={500}
                            height={300}
                            className={styles.image}
                        />
                    </div>

                    {/* Intro */}
                    <h2 className={styles.components}>Drive Your Business Forward: A Guide to Commercial & Industrial Rooftop Solar</h2>
                    <p>
                        Transform your idle rooftop into a power-generating asset. Reduce operating
                        costs, secure energy independence, and enhance your brand&#39;s green credentials
                        with a state-of-the-art solar power plant.
                    </p>

                    {/* Section */}
                    <h2 className={styles.components}>How Solar Power Works for Your Business</h2>
                    <p>
                        A Commercial and Industrial (C&amp;I) rooftop solar system operates as your private
                        power station, seamlessly integrating with your existing electrical
                        infrastructure. The process is efficient and straightforward:
                    </p>

                    <ul>
                        <li>
                            <strong>Sunlight to DC Power:</strong> High-efficiency solar panels, installed
                            on your factory shed or office building&apos;s rooftop, capture sunlight. The
                            photovoltaic cells within the panels convert this solar energy directly into
                            DC (Direct Current) electricity.
                        </li>
                        <li>
                            <strong>Conversion to AC Power:</strong> The generated DC electricity is
                            channeled to a powerful central or string inverter. This industrial-grade
                            device is the brain of the system, converting DC power into AC (Alternating
                            Current) electricity, which is the standard form of power required to run your
                            machinery, lighting, and office equipment.
                        </li>
                        <li>
                            <strong>Powering Your Operations:</strong> The clean AC electricity is fed
                            directly into your facility&apos;s internal power distribution network, reducing
                            the amount of electricity you need to draw from the public grid.
                        </li>
                        <li>
                            <strong>Grid Interaction &amp; Net Metering: </strong>Your solar plant works in parallel with the utility grid.</li>
                            <p>During the day, your solar plant takes priority, supplying a significant portion of your electricity needs. If you generate more power than you consume, this surplus energy can be exported to the grid under net metering policies (where applicable), earning you credits that offset your electricity bills. At night or during cloudy weather, your operations will seamlessly draw power from the grid as usual. This hybrid approach ensures a reliable and uninterrupted power supply.</p>
                    </ul>

                    {/* Components */}
                    <h2 className={styles.components}>Core Components of a C&amp;I Solar Power Plant</h2>
                    <p>
                        Commercial solar installations are built for durability, scale, and performance,
                        using robust components designed for a long operational life.
                    </p>

                    <ul>
                        <li>
                            <strong>Industrial Solar Panels:</strong> These are typically larger and have a
                            higher cell count (e.g., 92 cells) than residential panels, maximizing power
                            generation per square meter. They are designed to withstand harsh industrial
                            environments.
                        </li>
                        <li>
                            <strong>Solar Inverters (Central or String):</strong> For large-scale C&amp;I
                            systems, powerful central inverters or multiple string inverters are used to
                            efficiently convert large amounts of DC electricity to AC. These are chosen
                            for reliability and ease of maintenance.
                        </li>
                        <li>
                            <strong>Mounting Structures:</strong> Engineered for safety and durability,
                            these structures secure the panels to your specific roof type, be it a flat
                            RCC terrace or a sloped metallic sheet roof. They are hot-dip galvanized to
                            prevent corrosion and designed to handle significant wind loads.
                        </li>
                        <li>
                            <strong>Balance of System (BOS):</strong> This includes all supporting
                            components like high-gauge AC/DC cables, junction boxes, and protection
                            devices (such as earthing kits and lightning arresters) that ensure the safe
                            and efficient transmission of power.
                        </li>
                        <li>
                            <strong>Monitoring &amp; Control Systems:</strong> Advanced IoT and AI-based
                            monitoring systems provide real-time data on energy generation, consumption
                            patterns, and system health, allowing for performance optimization and
                            immediate fault detection.
                        </li>
                    </ul>

                    {/* Prices & ROI */}
                    <h2 className={styles.components}>Prices, ROI, and Benefits</h2>

                    <h3 className={styles.subHeading}>Prices</h3>
                    <p>
                        The cost of a C&amp;I rooftop solar system varies based on system size, quality of
                        components, and installation complexity. In India, a 100kW on-grid solar system
                        can range from ₹35,00,000 to ₹50,00,000. The price per watt is typically lower
                        for larger systems.
                    </p>

                    <h3 className={styles.subHeading}>ROI</h3>
                    <p>
                        The Return on Investment (ROI) is a major driver for C&amp;I solar adoption. The
                        payback period for these systems is often between 3 to 5 years. After this
                        period, the electricity generated is essentially free for the remainder of the
                        system&apos;s lifespan (25+ years). The Internal Rate of Return (IRR) can exceed
                        15-20% annually, outperforming many traditional investments.
                    </p>

                    <h2 className={styles.exampleofcommercial}>100kW On-Grid Solar System Example</h2>
                    <p>
                        Here is a simple problem and solution to illustrate the financial viability of a 100kW on-grid rooftop solar system for a manufacturing unit in India.
                    </p>

                    <h3 className={styles.subHeading}>Problem</h3>
                    <p>A manufacturing company with a monthly electricity bill of ₹1,00,000 wants to install a 100kW on-grid solar system.</p>
                    <p><strong>Given Data:</strong></p>
                    <ul>
                        <li>System Size: 100 kW</li>
                        <li>Upfront Cost: ₹45,00,000</li>
                        <li>Annual Energy Generation: ~420 kWh/day → 1,53,300 kWh/year</li>
                        <li>Current Electricity Tariff: ₹8/kWh (commercial rate)</li>
                        <li>Annual Maintenance Cost: 1% of initial cost → ₹45,000</li>
                        <li>System Lifespan: 25 years</li>
                    </ul>

                    <h3 className={styles.subHeading}>Solution</h3>
                    <ol>
                        <li>
                            <strong>Annual Savings:</strong> 1,53,300 kWh × ₹8 = ₹12,26,400
                        </li>
                        <li>
                            <strong>Payback Period:</strong> ₹45,00,000 ÷ ₹12,26,400 ≈ 3.67 years
                        </li>
                        <li>
                            <strong>Total Lifetime Savings:</strong> (₹12,26,400 – ₹45,000) × 25 = ₹2,95,35,000
                        </li>
                        <li>
                            <strong>ROI:</strong> ≈ 556% over system lifetime
                        </li>
                    </ol>
                    <p>
                         This example shows a very strong financial case for installing a 100kW rooftop solar system, with the company saving over ₹2.5 crore and achieving an ROI of 556% over the system&#39;s lifetime.
                    </p>

                    <h3 className={styles.subHeading}>Key Benefits</h3>
                    <ul>
                        <li>
                            <strong>Significant Cost Savings:</strong> Businesses can reduce their
                            electricity bills by 70% or more, especially if they have high daytime energy consumption.
                        </li>
                        <li>
                            <strong>Reduced Carbon Footprint:</strong> Using solar power directly contributes to environmental sustainability and corporate social responsibility (CSR) goals.
                        </li>
                        <li>
                            <strong>Energy Independence:</strong> It reduces reliance on the grid and protects businesses from rising electricity tariffs and potential power outages.
                        </li>
                        <li>
                            <strong>Accelerated Depreciation:</strong> Businesses can claim 40% depreciation on solar systems in the first year, which significantly reduces taxable income and improves financial returns.
                        </li>
                        <li>
                            <strong>Increased Property Value:</strong> Installing a solar system can increase the market value of the commercial or industrial property.
                        </li>
                    </ul>

                    {/* Conclusion */}
                    <h2 className={styles.components}>Why we choose us?</h2>
                    <p>
                        Ready to Harness the Power of Solar? Contact us today for a free consultation and customized quote for your commercial or industrial rooftop!
                    </p>
                </main>
            </div>
        </div>
    );
};

export default CommercialSolar;
