
import './App.css';
import ContactUs from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Router from './Components/Router';

function App() {
  return (
    <div>
       <Router history={history}>
      <Home />
    </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;