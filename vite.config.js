import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), sentryVitePlugin({
    org: "joshua-mi",
    project: "javascript-react"
  })],

  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    proxy: {
      '/api': {          // Proxy semua request yang diawali /api
        target: 'http://host.docker.internal:3000',  // Ganti dengan alamat backend-mu
        changeOrigin: true,
        secure: false,
      },
    },
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),  // Alias '@' ke folder src
    },
  },

  build: {
    sourcemap: true
  }
})