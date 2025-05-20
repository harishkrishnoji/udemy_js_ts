import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import typescript from '@rollup/plugin-typescript'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), typescript({include: ['**/*.ts', '**/*.tsx'],})],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
