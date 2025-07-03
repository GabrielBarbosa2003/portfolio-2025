import React, { useState } from 'react'
import './projects.css'
import cottonBackImg from '../../../../assets/projects-img/cotton-img.jpg'
import revelatioBackImg from '../../../../assets/projects-img/revelatio-img.png'
import cottonVideo from '../../../../assets/projects-videos/cotton-video.mp4'
import revelatioVideo from '../../../../assets/projects-videos/revelatio-video.mp4'

import arrow from '../../../../assets/icon-arrow.png'
import { gsap } from "gsap";
import { useRef } from 'react';
import ReactPlayer from 'react-player'


export default function Projects() {
    const videoRef = useRef([])
    const techsRef = useRef([])
    const [playingIndex, setPlayingIndex] = useState(null);

    const projects = [
        {id: 1, name:"Cotton Films", year:"2024", backImage: cottonBackImg , url: cottonVideo , techs: "(React, GSAP, Development)"},
        {id: 2, name:"Revelatio Studio", year:"2025", backImage: revelatioBackImg , url: revelatioVideo , techs: "(React, GSAP, Development)"}
    ]

    function showVideo(index) {
        setPlayingIndex(index);
        gsap.to([videoRef.current[index], techsRef.current[index]], {
            opacity: 1,
            ease: "power1.in",
        })




    }
    function hiddeVideo(index) {
        gsap.to([videoRef.current[index], techsRef.current[index]], {
            opacity: 0,
            ease: "power1.in",
               onComplete: () => {
            setPlayingIndex(prev => (prev === index ? null : prev));
        }
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
                    
                    {projects.map((project, index) => (
                        <div className='project'
                        onMouseEnter={() => showVideo(index)}
                        onMouseLeave={() => hiddeVideo(index)}
                        key={project.id}>

                        <div className='image-container-back'>
                            <div className='header-project'>
                                <div className='name-project'>
                                    <img src={arrow} alt='arrow' />
                                    <p>{project.name}</p>
                                </div>
                                <p>{project.year}</p>
                            </div>
                            <img src={project.backImage} alt='image project' />
                            <div className='video-container-back' ref={el => videoRef.current[index] = el}>
                                <ReactPlayer
                                    className="react-player"
                                    url={project.url}
                                    playing={playingIndex === index}
                                    controls={false}
                                    muted={true}
                                    loop={true}
                                    width="100%"
                                />
                            </div>
                            <div className='techs' ref={el => techsRef.current[index] = el}>
                                <p>{project.techs}</p>
                            </div>
                        </div>

                    </div>
                    ))}

                </div>

            </div>
        </section>
    )
}