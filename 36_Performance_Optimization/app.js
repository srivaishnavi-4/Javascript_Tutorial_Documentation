import {
    debounce,
    throttle,
    memoize
} from "./utils.js";


// ==========================================
// SAMPLE DATA
// ==========================================

const students = Array.from(
    { length: 5000 },
    (_, index) => ({

        id: index + 1,

        name:
            `Student ${index + 1}`,

        marks: [
            Math.floor(
                Math.random() * 100
            ),

            Math.floor(
                Math.random() * 100
            ),

            Math.floor(
                Math.random() * 100
            )
        ]
    })
);


// ==========================================
// DOM REFERENCES
// ==========================================

const searchInput =
    document.getElementById("search");

const studentList =
    document.getElementById(
        "studentList"
    );

const performanceText =
    document.getElementById(
        "performance"
    );


// ==========================================
// MEMOIZED SEARCH
// ==========================================

const searchStudents = memoize(
    (query) => {

        const lowerQuery =
            query.toLowerCase();

        return students.filter(
            student =>
                student.name
                    .toLowerCase()
                    .includes(lowerQuery)
        );
    }
);


// ==========================================
// DOM OPTIMIZATION
// ==========================================

function displayStudents(results) {

    const fragment =
        document.createDocumentFragment();

    results
        .slice(0, 100)
        .forEach(student => {

            const div =
                document.createElement(
                    "div"
                );

            div.className =
                "student";

            div.textContent =
                `${student.id} - ${student.name}`;

            fragment.appendChild(div);
        });

    // Update DOM only once.
    studentList.replaceChildren(
        fragment
    );
}


// ==========================================
// PERFORMANCE MEASUREMENT
// ==========================================

function performSearch(query) {

    const start =
        performance.now();

    const results =
        searchStudents(query);

    displayStudents(results);

    const end =
        performance.now();

    performanceText.textContent =
        `Search took ${(end - start)
            .toFixed(2)} ms`;
}


// ==========================================
// DEBOUNCED SEARCH
// ==========================================

const handleSearch =
    debounce(
        (event) => {

            performSearch(
                event.target.value
            );

        },
        300
    );

searchInput.addEventListener(
    "input",
    handleSearch
);


// ==========================================
// THROTTLED SCROLL
// ==========================================

const handleScroll =
    throttle(
        () => {

            console.log(
                "Scroll handled:",
                new Date()
                    .toLocaleTimeString()
            );

        },
        200
    );

window.addEventListener(
    "scroll",
    handleScroll
);


// ==========================================
// ASYNC LOADING / DYNAMIC IMPORT
// ==========================================

document
    .getElementById(
        "loadAnalytics"
    )
    .addEventListener(
        "click",
        async () => {

            const analytics =
                await import(
                    "./analytics.js"
                );

            const average =
                analytics.calculateAverage(
                    students
                );

            document
                .getElementById(
                    "analyticsResult"
                )
                .textContent =
                    `Average Marks: ${
                        average.toFixed(2)
                    }`;
        }
    );


// ==========================================
// WEB WORKER
// ==========================================

const worker =
    new Worker(
        "./worker.js"
    );

worker.onmessage =
    (event) => {

        document
            .getElementById(
                "workerResult"
            )
            .textContent =
                `Worker Result: ${
                    event.data
                }`;
    };


document
    .getElementById(
        "runWorker"
    )
    .addEventListener(
        "click",
        () => {

            document
                .getElementById(
                    "workerResult"
                )
                .textContent =
                    "Worker is processing...";

            worker.postMessage(
                100000000
            );
        }
    );


// ==========================================
// REQUEST ANIMATION FRAME
// ==========================================

const box =
    document.getElementById("box");

document
    .getElementById("animate")
    .addEventListener(
        "click",
        () => {

            let position = 0;

            function animate() {

                position += 2;

                box.style.left =
                    `${position}px`;

                if (position < 500) {

                    requestAnimationFrame(
                        animate
                    );
                }
            }

            requestAnimationFrame(
                animate
            );
        }
    );