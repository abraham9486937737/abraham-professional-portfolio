import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/abraham-professional-portfolio/',
  plugins: [react()],
  build: {
    sourcemap: false,
    target: 'es2018'
  }
});
