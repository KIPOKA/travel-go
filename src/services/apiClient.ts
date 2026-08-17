import axios from 'axios'

/**
 * Single axios instance for the whole app.
 * Vite dev server proxies /api -> the Node/Express backend (see vite.config.ts).
 * In production, VITE_API_BASE_URL should point at the deployed API.
 */
export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? '/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Centralized place to handle 401s, log errors, show toasts, etc.
    return Promise.reject(error)
  }
)
