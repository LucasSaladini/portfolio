import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Main.module.css';


const Main = () => {
    return(
        <main>
            <div className={styles.Intro}>
                <p>
                    Em um mundo conectado na Internet, a coisa mais importante para você e para seu negócio é 
                    estar completamente presente digitalmente.
                </p>
                <p className={styles.paragraph}>
                    Para isso, conte com a ajuda de um Web Developer. Mas o que é um Web Developer (WebDev)? É uma
                    pessoa que tem habilidades e conhecimentos específicos para desenvolver um site completo,
                    seja ele um site comum, blog, e-commerce ou qualquer outra plataforma.
                </p>
                <p className={styles.paragraph}>
                    Precisa de um aplicativo para seu negócio? Quer que seu negócio cresça e apareça nas duas maiores
                    lojas de aplicativos atualmente, a App Store e a Play Store?
                    Também desenvolvo aplicativos!
                </p>
            </div>
            <div className={styles.technologies}>
                <h2>Tecnologias</h2>
                    <h5>Frameworks</h5>
                        <div className={styles.tech__img}>
                            <Image src="/bootstrap-5-1.svg" alt="" 
                            width={100} height={100}></Image>
                            <Image src="/nextjs-3.svg" alt="" width={100} height={100}></Image>
                        </div>
                    <h5>Linguagens</h5>
                        <div className={styles.tech__img}>
                            <Image src="/css3.svg" alt="" width={100} height={100}></Image>
                            <Image src="/html5.svg" alt="" width={100} height={100}></Image>
                            <Image src="/php-1.svg" alt="" width={100} height={100}></Image>
                        </div>
                    <h5>Aplicativos</h5>
                        <div className={styles.tech__img}>
                            <Image src="/react-2.svg" 
                            alt="" width={100} height={100}></Image>
                        </div>     
            </div>
            <div className={styles.faq}>
                <h2>Dúvidas Frequentes</h2>
                <div>
                    
                </div>
            </div>
        </main>
    );
};

export default Main;