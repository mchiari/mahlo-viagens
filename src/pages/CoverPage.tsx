import React, { useEffect } from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Scroller } from '../components/Scroller'

import { gsap } from "gsap";
import { ScrollToPlugin } from 'gsap/all';
import { ScrollTrigger } from 'gsap/all';
import Destinies from '../components/Destinies';
import { Hero } from '../components/Hero';
import { Subscribe } from '../components/Subscribe';
import { About } from '../components/About';

const CoverPage = () => {

  return (
    <div className='flex flex-col'>
      <div className='w-full h-[200px]'>
        <Header />
        <Scroller />
      </div>

    <div className='flex flex-col w-full mt-[100px]'>

      {/* <Hero /> */}
      <About />
      <Destinies />
      <Subscribe />
      <Footer />
    </div>
    </div>
  )
}

export default CoverPage