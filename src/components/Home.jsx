import React from 'react'

export const Home = () => {
    return (
        <section id="home" className="section home">
            <section className='home-info'>
                <img src="../public/perfil_default.jpg" />
                <div className='home-info-text'>
                    <p className="section-description">Facundo Zuleta</p>
                    <p className="section-description">22 años</p>
                    <p className="section-description">Salta Capital, Salta, Argentina</p>
                    <p className="section-description">facundozuleta70@gmail.com</p>
                    <p className="section-description">+54 387 5192850</p>
                    <p className="section-description">Disponible para trabajar</p>
                </div>
            </section>
            <section className="section home">
                <h2 className="section-title">
                    ¡Hola! Soy Facundo Zuleta, un <strong>Desarrollador Web Full Stack</strong> de Salta, Argentina.
                    Especializado en crear <strong>aplicaciones webs</strong> únicas.
                </h2>
                <p className="section-description">
                    Con pasión por crear aplicaciones impresionantes y soluciones innovadoras.
                    Me esfuerzo por ofrecer experiencias digitales que destaquen por su calidad y funcionalidad. ¡Explora mi portafolio para descubrir proyectos únicos y conocer más sobre mi!</p>
            </section>
        </section>
    )
}
