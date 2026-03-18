"use client";

import { motion } from 'framer-motion';
import styles from './About.module.css';
import { FaServer, FaCode, FaRocket } from 'react-icons/fa';

const experiences = [
    {
        role: 'Backend Developer',
        company: 'Accave',
        period: '2020 — Present',
        desc: 'Engineering scalable authentication and database architecture for high-traffic environments.',
        icon: FaServer,
    },
    {
        role: 'Technical Director',
        company: 'Listacc Academy',
        period: '2019 — Present',
        desc: 'Leading engineering teams and architecting modern curriculum for enterprise training.',
        icon: FaRocket,
    },
    {
        role: 'Software Engineer',
        company: 'SchoolCater',
        period: '2018 — 2019',
        desc: 'Developed core monolithic APIs and optimized UI rendering performance.',
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
