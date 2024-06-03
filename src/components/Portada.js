import { useNavigate } from "react-router-dom"

const Portada = () => {

  const navegacion=useNavigate();

  return (
    <>
    <h1>BIENVENIDOS</h1>
    <button className="boton" onClick={() => navegacion ("/Juego") }>Jugar</button>
    </>
  )
}

export default Portada