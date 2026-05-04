import { useEffect, useState } from 'react'
import DataLoadingGuard from '@/components/guards/DataLoadingGuard'
// import HeaderOfSongs from '@/components/HeaderOfSongs'
import SongList from '@/components/SongList'

export default function HomeSongs() {
  const [loading, setLoading] = useState(true)
  const [songs, setSongs] = useState([])

  useEffect(() => {
    setLoading(true)
    fetch(`/api/hot-songs`)
      .then((res) => res.json())
      .then(({ success, songs }) => {
        if (success) {
          setSongs(songs)
        }
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, [])

  return (
    <DataLoadingGuard loading={loading}>
      <div>
        {/* <HeaderOfSongs songs={songs} /> */}
        <SongList songs={songs} />
      </div>
    </DataLoadingGuard>
  )
}
