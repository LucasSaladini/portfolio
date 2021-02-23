import React, { useState } from 'react';
import Head from 'next/head';
import Media from 'react-bootstrap/Media';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './Main.module.css';

const Contact = () => {
    const [fields, setFields] = useState({
        name: '',
        surname: '',
        email: '',
        subject: '',
        message: ''
    
    });

    function handleInputChange(event) {
        if(event.target.name === 'attachment')
            fields[event.target.name] = event.target.files[0];
        else 
            fields[event.target.name] = event.target.value;
            setFields(fields);
    }
    
    function handleInputChange(event) {
        event.preventDefault();
        console.log(fields);
    }

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
            <section>
                <div className="container">
                    <form className={styles.form}>
                        <Row>
                            <label htmlFor="name" className={styles.label}>Nome</label>
                        </Row>
                        <Row>
                            <input type="text" id="name" name="name" placeholder="Seu nome" 
                                className={styles.input} onChange={handleInputChange} />
                        </Row>
                                                
                        <Row>
                            <label htmlFor="surname" className={styles.label}>Sobrenome</label>
                        </Row>
                        <Row>
                            <input type="text" id="surname" name="surname" placeholder="Seu sobrenome" 
                                className={styles.input} onChange={handleInputChange} />
                        </Row>

                        <Row>
                            <label htmlFor="email" className={styles.label}>E-mail</label>
                        </Row>
                        <Row>
                            <input type="email" id="email" name="email" placeholder="Seu e-mail" 
                                className={styles.input} onChange={handleInputChange} />
                        </Row>

                        <Row>
                            <label htmlFor="subject" className={styles.label}>Assunto</label>
                        </Row>
                        <Row>
                            <input type="text" id="subject" name="subject" placeholder="Sobre o que vamos falar?" 
                                className={styles.input} onChange={handleInputChange} />
                        </Row>

                        <Row>
                            <label htmlFor="message" className={styles.label}>Mensagem</label>
                        </Row>
                        <Row>
                            <textarea id="message" name="message" placeholder="Digite sua mensagem" 
                                className={styles.textarea} onChange={handleInputChange} />
                        </Row>
                        
                        <Row>
                            <input type="submit" value="Enviar" className={styles.btn_send}/>
                        </Row>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default Contact;