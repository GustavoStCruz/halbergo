'use client';

import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <a href="#inicio" className={styles.logo}>MeuSite</a>

                <nav className={styles.nav}>
                    <a href="#sobre" className={styles.link}>Sobre</a>
                    <a href="#servicos" className={styles.link}>Serviços</a>
                    <a href="#contato" className={styles.link}>Contato</a>
                </nav>
            </div>
        </header>
    );
}