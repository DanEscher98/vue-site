import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import Unfonts from 'unplugin-fonts/vite'
import { fileURLToPath, URL } from 'url'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  const PWA_NAME = env.VITE_PWA_NAME || 'My Vue App'
  const PWA_THEME_COLOR = env.VITE_PWA_THEME_COLOR || '#8F00FF'
  const PWA_ICON_SRC = env.VITE_PWA_ICON_SRC || 'pwa-512x512.png'

  return {
    plugins: [
      vue(),
      tailwindcss(),
      Unfonts({
        google: {
          families: [
            // Default brand fonts
            { name: 'Source Sans Pro', styles: 'wght@400;600;700' },
            { name: 'Playfair Display SC', styles: 'wght@400;700' },
            { name: 'Source Code Pro', styles: 'wght@400;500' },
            { name: 'Bungee' },
            // Additional brand fonts (for easy switching)
            { name: 'Inter', styles: 'wght@400;500;600;700' },
            { name: 'Poppins', styles: 'wght@400;500;600;700' },
            { name: 'Montserrat', styles: 'wght@400;500;600;700' },
            { name: 'Orbitron', styles: 'wght@400;700' },
            { name: 'Abril Fatface' },
            { name: 'Lato', styles: 'wght@400;700' },
            { name: 'Raleway', styles: 'wght@400;600;700' },
            { name: 'Open Sans', styles: 'wght@400;600;700' },
            { name: 'Roboto', styles: 'wght@400;500;700' },
            { name: 'JetBrains Mono', styles: 'wght@400;500' },
            { name: 'Quicksand', styles: 'wght@400;500;600' },
          ],
        },
      }),
      VitePWA({
        registerType: 'autoUpdate',
        injectRegister: 'auto',
        workbox: {
          clientsClaim: true,
          skipWaiting: true,
          globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        },
        devOptions: {
          enabled: true,
        },
        manifest: {
          name: PWA_NAME,
          short_name: PWA_NAME,
          theme_color: PWA_THEME_COLOR,
          background_color: '#ffffff',
          display: 'standalone',
          icons: [
            {
              src: PWA_ICON_SRC,
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: PWA_ICON_SRC,
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable',
            },
          ],
        },
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    build: {
      outDir: 'dist',
      rollupOptions: {
        output: {
          manualChunks: {
            vue: ['vue', 'vue-router', 'pinia'],
          },
        },
      },
    },
  }
})
