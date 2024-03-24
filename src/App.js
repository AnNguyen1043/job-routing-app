import React from 'react'
import SearchAppBar from './components/SearchAppBar'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'
import { Routes, Route } from "react-router-dom"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material'
import AppProvider from './AppContext'
// import {  red } from '@mui/material/colors';
import "./style/app.scss"
import SignInModal from './components/SignInModal'
import MusicStoreProvider, { MusicStoreContext } from './contexts/MusicStoreContext'
import MusicPlayerProvider from './contexts/MusicPlayerContext'
import { usePlayer } from './hooks/usePlayer'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#9E9E9E',
    },
    secondary: {
      main: '#D32F2F',
    },
    info: {
      main: '#FFB74D',
    }
  },
});

function App() {
  return (
    <MusicStoreProvider>
      <MusicPlayerProvider>
        <ListMusic />
        <MusicController />
      </MusicPlayerProvider>
    </MusicStoreProvider>
  )
}

const MusicController = () => {
  const { onNextSong, onPrevSong, isPlaying, togglePlay } = usePlayer()

  return (
    <div className="music-controller">
      <h3>{song?.name}</h3>

      <button onClick={onNextSong}>Back</button>

      <button onClick={togglePlay}>
        {isPlaying ? "Pause" : "Play"}
      </button>

      <button onClick={onPrevSong}>Next</button>
    </div>
  )
}

const ListMusic = () => {
  const { onChangeSong } = useContext(MusicPlayerContext)

  return (
    <div className="list-music">
      {songs.map((song) => (
        <div key={song.id} onClick={() => onChangeSong(song)}>
          {song.name}
        </div>
      ))}
    </div>
  )
}

export default App
