import dynamic from 'next/dynamic'

const LeafletMaps = dynamic(() => import('./LeafletMaps'), {
  ssr: false
})

export default LeafletMaps
