import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path'


const root = resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        math: "always",
        relativeUrls: true,
        javascriptEnabled: true
      },
    },
  },
  resolve: {
    alias: {
      "assets": resolve(root, 'assets'),
      "contexts": resolve(root, 'contexts'),
      "utils": resolve(root, 'utils'),
      "hooks": resolve(root, 'hooks')
    },
  },
})
