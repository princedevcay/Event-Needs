import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1000, // Limit in KBs
  },
  plugins: [react()],
  server: {
    proxy: {
      // Using the "/api" prefix to match requests
      // This will proxy any requests on the /api endpoint to localhost:5000
      '/api': 'https://event-needs-backend.onrender.com'
    }
  }
});