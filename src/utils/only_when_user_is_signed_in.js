import { setSignInModalOpen } from '../stores/useSignInModalStore'
import { useUserStore } from '../stores/useUserStore'

function onlyWhenUserIsSignedIn(callback) {
  return (e) => {
    if (useUserStore.getState().isSignedIn) {
      callback(e)
    } else {
      setSignInModalOpen(true)
    }
  }
}

export default onlyWhenUserIsSignedIn
