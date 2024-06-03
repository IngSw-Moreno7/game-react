import { useNavigate } from 'react-router-dom'

const Ganado = () => {

  const navegacion = useNavigate ();

  return (
    <>
    <h1 className="titulo"> ¡Felicidades! </h1>
    <div className="imagen">
      <img src={require(`../assets/emoji.png`)} alt="" />
    </div>
    <button className="boton" onClick={()=> navegacion("/juego/")}>Volver a jugar</button>
    </>
  )
}

export default Ganado