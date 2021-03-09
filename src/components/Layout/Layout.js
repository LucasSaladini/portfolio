import Head from 'next/head';
import styles from './Layout.module.css';
import Footer from '../Footer/Footer'

const Layout = ({ children, title="Lucas Saladini" }) => {
    return (
        <div className={styles.container}>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Portfólio e contato de Lucas Saladini. Webdesigner, Web Dev e App Dev" />
            <meta name="keywords" content="Webdesign, webdesign, web design, webdesigner, web designer, criador de aplicativos, app dev, web dev, criador, Piracicaba" />
            <title>{ title }</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
            { children }
        </main>

        <Footer />
    </div>
    )
}

export default Layout;