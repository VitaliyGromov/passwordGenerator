/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            width: {
                '556': '34rem',
            },
            colors: {
              'very-light-grey': 'rgb(244, 246, 255)',
            }
        },
    },
    plugins: [],
}
