
import { Footer } from '../components/Footer';
import { Formulario } from '../components/Formulario';
import { Main } from '../components/Main';
import Navbar from '../components/Navbar';
import { Proyectos } from '../components/Proyects';
import { Servicios } from '../components/Servicios';


function App()  {
  
    return (
        <div className="body">
            <Navbar />
            <Main />
            <Proyectos />
            <Servicios />
            <Formulario />
            <Footer />
        </div>
    )
}

export default App