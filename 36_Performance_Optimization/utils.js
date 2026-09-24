// ==========================================
// DEBOUNCE
// ==========================================
//
// Waits until the user stops triggering
// an event before executing the function.
//
// Useful for:
// - Search
// - Autocomplete
// - API requests

export function debounce(callback, delay) {

    let timer;

    return (...args) => {

        clearTimeout(timer);

        timer = setTimeout(() => {

            callback(...args);

        }, delay);
    };
}


// ==========================================
// THROTTLE
// ==========================================
//
// Limits how frequently a function executes.
//
// Useful for:
// - Scroll
// - Mouse movement
// - Resize

export function throttle(callback, delay) {

    let lastExecution = 0;

    return (...args) => {

        const now = Date.now();

        if (
            now - lastExecution >= delay
        ) {

            lastExecution = now;

            callback(...args);
        }
    };
}


// ==========================================
// MEMOIZATION
// ==========================================
//
// Stores previously calculated results.

export function memoize(callback) {

    const cache = new Map();

    return (value) => {

        if (cache.has(value)) {

            console.log(
                "Returning cached result"
            );

            return cache.get(value);
        }

        const result =
            callback(value);

        cache.set(value, result);

        return result;
    };
}