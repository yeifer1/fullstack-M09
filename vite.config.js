import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // las rutas que coincidan con esta ruta serán proxies.
      '/api': 'https://tame-yoke-moth.cyclic.app'
    }
  }
});
