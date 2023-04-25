
import './App.css';
import Header from './Components/user_panel/layout/header';
import Home from './Components/user_panel/views/Home';
import { Service } from './Components/user_panel/views/Services';
import Galary from './Components/user_panel/views/Galary';

function App() {
  return (
    <div className="App">
     <Header />
     <Home />
     <Service/>
     <Galary/>
    </div>
  );
}

export default App;
