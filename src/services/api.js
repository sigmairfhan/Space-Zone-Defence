// Base URL of the PHP endpoints. Override with VITE_API_BASE in .env
const API_BASE = import.meta.env.VITE_API_BASE || '/api'

async function post(path, formData) {
  const res = await fetch(`${API_BASE}/${path}`, { method: 'POST', body: formData })
  let data = {}
  try {
    data = await res.json()
  } catch {
    /* non-JSON response */
  }
  if (!res.ok || data.success === false) {
    throw new Error(data.message || 'Something went wrong. Please try again.')
  }
  return data
}

export const sendContact = (formData) => post('contact.php', formData)
export const sendApplication = (formData) => post('careers.php', formData)

async function get(path) {
  const res = await fetch(`${API_BASE}/${path}`)
  let data = {}
  try {
    data = await res.json()
  } catch {
    /* non-JSON response */
  }
  if (res.status === 404) return null
  if (!res.ok || data.success === false) throw new Error(data.message || 'Could not load data.')
  return data
}

// Job openings are created in the dashboard (dashboard.spacezonedefence.com/admin)
export const fetchJobs = async () => (await get('jobs.php')).jobs
export const fetchJob = async (slug) => {
  const data = await get(`jobs.php?slug=${encodeURIComponent(slug)}`)
  return data ? data.job : null
}
