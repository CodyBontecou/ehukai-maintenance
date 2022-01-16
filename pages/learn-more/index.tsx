// import { NextPage } from 'next'
// import Navbar from '../../components/navbar'

// const LearnMore: NextPage = () => {
//   return <Navbar></Navbar>
// }

// export default LearnMore

import React from 'react'
import Header from '../../components/header'
import HeroHome from '../../components/hero_home'
import FeaturesHome from '../../components/features_home'
import FeaturesBlocks from '../../components/features_blocks'
import Testimonials from '../../components/testimonials'
import Newsletter from '../../components/newsletter'
import Footer from '../../components/footer'

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />
      <main className="flex-grow">
        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
        <FeaturesBlocks />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default Home
