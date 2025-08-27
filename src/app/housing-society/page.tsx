"use client";
import React from "react";
import styles from "../../styles/Housingsociety.module.css";
import Link from "next/link";
import Image from "next/image";

const HousingSocietySolar: React.FC = () => {
    return (
        <div className={styles.container}>
            {/* Back to home */}
            <Link href="/" className={styles.backLink}>
                Back to Home
            </Link>

            {/* Category */}
            <span className={styles.category}>Housing Society</span>

            {/* Title */}
            <h1 className={styles.title}>
                Housing Society: Working, Components, Subsidy, Prices, ROI & Benefits
            </h1>

            {/* Meta */}
            <div className={styles.meta}>
                <span>Created: August 27, 2025</span>
                <span> • Ajay</span>
                <span> • 9,540 Reads</span>
                <span> • 14 mins</span>
            </div>

            <div className={styles.contentWrapper}>
                {/* Sidebar */}
                <aside className={styles.sidebar}>
                    <h3 className={styles.components}>In this article</h3>
                    <ul>
                        <li>Introduction</li>
                        <li>How Solar Power Works for Your Housing Society</li>
                        <li>Grid Integration & Reduced Bills</li>
                        <li>Key Components of a Society Solar Plant</li>
                        <li>Subsidy & Pricing</li>
                        <li>Subsidy for Housing Societies</li>
                    </ul>
                </aside>

                {/* Main Content */}
                <main className={styles.mainContent}>
                    {/* Intro */}
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/images/Housing-society.png"
                            alt="Housing Society"
                            width={500}
                            height={300}
                            className={styles.image}
                        />
                    </div>
                    <h2 className={styles.components}>Empower Your Community: A Guide to Rooftop Solar for Housing Societies</h2>
                    <p>
                        Transform your society&apos;s common spaces, reduce maintenance costs for every
                        resident, and build a sustainable, future-ready community. A rooftop solar
                        plant is a shared investment in a brighter, greener, and more affordable
                        future.
                    </p>

                    {/* Section */}
                    <h2 className={styles.components}>
                        How Solar Power Works for Your Housing Society
                    </h2>
                    <p>
                        A rooftop solar plant for a housing society is designed to power common
                        facilities, directly reducing the operational expenses shared by all
                        residents. Here’s the simple, effective process:
                    </p>

                    <ul>
                        <li>
                            <strong>Harnessing Solar Energy:</strong> High-efficiency solar panels are
                            installed on the society&apos;s building terraces or rooftops. These panels
                            capture sunlight throughout the day and convert it into DC (Direct Current)
                            electricity.
                        </li>
                        <li>
                            <strong>Conversion to Usable Power:</strong> The DC electricity is sent to a
                            high-capacity solar inverter. The inverter converts it into AC (Alternating
                            Current) electricity, which is the type of power needed to run the society&apos;s
                            common equipment.
                        </li>
                        <li>
                            <strong>Powering Common Areas:</strong> The clean AC power is then fed into
                            the society&apos;s common meter connection. This solar energy directly powers
                            high-consumption facilities such as:
                            <ul>
                                <li>Lifts (Elevators)</li>
                                <li>Water Pumps (Borewell & Overhead Tank)</li>
                                <li>Lobby, Staircase, and Parking Lot Lighting</li>
                                <li>Clubhouse, Gym, and Swimming Pool Filtration Systems</li>
                                <li>Security Systems and Gates</li>
                            </ul>
                        </li>
                        <li><strong>Grid Integration & Reduced Bills:</strong>The solar plant works in tandem with the existing grid connection.</li>
                        <p>
                            During sunny hours, the solar plant takes the load, drastically reducing the
                            amount of electricity your society needs to purchase from the utility
                            company.If the solar plant generates more power than the common facilities need, the
                            surplus is exported to the grid. Through net metering, your society earns
                            credits for this excess power, which are adjusted against the common
                            electricity bill, often bringing it close to zero.At night or on cloudy days, the grid provides power as usual, ensuring
                            uninterrupted service.

                        </p>
                    </ul>



                    {/* Components */}
                    <h2 className={styles.components}>
                        Key Components of a Society Solar Plant
                    </h2>
                    <p>
                        Our installations use robust, high-performance components engineered for the
                        scale and demands of community living.
                    </p>

                    <ul>
                        <li>
                            <strong>High-Efficiency Solar Panels:</strong> We use durable, high-output
                            panels to maximize energy generation from your available rooftop space.
                        </li>
                        <li>
                            <strong>Three-Phase String Inverters:</strong> These powerful inverters are
                            designed to handle the heavy loads of common area equipment like lifts and
                            motors, ensuring stable and reliable performance.
                        </li>
                        <li>
                            <strong>Custom Mounting Structures:</strong> Galvanized Iron (GI) or
                            aluminium structures are custom-designed to fit your society&apos;s roof type
                            (flat or sloped), ensuring maximum safety, durability, and storm resistance.
                        </li>
                        <li>
                            <strong>Array Junction Boxes:</strong> These enclosures provide protection
                            and consolidate the wiring from multiple strings of solar panels.
                        </li>
                        <li>
                            <strong>Comprehensive Safety Equipment:</strong> The system includes essential
                            safety features like Lightning Arresters and Earthing Kits to protect the
                            plant and the building from electrical surges and lightning.
                        </li>
                        <li>
                            <strong>Remote Monitoring System:</strong> The society&apos;s management
                            committee can access a user-friendly app or web portal to monitor real-time
                            energy generation, track savings, and ensure the system is performing
                            optimally.
                        </li>
                    </ul>

                    {/* Subsidy */}
                    <h2 className={styles.components}>
                        Subsidy & Pricing: A Smart Investment for the Community
                    </h2>
                    <p>
                        The Government of India&apos;s PM Surya Ghar: Muft Bijli Yojana offers specific
                        financial support for housing societies and Resident Welfare Associations
                        (RWAs) to solarize their common facilities.
                    </p>

                    <h3 className={styles.subHeading}>
                        Subsidy for Housing Societies (as of August 2025)
                    </h3>
                    <p>
                        Under the scheme, housing societies can avail a subsidy for solarizing common
                        facilities, including lifts, water pumps, and garden lights.
                    </p>
                    <ul>
                        <li>
                            <strong>Subsidy Amount:</strong> A subsidy of ₹18,000 per kW is provided.
                        </li>
                        <li>
                            <strong>Maximum Capacity:</strong> This subsidy is applicable for up to 500
                            kW of solar capacity, with the plant size capped at 10 kW per house in the
                            society. For example, a society with 50 flats can install up to a 500 kW
                            plant and receive the subsidy.
                        </li>
                    </ul>
                    <p>
                        This government assistance significantly lowers the initial capital investment
                        required from the society.
                    </p>

                    <h3 className={styles.subHeading}>
                        Indicative Pricing for Society Solar Plants (Before Subsidy)
                    </h3>
                    <p>
                        The per-kilowatt cost decreases as the system size increases. Here are the estimated costs for common system sizes:
                    </p>

                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>System Size</th>
                                    <th>Average Price Range (₹)</th>
                                    <th>Ideal For</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>10 kW</td>
                                    <td>₹5 Lakh – ₹6.5 Lakh </td>
                                    <td>Small societies (15-25 flats)</td>
                                </tr>
                                <tr>
                                    <td>25 kW</td>
                                    <td>₹12 Lakh – ₹15 Lakh</td>
                                    <td>Medium societies (30-60 flats)</td>
                                </tr>
                                <tr>
                                    <td>50 kW </td>
                                    <td>₹22 Lakh – ₹28 Lakh</td>
                                    <td>Large societies & complexes (70-120 flats)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>
                        Note: Prices are estimates. A final quote depends on site conditions, component choice, and required approvals.
                    </p>

                    <h3 className={styles.subHeading}>
                        Return on Investment (ROI): Savings for Every Resident
                    </h3>
                    <p>
                        Investing in a solar plant is one of the most financially prudent decisions a housing society can make. The returns are shared by the entire community through reduced maintenance charges.
                    </p>
                    <ul>
                        <li><strong>Typical Payback Period:</strong> 3 to 5 years.</li>
                        <li><strong>How the ROI Works for Your Society:</strong></li>
                        <ul>
                            <li>Total Installation Cost - Government Subsidy = Net Investment Cost</li>
                            <li>Total units (kWh) generated annually × Commercial tariff (₹9-₹11) = Annual Savings</li>
                            <li>Net Investment ÷ Annual Savings = Payback Period (Years)</li>
                        </ul>
                    </ul>

                    <p><strong>Example for a 25 kW System:</strong></p>
                    <ul>
                        <li>Total Cost: ~₹13,00,000</li>
                        <li>Government Subsidy (25 kW × ₹18,000): ₹4,50,000</li>
                        <li>Net Investment: ₹8,50,000</li>
                        <li>Annual Generation: ~36,500 kWh</li>
                        <li>Average Tariff: ₹10 per unit</li>
                        <li>Annual Savings: ₹3,65,000</li>
                        <li>Payback Period: ~2.3 Years</li>
                    </ul>
                    <p>
                        After just over two years, the solar plant provides free electricity for the next 20+ years, resulting in permanently lower CAM charges for every member.
                    </p>

                    <h3 className={styles.subHeading}>
                        The Collective Benefits of Going Solar
                    </h3>
                    <p>
                        Adopting solar power creates a win-win situation for the residents, the management committee, and the environment.
                    </p>

                    <h4 className={styles.boldfortext}>Benefits for Residents:</h4>
                    <ul>
                        <li>Lower Monthly Maintenance Bills</li>
                        <li>Increased Property Value</li>
                        <li>Improved Services</li>
                        <li>Pride in a Green Community</li>
                    </ul>

                    <h4 className={styles.boldfortext}>Benefits for the Management Committee (RWA):</h4>
                    <ul>
                        <li>Reduced Operational Headaches</li>
                        <li>Long-Term Asset Creation</li>
                        <li>Positive Community Impact</li>
                    </ul>

                    <h4 className={styles.boldfortext}>Environmental Benefits:</h4>
                    <ul>
                        <li>Reduced Carbon Footprint</li>
                        <li>Cleaner Air Quality</li>
                    </ul>
                    <h2 className={styles.components}>Why we choose us?</h2>
                    <p>
                        Take the first step towards a smarter, sustainable community. Contact us today for a free site survey and a customized proposal for your housing society!
                    </p>
                </main>
            </div>
        </div>
    );
};

export default HousingSocietySolar;
