import { useEffect, useState } from 'react'
import { fetchJob, fetchJobs } from '../services/api.js'
import { careers } from '../data/site.js'

// state: 'loading' | 'ready' | 'missing' | 'error'
export function useJobs() {
  const [state, setState] = useState({ status: 'loading', jobs: [] })
  useEffect(() => {
    let live = true
    fetchJobs()
      .then((jobs) => live && setState({ status: 'ready', jobs }))
      .catch(() => live && setState({ status: 'error', jobs: [] }))
    return () => { live = false }
  }, [])
  return state
}

export function useJob(id) {
  const [state, setState] = useState({ status: 'loading', job: null })
  useEffect(() => {
    let live = true
    if (id === 'general') {
      setState({ status: 'ready', job: careers.general })
      return undefined
    }
    setState({ status: 'loading', job: null })
    fetchJob(id)
      .then((job) => live && setState(job ? { status: 'ready', job } : { status: 'missing', job: null }))
      .catch(() => live && setState({ status: 'error', job: null }))
    return () => { live = false }
  }, [id])
  return state
}
