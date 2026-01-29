// script.js

// 1. Tailwind Configuration
tailwind.config = {
    theme: {
        fontFamily: {
            sans: ['Kanit', 'sans-serif'],
        },
        extend: {
            colors: {
                'vote-primary': '#1e3a8a', // Dark Blue
                'vote-accent': '#fbbf24',  // Yellow (Referendum)
                'vote-green': '#10b981',   // Green (MPs)
            }
        }
    }
}

// 2. Any interactive logic (Example: Console log to check connection)
console.log("Vote 69 project loaded successfully.");