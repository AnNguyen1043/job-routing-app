import React from 'react'
import SearchAppBar from './components/SearchAppBar'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'
import {Routes, Route } from "react-router-dom"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material'
import AppProvider from './AppContext'
// import {  red } from '@mui/material/colors';
import "./style/app.scss"

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#9E9E9E',
    },
    secondary: {
      main: '#D32F2F',
    },
    info:{
      main: '#FFB74D',
    }
  },
});

function App() {
  return (
    
    <div>
      <ThemeProvider theme={theme}>
        <AppProvider>
        <CssBaseline />
        <SearchAppBar/>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/job/:id" element={<DetailPage/>}> </Route>
        </Routes>
        </AppProvider>
      </ThemeProvider>
    </div>
    
  )
}

export default App
