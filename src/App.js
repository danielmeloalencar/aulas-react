import MostraNome, { multiplicar } from './modulos/matematica'

function App() {

  const resultado = multiplicar(2,4)
  const nome = MostraNome("DANIEL")
  return (
    <div>
      <p>{resultado}</p>
      <p>{nome}</p>
    </div>
  );
}

export default App;
