import React, {useState, useEffect} from 'react';

import Lista from './Lista';
import axios from "axios";

function Textos() {

    const [data, setData] = useState("");
    const [texto, setTexto] = useState("");


        const getData = () => {
            axios
            .get("http://localhost:3001/texts/listar")
            /* .then(res => res.json()) */
            .then((data) => setData(data.data))
            
            .catch(error => console.error(`Error: ${error}`))

            console.log(data.length)

            }
        
        console.log("esto es texto" + texto)

            
        const addData = () =>{
            axios
            .post('http://localhost:3001/texts/lista', {texto})
            .then((data) => 
                console.log(data))
                setData(data)
                
            
            .catch(error => console.error(`Error: ${error}`))
            
            
        }

    
  return (
    <>
    <div>Textos</div>
    

    <form action="http://localhost:3001/texts/lista" method="post">
        <input type="text" name="texto" placeholder='Ingrese el Texto' onChange={(e) => setTexto(e.target.value)}></input>
        <button  onClick={() => addData}> enviar! </button>
    </form>
    

    <button onClick={() => getData()}> mostrar data</button>
    
        {data.length == 0 ? (
        <div>Loading ...</div>
      ) : (
        
        // Part 1, step 2 code goes here
        <ul className="list-group">
          {data.map((i, item) => (
            <li key={item} >
              <p> {i}</p>
            </li>
          ))}
        </ul>
      )}

    </>
  )


  }

export default Textos