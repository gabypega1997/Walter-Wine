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

                    "50%": { transform: " translateX(calc(50vw + 50%))" },

                    "60%": {
                        transform: "translateX(calc(49vw + 50%)) rotate(-6deg)",
                    },

                    "100%": {
                        transform:
                            "translateX(calc(100vw + 150%)) rotate(-6deg)",
                    },
                },

                arrow: {
                    "0%": { transform: "translateX(0)" },

                    "50%": { transform: " translateX(calc(50vw + 50%))" },

                    "60%": {
                        transform: "translateX(calc(49vw + 50%)) ",
                    },

                    "100%": {
                        transform: "translateX(calc(100vw + 150%)) ",
                    },
                },

                confirmation: {
                    "0%": { transform: "translateX(calc(-100%))" },
                    "100%": {
                        transform: "translate(calc(50vw - 50%),calc(-100%))",
                    },
                },
            },
            animation: {
                truck: "truck 4s ease",
                arrow: "arrow 4s ease",
                confirmation: "confirmation 0.3s ease-out 3s forwards ",
            },
        },
    },
    plugins: [],
};
