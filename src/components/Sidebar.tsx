"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome, FaUser, FaList, FaBriefcase, FaComments, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Sidebar.module.css';

const navItems = [
  { name: 'Home', path: '#home', icon: FaHome },
  { name: 'About', path: '#about', icon: FaUser },
  { name: 'Services', path: '#services', icon: FaList },
  { name: 'Portfolio', path: '#portfolio', icon: FaBriefcase },
  { name: 'Contacts', path: '#contacts', icon: FaComments },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('#home');
  // In a real app with next/router we might use usePathname(), but for a single-page hash-based scroll,
  // we can just manage active state locally or via IntersectionObserver.

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleNavClick = (hash: string) => {
    setActiveHash(hash);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button className={styles.mobileToggle} onClick={toggleSidebar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar Container */}
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <div className={styles.logo}>
          <Link href="#home" onClick={() => handleNavClick('#home')}>
            <span className={styles.logoHighlight}>Vin</span>cent
          </Link>
        </div>

        <nav className={styles.nav}>
          <ul>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeHash === item.path;

              return (
                <li key={item.name}>
                  <Link 
                    href={item.path}
                    onClick={() => handleNavClick(item.path)}
                    className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                  >
                    <Icon className={styles.icon} />
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.overlay}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
