
const LIST = [
  {
    id: 1,
    name: "Cold Gin - Jazz",
    file: Track1,
  },
  {
    id: 2,
    name: "heaven's On Fire - Jazz",
    file: Track2,
  },
  {
    id: 3,
    name: "Beth - Jazz",
    file: Track3,
  },
]

export const MusicStoreContext = createContext({
  tracks: LIST,
  onGetNextSong: () => { },
  onGetPrevSong: () => { }
})

const MusicStoreProvider = ({ children }) => {
  const [songs] = useState(LIST)

  const onGetNextSong = (currentSong) => {
    const currentIndex = songs.findIndex(song => song.id === currentSong.id)

    // last song
    if (currentIndex === songs.length - 1) return songs[0]

    return songs[currentIndex + 1]

  }

  const onGetPrevSong = (currentSong) => {
    const currentIndex = songs.findIndex(song => song.id === currentSong.id)

    // first song
    if (currentIndex === 0) return songs[songs.length - 1]

    return songs[currentIndex - 1]
  }

  const onRandomSong = () => {
    const randomIndex = Math.floor(Math.random() * songs.length)
    return songs[randomIndex]

  }


  return (
    <MusicStoreContext.Provider value={{ songs, onGetNextSong, onGetPrevSong }}>
      {children}
    </MusicStoreContext.Provider>
  )
}

export default MusicStoreProvider

