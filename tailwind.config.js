/** @type {import('tailwindcss').Config} */

const withOpacity = (variable) => {
  return ({ opacityValue }) => {
    if (opacityValue == null) {
      return `rgb(var(${variable}))`
    }
    return `rgba(var(${variable}), ${opacityValue})`
  }
}

module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: withOpacity('--color-theme'),
        muted: withOpacity('--color-muted'),
        'theme-dark': withOpacity('--color-theme-dark'),
        'theme-light': withOpacity('--color-theme-light')
      }
    },
  },
  plugins: [],
}
