import { useEffect, useRef, useState } from 'react'
import { gsap } from "gsap";
import Scene from '../../Components/Scene'
import './home.css'
import MyServices from './HomeComponents/MyServices'
import { useGSAP } from '@gsap/react';
import Projects from './HomeComponents/Projects';
export default function Home() {
    const [creative, setCreative] = useState(true)
    const text = useRef(null)

    function changeText() {

        if (creative === true) {
            setCreative(false)
        } else {
            setCreative(true)
        }

    }

    function animeteChangeText() {
        const tl = gsap.timeline()
        tl.to(text.current, {
            yPercent: 100,
            ease: "power1.in",
            onComplete: (() => changeText())
        })
        tl.to(text.current, {
            yPercent: 0,
            ease: "power1.in",

        })

    }

    setTimeout(() => {
        animeteChangeText()
    }, 3000)





    return (

        <>
            <div className='webgl'>
                {/* <Scene /> */}
            </div>
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
                            {creative === true ?
                                (<h1 ref={text}>Creative</h1>)
                                :
                                (<h1 className='front' ref={text}>Frontend</h1>)
                            }


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
            <Projects/>

        
        </>


    )
}