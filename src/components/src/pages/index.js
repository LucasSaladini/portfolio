import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import Navbar from '../components/Navbar/Navbar'
import Main from '../components/Main_Index/Main'

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <Main />
    </Layout>

  )
}