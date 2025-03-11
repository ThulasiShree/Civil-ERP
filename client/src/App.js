import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Sidebar from './Components/Sidebar/Sidebar';
import DashBoard from './Pages/DashBoard/DashBoard';
import Clients from './Pages/Clients/Clients';
import Contractor from './Pages/Contractor/Contractor';
import Expense from './Pages/Expense/Expense';
import Inventory from './Pages/Inventory/Inventory';
import Labour from './Pages/Labour/Labour';
import Login from './Pages/Login/Login';
import Logout from './Pages/Logout/Logout';
import Project from './Pages/Project/Project';
import Quatation from './Pages/Quatation/Quatation';
import Statement from './Pages/Statement/Statement';
import Stock from './Pages/Stock/Stock';
import Vechile from './Pages/Vechile/Vechile';
import AddNewMaterial from './Components/AddNewMaterial/AddNewMaterial';
import Signup from './Components/Signup/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Sidebar/>}/> */}
        <Route path='/dashboard' element={<DashBoard/>}/>
        <Route path='/clients' element={<Clients/>}/>
        <Route path='/contractor' element={<Contractor/>}/>
        <Route path='/expense' element={<Expense/>}/>
        <Route path='/inventory' element={<Inventory/>}/>
        <Route path='/labour' element={<Labour/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/logout' element={<Login/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/quatation' element={<Quatation/>}/>
        <Route path='/statement' element={<Statement/>}/>
        <Route path='/stock' element={<Stock/>}/>
        <Route path='/vechile' element={<Vechile/>}/> 
        <Route path='/addmaterial' element={<AddNewMaterial/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
