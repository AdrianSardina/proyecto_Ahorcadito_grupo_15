import { Button,ButtonGroup } from "react-bootstrap";
import React, { useState , useEffect } from "react";
import palabras from "../json/palabras.json";


export default function Ahorcadito ()
{
   
    const [letraElegida,setLetraElegida] = useState (); //Guarda la letra seleccionada al jugar 
    const [palabraElegida,setPalabraElegida] = useState (''); //Guarda la palabra elegida de la lista para jugar
    const [palabraMostrada,setPalabraMostrada] = useState ([]); // Para Mostrar en pantalla
    const [vidas,setVidas]= useState(0);
    const [jugarHabilitado,setjugarHabilitado] = useState(false);// Para abilitar o desabilitar los botones.
    const [letrasUsadas,setLetrasUsadas] = useState("")
    function Jugar()
    {    
         setVidas(5);
         setPalabraElegida(palabras[Math.floor(Math.random()*palabras.length-1)]); 
         setPalabraMostrada(Array(palabraElegida.length).fill("-")); 
         setjugarHabilitado(true);
         
    }
    function RevisarLetra()
    {  
       
       if(typeof letraElegida ==="undefined")
       {
        console.log("letra elegida vacia")
       }else
       {
        if(!letrasUsadas.includes(letraElegida)) // se revisa que la letra no haya sido presionada antes
        {
            if(palabraElegida.includes(letraElegida))//Revisa si la letra pertenece a la palabra
            {
                setPalabraMostrada(CambiarArray(letraElegida,palabraMostrada,palabraElegida))
                if(!palabraMostrada.includes("-"))
                {
                    setjugarHabilitado(false);
                    console.log("Ganaste")
                }
            }else
            {
                console.log("la letra no esta ");    
                setVidas(vidas-1);
                if(vidas <=1)
                {
                    setjugarHabilitado(false);
                    console.log("Perdiste");    
                }    
            }
            setLetrasUsadas(letrasUsadas => {
                return [letraElegida, ...letrasUsadas]
                
              })
        }else
        {
            console.log("letra ya elegida");
        }
        
       }
       
       setLetraElegida();
    }
    function CambiarArray(letra,vector,palabra) //Devuelve un vector con la letra ya encontrada
    {
        let arr =vector; //Se copia el vector actual para mantener las letras ya encontradas
        for(let i=0;i<palabra.length;i++)
        {
            if(arr[i]=="-") // Revisa los lugares donde no se encontro la letra
            {
                if(palabra[i]==letra)
                {
                    arr[i]=letra;
                }  
            }
            
        }
        
        return arr;
    }
    useEffect(() => {setPalabraMostrada(Array(palabraElegida.length).fill("-"))}, [palabraElegida]);
    useEffect(() => {RevisarLetra();}, [letraElegida]); 
    
    return(
        <>
        <h1>ahorcadito</h1>
        
        <Button onClick={Jugar} disabled={jugarHabilitado}>Jugar</Button>
        


        {/* Botones */}
        <Button variant={jugarHabilitado ? "primary":"danger"} onClick={() => setLetraElegida('A')}disabled={!jugarHabilitado}>A</Button>{' '}
        <Button variant={jugarHabilitado ? "primary":"danger"} onClick={() => setLetraElegida('B')}disabled={!jugarHabilitado}>B</Button>{' '}
        <Button variant={jugarHabilitado ? "primary":"danger"} onClick={() => setLetraElegida('C')}disabled={!jugarHabilitado}>C</Button>{' '}
        <Button variant={jugarHabilitado ? "primary":"danger"} onClick={() => setLetraElegida('D')}disabled={!jugarHabilitado}>D</Button>{' '}
        <Button variant={jugarHabilitado ? "primary":"danger"} onClick={() => setLetraElegida('E')}disabled={!jugarHabilitado}>E</Button>{' '}
        <Button variant={jugarHabilitado ? "primary":"danger"} onClick={() => setLetraElegida('F')}disabled={!jugarHabilitado}>F</Button>{' '}
        <Button variant={jugarHabilitado ? "primary":"danger"} onClick={() => setLetraElegida('G')}disabled={!jugarHabilitado}>G</Button>{' '}
        <Button variant={jugarHabilitado ? "primary":"danger"} onClick={() => setLetraElegida('H')}disabled={!jugarHabilitado}>H</Button>{' '}
        <Button variant={jugarHabilitado ? "primary":"danger"} onClick={() => setLetraElegida('I')}disabled={!jugarHabilitado}>I</Button>{' '}
        <Button variant={jugarHabilitado ? "primary":"danger"} onClick={() => setLetraElegida('J')}disabled={!jugarHabilitado}>J</Button>{' '}
        <Button variant={jugarHabilitado ? "primary":"danger"} onClick={() => setLetraElegida('K')}disabled={!jugarHabilitado}>K</Button>{' '}
        <Button variant={jugarHabilitado ? "primary":"danger"} onClick={() => setLetraElegida('L')}disabled={!jugarHabilitado}>L</Button>{' '}
        <Button variant={jugarHabilitado ? "primary":"danger"} onClick={() => setLetraElegida('M')}disabled={!jugarHabilitado}>M</Button>{' '}
        <Button variant={jugarHabilitado ? "primary":"danger"} onClick={() => setLetraElegida('N')}disabled={!jugarHabilitado}>N</Button>{' '}
        <Button variant={jugarHabilitado ? "primary":"danger"} onClick={() => setLetraElegida('O')}disabled={!jugarHabilitado}>O</Button>{' '}
        <Button variant={jugarHabilitado ? "primary":"danger"} onClick={() => setLetraElegida('P')}disabled={!jugarHabilitado}>P</Button>{' '}
        <Button variant={jugarHabilitado ? "primary":"danger"} onClick={() => setLetraElegida('Q')}disabled={!jugarHabilitado}>Q</Button>{' '}
        <Button variant={jugarHabilitado ? "primary":"danger"} onClick={() => setLetraElegida('R')}disabled={!jugarHabilitado}>R</Button>{' '}
        <Button variant={jugarHabilitado ? "primary":"danger"} onClick={() => setLetraElegida('S')}disabled={!jugarHabilitado}>S</Button>{' '}
        <Button variant={jugarHabilitado ? "primary":"danger"} onClick={() => setLetraElegida('T')}disabled={!jugarHabilitado}>T</Button>{' '}
        <Button variant={jugarHabilitado ? "primary":"danger"} onClick={() => setLetraElegida('U')}disabled={!jugarHabilitado}>U</Button>{' '}
        <Button variant={jugarHabilitado ? "primary":"danger"} onClick={() => setLetraElegida('V')}disabled={!jugarHabilitado}>V</Button>{' '}
        <Button variant={jugarHabilitado ? "primary":"danger"} onClick={() => setLetraElegida('W')}disabled={!jugarHabilitado}>W</Button>{' '}
        <Button variant={jugarHabilitado ? "primary":"danger"} onClick={() => setLetraElegida('X')}disabled={!jugarHabilitado}>X</Button>{' '}
        <Button variant={jugarHabilitado ? "primary":"danger"} onClick={() => setLetraElegida('Y')}disabled={!jugarHabilitado}>Y</Button>{' '}
        <Button variant={jugarHabilitado ? "primary":"danger"} onClick={() => setLetraElegida('Z')}disabled={!jugarHabilitado}>Z</Button>
       



        <p>{palabraMostrada}</p>
      <p>{vidas}</p>
      
        </>
        
    )
    
   
}