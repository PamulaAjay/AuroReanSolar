"use client";
import React from "react";
import styles from "../../styles/Solarfencing.module.css";
import Link from "next/link";
import Image from "next/image";

const SolarFencing: React.FC = () => {
    return (
        <div className={styles.container}>
            {/* Back to Home */}
            <Link href="/" className={styles.backLink}>
                Back to Home
            </Link>

            {/* Category */}
            <span className={styles.category}>Security</span>

            {/* Title */}
            <h1 className={styles.title}>
                Solar Fencing: Working, Components, Prices & Benefits.
            </h1>

            {/* Meta Information */}
            <div className={styles.meta}>
                <span>Created: August 27, 2025</span>
                <span> • Ajay</span>
                <span> • 4821 Reads</span>
                <span> • 20 mins</span>
            </div>

            <div className={styles.contentWrapper}>
                {/* Sidebar */}
                <aside className={styles.sidebar}>
                    <h3 className={styles.components}>In this article</h3>
                    <ul>
                        <li>Introduction</li>
                        <li>How Solar Fencing Works</li>
                        <li>Key Components</li>
                        <li>Solar Fencing Prices</li>
                        <li>Why Choose Solar Fencing?</li>
                        <li>Conclusion</li>
                    </ul>
                </aside>

                {/* Main Content */}
                <main className={styles.mainContent}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/images/solarfencing.png"
                            alt="On-Grid Solar fencing"
                            width={500}
                            height={300}
                            className={styles.image}
                        />
                    </div>
                    <h2 className={styles.components}>Secure Your Perimeter with Smart Power: The Ultimate Guide to Solar Fencing</h2>
                    {/* Intro */}
                    <p>
                        Protect your valuable property, crops, and livestock with an intelligent,
                        modern, and cost-effective security solution. Solar electric fencing is a
                        powerful deterrent that provides round-the-clock protection without relying
                        on the grid, making it the perfect choice for farms, residential properties,
                        industrial sites, and high-security zones across India.
                    </p>
                    <p>
                        Discover how this innovative technology works, its key components, and why
                        it&#39;s the smartest investment for your security needs.
                    </p>

                    {/* Section: How it Works */}
                    <h2 className={styles.components}>
                        How Solar Fencing Works: A Safe & Effective Deterrent
                    </h2>
                    <p>
                        A solar fence doesn’t work by creating a physical barrier, but by creating a
                        psychological one. It delivers a short, sharp, but safe high-voltage shock to
                        any intruder or animal that comes into contact with the fence wires.
                    </p>

                    <ol className={styles.list}>
                        <li className={styles.listItem}>
                            <strong>Energy Generation & Storage:</strong> Solar panels capture sunlight,
                            store it in batteries, and keep the system powered 24/7.
                        </li>
                        <li className={styles.listItem}>
                            <strong>The High-Voltage Pulse:</strong> The energizer converts stored power
                            into safe high-voltage pulses every 1–1.5 seconds.
                        </li>
                        <li className={styles.listItem}>
                            <strong>The Shock & Alarm:</strong> When touched, the fence delivers a sharp
                            but safe shock and can trigger alarms or sirens.
                        </li>
                    </ol>

                    {/* Table: Key Components */}
                    <h2 className={styles.components}>
                        The Key Components of a Solar Fencing System
                    </h2>
                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Component</th>
                                    <th>Description & Function</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Solar Panel</td>
                                    <td>Captures sunlight and converts it into DC electricity.</td>
                                </tr>
                                <tr>
                                    <td>Energizer (Fencer)</td>
                                    <td>Regulates and releases safe, high-voltage pulses.</td>
                                </tr>
                                <tr>
                                    <td>Battery</td>
                                    <td>Stores energy to keep the system running 24/7.</td>
                                </tr>
                                <tr>
                                    <td>Fence Wires</td>
                                    <td>High-tensile GI wires that carry the electric pulse.</td>
                                </tr>
                                <tr>
                                    <td>Insulators</td>
                                    <td>Prevent current leakage to posts or the ground.</td>
                                </tr>
                                <tr>
                                    <td>Fence Posts</td>
                                    <td>Provide structural support for the fencing system.</td>
                                </tr>
                                <tr>
                                    <td>Earthing System</td>
                                    <td>Ensures safety and effectiveness of the shock circuit.</td>
                                </tr>
                                <tr>
                                    <td>Siren / Alarm</td>
                                    <td>Triggers alerts if wires are cut or tampered with.</td>
                                </tr>
                                <tr>
                                    <td>Lightning Diverter</td>
                                    <td>Protects the energizer from lightning strikes.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Pricing */}
                    <h2 className={styles.components}>
                        Solar Fencing Prices in India (August 2025 Estimates)
                    </h2>
                    <p>
                        The cost of solar fencing depends on perimeter length, wire strands, and
                        terrain. Here are some estimates:
                    </p>

                    <h3 className={styles.subHeading}>Pricing Per Unit Length:</h3>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>
                            Agricultural / Farm Fencing: ₹350 – ₹450 per running meter
                        </li>
                        <li className={styles.listItem}>
                            High-Security / Industrial Fencing: ₹700 – ₹900+ per running meter
                        </li>
                    </ul>

                    <h3 className={styles.subHeading}>Estimated Cost for Farmland:</h3>
                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Area</th>
                                    <th>Approx. Perimeter</th>
                                    <th>Estimated Cost</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1 Acre</td>
                                    <td>~250 meters</td>
                                    <td>₹60,000 – ₹1,10,000</td>
                                </tr>
                                <tr>
                                    <td>5 Acres</td>
                                    <td>~565 meters</td>
                                    <td>₹1,40,000 – ₹2,50,000</td>
                                </tr>
                                <tr>
                                    <td>10 Acres</td>
                                    <td>~800 meters</td>
                                    <td>₹2,00,000 – ₹3,60,000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p className={styles.disclaimer}>
                        Disclaimer: These prices are indicative only. Contact us for a detailed site
                        survey and custom quotation.
                    </p>

                    {/* Why Choose */}
                    <h2 className={styles.components}>Why Choose Solar Fencing?</h2>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>24/7 reliable, grid-free security</li>
                        <li className={styles.listItem}>Safe, humane, and eco-friendly</li>
                        <li className={styles.listItem}>Low maintenance and long-lasting</li>
                        <li className={styles.listItem}>Cost-effective with minimal running costs</li>
                        <li className={styles.listItem}>Versatile applications: farms, homes, industries</li>
                    </ul>

                  
                    <p className={styles.closing}>
                        Ready to secure your property? Contact us today for a free consultation and let
                        our experts design the perfect solar fencing solution for you.
                    </p>
                </main>
            </div>
        </div>
    );
};

export default SolarFencing;
