import { MusicPlayerContext } from "../contexts/MusicPlayerContext"
import { MusicStoreContext } from "../contexts/MusicStoreContext"

export const usePlayer = () => {
  const { song, isPlaying, togglePlay, onChangeSong } = useContext(MusicPlayerContext)
  const { onGetNextSong, onGetPrevSong } = useContext(MusicStoreContext)

  const onNextSong = () => {
    const nextSong = onGetNextSong(song)
    onChangeSong(nextSong)
  }

  const onPrevSong = () => {
    const prevSong = onGetPrevSong(song)
    onChangeSong(prevSong)
  }

  return {
    onNextSong, onPrevSong, isPlaying, togglePlay
  }
}
