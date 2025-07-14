import { useEffect, useRef, useState } from 'react'
import { gsap } from "gsap";
import Scene from '../../Components/Scene'
import './home.css'
import MyServices from './HomeComponents/MyServices'
import { useGSAP } from '@gsap/react';
import Projects from './HomeComponents/Projects';
import Footer from './HomeComponents/Footer/Footer';
export default function Home() {
    const creativeText = useRef()



    function animateTitleHome() {
        const tl = gsap.timeline()
        tl.to(creativeText.current, {
            yPercent: -50,
            ease: "power2.inOut",
            stagger: 0.005
        })
        tl.to(creativeText.current, {
            delay:2.5,
            yPercent: 0,
            ease: "power2.inOut",
            stagger: 0.005
        })
    }

  useEffect(() => {
    const interval = setInterval(() => {
        animateTitleHome();
    }, 5000);

    return () => clearInterval(interval);
}, []);





    return (

        <>
            {/* <div className='webgl'>
                <Scene />
            </div> */}
            <section className='container-home'>
                <div className='grid-global'>
                    <div className='middle-home'>
                        <p>
                            available for new jobs
                        </p>
                        <h2>
                            Freelance&<br></br>
                            Developer
                        </h2>
                    </div>
                    <div className='creative-home'>
                        <div className='front-criative'>

                            <h1 ref={creativeText}>
                                Frontend
                                <br></br>
                                Creative
                            </h1>


                        </div>
                        <div>
                            <h1>Developer</h1>
                        </div>
                    </div>



                </div>

                <div className='bottom-home'>
                    <p>I am a front-end developer / Creative developer <br></br>
                        and I love creating creative websites.
                    </p>
                </div>

            </section>
            <MyServices />
            <Projects />
            <Footer />


        </>


    )
}