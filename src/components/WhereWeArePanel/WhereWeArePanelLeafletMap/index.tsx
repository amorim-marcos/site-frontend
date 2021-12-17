import dynamic from 'next/dynamic'

const WhereWeArePanelLeafletMap = dynamic(
  () => import('./WhereWeArePanelLeafletMap'),
  { ssr: false }
)

export default WhereWeArePanelLeafletMap
