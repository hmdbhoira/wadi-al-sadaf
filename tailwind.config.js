/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Shared brand colors (will be updated from PDF)
        brand: {
          primary: '#1a1a1a',
          secondary: '#4a4a4a',
          light: '#f5f5f5',
        },
        // Section-specific accents (placeholders)
        machinery: {
          primary: '#FF6F00',    // Orange
          secondary: '#FFB74D',
          light: '#FFF3E0',
        },
        furniture: {
          primary: '#2E7D32',    // Green
          secondary: '#81C784',
          light: '#E8F5E9',
        },
        medical: {
          primary: '#1565C0',    // Blue
          secondary: '#64B5F6',
          light: '#E3F2FD',
        },
      },
    },
  },
  plugins: [],
};
