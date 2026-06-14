import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  preview: {
    allowedHosts: ['restaurant-demo-production-7faa.up.railway.app'],
  },
})
