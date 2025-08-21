import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split vendor (node_modules) into separate chunks
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor'; // Separate React libraries
            }
            if (id.includes('lucide-react')) {
              return 'icons'; // Split icons
            }
            if (id.includes('framer-motion')) {
              return 'motion'; // Split framer-motion
            }
            if (id.includes('recharts')) {
              return 'charts'; // Split charts
            }
            return 'vendor'; // Everything else
          }

          // App-specific chunks
          if (id.includes('/components/Service/')) {
            return 'service';
          }
          if (id.includes('/components/Contact/')) {
            return 'contact';
          }
          if (id.includes('/components/Profile/')) {
            return 'profile';
          }
          if (id.includes('/components/FAQ/')) {
            return 'faq';
          }
          if (id.includes('/components/Blog')) {
            return 'blog';
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increase limit so warnings don't spam
  },
});
