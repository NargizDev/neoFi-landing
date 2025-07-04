import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// @ts-expect-error TS2307: Node.js 'path' модуль не имеет типов в ESM
import path from 'path'
// @ts-expect-error TS2307: Node.js 'url' модуль не имеет типов в ESM
import { fileURLToPath } from 'url'

// @ts-expect-error TS2339: import.meta.url используется для определения __dirname в ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
