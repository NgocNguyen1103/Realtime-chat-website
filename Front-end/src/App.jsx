import React from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Chat from './pages/Chat/Chat'


import Login from './pages/Login/Login'
import Sign_up from './pages/Sign_up/Sign_up'

import Features from './pages/Features/Features'
import DesktopApp from './pages/DesktopApp/DesktopApp'
import Privacy from './pages/Privacy/Privacy'
import Login_Navbar from './components/login/LoginNavBar/Login_Navbar'
import Merge_duc from './components/merge_chat_info/duc/Merge_duc'
import Chat1 from './components/merge_chat_info/Chat1/Chat1'
import Merge_phuong from './components/merge_chat_info/phuong/Merge_phuong'
import Merge_ngoc from './components/merge_chat_info/ngoc/Merge_ngoc'
import Merge_nghia from './components/merge_chat_info/nghia/Merge_nghia'
import Merge_duy from './components/merge_chat_info/duy/Merge_duy'


const App = () => {
  const location = useLocation();
  const showNavbar = location.pathname == '/' || location.pathname == '/signup ' || location.pathname == '/features' || location.pathname == '/desktop-app' || location.pathname == '/privacy' || location.pathname == '/signup';
  
  return (

    <>
      {showNavbar ? <Login_Navbar /> : <></>}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Sign_up />} />
        <Route path='/features' element={<Features />} />
        <Route path='/desktop-app' element={<DesktopApp />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/chat' element={<Chat />} >
          <Route path='1' element={<Chat1 />} />
          <Route path='2' element={<Merge_phuong />} />
          <Route path='3' element={<Merge_ngoc />} />
          <Route path='4' element={<Merge_nghia />} />
          <Route path='5' element={<Merge_duc />} />
          <Route path='6' element={<Merge_duy />} />
        </Route>
        
      </Routes>
      
    </>
  )
}



export default App;
