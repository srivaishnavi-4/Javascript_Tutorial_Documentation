const structureSelect =
    document.getElementById("structureSelect");

const valueInput =
    document.getElementById("valueInput");

const secondInput =
    document.getElementById("secondInput");

const actionButton =
    document.getElementById("actionButton");

const output =
    document.getElementById("output");

const result =
    document.getElementById("result");

const structureTitle =
    document.getElementById("structureTitle");

const structureDescription =
    document.getElementById("structureDescription");


// --------------------------------------------------
// Linked List Node
// --------------------------------------------------

class Node {

    constructor(value) {

        this.value = value;

        this.next = null;

        this.previous = null;
    }
}


// --------------------------------------------------
// Singly Linked List
// --------------------------------------------------

class SinglyLinkedList {

    constructor() {

        this.head = null;
    }


    insert(value) {

        const node =
            new Node(value);


        if (!this.head) {

            this.head = node;

            return;
        }


        let current =
            this.head;


        while (current.next) {

            current =
                current.next;
        }


        current.next =
            node;
    }


    search(value) {

        let current =
            this.head;


        while (current) {

            if (current.value === value) {

                return true;
            }


            current =
                current.next;
        }


        return false;
    }


    delete(value) {

        if (!this.head) {
            return false;
        }


        if (this.head.value === value) {

            this.head =
                this.head.next;

            return true;
        }


        let current =
            this.head;


        while (
            current.next &&
            current.next.value !== value
        ) {

            current =
                current.next;
        }


        if (!current.next) {
            return false;
        }


        current.next =
            current.next.next;


        return true;
    }


    toArray() {

        const values = [];

        let current =
            this.head;


        while (current) {

            values.push(current.value);

            current =
                current.next;
        }


        return values;
    }
}


// --------------------------------------------------
// Doubly Linked List
// --------------------------------------------------

class DoublyLinkedList {

    constructor() {

        this.head = null;

        this.tail = null;
    }


    insert(value) {

        const node =
            new Node(value);


        if (!this.head) {

            this.head =
                node;

            this.tail =
                node;

            return;
        }


        node.previous =
            this.tail;

        this.tail.next =
            node;

        this.tail =
            node;
    }


    search(value) {

        let current =
            this.head;


        while (current) {

            if (current.value === value) {

                return true;
            }


            current =
                current.next;
        }


        return false;
    }


    delete(value) {

        let current =
            this.head;


        while (
            current &&
            current.value !== value
        ) {

            current =
                current.next;
        }


        if (!current) {
            return false;
        }


        if (current.previous) {

            current.previous.next =
                current.next;

        } else {

            this.head =
                current.next;
        }


        if (current.next) {

            current.next.previous =
                current.previous;

        } else {

            this.tail =
                current.previous;
        }


        return true;
    }


    toArray() {

        const values = [];

        let current =
            this.head;


        while (current) {

            values.push(current.value);

            current =
                current.next;
        }


        return values;
    }
}


// --------------------------------------------------
// Circular Linked List
// --------------------------------------------------

class CircularLinkedList {

    constructor() {

        this.head = null;
    }


    insert(value) {

        const node =
            new Node(value);


        if (!this.head) {

            this.head =
                node;

            node.next =
                node;

            return;
        }


        let current =
            this.head;


        while (
            current.next !== this.head
        ) {

            current =
                current.next;
        }


        current.next =
            node;

        node.next =
            this.head;
    }


    search(value) {

        if (!this.head) {
            return false;
        }


        let current =
            this.head;


        do {

            if (current.value === value) {

                return true;
            }


            current =
                current.next;

        } while (
            current !== this.head
        );


        return false;
    }


    delete(value) {

        if (!this.head) {
            return false;
        }


        let current =
            this.head;

        let previous =
            null;


        do {

            if (current.value === value) {

                if (!previous) {

                    let last =
                        this.head;


                    while (
                        last.next !== this.head
                    ) {

                        last =
                            last.next;
                    }


                    if (this.head.next === this.head) {

                        this.head =
                            null;

                    } else {

                        this.head =
                            this.head.next;

                        last.next =
                            this.head;
                    }

                } else {

                    previous.next =
                        current.next;
                }


                return true;
            }


            previous =
                current;

            current =
                current.next;

        } while (
            current !== this.head
        );


        return false;
    }


    toArray() {

        const values = [];

        if (!this.head) {
            return values;
        }


        let current =
            this.head;


        do {

            values.push(current.value);

            current =
                current.next;

        } while (
            current !== this.head
        );


        return values;
    }
}


// --------------------------------------------------
// Binary Search Tree
// --------------------------------------------------

class TreeNode {

    constructor(value) {

        this.value =
            Number(value);

        this.left =
            null;

        this.right =
            null;
    }
}


class BinarySearchTree {

    constructor() {

        this.root =
            null;
    }


    insert(value) {

        const node =
            new TreeNode(value);


        if (!this.root) {

            this.root =
                node;

            return;
        }


        this.insertNode(
            this.root,
            node
        );
    }


    insertNode(current, node) {

        if (
            node.value <
            current.value
        ) {

            if (!current.left) {

                current.left =
                    node;

            } else {

                this.insertNode(
                    current.left,
                    node
                );
            }

        } else {

            if (!current.right) {

                current.right =
                    node;

            } else {

                this.insertNode(
                    current.right,
                    node
                );
            }
        }
    }


    search(value) {

        return this.searchNode(
            this.root,
            Number(value)
        );
    }


    searchNode(node, value) {

        if (!node) {
            return false;
        }


        if (node.value === value) {
            return true;
        }


        if (value < node.value) {

            return this.searchNode(
                node.left,
                value
            );
        }


        return this.searchNode(
            node.right,
            value
        );
    }


    inorder(node, values = []) {

        if (!node) {
            return values;
        }


        this.inorder(
            node.left,
            values
        );


        values.push(
            node.value
        );


        this.inorder(
            node.right,
            values
        );


        return values;
    }
}


// --------------------------------------------------
// Graph
// --------------------------------------------------

class Graph {

    constructor() {

        this.adjacencyList =
            new Map();
    }


    addVertex(vertex) {

        if (
            !this.adjacencyList.has(vertex)
        ) {

            this.adjacencyList.set(
                vertex,
                []
            );
        }
    }


    addEdge(vertex1, vertex2) {

        this.addVertex(vertex1);

        this.addVertex(vertex2);


        this.adjacencyList
            .get(vertex1)
            .push(vertex2);


        this.adjacencyList
            .get(vertex2)
            .push(vertex1);
    }


    search(vertex) {

        return this.adjacencyList
            .has(vertex);
    }


    delete(vertex) {

        if (
            !this.adjacencyList.has(vertex)
        ) {

            return false;
        }


        this.adjacencyList.delete(vertex);


        for (
            const neighbors
            of this.adjacencyList.values()
        ) {

            const index =
                neighbors.indexOf(vertex);


            if (index !== -1) {

                neighbors.splice(
                    index,
                    1
                );
            }
        }


        return true;
    }


    bfs(start) {

        if (
            !this.adjacencyList.has(start)
        ) {

            return [];
        }


        const visited =
            new Set();

        const queue =
            [start];

        const result =
            [];


        visited.add(start);


        while (queue.length) {

            const vertex =
                queue.shift();


            result.push(vertex);


            for (
                const neighbor
                of this.adjacencyList.get(vertex)
            ) {

                if (!visited.has(neighbor)) {

                    visited.add(neighbor);

                    queue.push(neighbor);
                }
            }
        }


        return result;
    }


    dfs(start) {

        const visited =
            new Set();

        const result =
            [];


        const visit =
            (vertex) => {

                if (
                    !this.adjacencyList.has(vertex) ||
                    visited.has(vertex)
                ) {

                    return;
                }


                visited.add(vertex);

                result.push(vertex);


                for (
                    const neighbor
                    of this.adjacencyList.get(vertex)
                ) {

                    visit(neighbor);
                }
            };


        visit(start);


        return result;
    }


    toArray() {

        const result = [];


        for (
            const [vertex, neighbors]
            of this.adjacencyList
        ) {

            result.push(
                `${vertex} → ${neighbors.join(", ")}`
            );
        }


        return result;
    }
}


// --------------------------------------------------
// Data Structure Instances
// --------------------------------------------------

const structures = {

    array: [],

    stack: [],

    queue: [],

    singly: new SinglyLinkedList(),

    doubly: new DoublyLinkedList(),

    circular: new CircularLinkedList(),

    set: new Set(),

    map: new Map(),

    tree: new BinarySearchTree(),

    graph: new Graph()
};


// --------------------------------------------------
// Current Structure
// --------------------------------------------------

let currentStructure =
    "array";


// --------------------------------------------------
// Structure Information
// --------------------------------------------------

const descriptions = {

    array:
        "Ordered collection with index-based access.",

    stack:
        "LIFO structure: Last In, First Out.",

    queue:
        "FIFO structure: First In, First Out.",

    singly:
        "Each node points to the next node.",

    doubly:
        "Each node points forward and backward.",

    circular:
        "The last node points back to the first node.",

    set:
        "Stores unique values.",

    map:
        "Stores key-value pairs.",

    tree:
        "Binary Search Tree with ordered nodes.",

    graph:
        "Stores vertices and connections between them."
};


// --------------------------------------------------
// Change Structure
// --------------------------------------------------

structureSelect.addEventListener(
    "change",
    function () {

        currentStructure =
            structureSelect.value;


        structureTitle.textContent =
            structureSelect.options[
                structureSelect.selectedIndex
            ].text;


        structureDescription.textContent =
            descriptions[currentStructure];


        updateInputs();

        render();
    }
);


// --------------------------------------------------
// Input Configuration
// --------------------------------------------------

function updateInputs() {

    secondInput.classList.add(
        "hidden"
    );


    if (currentStructure === "map") {

        secondInput.classList.remove(
            "hidden"
        );

        secondInput.placeholder =
            "Enter value";

        actionButton.textContent =
            "Set";

        return;
    }


    if (currentStructure === "graph") {

        secondInput.classList.remove(
            "hidden"
        );

        secondInput.placeholder =
            "Connected vertex";

        actionButton.textContent =
            "Add Edge";

        return;
    }


    if (currentStructure === "stack") {

        actionButton.textContent =
            "Push";

        return;
    }


    if (currentStructure === "queue") {

        actionButton.textContent =
            "Enqueue";

        return;
    }


    actionButton.textContent =
        "Add";
}


// --------------------------------------------------
// Add / Insert
// --------------------------------------------------

actionButton.addEventListener(
    "click",
    function () {

        const value =
            valueInput.value.trim();


        if (!value) {

            showResult(
                "Please enter a value."
            );

            return;
        }


        const structure =
            structures[currentStructure];


        try {

            switch (currentStructure) {

                case "array":

                    structure.push(value);

                    break;


                case "stack":

                    structure.push(value);

                    break;


                case "queue":

                    structure.push(value);

                    break;


                case "singly":

                    structure.insert(value);

                    break;


                case "doubly":

                    structure.insert(value);

                    break;


                case "circular":

                    structure.insert(value);

                    break;


                case "set":

                    structure.add(value);

                    break;


                case "map":

                    if (
                        !secondInput.value.trim()
                    ) {

                        throw new Error(
                            "Enter a value for the key."
                        );
                    }

                    structure.set(
                        value,
                        secondInput.value.trim()
                    );

                    break;


                case "tree":

                    if (isNaN(value)) {

                        throw new Error(
                            "Tree requires numbers."
                        );
                    }

                    structure.insert(value);

                    break;


                case "graph":

                    const secondValue =
                        secondInput.value.trim();


                    if (!secondValue) {

                        throw new Error(
                            "Enter a connected vertex."
                        );
                    }


                    structure.addEdge(
                        value,
                        secondValue
                    );

                    break;
            }


            valueInput.value = "";

            secondInput.value = "";

            showResult(
                "Value added successfully."
            );


            render();

        } catch (error) {

            showResult(
                error.message
            );
        }
    }
);


// --------------------------------------------------
// Search / Delete / Clear
// --------------------------------------------------

document
    .querySelector(".operation-row")
    .addEventListener(
        "click",
        function (event) {

            const operation =
                event.target.dataset.operation;


            if (!operation) {
                return;
            }


            const value =
                valueInput.value.trim();


            const structure =
                structures[currentStructure];


            if (
                operation !== "clear" &&
                !value
            ) {

                showResult(
                    "Enter a value first."
                );

                return;
            }


            if (operation === "clear") {

                clearStructure();

                return;
            }


            if (operation === "search") {

                searchStructure(
                    structure,
                    value
                );

                return;
            }


            if (operation === "delete") {

                deleteStructure(
                    structure,
                    value
                );
            }
        }
    );


// --------------------------------------------------
// Search
// --------------------------------------------------

function searchStructure(
    structure,
    value
) {

    let found = false;


    switch (currentStructure) {

        case "array":

        case "stack":

        case "queue":

            found =
                structure.includes(value);

            break;


        case "singly":

        case "doubly":

        case "circular":

            found =
                structure.search(value);

            break;


        case "set":

            found =
                structure.has(value);

            break;


        case "map":

            found =
                structure.has(value);

            break;


        case "tree":

            found =
                structure.search(value);

            break;


        case "graph":

            found =
                structure.search(value);

            break;
    }


    showResult(
        found
            ? `${value} exists in the structure.`
            : `${value} was not found.`
    );
}


// --------------------------------------------------
// Delete
// --------------------------------------------------

function deleteStructure(
    structure,
    value
) {

    let deleted = false;


    switch (currentStructure) {

        case "array":

            const arrayIndex =
                structure.indexOf(value);


            if (arrayIndex !== -1) {

                structure.splice(
                    arrayIndex,
                    1
                );

                deleted = true;
            }

            break;


        case "stack":

            if (
                structure.length &&
                structure[
                    structure.length - 1
                ] === value
            ) {

                structure.pop();

                deleted = true;

            } else {

                showResult(
                    "Stack deletion uses pop(). Remove the top value."
                );

                return;
            }

            break;


        case "queue":

            if (
                structure.length &&
                structure[0] === value
            ) {

                structure.shift();

                deleted = true;

            } else {

                showResult(
                    "Queue deletion uses dequeue(). Remove the front value."
                );

                return;
            }

            break;


        case "singly":

        case "doubly":

        case "circular":

            deleted =
                structure.delete(value);

            break;


        case "set":

            deleted =
                structure.delete(value);

            break;


        case "map":

            deleted =
                structure.delete(value);

            break;


        case "graph":

            deleted =
                structure.delete(value);

            break;


        case "tree":

            showResult(
                "BST deletion is not implemented in this mini POC."
            );

            return;
    }


    showResult(
        deleted
            ? `${value} deleted successfully.`
            : `${value} was not found.`
    );


    render();
}


// --------------------------------------------------
// Clear
// --------------------------------------------------

function clearStructure() {

    switch (currentStructure) {

        case "array":

        case "stack":

        case "queue":

            structures[currentStructure] =
                [];

            break;


        case "singly":

            structures.singly =
                new SinglyLinkedList();

            break;


        case "doubly":

            structures.doubly =
                new DoublyLinkedList();

            break;


        case "circular":

            structures.circular =
                new CircularLinkedList();

            break;


        case "set":

            structures.set =
                new Set();

            break;


        case "map":

            structures.map =
                new Map();

            break;


        case "tree":

            structures.tree =
                new BinarySearchTree();

            break;


        case "graph":

            structures.graph =
                new Graph();

            break;
    }


    showResult(
        "Structure cleared."
    );


    render();
}


// --------------------------------------------------
// Render
// --------------------------------------------------

function render() {

    output.innerHTML = "";


    const structure =
        structures[currentStructure];


    let values = [];


    switch (currentStructure) {

        case "array":

        case "stack":

        case "queue":

            values =
                structure;

            break;


        case "singly":

        case "doubly":

        case "circular":

            values =
                structure.toArray();

            break;


        case "set":

            values =
                [...structure];

            break;


        case "map":

            values =
                [...structure].map(
                    function ([key, value]) {

                        return `${key}: ${value}`;
                    }
                );

            break;


        case "tree":

            values =
                structure.inorder(
                    structure.root
                );

            break;


        case "graph":

            values =
                structure.toArray();

            break;
    }


    if (!values.length) {

        output.textContent =
            "Structure is empty.";

        return;
    }


    const container =
        document.createElement("div");

    container.className =
        "data-container";


    values.forEach(
        function (value, index) {

            const node =
                document.createElement("span");

            node.className =
                "data-node";

            node.textContent =
                value;


            container.appendChild(node);


            if (
                index <
                values.length - 1
            ) {

                const arrow =
                    document.createElement("span");

                arrow.className =
                    "arrow";

                arrow.textContent =
                    currentStructure === "circular"
                        ? "→"
                        : "→";


                container.appendChild(
                    arrow
                );
            }
        }
    );


    output.appendChild(
        container
    );
}


// --------------------------------------------------
// Result
// --------------------------------------------------

function showResult(message) {

    result.textContent =
        message;
}


// Initial render

updateInputs();

render();