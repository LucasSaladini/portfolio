import React, { useState } from 'react';
import Head from 'next/head';
import Media from 'react-bootstrap/Media';
import Image from 'react-bootstrap/Image';
import styles from './Main.module.css';

const Contact = () => {
    return(
        <main className={styles.main}>
            <section className={styles.Intro}>
                <p>Que tal <strong>entrar em contato</strong> comigo?</p>
                <p>Você ficou com alguma <strong>dúvida</strong>, quer alguns <strong>esclarecimentos</strong>, ou pedir um <strong>orçamento</strong>?</p>
                <p>Não hesite em falar comigo! Se você preferir, abaixo tem um <strong>formulário de contato</strong> ou, se quiser, pode falar comigo pelo <strong>WhatsApp</strong></p>
            </section>
            <section className={styles.whatsapp}>
                <Image width={50} height={50} className="mr-3" src="/WhatsApp.svg" alt="" />
                <Media>
                    <Media.Body>
                        <h5>
                            <a href="https://wa.me/5519983557139?text=Olá, podemos conversar?" target="_blank">
                                (19) 98355 - 7139</a>
                        </h5>
                    </Media.Body>
                </Media>
            </section>
            <section className={styles.email}>
                <p>Ou, se preferir, me mande um e-mail:</p>
                <p><a href="mailto:lucassaladini@gmail.com">lucassaladini@gmail.com</a></p>
            </section>
        </main>
    );
};

export default Contact;