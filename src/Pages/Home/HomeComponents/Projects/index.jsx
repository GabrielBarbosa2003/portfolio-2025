import React, { useEffect, useState } from 'react'
import './projects.css'
import cottonImg from '../../../../assets/projects-img/cotton-img.jpg'
import cottonVideo from '../../../../assets/projects-videos/cotton-video.mp4'
import revelatioImg from '../../../../assets/projects-img/revelatio-img.png'
import revelatioVideo from '../../../../assets/projects-videos/revelatio-video.mp4'
import galaxyImg from '../../../../assets/projects-img/galaxy-img.png'
import galaxyVideo from '../../../../assets/projects-videos/galaxy-video.mp4'
import galleryImg from '../../../../assets/projects-img/gallery-img.png'
import galleryVideo from '../../../../assets/projects-videos/gallery-video.mp4'

import arrowSocial from '../../../../assets/bottom/arrow-social.svg'

import live from '../../../../assets/live.png'
import git from '../../../../assets/github.png'



import arrow from '../../../../assets/icon-arrow.png'
import { gsap } from "gsap";
import { useRef } from 'react';
import ReactPlayer from 'react-player'
import animateText from '../../../../services/animeTexts'
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function Projects() {
    gsap.registerPlugin(ScrollTrigger, gsap);

    const videoRef = useRef([])
    const techsRef = useRef([])
    const [playingIndex, setPlayingIndex] = useState(null);

    const titleRef = useRef()
    const textRef = useRef()
    const projectRef = useRef([])

    const projects = [
        { id: 1, name: "Cotton Films", year: "2024", backImage: cottonImg, url: cottonVideo, techs: "(React, GSAP, Development)", link: "https://cotton-films.vercel.app/", git: "https://github.com/GabrielBarbosa2003/Cotton-films"},
        { id: 2, name: "Revelatio Studio", year: "2025", backImage: revelatioImg, url: revelatioVideo, techs: "(React, GSAP, Development)" },
        { id: 3, name: "Galaxy 3D", year: "2025", backImage: galaxyImg, url: galaxyVideo, techs: "(React, Three.js, Study)", link: "https://galaxy-points-material.vercel.app/", git: "https://github.com/GabrielBarbosa2003/galaxy-points-material" },
        { id: 4, name: "Gallery 3D", year: "2024", backImage: galleryImg, url: galleryVideo, techs: "(React, Gsap, Study)", link: "https://gallery-3d-one.vercel.app/", git: "https://github.com/GabrielBarbosa2003/gallery_3D"}

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

    function animateProjects() {

        projectRef.current.forEach((project) => {
            gsap.fromTo(project, {
                yPercent: 10,
                opacity: 0,
            }, {
                yPercent: 0,
                opacity: 1,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: project,
                    start: "top bottom-=50px",
                    end: "bottom bottom",
                }
            })
        })
    }

    useEffect(() => {
        animateText(titleRef, textRef)
        animateProjects()
    }, [])



    return (
        <section className='projects-container' id='works'>
            <div className='grid-global'>
                <div className='title-projects' ref={titleRef}>
                    <h1>[Works & Projects]</h1>
                    <div className='sub-text' ref={textRef}>
                        <p>Here we have some of my <br></br>
                            personal & professional projects.</p>
                    </div>
                </div>

                <div className='projects-section'>

                    {projects.map((project, index) => (
                        <div className='project'
                            onMouseEnter={() => showVideo(index)}
                            onMouseLeave={() => hiddeVideo(index)}
                            key={project.id} ref={el => projectRef.current[index] = el}>

                            <div className='image-container-back'>
                                <div className='header-project'>
                                    <div className='name-project'>
                                        <img src={arrow} alt='arrow' />
                                        <p>{project.name}</p>
                                    </div>
                                    <div className='live'>
                                        <a href={project.link} target='_blank'>
                                            <img src={live} alt='arrow' />
                                        </a>
                                    </div>
                                    <div className='live'>
                                        <a href={project.git} target='_blank'>
                                            <img src={git} alt='arrow' />
                                        </a>
                                    </div>

                                    <div>
                                        <p>{project.year}</p>
                                    </div>

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