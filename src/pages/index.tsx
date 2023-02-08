import Head from 'next/head'
import { Inter } from '@next/font/google'
import Navbar from '../../components/Navbar'
import Main from '../../components/Main'
import Healthy from '../../components/Healthy'
import LearnMore from '../../components/LearnMore'
import WorkOutPart from '../../components/WorkOutPart'
import HowWork from '../../components/HowWork'
import Footer from '../../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Sport_Healthy</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Navbar />
        <Main />
        <Healthy />
        <LearnMore />
        <WorkOutPart />
        <HowWork />
        <Footer />

    </>
  )
}
