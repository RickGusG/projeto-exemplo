import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Row } from './styles';
import api from './api';

function App() {
  const [count, setCount] = useState(0)
  const [pokemonName, setPokemonName] = useState('')
  const [pokemonSpriteUrl, setPokemonSpriteUrl] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const clickMinus = () => setCount((state) => state - 1)
  const clickPlus = () => setCount((state) => state + 1)

  const getPokemon = async () => {
    setError(false)
    setLoading(true)
    try {
      const {data} = await api.get(`pokemon/${pokemonName}`)
      setLoading(false)
      setPokemonSpriteUrl(data?.sprites?.front_default)
    } catch {
      setLoading(false)
      setError(true)
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <input type="text" value={pokemonName} onChange={(e) => setPokemonName(e.target.value)} />
        <button onClick={getPokemon}>Buscar Pokemon</button>
        {error && (<p>Deu erro, tenta de novo</p>)}
        {loading && (<p>Carregando...</p>)}
        {pokemonSpriteUrl && (<img src={pokemonSpriteUrl} alt='poke-sprite' />)}
        <Row gap={80} >
          <button onClick={clickMinus} >-</button>
          <p>{count}</p>
          <button onClick={clickPlus} >+</button>
        </Row>
        {count > 10 ? (<p>Tem mais de 10</p>) : <></>}
      </header>
    </div>
  );
}

export default App;