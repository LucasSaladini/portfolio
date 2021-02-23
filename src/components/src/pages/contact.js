import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import Navbar from '../components/Navbar/Navbar'
import Main from '../components/Main_Contato/Main'

export default function Contact() {
  return (
    <Layout>
      <Navbar />
      <Main />
    </Layout>

  )
}