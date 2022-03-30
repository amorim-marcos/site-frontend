import axios from 'axios'
import qs from 'qs'
import { useEffect, useState } from 'react'

export default function useEnvsFetch(pageSize: number) {
  const [numberOfEnvs, setNumberOfEnvs] = useState(30)
  const [fetchData, setFetchData] = useState(false)
  const [envs, setEnvs] = useState<any[]>([])
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [hasMore, setHasMore] = useState(true)

  const url = process.env.NEXT_PUBLIC_API_URL

  useEffect(() => {
    let cancel: any

    setFetchData(false)

    if (envs.length < numberOfEnvs) {
      setHasMore(true)
      setLoading(true)
      setError(false)

      const query = qs.stringify({
        _where: [{ pricing_gte: 20 }, { pricing_lte: 50 }]
      })
      console.log(query)
      axios({
        method: 'GET',
        url: process.env.NEXT_PUBLIC_API_URL + '/ambients',
        // params: {
        //   _limit: pageSize,
        //   _start: envs.length
        // },
        cancelToken: new axios.CancelToken((c) => (cancel = c))
      })
        .then((r) => {
          setEnvs((v) => [
            ...envs,
            ...r.data.map((gallery: any) => {
              return {
                id: gallery.id,
                title: gallery.title,
                name: gallery.place,
                bps: gallery.products.map((product: any) => product.name),
                type: gallery.ambient_type.url_code,
                style: String(gallery.ambient_styles[0].id),
                url_code: gallery.url_code,
                image_url: `${url}${gallery.gallery_of_images[0].url}`
              }
            })
          ])
          setLoading(false)
        })
        .catch((e) => {
          if (axios.isCancel(e)) return
          setError(true)
          setLoading(false)
          console.log(e)
        })
    } else {
      setHasMore(false)
    }
    return () => (typeof cancel === 'function' ? cancel() : null)
  }, [fetchData, numberOfEnvs, pageSize])

  useEffect(() => {
    axios.get(url + '/ambients/count').then((r) => setNumberOfEnvs(r.data))
  }, [])

  return { isLoading, data: envs, error, hasMore, setFetchData }
}
