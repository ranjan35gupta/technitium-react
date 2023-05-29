import './App.css';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Admin from './components/molecules/admin/Admin';
import Student from './components/molecules/student/Student';
import { Provider } from 'react-redux';
import store from './components/redux/store';

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Provider store={store}>
      <Link to='/admin' style={{textDecoration:"none"}}><button>I am admin</button></Link>
      <Link to='/student' style={{textDecoration:"none"}}> <button>I am student</button>    </Link>
      
      <Routes>
        <Route path='/admin' element={<Admin/>}  />
        <Route path='/student' element={<Student/>}     />
      </Routes>


      </Provider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
