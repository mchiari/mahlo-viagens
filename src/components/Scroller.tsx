import React, { useEffect } from 'react'
import { gsap } from "gsap";
import { ScrollToPlugin } from 'gsap/all';
import { ScrollTrigger } from 'gsap/all';
import { Header } from './Header';
import { Footer } from './Footer';
import { useNavigate } from 'react-router-dom';



export const Scroller = () => {
    const navigate = useNavigate()

        
    const handleComplete = () => {
        console.log('finished')
    }


    useEffect(() => {

        gsap.registerPlugin(ScrollToPlugin);
        gsap.registerPlugin(ScrollTrigger);
        gsap.timeline({ scrollTrigger: { start: 'top top', end: 'bottom bottom', scrub: 3, }, onComplete: () => handleComplete() })
            .fromTo('.sky', { y: 0 }, { y: 0 }, 0)
            .fromTo('.cloud1', { y: -100 }, { y: -800 }, 0)
            .fromTo('.cloud2', { y: -100 }, { y: -500 }, 0)
            .fromTo('.cloud3', { y: -200 }, { y: -700 }, 0)
            .fromTo('.plane', { rotate: 45, y: -500 }, { rotate: 90, y: -200 }, 0)
            .fromTo('.mountBg', { y: -100 }, { y: -50 }, 0)
            .fromTo('.mountMg', { y: -100 }, { y: -50 }, 0)
            .fromTo('.mountFg', { y: -200 }, { y: -100 }, 0)
            // .fromTo('.titleWhite', { y: 80 }, { y: 80 }, "<")
            // .fromTo('.titleBlue', { y: 80 }, { y: 80 }, "<")
            .fromTo('.titleBlue', {x: 0}, { x: -1000 }, 0.2)
            // .fromTo('.titleBlue', {opacity: 100}, { opacity: 0 }, "<")
            .fromTo('.titleWhite', {opacity: 100}, { opacity: 0 }, ">")
            // .fromTo('.disclaimer1', {opacity: 50}, { opacity: 0 }, 0)
    }, [])


    const handleArrowClick = () => {
        // console.log('oi')
        window.scrollTo({
            top: 1600,
            behavior: "smooth"
        })
    }



    return (
        <div className="w-full h-full flex flex-col fixed max-w-full bg-white">
            {/* <div className="mainScroller w-screen h-screen flex flex-col"> */}


            <div className='w-full relative'>
                <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
                    <mask id="m">
                        <g className="cloud1">
                            <rect fill="#fff" width="100%" height="800px" y="800" />
                            <image xlinkHref="/assets/cloud1Mask.jpg" className='w-full h-[801px]' />
                        </g>
                    </mask>

                    <image xlinkHref="/assets/sky.jpg" className='sky w-full h-[590px]'  />
                    <image xlinkHref="/assets/mountBg.png" className='mountBg w-full h-[800px]'  />
                    <image xlinkHref="/assets/mountMg.png" className='mountMg w-full h-[800px]'  />
                    <image xlinkHref="/assets/mountFg.png" className='mountFg w-full h-[800px]'  />
                    <image xlinkHref="/assets/cloud1.png" className='cloud1 w-full h-[800px]'  />
                    <image xlinkHref="/assets/cloud2.png" className='cloud2 w-full h-[800px]'  />
                    <image xlinkHref="/assets/plane.png" className='plane w-full h-[100px]' y={"200"} x={"50%"} />
                    <image xlinkHref="/assets/cloud3.png" className='cloud3 w-full h-[800px]' />
                    <text className='titleWhite text-7xl font-passion' fill="#fff" x="10%" y="80">MAHLO CO.</text>

                    <g mask="url(#m)">
                        <rect fill="#fff" width="100%" height="100%" />
                        <text className="titleBlue text-7xl font-passion" x="10%" y="80" fill="#162a43">MAHLO VIAGENS</text>
                        {/* <text className='disclaimer1 text-2xl font-passion' x="5%" y="200" fill="#162a43">Seu próximo destino está aqui!</text> */}
                        
                    </g>

                </svg>
            </div>

            <div className='flex flex-col relative items-center top-[35%] right-[-25%] cursor-pointer animate-bounce' onClick={handleArrowClick}>

                <span className='text-white'>scroll down</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff" width="24px" height="24px">
                    <path d="M12 24l-12-12h7v-12h10v12h7z" />
                </svg>
            </div>

        </div>
    )
}
