import { useState } from 'react'

function App() {
  const [nome, setNome] = useState()               
  
  function handleClick(){
    setNome("Daniel Alencar")
  }

  const resultado = multiplicar(2,4)

  return (
    <div>
      <p>{nome}</p>
      <div onClick={handleClick} >Mudar nome</div>
    </div>
  );
}

export default App;
