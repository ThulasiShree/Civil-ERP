import React from 'react'
import './Logout.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { useNavigate } from "react-router-dom";

const Logout = () => {

  const navigate = useNavigate();

  return (
    <div onClick={() => navigate('/')}>
      <Sidebar/>
    </div>
  )
}

export default Logout