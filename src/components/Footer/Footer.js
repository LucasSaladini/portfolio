import React, { useState } from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerleft}>
                <h3>Lucas Saladini</h3>
                <p className={styles.footerCompany}>
                    © 2021 - 2021 Web Developer
                </p>
			</div>
            <div className={styles.footercenter}>
                <h3>Fale comigo</h3>
                <p className={styles.footerContact}>(19) 98355 - 7139</p>
                <p className={styles.footerContact}><a href="mailto:lucassaladini@gmai.com">lucassaladini@gmail.com</a></p>
            </div>
            <div className={styles.footerright}>
                <h3>Sobre</h3>
                <p className={styles.footerAbout}>Desenvolvedor Web com foco em HTML5, CSS3, PHP, JavaScript e React</p>
            </div>
        </footer>
    );   
}

export default Footer;