/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],

  transformers: {
    // Add a transformer/plugin entry for handling .mp4 files
    '*.mp4': ['your-custom-video-transformer']
  }
}
