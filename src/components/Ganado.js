import { useNavigate } from 'react-router-dom'
import '../App.css'
const Ganado = () => {

  const navegacion = useNavigate ();

  return (
    <>
    <h1>¡Felicidades! Has demostrado tener una mente 
    ágil y un gran conocimiento del vocabulario. 
    ¡Sigue así y nunca dejes de divertirte con este juego!</h1>
    <div className="imagen">
      <img src={require(`../assets/el_ahorcado1.png`)} alt="" />
    </div>
    <button onClick={()=> navegacion("/juego/")}>Volver a jugar</button>
    </>
  )
}

export default Ganado