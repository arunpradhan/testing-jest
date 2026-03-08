import logo from './logo.svg';
import './App.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" title='logo image' />
        <div>
          Learn React
        </div>
        <div>
          <input type='text' placeholder='Enter Your Name' name='username' id='userid'/>
        </div>
      </header>
    </div>
  );
}

export default Home;
