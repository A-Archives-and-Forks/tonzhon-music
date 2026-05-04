import { Heart, Loader } from 'lucide-react'
import { useEffect, useState } from 'react'
import usePositionedMessage from '@/hooks/usePositionedMessage'
import onlyWhenUserIsSignedIn from '../utils/only_when_user_is_signed_in'

function IconLikeSong({ song }) {
  const [isRequesting, setIsRequesting] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [showMessage, contextHolder] = usePositionedMessage()

  useEffect(() => {
    setIsLiked(false)
  }, [song?.newId])

  const handleClick = onlyWhenUserIsSignedIn((e) => {
    setIsRequesting(true)
    fetch(`/api/favorites`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        song,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          setIsLiked(true)
        } else {
          showMessage('error', json.message, e)
        }
      })
      .catch((err) => showMessage('error', err.message, e))
      .finally(() => setIsRequesting(false))
  })

  return (
    <>
      {contextHolder}
      {isRequesting ? (
        <Loader className="icon animate-spin" />
      ) : isLiked ? (
        <Heart
          className="icon"
          style={{
            color: 'rgb(254, 44, 85)',
            fill: 'rgb(254, 44, 85)',
          }}
        />
      ) : (
        <Heart className="icon" onClick={handleClick} />
      )}
    </>
  )
}

export default IconLikeSong
