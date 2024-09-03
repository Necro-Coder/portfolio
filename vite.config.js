import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Reemplaza esto por la ruta en la que GitHub Pages servirá tu sitio
  build: {
    outDir: 'dist',
  },
})
