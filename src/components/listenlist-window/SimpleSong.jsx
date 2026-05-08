import artistsReducer from '@/utils/artists_reducer'
import { generateSongCover } from '@/utils/generateSongCover'

function SimpleSong({ song }) {
  const backgroundStyle = song.cover
    ? {
        backgroundImage: `url(${song.cover})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : { backgroundColor: generateSongCover(song.newId) }

  return (
    <div className="flex items-center gap-2 min-w-0">
      <div
        className="w-10 h-10 rounded flex-shrink-0"
        style={backgroundStyle}
      />
      <div className="flex-1 min-w-0">
        <div className="truncate">{song.name}</div>
        <div className="text-gray-500 text-[12px] truncate">
          {artistsReducer(song.artists)}
        </div>
      </div>
    </div>
  )
}

export default SimpleSong
