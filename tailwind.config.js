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
                    50: '#eff6ff',
                    100: '#dbeafe',
                    200: '#bfdbfe',
                    300: '#93c5fd',
                    400: '#60a5fa',
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8',
                    800: '#1e40af',
                    900: '#1e3a8a',
                },
                slate: {
                    750: '#293548',
                    850: '#172033',
                    950: '#0d1520',
                },
            },
            fontFamily: {
                sans: ['Inter', 'GMarketSans', 'system-ui', '-apple-system', 'sans-serif'],
                display: ['Outfit', 'GMarketSans', 'Inter', 'system-ui', 'sans-serif'],
            },
            lineHeight: {
                tight: '1.3',
                normal: '1.6',
                relaxed: '1.8',
                loose: '2',
            },
            letterSpacing: {
                tight: '-0.01em',
                tighter: '-0.02em',
                widest: '0.1em',
            },
        },
    },
    plugins: [],
}
