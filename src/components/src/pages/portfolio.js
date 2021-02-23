import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import Navbar from '../components/Navbar/Navbar'
import Main from '../components/Main_Portfolio/Main'

export default function Portfolio() {
  return (
    <Layout>
      <Navbar />
      <Main />
    </Layout>

  )
}