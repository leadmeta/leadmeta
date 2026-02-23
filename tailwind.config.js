/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    50: '#fef2f0',
                    100: '#fde3dd',
                    200: '#fcc5b8',
                    300: '#f9a48f',
                    400: '#f48a72',
                    500: '#e8735c',
                    600: '#d45a43',
                    700: '#b24535',
                    800: '#933b30',
                    900: '#7a352d',
                },
                slate: {
                    750: '#293548',
                    850: '#172033',
                    950: '#0d1520',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
                display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
