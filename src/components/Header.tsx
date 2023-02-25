import React, { useEffect } from 'react'
import { gsap } from "gsap";
import { ScrollToPlugin } from 'gsap/all';
import { ScrollTrigger } from 'gsap/all';
import { Link } from 'react-router-dom';



export const Header = () => {
  useEffect(() => {

    gsap.registerPlugin(ScrollToPlugin);
    gsap.registerPlugin(ScrollTrigger);
    gsap.timeline({ scrollTrigger: { start: 'top top', end: 'bottom bottom', scrub: 0, } })
    // .fromTo('.title', { y: 100, opacity: 0 }, { y: 0, opacity: 100 }, "<")
    .fromTo('.header', { opacity: 0 }, { opacity: 100 }, 0.4)
  }, [])


  const handleScroll = () => {
    console.log(window)
  }


  return (
    <div className={`header flex justify-between items-center w-full h-20 px-10 z-10 fixed bg-white opacity-0 transition-all shadow-lg`} onScroll={handleScroll}>
      <Link to={'/'}>
      <div className='flex justify-between items-center gap-5'>
        <img src='/assets/logo-mahlo-black.png' className='w-20' />
        <span className='title text-3xl text-primary font-passion'>MAHLO VIAGENS</span>
      </div>
      </Link>

      <div className='flex justify-around items-center gap-4 text-primary text-2xl'>
        <span>Home</span>
        <span>Sobre nós</span>
        <span>Destinos</span>
      </div>



    </div>
  )
}
