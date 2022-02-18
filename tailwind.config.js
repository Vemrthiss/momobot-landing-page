module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html, './node_modules/tw-elements/dist/js/**/*.js'}",
  ],
  theme: {
    extends: {}
  },
  plugins: [require('tw-elements/dist/plugin')],
}