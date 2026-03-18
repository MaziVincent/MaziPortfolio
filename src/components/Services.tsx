"use client";

import { motion } from 'framer-motion';
import { FaServer, FaMobileAlt, FaCodeBranch } from 'react-icons/fa';
import styles from './Services.module.css';

const services = [
    {
        title: 'Backend Architecture',
        desc: 'Designing robust, horizontally scalable APIs and microservices. I build systems capable of handling complex transactions with high throughput.',
        icon: FaServer,
        tech: ['Node.js', 'C# .NET', 'PostgreSQL', 'Redis']
    },
    {
        title: 'Mobile Engineering',
        desc: 'Creating fluid, cross-platform mobile experiences that feel native. Bridging the gap between beautiful UI and complex device features.',
        icon: FaMobileAlt,
        tech: ['Flutter', 'Dart', 'React Native']
    },
    {
        title: 'System Integration',
        desc: 'Seamlessly connecting disperate data sources, legacy systems, and modern SaaS platforms into a unified, secure digital ecosystem.',
        icon: FaCodeBranch,
        tech: ['GraphQL', 'REST', 'Webhooks', 'OAuth']
    }
];

export default function Services() {
    return (
        <section id="services" className={`section-container ${styles.servicesSection}`}>
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h2 className="section-title"><span>02.</span> Core Capabilities</h2>
                </motion.div>

                <div className={styles.servicesGrid}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className={`glass-panel ${styles.serviceCard}`}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                        >
                            <div className={styles.iconWrapper}>
                                <service.icon className={styles.icon} />
                            </div>
                            <h3 className={styles.title}>{service.title}</h3>
                            <p className={styles.desc}>{service.desc}</p>

                            <div className={styles.techStack}>
                                {service.tech.map(t => (
                                    <span key={t} className={styles.techBadge}>{t}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
