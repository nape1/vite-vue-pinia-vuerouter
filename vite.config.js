import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL('./src', import.meta.url)),
      "@components": fileURLToPath(new URL('./src/components', import.meta.url)),
      "@assets": fileURLToPath(new URL("src/assets", import.meta.url)),
    },
    // alias: [
    //     { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
    //     { find: '@components', replacement: fileURLToPath(new URL('./src/components', import.meta.url)) },
    //   ],
  },
})
