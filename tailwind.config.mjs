/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: '#0A0B0A',
        surface: '#111312',
        border: '#1E2220',
        green: {
          DEFAULT: '#4ADE80',
          dim: '#166534',
          glow: '#22c55e33',
        },
        text: '#E8EDE9',
        muted: '#6B7A6E',
      },
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
        serif: ['"Noto Serif JP"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
}
