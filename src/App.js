import Movies from './components/organisms/Home'
import Cart from './components/molecules/cart/Cart';
import './App.css';
import { Provider } from 'react-redux';
import store from './components/redux/store'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="linkcontainer">
        <Link style={{textDecoration:"none"}} to="/cart">Cart</Link>
      <Link  style={{textDecoration:"none"}} to="/">Home</Link></div>
      
      <Provider store={store}>
      <Routes>
       <Route path='/' element={<Movies/>}   />
       <Route path='/cart' element={<Cart/>}   />
        
        <Route/>
      </Routes>
      </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
