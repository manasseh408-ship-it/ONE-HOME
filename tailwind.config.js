/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007AFF',
        accent: '#FF6B35',
        success: '#34C759',
        danger: '#FF3B30',
        neutral: {
          50: '#F2F2F7',
          100: '#FFFFFF',
          500: '#8E8E93',
          900: '#000000',
        },
      },
      spacing: {
        'gutter': '8px',
        'gutter-2': '16px',
        'gutter-3': '24px',
        'gutter-4': '32px',
        'gutter-6': '48px',
      },
      borderRadius: {
        'sm': '8px',
        'md': '12px',
      },
      fontSize: {
        'h1': ['32px', { fontWeight: '700' }],
        'h2': ['28px', { fontWeight: '700' }],
        'h3': ['24px', { fontWeight: '700' }],
        'body': ['16px', { fontWeight: '400' }],
        'small': ['14px', { fontWeight: '400' }],
        'xs': ['12px', { fontWeight: '500' }],
      },
      screens: {
        'mobile': { 'max': '767px' },
        'tablet': { 'min': '768px', 'max': '1023px' },
        'desktop': { 'min': '1024px' },
      },
    },
  },
  plugins: [],
}
