import './App.css'
import Footer from './componentes/Footer/Footer'
import Header from './componentes/Header/Header'
import OutrosProjetos from './componentes/OutrosProjetos/OutrosProjetos'
import Projetos from './componentes/Projetos/Projetos'
import Sobre from './componentes/Sobre/Sobre'

function App() {

  return (
    <div className='App'>
      <Header />
      <Sobre />
      <hr></hr>
      <Projetos />
      <OutrosProjetos />
      <Footer />
    </div>
  )
}

export default App
