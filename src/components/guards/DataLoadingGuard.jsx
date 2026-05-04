import Loading from '@/components/ui/loading'

export default function DataLoadingGuard({ loading, children }) {
  return loading ? <Loading kind="data" /> : children
}
