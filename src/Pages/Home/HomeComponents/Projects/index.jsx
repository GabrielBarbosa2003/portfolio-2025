import './projects.css'
import cottonBottom from '../../../../assets/projects-img/cotton-bottom.png'
import cottonHome from '../../../../assets/projects-img/cotton-home.png'
import { gsap } from "gsap";
import { useRef } from 'react';


export default function Projects() {
    const videoRef = useRef()

    function showVideo(){
        gsap.to(videoRef.current, {
            opacity: 1,
            ease: "power1.in",
        })

    }
    function hiddeVideo(){
         gsap.to(videoRef.current, {
            opacity: 0,
            ease: "power1.in",
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
                                <img src={cottonHome} alt='image project' />
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