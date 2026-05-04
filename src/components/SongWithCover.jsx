import LinkSearchArtist from './LinkSearchArtist'
import { generateSongCover } from '@/utils/generateSongCover'

function SongWithCover({ song }) {
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
        <div className="truncate">
          {song.name}
          {song.alias && (
            <span className="text-[13px] italic ml-1">{song.alias}</span>
          )}
        </div>
        <div className="text-[12px] truncate flex gap-2">
          {song.artists.map((artist) => (
            <LinkSearchArtist key={artist.id} artistName={artist.name} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SongWithCover
