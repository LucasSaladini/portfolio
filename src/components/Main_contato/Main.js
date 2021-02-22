import React, { Component } from 'react';
import Head from 'next/head';
import Media from 'react-bootstrap/Media';
import Figure from 'react-bootstrap/Figure';
import Image from 'react-bootstrap/Image';
import 'isomorphic-fetch';
import styles from './Main.module.css';


const Main = () => {
    return(
        <main>
            <section className={styles.Intro}>
                <p>Que tal <strong>entrar em contato</strong> comigo?</p>
                <p>Você ficou com alguma <strong>dúvida</strong>, quer alguns <strong>esclarecimentos</strong>, ou pedir um <strong>orçamento</strong>?</p>
                <p>Não hesite em falar comigo! Se você preferir, abaixo tem um <strong>formulário de contato</strong> ou, se quiser, pode falar comigo pelo <strong>WhatsApp</strong></p>
            </section>
            <section className={styles.whatsapp}>
                <Image width={50} height={50} className="mr-3" src="/WhatsApp.svg" alt="" />
                <Media>
                    <Media.Body>
                        <h5>(19) 98355 - 7139</h5>
                    </Media.Body>
                </Media>
            </section>
            <section className={styles.form}>

            </section>
        </main>
    );
};

export default Main;