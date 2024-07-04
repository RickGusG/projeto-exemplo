import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Row } from './styles';

function App() {
  const [count, setCount] = useState(0)

  const clickMinus = () => setCount((state) => state - 1)
  const clickPlus = () => setCount((state) => state + 1)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Row>
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