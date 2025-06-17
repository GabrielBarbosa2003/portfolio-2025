import Scene from '../../Components/Scene'
import './home.css'
export default function Home() {
    return (

        <>
            <div className='webgl'>
                <Scene />
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
                        <h1>Creative Developer</h1>
                    </div>



                </div>

                <div className='bottom-home'>
                    <p>I am a front-end developer / Creative developer <br></br>
                        and I love creating creative websites.
                    </p>
                </div>



            </section>
        </>


    )
}