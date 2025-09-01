import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) return 'vendor';
          if (id.includes('/components/Service/')) return 'service';
          if (id.includes('/components/Contact/')) return 'contact';
          if (id.includes('/components/Profile/')) return 'profile';
          if (id.includes('/components/FAQ/')) return 'faq';
          if (id.includes('/components/Blog')) return 'blog';
        }
      }
    }
  }
});
