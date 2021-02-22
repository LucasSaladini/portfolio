import React, { useState } from 'react';
import Head from 'next/head';
import styles from './Main.module.css';


const Main = () => {
    return(
        <main>
            <section className={styles.Intro}>
                <p>
                    Em um mundo conectado na Internet, a coisa mais importante para você e para seu negócio é 
                    estar completamente <strong>presente digitalmente</strong>.
                </p>
                <p className={styles.paragraph}>
                    Para isso, conte com a ajuda de um <strong>Web Developer</strong>. Mas o que é um Web Developer (WebDev)? É uma
                    pessoa que tem habilidades e conhecimentos específicos para desenvolver um site completo,
                    seja ele um <strong>site comum</strong>, <strong>blog</strong>, <strong>e-commerce</strong> ou qualquer <strong>outra plataforma</strong>.
                </p>
                <p className={styles.paragraph}>
                    Precisa de um <strong>aplicativo</strong> para seu negócio? Quer que seu negócio cresça e apareça nas duas maiores
                    lojas de aplicativos atualmente, a <strong>App Store</strong> e a <strong>Play Store</strong>?
                    Eu posso te ajudar com isso!
                </p>
            </section>
            <section className={styles.technologies}>    
            </section>
            <section className={styles.faq}>
            </section>
        </main>
    );
};

export default Main;