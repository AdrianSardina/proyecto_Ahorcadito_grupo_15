import React from "react";
import Button from 'react-bootstrap/Button';


function Masjuegos () {
    
        return (
            <>
            <div className="masJuegos">
            <h1 className= "textomasjuegos">Te traemos algunos de nuestros mejores juegos, Seguimos trabajando para traerte más</h1>
            
            <div className="b1">
            <Button href="/piedrapapeltijeras" variant="outline-light" size="lg">Piedra, Papel o Tijeras</Button>
            </div>
            <div className="b1">
            <Button href="/ahorcadito" variant="outline-light " size="lg">Ahorcadito</Button>
            </div>
            </div>
            </>
        );
    
}
export default Masjuegos;