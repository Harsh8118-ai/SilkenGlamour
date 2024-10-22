import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';  // Separate chunk for vendor libraries
          }
          if (id.includes('/components/Service/')) {
            return 'service';  // Separate chunk for service-related components
          }
          if (id.includes('/components/Contact/')) {
            return 'contact';  // Separate chunk for contact-related components
          }
          if (id.includes('/components/Profile/')) {
            return 'profile';  // Separate chunk for profile-related components
          }
          if (id.includes('/components/FAQ/')) {
            return 'faq';  // Separate chunk for FAQ-related components
          }
          // Add more manual chunking logic if necessary
        }
      }
    }
  }
});
