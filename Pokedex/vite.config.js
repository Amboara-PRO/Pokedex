// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // <--- AJOUTEZ CETTE LIGNE

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <--- AJOUTEZ CETTE LIGNE
  ],
});