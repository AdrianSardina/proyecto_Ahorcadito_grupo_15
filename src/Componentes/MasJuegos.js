import React from "react";
import Button from 'react-bootstrap/Button';


class Masjuegos extends React.Component {
    render() {
        return (
            <>
            <div className="masJuegos">
            <h1 className= "textomasjuegos">Te traemos algunos de nuestros mejores juegos, Seguimos trabajando para traerte más</h1>
            <div>
            <Button href="/piedrapapeltijeras" variant="outline-light" size="lg">Piedra, Papel o Tijeras</Button>
            </div>
            <div>
            <Button href="/ahorcadito" variant="outline-light " size="lg">Ahorcadito</Button>
            </div>
            </div>
            </>
        );
    }
}
export default Masjuegos;