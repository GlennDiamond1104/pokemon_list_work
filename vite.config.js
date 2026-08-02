import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  appType: 'npm',
  base: process.env.DEPLOY_BASE_URL ?? '/',
  plugins: [tailwindcss(), react()],
})


/*
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  appType: 'npm',
  base: '/pokemon_list_work/', // <--- Update it to match your exact repo name
  plugins: [tailwindcss(), react()],
})
  */