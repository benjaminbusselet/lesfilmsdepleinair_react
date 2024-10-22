import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    /* base: '/lesfilmsdepleinair_react/',  // Spécifie le chemin correct pour GitHub Pages */
});