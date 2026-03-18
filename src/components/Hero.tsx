"use client";

import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import Link from 'next/link';

export default function Hero() {
    return (
        <section id="home" className={styles.heroSection}>
            <div className="container">
                <div className={styles.heroContent}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h2 className={styles.greeting}>Vincent Esomchi</h2>
                    </motion.div>

                    <motion.h1
                        className={styles.headline}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Building <span className="text-gradient">high-performance</span> systems <br />
                        and scalable applications.
                    </motion.h1>

                    <motion.p
                        className={styles.subheadline}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Software Engineer specializing in robust backend architecture, cross-platform mobile engineering, and sleek digital experiences.
                    </motion.p>

                    <motion.div
                        className={styles.actions}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <Link href="#work" className="btn-primary">View Projects</Link>
                        <Link href="#contact" className="btn-outline">Contact Me</Link>
                    </motion.div>
                </div>
            </div>

            {/* Abstract Background Element for the "Wow" factor */}
            <div className={styles.glowOrb}></div>
        </section>
    );
}
