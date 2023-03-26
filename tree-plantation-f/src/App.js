import Login from './components/login.js'
import Score from './components/score.js'
import Menu from './components/menu.js'
import Add from './components/add.js'
import Label from './components/optiondata.js'


import { BrowserRouter, Routes, Route, Switch, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/score" element={<Score/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/list" element={<Label/>}/> 
      
      </Routes>
      </BrowserRouter>   
    </div>
  );
}

export default App;