import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Change this to '/' if using username.github.io repo, or '/your-repo-name/' for project page
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
