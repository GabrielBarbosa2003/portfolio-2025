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
    gsap.registerPlugin(useGSAP)
    const creativeText = useRef()
    const textRef = useRef()
    const [showPreloader, setShowPreloader] = useState(() => {
        const navigationEntries = performance.getEntriesByType("navigation");
        const isReload = navigationEntries.length > 0 && navigationEntries[0].type === "reload";

        if (isReload) {
            sessionStorage.removeItem('preloaderShown');
        }

        const hasLoaded = sessionStorage.getItem('preloaderShown');
        return hasLoaded ? false : true;
    });






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
        createPreLoader();
    }, { dependencies: [showPreloader] });

    function createPreLoader() {
        if (showPreloader) {

            const tl = gsap.timeline({
                delay: 0.3,
                defaults: {
                    ease: "hop"
                },
                onComplete: () => {
                    setShowPreloader(false);
                    sessionStorage.setItem('preloaderShown', 'true');
                },
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

            tl.to("#word-1 h1", {
                y: "100%",
                duration: 1,
                delay: 0.3
            })
            tl.to("#word-2 h1", {
                y: "-100%",
                duration: 1
            }, "<")

            tl.to(".block", {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                duration: 1,
                stagger: 0.1,
                delay: 0.75,
                onComplete: () =>
                    gsap.to(".loader", {
                        zIndex: -1
                    })
            }, "<")
        }
    }






    return (

        <>

            {showPreloader &&
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
            }

            <section className='container-home'>
                <div className='grid-global'>
                    <div className='webgl'>
                        <Scene />
                    </div>
                    <div className='middle-home'>
                        <p>Front-end</p>
                        <p>Developer</p>
                    </div>


                </div>


            </section>
            <MyServices />
            <Projects />
            <Footer />


        </>


    )
}