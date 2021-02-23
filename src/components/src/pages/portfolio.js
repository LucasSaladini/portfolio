import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import Gallery from '../components/Gallery/Gallery'
import Jobs from '../components/Jobs/Jobs'
import Navbar from '../components/Navbar/Navbar'
import Main from '../components/Main_Portfolio/Main'

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <Main />
    </Layout>

  )
}