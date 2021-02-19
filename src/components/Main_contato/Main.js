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
                <h2>Tecnologias</h2>
                    <h5>Frameworks</h5>
                        <div className={styles.tech__img}>
                            <Image src="/bootstrap-5-1.svg" alt="" 
                            width={100} height={100}></Image>
                            <p className={styles.tech__name}>Bootstrap</p>
                        </div>
                        <div className={styles.tech__img}>
                            <Image src="/nextjs-3.png" alt="" width={200} height={100}></Image>
                        </div>
                        
                    <h5>Linguagens</h5>
                        <div className={styles.tech__img__lang}>
                            <Image src="/javascript-html5-and-css-html-css-js-badge-115630076742dl7bdlbaf.png" 
                            alt="" width={300} height={300}></Image>
                        </div>
                        <div className={styles.tech__img__lang_php}>
                            <Image src="/php-1.svg" alt="" width={100} height={100}></Image>
                        </div>
                    <h5>Aplicativos</h5>
                        <div className={styles.tech__img}>
                            <Image src="/react-2.svg" 
                            alt="" width={100} height={100}></Image>
                            <p className={styles.tech__name}>React Native</p>
                        </div>     
            </section>
            <section className={styles.faq}>
                <h2>Dúvidas Frequentes</h2>
                <p>Abaixo estão as dúvidas mais frequentes. Clique nelas e veja as respostas</p>
                <Accordion>
                    <Card>
                        <Card.Header className={styles.accordion__bg}>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0" 
                            className={styles.card__title}>
                                Estou com dúvidas, como faço?
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body className={styles.card__text}>Me envie uma mensagem via WhatsApp ou e-mail que entrarei em contato!</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header className={styles.accordion__bg}>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1"
                            className={styles.card__title}>
                                Tenho um modelo em mente, podemos utilizar?
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1"
                        className={styles.card__text}>
                            <Card.Body>Claro! Me mande o modelo ou a ideia que tem e conversamos!</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header className={styles.accordion__bg}>
                            <Accordion.Toggle as={Button} variant="link" eventKey="2"
                            className={styles.card__title}>
                                Posso pedir uma cotação?
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2"
                        className={styles.card__text}>
                            <Card.Body>Com toda certeza! Entre em contato comigo e te envio uma cotação sem compromisso</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header className={styles.accordion__bg}>
                            <Accordion.Toggle as={Button} variant="link" eventKey="3"
                            className={styles.card__title}>
                                Posso ver seus trabalhos? Estou sem inspiração
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="3" className={styles.card__text}>
                            <Card.Body>Dê uma olhada no meu portfólio, lá tem os projetos que já desenvolvi e as ideias que tive para sites e apps</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </section>
        </main>
    );
};

export default Main;