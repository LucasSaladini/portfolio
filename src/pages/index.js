import Head from 'next/head'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

//Elements
import Layout from '../components/Layout/Layout'
import Nav from '../components/Navbar/Navbar'
import Main from '../components/Index/Main'


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
      <Main />
    </Layout>

  )
}