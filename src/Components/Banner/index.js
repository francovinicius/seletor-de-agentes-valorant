import styles from './Banner.css'

export default function Banner() {
    return (
        <section>
            <div className='txt'>
                <img className="Banner img-fluid" src="./assets/img/txt.svg" alt="Selecione seu agente" />
            </div>

            <div className='d-flex justify-content-center align-items-center'>
                <img className="Banner img-fluid" src="./assets/img/pagina-inicial.svg" alt="Selecione seu agente" />
            </div>



        </section>
    )
}