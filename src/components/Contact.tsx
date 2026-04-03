"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Contact.module.css";

export default function Contact() {
	const [sending, setSending] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSending(true);

		const form = e.currentTarget;
		const formData = new FormData(form);
		const data = {
			name: formData.get("name") as string,
			email: formData.get("email") as string,
			message: formData.get("message") as string,
		};

		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			if (res.ok) {
				alert("Message sent successfully!");
				form.reset();
			} else {
				const err = await res.json();
				alert(err.error || "Failed to send message.");
			}
		} catch {
			alert("Something went wrong. Please try again.");
		} finally {
			setSending(false);
		}
	};

	return (
		<section id="contact" className="section-container">
			<div className="container">
				<div className={styles.contactWrapper}>
					<motion.div
						className={styles.contactInfo}
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: "-100px" }}>
						<h2 className={styles.title}>
							Let&apos;s build something <br />
							<span className="text-gradient">exceptional.</span>
						</h2>
						<p className={styles.subtitle}>
							Whether you need to scale a backend system from the ground up or
							craft a flawless mobile experience, I&apos;m ready to architect
							the solution.
						</p>

						<div className={styles.directContact}>
							<div className={styles.contactItem}>
								<h5>Email</h5>
								<a href="mailto:georgevincent35@gmail.com">
									georgevincent35@gmail.com
								</a>
							</div>
							<div className={styles.contactItem}>
								<h5>Phone</h5>
								<a href="tel:+2348138699452">+234 813 869 9452</a>
							</div>
							<div className={styles.contactItem}>
								<h5>Location</h5>
								<p>Nigeria / Remote</p>
							</div>
						</div>
					</motion.div>

					<motion.div
						className={styles.formContainer}
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ delay: 0.2 }}>
						<form
							onSubmit={handleSubmit}
							className={`glass-panel ${styles.contactForm}`}>
							<div className={styles.formGroup}>
								<label htmlFor="name" className={styles.label}>
									Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									placeholder="John Doe"
									required
									className={styles.formControl}
								/>
							</div>

							<div className={styles.formGroup}>
								<label htmlFor="email" className={styles.label}>
									Email address
								</label>
								<input
									type="email"
									id="email"
									name="email"
									placeholder="john@company.com"
									required
									className={styles.formControl}
								/>
							</div>

							<div className={styles.formGroup}>
								<label htmlFor="message" className={styles.label}>
									How can I help?
								</label>
								<textarea
									id="message"
									name="message"
									placeholder="Tell me about your project infrastructure needs..."
									required
									rows={4}
									className={styles.formControl}></textarea>
							</div>

							<button
								type="submit"
								disabled={sending}
								className={`btn-primary ${styles.submitBtn}`}>
								{sending ? "Sending..." : "Send Message"}
							</button>
						</form>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
