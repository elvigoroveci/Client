import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './Components/Jumbotron/Home';
import Content from './Components/Content/Content';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Content />
    </div>
  );
}

export default App;
