import { defineConfig } from 'astro/config';
import path from 'path';

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@cv': path.resolve('./cv.json'), // Alias para que @cv apunte al archivo cv.json
      },
    },
  },
});

