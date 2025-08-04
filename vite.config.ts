import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    checker({
      typescript: {
       tsconfigPath: path.resolve(__dirname, "./tsconfig.app.json")
      }
    })
  ],
})
