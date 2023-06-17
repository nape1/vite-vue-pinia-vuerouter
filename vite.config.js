import vue from '@vitejs/plugin-vue';
import { presetAttributify, presetUno } from 'unocss';
import UnoCss from 'unocss/vite';
import { fileURLToPath, URL } from "url";
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCss({
        presets:[
            presetUno(),
            presetAttributify()
        ]
    })
],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL('./src', import.meta.url)),
      "@components": fileURLToPath(new URL('./src/components', import.meta.url)),
      "@assets": fileURLToPath(new URL("src/assets", import.meta.url)),
    },
  },
})
