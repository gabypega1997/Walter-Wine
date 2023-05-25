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
            keyframes: {
                truck: {
                    "0%": { transform: "translateX(0)" },

                    "40%": { transform: "translateX(calc(60vw))" },

                    "50%": { transform: " translateX(calc(60vw))" },

                    "60%": {
                        transform: "translateX(calc(58vw)) rotate(-6deg)",
                    },

                    "100%": { transform: "translateX(140vw) rotate(-6deg)" },
                },
                arrow: {
                    "0%": { transform: "translateX(0)" },

                    "40%": { transform: "translateX(calc(60vw))" },

                    "50%": { transform: " translateX(calc(60vw))" },

                    "60%": { transform: "translateX(calc(58vw)) " },

                    "100%": { transform: "translateX(140vw) " },
                },
                confirmation: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(calc(50vw + 80px))" },
                },
            },
            animation: {
                truck: "truck 4s ease",
                arrow: "arrow 4s ease",
                confirmation: "confirmation 1s ease-out 4s forwards ",
            },
        },
    },
    plugins: [],
};
