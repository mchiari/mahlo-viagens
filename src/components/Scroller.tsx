import React, { useEffect } from 'react'
import { gsap } from "gsap";
import { ScrollToPlugin } from 'gsap/all';
import { ScrollTrigger } from 'gsap/all';
import { Header } from './Header';
import { Footer } from './Footer';
import { useNavigate } from 'react-router-dom';



export const Scroller = () => {


    useEffect(() => {

        gsap.registerPlugin(ScrollToPlugin);
        gsap.registerPlugin(ScrollTrigger);
        // gsap.set('.mainScroller', { position: 'fixed', background: '#fff', width: '100%', maxWidth: '100%', height: '100%', top: 0, left: '50%', x: '-50%' })
        gsap.timeline({ scrollTrigger: { trigger: '.scrollDist', start: 'top top', end: 'bottom bottom', scrub: 1 } })
            .fromTo('.sky', { y: 0 }, { y: -200 }, 0)
            .fromTo('.cloud1', { y: 100 }, { y: -800 }, 0)
            .fromTo('.cloud2', { y: -150 }, { y: -500 }, 0)
            .fromTo('.cloud3', { y: -50 }, { y: -650 }, 0)
            .fromTo('.mountBg', { y: -10 }, { y: -100 }, 0)
            .fromTo('.mountMg', { y: -30 }, { y: -250 }, 0)
            .fromTo('.mountFg', { y: -50 }, { y: -600 }, 0)
    
    }, [])

    const handleArrowClick = () =>{
       console.log('oi')
    }

    const navigate = useNavigate()

    return (
        <div className="mainScroller w-screen h-screen flex flex-col fixed max-w-full top-0 bg-white">
        {/* <div className="mainScroller w-screen h-screen flex flex-col"> */}
            <Header />
            <div className='w-screen h-screen'>
            <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
                <mask id="m">
                    <g className="cloud1">
                        <rect fill="#fff" width="100%" height="801" y="799" />
                        <image xlinkHref="/assets/cloud1Mask.jpg" width="1200" height="800" />
                    </g>
                </mask>

                <image className="sky" xlinkHref="/assets/sky.jpg" width="1200" height="590" />
                <image className="mountBg" xlinkHref="/assets/mountBg.png" width="1200" height="800" />
                <image className="mountMg" xlinkHref="/assets/mountMg.png" width="1200" height="800" />
                <image className="cloud2" xlinkHref="/assets/cloud2.png" width="1200" height="800" />
                <image className="mountFg" xlinkHref="/assets/mountFg.png" width="1200" height="800" />
                <image className="cloud1" xlinkHref="/assets/cloud1.png" width="1200" height="800" />
                <image className="cloud3" xlinkHref="/assets/cloud3.png" width="1200" height="800" />
                <text className='text-9xl' fill="#fff" x="30%" y="200">VIAGEM</text>

                <polyline className="arrow" fill="#fff" points="599,250 599,289 590,279 590,282 600,292 610,282 610,279 601,289 601,250" />

                <g mask="url(#m)">
                    <rect fill="#fff" width="100%" height="100%" />
                    <text className="text-9xl font-['Tilt Warp']" x="25%" y="200" fill="#162a43">MAHLO CO.</text>
                    {/* <text className="text-2xl font-['Tilt Warp']" x="30%" y="400" fill="#162a43">MAHLO VIAGENS</text> */}
                    {/* <text onClick={() => navigate('/home')} className="text-2xl font-['Tilt Warp'] cursor-pointer" x="38%" y="440" fill="#162a43">Clique aqui para embarcar nessa aventura!</text> */}
                </g>
                {/* <rect onClick={handleArrowClick} id="arrowBtn" width="200" height="100" opacity="50" x="550" y="460" style={{ cursor: "pointer" }} path={"M2.714 1.411l-0.375 -0.375a0.125 0.125 0 0 0 -0.177 0.177L2.324 1.375H0.375a0.125 0.125 0 0 0 0 0.25H2.324l-0.163 0.161a0.125 0.125 0 0 0 0 0.177 0.125 0.125 0 0 0 0.177 0l0.375 -0.375A0.125 0.125 0 0 0 2.714 1.411Z"} /> */}
            </svg>
            </div>
            <div className='flex justify-center items-center h-10 w-full relative z-40'>
                test
            </div>
                {<Footer />}
        </div>
    )
}
