import './App.css'
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import Layout from './components/Layout';

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import MovieDetails from './pages/MovieDetails';
import Dashboard from './pages/Dashboard'
import AddMovie from './pages/AddMovie'
import EditMovie from './pages/EditMovie';

// MUI AND REACT ROUTER ADDED

const App = () => {

  // const [user, setUser] = useState(null)

  // useEffect(() => {
  //   const foundUser = JSON.parse(localStorage.getItem("user"))
  //   console.log({foundUser})
  //   if(foundUser) {
  //     setUser(foundUser)
  //   }
  // }, [])
  
  return (
    <>
    <CssBaseline />
    <Routes>
      <Route path="/" element={<Layout/>} > 
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="movies/:id" element={<MovieDetails />} />

        <Route path="dashboard" element={<Dashboard />} />
        <Route path="add-movie" element={<AddMovie />} />
        <Route path="edit-movie/:id" element={<EditMovie />} />

      </Route>
    </Routes>
    </>
  )
}

export default App


