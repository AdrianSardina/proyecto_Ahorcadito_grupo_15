 import Boton from "./Componentes/Boton"
 import 'bootstrap/dist/css/bootstrap.min.css';
 import { BrowserRouter, Routes, Route} from "react-router-dom";
 import Masjuegos from "./Componentes/MasJuegos";
 import NotFound from "./Componentes/NotFound";
 import './Css/estiloLG.css';
import PiedraPapelTijeras from "./Componentes/PiedraPapelTijeras";
import Footer from "./Componentes/Footer";
import './imagenes/15.jpg';

export default function Game() {
    return (
        
        <>
            
        <Boton></Boton>
        <BrowserRouter>
        <Routes>
        <Route path="/" />;
        <Route path="/piedrapapeltijeras" element={<PiedraPapelTijeras/>}/>;
        <Route path="/ahorcadito"/>
        <Route path="/nosotros"/>;
        <Route path="/masjuegos" element={<Masjuegos/>} />;
        <Route path="*" element={<NotFound/>} />;
        </Routes>
        </BrowserRouter> 
        <Footer></Footer>
        
        </>

    )
}