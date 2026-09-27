// --------------------------------------
// Initial data
// No form/add operation required
// --------------------------------------

const students = [
    { id: 1, name: "Vaishu", marks: 85 },
    { id: 2, name: "Priya", marks: 65 },
    { id: 3, name: "Kavi", marks: 92 },
    { id: 4, name: "Anu", marks: 45 },
    { id: 5, name: "Divya", marks: 75 }
];

const studentsContainer =
    document.getElementById("students");

const result =
    document.getElementById("result");


// --------------------------------------
// Display students
// --------------------------------------

function displayStudents(data) {

    studentsContainer.innerHTML = "";

    data.forEach(student => {

        const div = document.createElement("div");

        div.className = "student";

        div.textContent =
            `${student.id} - ${student.name} - ${student.marks}`;

        studentsContainer.appendChild(div);
    });
}

displayStudents(students);


// ======================================
// SORTING ALGORITHMS
// ======================================


// --------------------------------------
// 1. Bubble Sort
// --------------------------------------

function bubbleSort(data) {

    const arr = [...data];

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length - i - 1; j++) {

            if (arr[j].marks > arr[j + 1].marks) {

                [arr[j], arr[j + 1]] =
                    [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}


// --------------------------------------
// 2. Selection Sort
// --------------------------------------

function selectionSort(data) {

    const arr = [...data];

    for (let i = 0; i < arr.length; i++) {

        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[j].marks < arr[minIndex].marks) {
                minIndex = j;
            }
        }

        [arr[i], arr[minIndex]] =
            [arr[minIndex], arr[i]];
    }

    return arr;
}


// --------------------------------------
// 3. Insertion Sort
// --------------------------------------

function insertionSort(data) {

    const arr = [...data];

    for (let i = 1; i < arr.length; i++) {

        const current = arr[i];

        let j = i - 1;

        while (
            j >= 0 &&
            arr[j].marks > current.marks
        ) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = current;
    }

    return arr;
}


// --------------------------------------
// 4. Merge Sort
// --------------------------------------

function mergeSort(data) {

    if (data.length <= 1) {
        return data;
    }

    const middle =
        Math.floor(data.length / 2);

    const left =
        mergeSort(data.slice(0, middle));

    const right =
        mergeSort(data.slice(middle));

    return merge(left, right);
}


function merge(left, right) {

    const result = [];

    let i = 0;
    let j = 0;

    while (
        i < left.length &&
        j < right.length
    ) {

        if (left[i].marks < right[j].marks) {

            result.push(left[i]);
            i++;

        } else {

            result.push(right[j]);
            j++;
        }
    }

    return [
        ...result,
        ...left.slice(i),
        ...right.slice(j)
    ];
}


// --------------------------------------
// 5. Quick Sort
// --------------------------------------

function quickSort(data) {

    if (data.length <= 1) {
        return data;
    }

    const pivot =
        data[data.length - 1];

    const left = [];
    const right = [];

    for (let i = 0; i < data.length - 1; i++) {

        if (data[i].marks < pivot.marks) {
            left.push(data[i]);
        } else {
            right.push(data[i]);
        }
    }

    return [
        ...quickSort(left),
        pivot,
        ...quickSort(right)
    ];
}


// --------------------------------------
// 6. Heap Sort
// --------------------------------------

function heapSort(data) {

    const arr = [...data];

    function heapify(n, i) {

        let largest = i;

        const left = 2 * i + 1;
        const right = 2 * i + 2;

        if (
            left < n &&
            arr[left].marks > arr[largest].marks
        ) {
            largest = left;
        }

        if (
            right < n &&
            arr[right].marks > arr[largest].marks
        ) {
            largest = right;
        }

        if (largest !== i) {

            [arr[i], arr[largest]] =
                [arr[largest], arr[i]];

            heapify(n, largest);
        }
    }

    for (
        let i = Math.floor(arr.length / 2) - 1;
        i >= 0;
        i--
    ) {
        heapify(arr.length, i);
    }

    for (
        let i = arr.length - 1;
        i > 0;
        i--
    ) {

        [arr[0], arr[i]] =
            [arr[i], arr[0]];

        heapify(i, 0);
    }

    return arr;
}


// --------------------------------------
// 7. Counting Sort
// Marks are 0-100
// --------------------------------------

function countingSort(data) {

    const count = new Array(101).fill(0);

    data.forEach(student => {
        count[student.marks]++;
    });

    const result = [];

    for (let marks = 0; marks <= 100; marks++) {

        for (let i = 0; i < count[marks]; i++) {

            const student =
                data.find(s => s.marks === marks);

            result.push(student);
        }
    }

    return result;
}


// --------------------------------------
// 8. Radix Sort
// --------------------------------------

function radixSort(data) {

    let arr = [...data];

    let max =
        Math.max(...arr.map(s => s.marks));

    let place = 1;

    while (
        Math.floor(max / place) > 0
    ) {

        const buckets =
            Array.from({ length: 10 }, () => []);

        arr.forEach(student => {

            const digit =
                Math.floor(student.marks / place) % 10;

            buckets[digit].push(student);
        });

        arr = buckets.flat();

        place *= 10;
    }

    return arr;
}


// --------------------------------------
// 9. Bucket Sort
// --------------------------------------

function bucketSort(data) {

    const buckets =
        Array.from({ length: 10 }, () => []);

    data.forEach(student => {

        const index =
            Math.floor(student.marks / 10);

        buckets[index].push(student);
    });

    buckets.forEach(bucket => {

        bucket.sort(
            (a, b) => a.marks - b.marks
        );
    });

    return buckets.flat();
}


// --------------------------------------
// Sorting controller
// --------------------------------------

function sortStudents(type) {

    let sorted;

    switch (type) {

        case "bubble":
            sorted = bubbleSort(students);
            break;

        case "selection":
            sorted = selectionSort(students);
            break;

        case "insertion":
            sorted = insertionSort(students);
            break;

        case "merge":
            sorted = mergeSort(students);
            break;

        case "quick":
            sorted = quickSort(students);
            break;

        case "heap":
            sorted = heapSort(students);
            break;

        case "counting":
            sorted = countingSort(students);
            break;

        case "radix":
            sorted = radixSort(students);
            break;

        case "bucket":
            sorted = bucketSort(students);
            break;
    }

    displayStudents(sorted);

    result.textContent =
        `${type.toUpperCase()} SORT completed`;
}


// ======================================
// SEARCHING ALGORITHMS
// ======================================


// Get search value

function getSearchValue() {

    return Number(
        document.getElementById("searchMarks").value
    );
}


// --------------------------------------
// 1. Linear Search
// --------------------------------------

function linearSearch() {

    const target = getSearchValue();

    for (let i = 0; i < students.length; i++) {

        if (students[i].marks === target) {

            result.textContent =
                `Linear Search: ${students[i].name} found`;

            return;
        }
    }

    result.textContent =
        "Student not found";
}


// --------------------------------------
// Prepare sorted marks
// --------------------------------------

function getSortedStudents() {

    return mergeSort(students);
}


// --------------------------------------
// 2. Binary Search
// --------------------------------------

function binarySearch() {

    const target = getSearchValue();

    const data =
        getSortedStudents();

    let left = 0;
    let right = data.length - 1;

    while (left <= right) {

        const middle =
            Math.floor((left + right) / 2);

        if (data[middle].marks === target) {

            result.textContent =
                `Binary Search: ${data[middle].name} found`;

            return;
        }

        if (data[middle].marks < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    result.textContent =
        "Student not found";
}


// --------------------------------------
// 3. Jump Search
// --------------------------------------

function jumpSearch() {

    const target = getSearchValue();

    const data =
        getSortedStudents();

    const n = data.length;

    const step =
        Math.floor(Math.sqrt(n));

    let start = 0;
    let end = step;

    while (
        start < n &&
        data[Math.min(end, n) - 1].marks < target
    ) {

        start = end;
        end += step;

        if (start >= n) {
            break;
        }
    }

    for (
        let i = start;
        i < Math.min(end, n);
        i++
    ) {

        if (data[i].marks === target) {

            result.textContent =
                `Jump Search: ${data[i].name} found`;

            return;
        }
    }

    result.textContent =
        "Student not found";
}


// --------------------------------------
// 4. Interpolation Search
// --------------------------------------

function interpolationSearch() {

    const target = getSearchValue();

    const data =
        getSortedStudents();

    let low = 0;
    let high = data.length - 1;

    while (
        low <= high &&
        target >= data[low].marks &&
        target <= data[high].marks
    ) {

        if (
            data[high].marks ===
            data[low].marks
        ) {

            if (data[low].marks === target) {

                result.textContent =
                    `Interpolation Search: ${data[low].name} found`;

                return;
            }

            break;
        }

        const position =
            low +
            Math.floor(
                ((target - data[low].marks) *
                (high - low)) /
                (data[high].marks - data[low].marks)
            );

        if (data[position].marks === target) {

            result.textContent =
                `Interpolation Search: ${data[position].name} found`;

            return;
        }

        if (data[position].marks < target) {
            low = position + 1;
        } else {
            high = position - 1;
        }
    }

    result.textContent =
        "Student not found";
}


// --------------------------------------
// 5. Exponential Search
// --------------------------------------

function exponentialSearch() {

    const target = getSearchValue();

    const data =
        getSortedStudents();

    if (data[0].marks === target) {

        result.textContent =
            `Exponential Search: ${data[0].name} found`;

        return;
    }

    let i = 1;

    while (
        i < data.length &&
        data[i].marks <= target
    ) {
        i *= 2;
    }

    const left = Math.floor(i / 2);
    const right =
        Math.min(i, data.length - 1);

    const found =
        binarySearchRange(
            data,
            target,
            left,
            right
        );

    if (found) {

        result.textContent =
            `Exponential Search: ${found.name} found`;

    } else {

        result.textContent =
            "Student not found";
    }
}


function binarySearchRange(
    data,
    target,
    left,
    right
) {

    while (left <= right) {

        const middle =
            Math.floor((left + right) / 2);

        if (data[middle].marks === target) {
            return data[middle];
        }

        if (data[middle].marks < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return null;
}


// --------------------------------------
// 6. Hash Search using Map
// --------------------------------------

function hashSearch() {

    const target = getSearchValue();

    const studentMap = new Map();

    students.forEach(student => {

        if (!studentMap.has(student.marks)) {
            studentMap.set(student.marks, []);
        }

        studentMap
            .get(student.marks)
            .push(student);
    });

    const found =
        studentMap.get(target);

    if (found) {

        result.textContent =
            `Hash Search: ${found
                .map(student => student.name)
                .join(", ")} found`;

    } else {

        result.textContent =
            "Student not found";
    }
}


// ======================================
// RECURSION
// ======================================

function recursiveTotal(index = 0) {

    if (index === students.length) {
        return 0;
    }

    return (
        students[index].marks +
        recursiveTotal(index + 1)
    );
}


function calculateTotal() {

    const total =
        recursiveTotal();

    result.textContent =
        `Recursion Total Marks: ${total}`;
}


// ======================================
// DYNAMIC PROGRAMMING
// ======================================

// Study activities
// We have only 5 hours.
// Find maximum possible points.

const activities = [
    { name: "JavaScript", points: 40, time: 2 },
    { name: "DSA", points: 50, time: 3 },
    { name: "ML", points: 60, time: 4 },
    { name: "Projects", points: 30, time: 1 }
];


function maximumPoints(items, capacity) {

    const dp =
        new Array(capacity + 1).fill(0);

    for (const item of items) {

        for (
            let time = capacity;
            time >= item.time;
            time--
        ) {

            dp[time] =
                Math.max(
                    dp[time],
                    dp[time - item.time] +
                    item.points
                );
        }
    }

    return dp[capacity];
}


function calculateMaximumMarks() {

    const max =
        maximumPoints(activities, 5);

    result.textContent =
        `Dynamic Programming: Maximum Points = ${max}`;
}