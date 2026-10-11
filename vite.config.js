import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' permite publicar en GitHub Pages sin que la página quede en blanco
export default defineConfig({
  plugins: [react()],
  base: './',
})
