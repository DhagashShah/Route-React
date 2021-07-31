import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail';
import Welcome from './pages/Welcome';

function App() {
  return (
    <div>
      <Header />
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/product">
        <Product/>
      </Route>
      <Route path="/product-detail/:id"> 
        <ProductDetail/>
      </Route>
    </div>
  );
}

export default App;
