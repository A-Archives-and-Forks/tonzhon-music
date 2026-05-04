import { useEffect } from 'react'
import HomeSongs from './HomeSongs'

export default function Home() {
  useEffect(() => {
    document.title = '铜钟 Tonzhon'
  }, [])

  return (
    <div className="panel">
      <HomeSongs />
    </div>
  )
}
