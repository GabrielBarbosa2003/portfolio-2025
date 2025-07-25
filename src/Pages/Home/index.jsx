import { useEffect, useRef, useState } from 'react'
import { gsap } from "gsap";
import Scene from '../../Components/Scene'
import './home.css'
import MyServices from './HomeComponents/MyServices'
import { useGSAP } from '@gsap/react';
import Projects from './HomeComponents/Projects';
import Footer from './HomeComponents/Footer/Footer';
import SplitType from 'split-type'
import animateText from '../../services/animeTexts';
import CustomEase from 'gsap/CustomEase';

let isInitialLoad = true;
export default function Home() {
    const creativeText = useRef()
    const textRef = useRef()
    const [showPreloader, setShowPreloader] = useState(isInitialLoad);
    console.log(showPreloader)




    function animateTitleHome() {
        const text = new SplitType(creativeText.current, { types: 'words, chars' })
        const tl = gsap.timeline()
        tl.to(text.chars, {
            yPercent: -100,
            ease: "power2.inOut",
            stagger: 0.009
        })
        tl.to(text.chars, {
            delay: 2.5,
            yPercent: 0,
            ease: "power2.inOut",
            stagger: 0.009
        })
    }


    useEffect(() => {
        const interval = setInterval(() => {
            animateTitleHome();
        }, 5000);
        animateText(textRef)

        return () => clearInterval(interval);


    }, []);

    // create pre loader

    useEffect(() => {
        gsap.registerPlugin(CustomEase);
        CustomEase.create("hop", "0.9, 0, 0.1, 1");
    }, []);

    useGSAP(() => {
        const tl = gsap.timeline({
            delay: 0.3,
            defaults: {
                ease: "hop"
            }
        })
        tl.to(".word-loader h1", {
            y: "0%",
            duration: 1.5
        })
        tl.to(".divider", {
            scaleY: "100%",
            duration: 1,
            onComplete: () =>
                gsap.to(".divider", {
                    opacity: 0,
                    duration: 0.3,
                    delay: 0.3
                })
        })

        tl.to("#word-1 h1",{
            y: "100%",
            duration: 1,
            delay: 0.3
        })
        tl.to("#word-2 h1",{
            y: "-100%",
            duration: 1
        }, "<")

        tl.to(".block",{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            duration: 1,
            stagger: 0.1,
            delay: 0.75,
            onComplete: () =>
                gsap.to(".loader",{
                    zIndex:-1
                })
        },"<")

    }, [])





    return (

        <>

            <div className='loader'>
                <div className='overlay'>
                    <div className='block'></div>
                    <div className='block'></div>

                </div>

                <div className="intro-logo">
                    <div className="word-loader" id="word-1">
                        <h1>
                            <span>Gabriel</span>
                        </h1>
                    </div>
                    <div className="word-loader" id="word-2">
                        <h1>Barbosa</h1>
                    </div>
                </div>

                <div className="divider"></div>

            </div>
            {/* <div className='webgl-desk'>
                <Scene />
            </div>  */}
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
                    {window.innerWidth > 480 ? (
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
                    ) : (
                        <div className='mobile-middle'>
                            <div className='animate-text-mobile'>
                                <div className='text-animation-mobile'>
                                    <h1 ref={creativeText}>
                                        Frontend
                                        <br></br>
                                        Creative
                                    </h1>
                                </div>
                            </div>
                            <div className='webgl-mobile'>
                                <Scene />
                            </div>

                            <div className='dev-mobile'>
                                <h1>Developer</h1>
                            </div>

                        </div>
                    )}



                </div>

                <div className='bottom-home' ref={textRef}>
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