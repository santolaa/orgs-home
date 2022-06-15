import { useEffect, useState } from 'react'
import { loadProducers } from '../services/loadData'

export default function useProducers() {
  const [title, setTitle] = useState('')
  const [producers, setProducers] = useState([])

  useEffect(() => {
    const result = loadProducers()

    result.list.sort((producer1, producer2) => producer1.distance - producer2.distance)

    setTitle(result.title)
    setProducers(result.list)
  }, [])

  return [title, producers]
}
