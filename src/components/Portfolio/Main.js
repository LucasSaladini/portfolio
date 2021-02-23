import React from 'react';
import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import styles from './Main.module.css';


const Portfolio = () => {
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
                <h1>Portfólio</h1>
                <Container>
                    <h2>Websites</h2>
                    <h3 className='mb-5'>Realizados</h3>
                    <Row>
                        <Col>
                            <Image src="/land-page-atma.png" className='h-auto' fluid/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Image src="/land-page-kim.png" className='mt-5 h-auto' fluid/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Image src="/thais.png" className='mt-5 h-auto' fluid />
                        </Col>
                    </Row>
                    <h3>Ideias</h3>
                    <Row>
                        <Col>
                            <Image src="/coffecorner.png" className='mt-5 h-auto' fluid />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Image src="/mato.png" className='mt-5 h-auto' fluid />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Image src="/freshfur.jpg" className='mt-5 h-auto' fluid />
                        </Col>
                    </Row>
                </Container>
                <Container className={styles.apps}>
                    <h2>Apps</h2>
                    <h3>Realizados</h3>
                    <Row>
                        <Col>
                            <Image src="/Inicial.png" width={500} fluid/>
                        </Col>
                    </Row>
                    <h3>Ideias</h3>
                    <Row>
                        <Col>
                            <Image src="/daperdan.jpg" fluid/>
                        </Col>
                    </Row>
                </Container>
                <Container className={styles.apps}>
                    <h2>Logos</h2>
                    <h3>Ideias</h3>
                    <Row>
                        <Col>
                            <Image src="/barberlogo.png" width={500} fluid/>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    );
};

export default Portfolio;