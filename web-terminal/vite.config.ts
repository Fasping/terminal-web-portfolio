/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { seo } from './vite-plugin-seo'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), seo()],
  test: {
    environment: 'jsdom',
    setupFiles: './test/setup.ts',
    css: true,
  },
})
