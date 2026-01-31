import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Pastikan tailwindcss diimport jika Anda menggunakannya
import tailwindcss from '@tailwindcss/vite' 

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Pastikan plugin ini dipanggil di sini
  ],
  // CUKUP NAMA REPO NYA SAJA:
  base: '/kios/', 
})