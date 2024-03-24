export const MusicPlayerContext = createContext({
  song: null, //
  isPlaying: false, //
  togglePlay: () => { }, //
  onChangeSong: () => { } //
})

const MusicPlayerProvider = ({ children }) => {
  const [song, setSong] = useState(null); // {name: "heaven's On Fire - Jazz", file: Track2 }
  const [isPlaying, setIsPlaying] = useState(false);
  const audioPlayer = useRef(new Audio());

  const togglePlay = () => {
    setIsPlaying(prev => !prev);
  }

  const onChangeSong = (newSong) => {
    setSong(newSong);
    audioPlayer.current = new Audio(newSong.file);
    setIsPlaying(true);
  }

  useEffect(() => {
    if (!song) return;

    if (!isPlaying) {
      audioPlayer.current.pause();
    } else {
      audioPlayer.current.play();
    }
  }, [isPlaying, song]);

  return (
    <MusicPlayerContext.Provider value={{ song, isPlaying, togglePlay, onChangeSong }}>
      {children}
    </MusicPlayerContext.Provider>
  )
}

export default MusicPlayerProvider


