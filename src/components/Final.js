import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Contexto from '../contexto/Contexto';
import '../index.css';

const Final = () => {

  const {laCorrecta} = useContext (Contexto);
  const navegacion = useNavigate ();

  return (
    <>
    <h1>Vaya, respuesta incorrecta</h1>
    <h2>La respuesta correcta era: <strong>{laCorrecta}</strong></h2>
    <div className="imagen">
      <img src={require(`../assets/el_ahorcado6.png`)} alt="" />
    </div>
    <button className="boton" onClick={()=> navegacion("/juego/")}>Volver a jugar</button>
    </>
  )
}

export default Final