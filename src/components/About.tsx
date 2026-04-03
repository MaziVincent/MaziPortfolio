"use client";

import { motion } from 'framer-motion';
import styles from './About.module.css';
import { FaServer, FaCode, FaRocket, FaShoppingCart, FaMotorcycle, FaBook } from 'react-icons/fa';

const experiences = [
    {
        role: 'Chief Technical Officer',
        company: 'ShopperGrow',
        period: '2026 — Present',
        desc: 'Designing and implementing scalable backend infrastructure and database systems for high-volume transaction environments.',
        icon: FaShoppingCart,
    },
    {
        role: 'Chief Technical Officer',
        company: 'Lifepadi',
        period: '2024 — 2025',
        desc: 'Architected a robust logistics platform engineered for performance and reliability at scale.',
        icon: FaMotorcycle,
    },
    {
        role: 'Backend Developer',
        company: 'Accave',
        period: '2020 — 2024',
        desc: 'Built secure authentication systems and optimized database architectures to handle high-traffic demands.',
        icon: FaBook,
    },
    {
        role: 'Director',
        company: 'Listacc Tech Academy',
        period: '2019 — Present',
        desc: 'Mentoring technical teams and developing industry-aligned training programs for enterprise professionals.',
        icon: FaRocket,
    },
    {
        role: 'Software Engineer',
        company: 'SchoolCater',
        period: '2018 — 2019',
        desc: 'Built core APIs and enhanced application performance through frontend optimization.',
        icon: FaCode,
    },
];

export default function About() {
    return (
        <section id="about" className="section-container">
            <div className="container">

                <div className={styles.aboutHeader}>
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <span>01.</span> Philosophy & Experience
                    </motion.h2>

                    <motion.p
                        className={styles.philosophy}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.1 }}
                    >
                        I build digital products that prioritize performance, security, and exceptional user experience. Over the last 5 years, I&apos;ve transitioned from monolithic network engineering to modern, distributed cloud architectures.
                    </motion.p>
                </div>

                <div className={styles.experienceGrid}>
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            className={`glass-panel ${styles.expCard}`}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: idx * 0.15, duration: 0.6 }}
                        >
                            <div className={styles.cardHeader}>
                                <exp.icon className={styles.icon} />
                                <span className={styles.period}>{exp.period}</span>
                            </div>
                            <h3 className={styles.role}>{exp.role}</h3>
                            <h4 className={styles.company}>{exp.company}</h4>
                            <p className={styles.desc}>{exp.desc}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
