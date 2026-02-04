/**
 * Tailwind CSS Configuration File
 * Custom medical-grade color palette and design tokens
 */

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#4A8C2A', // Medical Green
        secondary: '#FFD700', // Medical Yellow
        accent: '#FF5733', // Medical Red
        neutral: '#F0F0F0', // Light Gray
        'dark-gray': '#333333', // Dark Gray
      },
      spacing: {
        '2': '8px',
        '4': '16px',
        '8': '32px',
        '16': '64px',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '16px',
      },
    },
  },
  variants: {},
  plugins: [],
};
