import { Redirect, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail';
import Welcome from './pages/Welcome';

function App() {
  return (
    <div>
      <Route path="/" exact>
        <Redirect to="/welcome"></Redirect>
      </Route>
      <Route path="/header">
        <Header />
      </Route>
      <Route path="/welcome">
        <Welcome />
      </Route>
      
    </div>
  );
}

export default App;
