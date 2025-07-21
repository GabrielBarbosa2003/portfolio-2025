import './icanhelp.css'

export default function ICanHelp() {
    return (
        <section className='icanhelp-section'>
            <div className='grid-global'>
                <h1>Eu posso te ajudar com...</h1>

                <div className='list-help'>
                    <div className='item-list'>
                        <h2>Sites</h2>
                        <div className='text-grid-help'>
                            <p>Eu crio sites responsivos, com foco em pequenas <br></br> interaçoes, utilizando react, gsap e three.js</p>
                        </div>
                    </div>

                </div>

                <div className='list-help'>
                    <div className='item-list'>
                        <h2>Sistemas</h2>
                        <div className='text-grid-help'>
                            <p>Já trabalhei em diversos sitemas front-end, desde <br></br> grandes projetos a pequenos SASS</p>
                        </div>
                    </div>

                </div>

                <div className='list-help'>
                    <div className='item-list'>
                        <h2>Design</h2>
                        <div className='text-grid-help'>
                            <p>Caso nao tenha um projeto pronto, podemos<br></br> criar algo com sua cara</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}