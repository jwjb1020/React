import logo from './logo.svg';
import './App.css';
//사용자정의 태그는 무조건!!!! return이 있어야함!!! return 안에는 태그하나!!! (만든 태그에는 자식 얼마든지)
function App() {
  return (
    <div className="App">
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
