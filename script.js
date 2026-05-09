tailwind.config = {
    theme: {
        extend: {
            colors: {
                brand: {
                    50: '#fffbf0',
                    100: '#fff7e9',
                    200: '#ffeebb',
                    300: '#ffd680',
                    400: '#ffbf47',
                    500: '#f59e0b',
                    600: '#d97706',
                    700: '#b45309',
                    800: '#92400e',
                    900: '#78350f',
                    950: '#451a03',
                },
                fresh: {
                    500: '#22c55e',
                    600: '#16a34a',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['DM Serif Display', 'serif'],
            }
        }
    }
}

// Mobile Menu Toggle
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add('hidden');
    });
});
