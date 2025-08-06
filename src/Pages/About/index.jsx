import './about.css'
import me from '../../assets/myself.png'
import ICanHelp from './AboutComponents/ICanHelp'
import Experience from './AboutComponents/Experience'
import Footer from '../Home/HomeComponents/Footer/Footer'
import { useEffect, useLayoutEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import animateText from '../../services/animeTexts'
import { gsap } from "gsap";

export default function About() {
    const titleRef = useRef(null)
    const aboutMeRef = useRef(null)
    const imageRef = useRef()

    function animateImageAbout() {
        gsap.fromTo([imageRef.current, aboutMeRef.current], {
            opacity: 0,
            yPercent: 20,
            ease: "power1.inOut",
        }, {
            opacity: 1,
            yPercent: 0,
            ease: "power1.inOut",
            delay: 0.5
        })
    }
    useGSAP(() => {
        animateText(titleRef)
        animateImageAbout()
    }, [])
    return (
        <>
            <section className='container-about'>
                <div className='grid-global'>
                    <div className='about-text' ref={titleRef}>
                        <p>Creative Developer from Brazil <br></br> working globally</p>
                        <div className='initial-text'>
                            {window.innerWidth >= 481 ? (
                                <h1>Between pixels, coffee, and ideas, <br></br>
                                    I create interfaces that tell <br></br>
                                    stories and make people <br></br>
                                    want to stay.</h1>

                            ) : (
                                <h1>Between pixels, coffee, and ideas,
                                    I create interfaces that tell
                                    stories and make people
                                    want to stay.</h1>
                            )}



                        </div>

                    </div>

                    <div className='about-me'>
                        <div className='myself'>
                            <img src={me} alt='myself' ref={imageRef} />
                        </div>

                        <div className='text-about-me' ref={aboutMeRef}>
                            <p>I like to think that every line of code I write is an invitation for people to stay a little longer.<br></br>
                                <br></br>

                                I'm passionate about transforming ideas into digital experiences that tell stories, creating interfaces that not only work but also make sense to those who use them. Between smooth animations, nearly invisible details, and the constant pursuit of simplicity, I believe that technology is more human when it respects the time and attention of those on the other side of the screen.<br></br>
                                <br></br>
                                If you also believe that design and code can change how people feel, then we already have something in common.<br></br>

                                <br></br>
                                And what about me? Yeah... I write code, drink coffee, and enjoy working out—that's already something!
                                <br></br>
                                <br></br>

                                If you have any ideas, collaborations, or job opportunities, don't hesitate to get in touch.</p>
                        </div>
                    </div>

                </div>



            </section>
            <ICanHelp />
            <Experience />
            <Footer />
        </>
    )
}