import React, { useEffect } from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Scroller } from '../components/Scroller'

import { gsap } from "gsap";
import { ScrollToPlugin } from 'gsap/all';
import { ScrollTrigger } from 'gsap/all';
import Destinies from '../components/Destinies';

const CoverPage = () => {

  return (
    <div className='w-full h-[1900px]'>
      {/* <Header /> */}
      <Scroller />
      <Destinies/>
    </div>
  )
}

export default CoverPage