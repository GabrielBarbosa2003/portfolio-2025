import { useGSAP } from '@gsap/react'
import { gsap } from "gsap";
import './experience.css'
import { useRef } from 'react';


export default function Experience() {
    const titleRef = useRef()
    const jobsRef = useRef([])

    function animateTextExperience() {
        gsap.fromTo([titleRef.current], {
            opacity: 0,
            xPercent: -10
        }, {
            opacity: 1,
            xPercent: 0,
            scrollTrigger: {
                trigger: titleRef.current

            }

        })
    }

    function animateJobsShow() {
        gsap.fromTo(jobsRef.current, {
            opacity: 0,
            yPercent: 10
        }, {
            opacity: 1,
            yPercent: 0,
            scrollTrigger: {
                trigger: jobsRef.current,
                start: "top bottom-=20%",
            }

        })
    }

    useGSAP(() => {
        animateJobsShow()
        animateTextExperience()
    }, [])

    return (
        <section className='sec-experience'>
            <div className='grid-global'>
                <h1 ref={titleRef}>Experience</h1>
                <div className='experiences-list' ref={jobsRef}>

                    <div className='experience'>
                        <div className='job'>
                            <h2>Front-end & Criative Developer</h2>
                            <p>Freelance</p>
                        </div>

                        <div className='time-local'>
                            <h2>2025/Today</h2>
                            <p>Brazil-SP</p>
                        </div>
                    </div>

                    <div className='experience'>
                        <div className='job'>
                            <h2>Front-end & Criative Developer</h2>
                            <p>Revelatio Studio</p>
                        </div>

                        <div className='time-local'>
                            <h2>2024/2025</h2>
                            <p>Recife-PE</p>
                        </div>
                    </div>

                    <div className='experience'>
                        <div className='job'>
                            <h2>Full-Stack Developer</h2>
                            <p>Funcamp</p>
                        </div>

                        <div className='time-local'>
                            <h2>2022/2024</h2>
                            <p>Campinas-SP</p>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    )
}