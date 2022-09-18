import { useState} from "react";
import api from "./pages/apiconfig/api";
import { Button, Container } from "./pages/Styled/style";

function App() {

  const [input, setInput] = useState('')
  const [cep, setCep] = useState({})

   async function Search() {

    if(input === ' '){
      alert('preencha os campos')
      return;
    }

    try{
      const response = await api.get(`${input}/json`)
      setCep(response.data);
      setInput("")
    }
    catch{
      alert("Erro ao buscar cep, revise os dados")
      setInput("");
    }
  }

  return (
    <Container>
      <h1>Localidade pelo CEP</h1>
        <hr/>
      <div className="inputs">
        <input type="text" placeholder="Digite o cep" value={input} onChange={(e)=> setInput(e.target.value)}/>
        <Button onClick={Search}>Pesquisar</Button>
      </div>
        
        <img src="https://www.pngfind.com/pngs/m/344-3442354_vetor-mapa-do-brasil-png-transparent-png.png" alt="Mapa Brasil" width={200}/>

      <div className="results">
        <h3>CEP: {cep.cep}</h3>
        <span>Logradouro: {cep.logradouro}</span>
      </div>
    </Container>
  )
}

export default App;