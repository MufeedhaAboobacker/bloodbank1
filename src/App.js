import logo from './logo.svg';
import './App.css';
import Appbar from './components/Appbar';
import { Route, Routes } from 'react-router-dom';
import Loginsignup from './components/Loginsignup';
import Login from './components/Login';
import Sign from './components/Sign';
import Home from './components/Home';
import Homee from './components/Homee';




function App() {
  return (
    <div className="App">
<Appbar/>
<Routes>
<Route path='/loginsignup' element={<Loginsignup/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/sign' element={<Sign/>}/>
  <Route path='/dash' element={<Home/>}/>
  <Route path='/homee' element={<Homee/>}/>
</Routes>
    </div>
  );
}

export default App;
