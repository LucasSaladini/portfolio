import React, { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styles from './Main.module.css';


const Main = () => {
    return(
        <main>
            <section className={styles.Intro}>
                <p>
                    O que é um <strong>portfólio</strong>? É onde o criador expõe seus trabalhos realizados, sejam
                    eles <strong>logotipos</strong>, <strong>websites</strong> ou <strong>ideias</strong>.
                </p>
                <p className={styles.paragraph}>
                    Abaixo você pode ver as minhas <strong>criações</strong>.
                </p>
                <p className={styles.paragraph}>
                    Aqui estão dispostas, em forma de <strong>imagens</strong>, de tudo o que já criei e o que <strong>imaginei</strong> como sendo <strong>soluções</strong> para diversos serviços.
                </p>
            </section>
            <section className={styles.portfolio}>
                <h2>Portfólio</h2>
                    <h5>Websites</h5>
                        <h6>Realizados</h6>
                        <h6>Ideias</h6>
                    <h5>Aplicativos</h5>
                        <h6>Realizados</h6>
                        <h6>Ideias</h6>  
            </section>
            <section className={styles.faq}>
                <h2>Demonstrações</h2>
                <p>Aqui você pode ver os vídeos de sites e aplicativos funcionando ao vivo!</p>
            </section>
        </main>
    );
};

export default Main;