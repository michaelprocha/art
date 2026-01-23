import Header from "./components/Header"
import Card from "./components/Card"
import imgMain from './assets/g_1.jpg'

function App() {

  return (
    <>
      <Header />
      <div className="container pt-2">
        <div className="col position-relative">
          <div className="card hero text-bg-dark">
            <img className="card-img main-image img-fluid" src={imgMain} alt="" />
            <Card family={['Arte no muro de Davi', 'Realizada em 20/05/2021', 'Detalhes']} 
            className={'bg-light main-card'}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
