// ─── Google Sheets Integration ───────────────────────────────────────────────
// All requests use GET with URL parameters to avoid CORS preflight issues.
// ─────────────────────────────────────────────────────────────────────────────

const SHEETS_URL = 'https://script.google.com/macros/s/AKfycbymfCbqp0ysk90j8QWbceOnQ46jJwOjVv5JBRD4Gv4UuqM_vQWZZhjg5gty5SO1dW-Z6A/exec'
const RSVP_CAP = 40

/**
 * Build a GET URL with query parameters.
 */
function buildUrl(params) {
  const query = Object.entries(params)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&')
  return `${SHEETS_URL}?${query}`
}

/**
 * Fetch the current RSVP count from Google Sheets.
 */
export async function getRsvpCount() {
  try {
    const url = buildUrl({ action: 'count' })
    const res = await fetch(url)
    const data = await res.json()
    return { count: data.count ?? 0, isFull: (data.count ?? 0) >= RSVP_CAP }
  } catch (error) {
    console.error('Failed to get RSVP count:', error)
    return { count: 0, isFull: false }
  }
}

/**
 * Submit an RSVP, Waitlist entry, or Newsletter signup.
 * @param {'rsvp'|'waitlist'|'newsletter'} type
 * @param {{ name?: string, email: string }} formData
 * @returns {Promise<boolean>} success
 */
export async function submitToSheets(type, formData) {
  try {
    const url = buildUrl({
      action: type,
      name: formData.name || '',
      email: formData.email,
      timestamp: new Date().toISOString(),
    })
    const res = await fetch(url)
    const data = await res.json()
    return data.status === 'success'
  } catch (error) {
    console.error(`Sheets ${type} submission failed:`, error)
    return false
  }
}

export { RSVP_CAP }
