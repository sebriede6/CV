import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/cv/', // Basis-URL für die Unterseite (z. B. /cv/ für GitHub Pages)
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist', // Ausgabeordner für den Build
    assetsDir: 'assets', // Ordner für statische Dateien
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]', // Struktur für Assets
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
      },
    },
  },
});