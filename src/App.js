import './App.css';
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import ProductScreen from './screen/ProductScreen';
import HomeScreen from './screen/HomeScreen';
function App() {
  return (
    <BrowserRouter>
    {/* <div className="grid-container"> */}
    <header className="row">
      <div>
        <a className="brand" href="/">amazon</a>
      </div>
      <div>
        <a href="/cart">Cart</a>
        <a href="/signin">Sign In</a>
      </div>
    </header>
  
    <main>
    <Routes>
      <Route path="/product/:id" element={<ProductScreen />} />
      <Route path="/"  element={<HomeScreen />} exact />
      </Routes>
    </main>
    <footer className="row center">All right reserved</footer>
    {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
