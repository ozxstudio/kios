import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react()],
  base: 'https://github.com/ozxstudio/kios', // Sesuaikan dengan nama repository Anda
})    
