import Head from 'next/head';
import styles from './Layout.module.css';

const Layout = ({ children, title="Lucas Saladini" }) => {
    return (
        <div className={styles.container}>
        <Head>
            <title>{ title }</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
            { children }
        </main>

        <footer className={styles.footer}>
            footer
        </footer>
    </div>
    )
}

export default Layout;