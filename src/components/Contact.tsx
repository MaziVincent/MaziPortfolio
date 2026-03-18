"use client";

import { motion } from 'framer-motion';
import styles from './Contact.module.css';

export default function Contact() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Message ready to be routed to your inbox.");
    };

    return (
        <section id="contact" className="section-container">
            <div className="container">
                <div className={styles.contactWrapper}>

                    <motion.div
                        className={styles.contactInfo}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <h2 className={styles.title}>Let&apos;s build something <br /><span className="text-gradient">exceptional.</span></h2>
                        <p className={styles.subtitle}>
                            Whether you need to scale a backend system from the ground up or craft a flawless mobile experience, I&apos;m ready to architect the solution.
                        </p>

                        <div className={styles.directContact}>
                            <div className={styles.contactItem}>
                                <h5>Email</h5>
                                <a href="mailto:georgevincent35@gmail.com">georgevincent35@gmail.com</a>
                            </div>
                            <div className={styles.contactItem}>
                                <h5>Location</h5>
                                <p>Abakaliki / Remote</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.formContainer}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.2 }}
                    >
                        <form onSubmit={handleSubmit} className={`glass-panel ${styles.contactForm}`}>

                            <div className={styles.formGroup}>
                                <label htmlFor="name" className={styles.label}>Name</label>
                                <input type="text" id="name" placeholder="John Doe" required className={styles.formControl} />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email" className={styles.label}>Email address</label>
                                <input type="email" id="email" placeholder="john@company.com" required className={styles.formControl} />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message" className={styles.label}>How can I help?</label>
                                <textarea id="message" placeholder="Tell me about your project infrastructure needs..." required rows={4} className={styles.formControl}></textarea>
                            </div>

                            <button type="submit" className={`btn-primary ${styles.submitBtn}`}>Send Message</button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
