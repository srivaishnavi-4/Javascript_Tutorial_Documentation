// worker.js

self.onmessage = (event) => {

    const number =
        event.data;

    // Simulate a CPU-intensive operation.
    let result = 0;

    for (
        let i = 0;
        i < number;
        i++
    ) {
        result += i;
    }

    // Send result back to main thread.
    self.postMessage(result);
};