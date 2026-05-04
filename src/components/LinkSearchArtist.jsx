import { Link } from 'react-router-dom'

function LinkSearchArtist({ artistName }) {
  const initialColor = 'white'
  return (
    <Link
      to={`/search/${artistName}`}
      onMouseEnter={(e) => (e.target.style.color = '#fa8c16')}
      onMouseLeave={(e) => (e.target.style.color = initialColor)}
      style={{
        color: initialColor,
      }}
    >
      {artistName}
    </Link>
  )
}

export default LinkSearchArtist
