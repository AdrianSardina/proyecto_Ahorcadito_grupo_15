
//Nuevos
 import Nosotros from "./Componentes/Nosotros"; 
 import PiedraPapelTijeras from "./Componentes/PiedraPapelTijeras";
 import Footer from "./Componentes/Footer";
 import Boton from "./Componentes/Boton"
 import 'bootstrap/dist/css/bootstrap.min.css';
 import { BrowserRouter, Routes, Route} from "react-router-dom";
 import Masjuegos from "./Componentes/MasJuegos";
 import NotFound from "./Componentes/NotFound";
 import Inicio from "./Componentes/Inicio"
 import Ahorcadito from "./Componentes/Ahorcadito";
 import './Css/Estilos.css';
 import "../src/Css/inicio.css"
 import "../src/Css/stylesAhorcadito.css"
 import './Css/estiloLG.css';
 import './Imagenes/15.jpg';




export default function Game() {
    return (
        
        <>

            
        <Boton></Boton>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Inicio text=" - El Fantastico Juego del Ahorcadito"/>}/>;
        <Route path="/piedrapapeltijeras" element={<PiedraPapelTijeras/>}/>;
        <Route path="/ahorcadito" element={<Ahorcadito/>}/>
        <Route path="/nosotros" element={<Nosotros/>}/>;
        <Route path="/masjuegos" element={<Masjuegos/>} />;
        <Route path="*" element={<NotFound/>} />;
        </Routes>
        </BrowserRouter> 
        <Footer></Footer>

        
        </>

    )
}