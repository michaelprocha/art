import imgMain from '../assets/g_1.jpg'
import Card from "./Card"

function Hero() {
    return (
        <div className="row position-relative py-2">
            <div className="col card hero text-bg-dark p-0 mx-2">
                <img className="card-img main-image img-fluid" src={imgMain} alt="" />
                <Card family={['Arte no muro de Davi', 'Realizada em 20/05/2021', 'Detalhes']}
                    className={'bg-light main-card'} />
            </div>
        </div>
    )
}

export default Hero