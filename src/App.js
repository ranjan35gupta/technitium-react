import SearchBar from './components/SearchBar';
import './App.css';
import {store} from './components/store'
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <SearchBar/>
      </Provider>
    </div>
  );
}

export default App;
