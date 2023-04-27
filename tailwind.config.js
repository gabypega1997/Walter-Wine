/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./common/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                gray: {
                    light: "#6B6B6B",
                    dark: "#424242",
                },
                wine: "#5B0005",
                yellow: "#F4E6B0",
                brown: "#CC8E6E",
            },
        },
    },
    plugins: [],
};
