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
