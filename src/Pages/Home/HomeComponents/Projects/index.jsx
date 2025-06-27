import React, { useState } from 'react'
import './projects.css'
import cottonBottom from '../../../../assets/projects-img/cotton-bottom.png'
import cottonHome from '../../../../assets/projects-img/cotton-home.png'
import cottonVideo from '../../../../assets/projects-videos/cotton-video.mp4'
import { gsap } from "gsap";
import { useRef } from 'react';
import ReactPlayer from 'react-player'


export default function Projects() {
    const videoRef = useRef()
    const [isPlaying, setIsPlaying] = useState(false)
    console.log(isPlaying)

    function showVideo() {
        setIsPlaying(true)
        gsap.to(videoRef.current, {
            opacity: 1,
            ease: "power1.in",            
        })





    }
    function hiddeVideo() {
        gsap.to(videoRef.current, {
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
                    <div className='project'>

                        <div className='image-container-back'
                            onMouseEnter={() => showVideo()}
                            onMouseLeave={() => hiddeVideo()}

                        >
                            <p>Cotton Films</p>
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
                        </div>
                    </div>
                    <div className='project'>

                    </div>
                    <div className='project'>

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