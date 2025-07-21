import './experience.css'


export default function Experience() {
    return (
        <section className='sec-experience'>
            <div className='grid-global'>
                <h1>Experience</h1>
                <div className='experiences-list'>

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