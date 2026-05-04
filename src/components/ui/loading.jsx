import { Loader, LoaderCircle } from 'lucide-react'

const ICON_MAP = {
  ui: <LoaderCircle className="animate-spin" size={30} />,
  data: <Loader className="animate-spin" size={30} />,
}

export default function Loading({ kind = 'ui' }) {
  return <div className="flex justify-center">{ICON_MAP[kind]}</div>
}
