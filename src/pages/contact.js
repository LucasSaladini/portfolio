import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';

//Elements
import Layout from '../components/Layout/Layout'
import Nav from '../components/Navbar/Navbar'
import Contato from '../components/Main_Contato/Main'


export default function Home() {
  return (
    <Layout>
      <Head>
      <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin="true"></script>

      <script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossOrigin="true"></script>

      <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossOrigin="true"></script>

      <script>var Alert = ReactBootstrap.Alert;</script>
      </Head>
      <Nav />
      <Contato />
    </Layout>

  )
}