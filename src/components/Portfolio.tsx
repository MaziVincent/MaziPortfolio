"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './Portfolio.module.css';

const projects = [
    { img: '/v1_classic/images/portfolio/Accave thumbnail.png', title: 'Accave', desc: 'Secure authentication & data management platform.', tags: ['Backend API', 'PostgreSQL'] },
    { img: '/v1_classic/images/portfolio/ListaccIncubator [Recovered].jpg', title: 'Listacc Incubator', desc: 'Enterprise learning management system.', tags: ['React', 'Enterprise'] },
    { img: '/v1_classic/images/portfolio/School Cater Bag.jpg', title: 'School Cater', desc: 'High-performance e-commerce platform.', tags: ['Full Stack', 'E-Commerce'] },
    { img: '/v1_classic/images/portfolio/Incubator LOGO.jpg', title: 'Incubator Platform', desc: 'Scalable system architecture for startups.', tags: ['System Architecture'] },
];

export default function Portfolio() {
    return (
        <section id="work" className="section-container">
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h2 className="section-title"><span>03.</span> Selected Work</h2>
                </motion.div>

                <div className={styles.portfolioGrid}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className={styles.portfolioCard}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                        >
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={project.img}
                                    alt={project.title}
                                    width={600}
                                    height={450}
                                    className={styles.projectImage}
                                />

                                <div className={styles.overlay}>
                                    <div className={styles.overlayContent}>
                                        <h3 className={styles.projectTitle}>{project.title}</h3>
                                        <p className={styles.projectDesc}>{project.desc}</p>
                                        <div className={styles.tagsContainer}>
                                            {project.tags.map(tag => (
                                                <span key={tag} className={styles.tag}>{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
