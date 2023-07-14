import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    proxy: {
      "/books": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false
      }
    },
  },
  plugins: [react()],
});