import { useCallback } from 'react'
import { Trash2 } from 'lucide-react'
import { useListenlistStore } from '@/stores/useListenlistStore'
import { useSongInPlayerStore } from '@/stores/useSongInPlayerStore'
import SimpleSong from './SimpleSong'

function Listenlist({ songs, newIdOfCurrentSong }) {
  const setListenlist = useListenlistStore((s) => s.setListenlist)
  const setSongInPlayer = useSongInPlayerStore((s) => s.setSongInPlayer)

  const removeSong = useCallback((newId) => {
    const filtered = songs.filter((item) => item.newId !== newId)
    setListenlist(filtered)
  }, [songs, setListenlist])

  return (
    <ol>
      {songs.map((song) => {
        const isCurrentSong = song.newId === newIdOfCurrentSong

        return (
          <li
            key={song.newId}
            className={`hover-show-icon flex items-center justify-between gap-2 px-2.5 py-1 cursor-pointer ${
              isCurrentSong ? 'bg-[#595959]' : 'hover:bg-[#434343]'
            }`}
          >
            <div
              onClick={() => setSongInPlayer(song)}
              className="flex-1 min-w-0"
            >
              <SimpleSong song={song} />
            </div>
            {isCurrentSong || (
              <div>
                <Trash2
                  className="icon-hover-bg"
                  onClick={() => removeSong(song.newId)}
                />
              </div>
            )}
          </li>
        )
      })}
    </ol>
  )
}

export default Listenlist
