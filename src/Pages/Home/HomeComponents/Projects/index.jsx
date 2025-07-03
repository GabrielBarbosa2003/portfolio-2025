import React, { useState } from 'react'
import './projects.css'
import cottonBottom from '../../../../assets/projects-img/cotton-bottom.png'
import cottonHome from '../../../../assets/projects-img/cotton-home.png'
import cottonVideo from '../../../../assets/projects-videos/cotton-video.mp4'
import arrow from '../../../../assets/icon-arrow.png'
import { gsap } from "gsap";
import { useRef } from 'react';
import ReactPlayer from 'react-player'


export default function Projects() {
    const videoRef = useRef()
    const techsRef = useRef()
    const [isPlaying, setIsPlaying] = useState(false)

    function showVideo() {
        setIsPlaying(true)
        gsap.to([videoRef.current, techsRef.current], {
            opacity: 1,
            ease: "power1.in",
        })





    }
    function hiddeVideo() {
        gsap.to([videoRef.current, techsRef.current], {
            opacity: 0,
            ease: "power1.in",
            onComplete: () => setIsPlaying(false)

        })




    }



    return (
        <section className='projects-container'>
            <div className='grid-global'>
                <div className='title-projects'>
                    <h1>Projects</h1>
                    <div className='sub-text'>
                        <p>Here we have some of my <br></br>
                            personal & professional projects.</p>
                    </div>
                </div>

                <div className='projects-section'>
                    <div className='project'
                        onMouseEnter={() => showVideo()}
                        onMouseLeave={() => hiddeVideo()}>

                        <div className='image-container-back'>
                            <div className='header-project'>
                                <div className='name-project'>
                                    <img src={arrow} alt='arrow' />
                                    <p>Cotton Films</p>
                                </div>
                                <p>2024</p>
                            </div>
                            <img src={cottonBottom} alt='image project' />
                            <div className='video-container-back' ref={videoRef}>
                                <ReactPlayer
                                    className="react-player"
                                    url={cottonVideo}
                                    playing={isPlaying}
                                    controls={false}
                                    muted={true}
                                    loop={true}
                                    width="100%"
                                />
                            </div>
                            <div className='techs' ref={techsRef}>
                                <p>(React, GSAP, Development)</p>
                            </div>
                        </div>

                    </div>

                    <div className='project'>

                    </div>
                    <div className='project'>

                    </div>
                    <div className='project'>

                    </div>
                </div>

            </div>
        </section>
    )
}