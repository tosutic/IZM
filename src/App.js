import logo from './logo.svg';
import './App.css';

function App() {
  return (       
    <div className="App">
      <h1>test</h1>
      <p>Izrada aplikacije je super ako znaš što radiš.</p>
      <p>Još tu treba puno, puno stolicu zagrijat. </p>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
