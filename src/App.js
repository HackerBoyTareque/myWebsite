import logo from './logo.svg';
// import './App.css';
import Header from "./components/Header/Header";
import { BrowserRouter } from 'react-router-dom';
import Main from "./components/MainBody/Main";


function App() {
  return (
    <div>
      <div className="mainBody">
      <BrowserRouter>
      <Header/>
      <Main/>
      
      </BrowserRouter>
      
      </div>

      
      



    </div>
  );
}

export default App;
