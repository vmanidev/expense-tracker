import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Expense Tracker',
        short_name: 'Expense Tracker',
        description: 'Expense Tracker helps you to track your income and expenses, manage categories.',
        theme_color: '#000000',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            "src": "/images/favicon.ico",
            "sizes": "64x64 32x32 24x24 16x16",
            "type": "image/x-icon"
          },
          {
            "src": "/images/logo192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "/images/logo512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ]
      }
    })
  ],
})
