import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SelectAll from './Components/SelectAll';
import Layout from './Components/Layout';
import Insert from './Components/Insert';
import Home from './Components/Home';
import SelectByID from './Components/SelectByID';
import UpdateByID from './Components/UpdateByID';
import SelectAllTopic from './Components/SelectAllTopic';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Layout />} >
            <Route index path='/' element={<Home />} />
            <Route path='/SelectAll' element={<SelectAll />} />
            <Route path='/SelectAllTopic' element={<SelectAllTopic />} />
            <Route path='/SelectAll/SelectByID/:id' element={<SelectByID />} ></Route>
            <Route path='/SelectAll/UpdateByID/:id' element={<UpdateByID />} ></Route>
            <Route path='/Insert' element={<Insert />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
