import Image from 'next/image'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import FixedNav from '@/components/FixedNav'
import About from '@/components/About'
import Timeline from '@/components/Timeline'
import Banner from '@/components/Banner'
import Prizes from '@/components/Prizes'
import Faqs from '@/components/Faqs'
import RegisterNow from '@/components/RegisterNow'
import OtherEvents from '@/components/OtherEvents'
import Socials from '@/components/Socials'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
        <title>Cook-off 8.0</title>
        <link rel="icon" href="/Favicon.png" />
      </Head>
    <main>
      <FixedNav />
      <About />
      <Timeline />
      <Banner />
      <Prizes />
      <Faqs />
      <Prizes />
      <RegisterNow />
      <OtherEvents />
      <Socials />
    </main>
    </>
  )
}
