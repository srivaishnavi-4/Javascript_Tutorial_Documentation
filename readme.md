# Javascript
 ## 1_Introduction
  JavaScript (JS) is a lightweight, interpreted programming language used primarily to build interactive web pages and scalable backend applications.
**What is JavaScript & Brief History**
* **1995:** Created in just 10 days by Brendan Eich at Netscape under the original name **Mocha** (later renamed LiveScript, then JavaScript).
* **1997:** Standardized under **ECMAScript** (ES) to maintain uniform standards across browsers.
* **2009:** Release of **Node.js** allowed JS to run outside web browsers on backend servers.
* **Modern JS:** ECMAScript updates annually (ES6 in 2015 introduced major features like `let`/`const`, arrow functions, and promises).
**Why JavaScript is Used**

* **Web Interactivity:** Controls dynamic page updates, animations, form validation, and user interactions without reloading the page.
* **Full-Stack Capability:** Developers can build both front-end (React, Vue, Angular) and back-end (Node.js, Express) systems using a single language.
* **Ubiquity:** Native support in all modern web browsers without requiring additional plug-ins.
* **Vast Ecosystem:** Access to millions of open-source packages via **npm** (Node Package Manager).

**Setup: Running JavaScript**

**1. Browser Setup (No Installation Required)**
* Open any browser (Chrome, Edge, Firefox).
* Press `F12` or `Ctrl + Shift + I` (`Cmd + Option + I` on Mac) to open **Developer Tools**.
* Navigate to the **Console** tab to start typing and executing JavaScript directly.

**2. Node.js Setup (Local Machine)**
1. **Download Node.js:** Visit nodejs.org.
Download and install the **LTS (Long Term Support)** version for your operating system.
2. **Verify Installation:** Open Terminal or Command Prompt.
Run `node -v` in your command line to confirm Node is installed correctly.
3. **Execute Code:**
Create a file named `app.js`, write your JS code inside, and execute it in your terminal with `node app.js`.

**Core Basics: Console & Comments**

**`console.log()`**
Used to print output, values, or debug information to the console screen.

```javascript
console.log("Hello, World!");
console.log(10 + 5); // Outputs: 15

```
**Comments in JS**
Notes written in the code that are completely ignored by the JavaScript engine when executing.

```javascript
// This is a single-line comment

/* 
   This is a multi-line comment.
   Useful for longer explanations.
*/
```
Before JavaScript was introduced in 1995, the web was largely **static**. Browsers could only render basic HTML markup. If you clicked a link or submitted a form, your browser sent a request to a server, and the entire web page reloaded from scratch.

Here is what developers used to handle web pages and server communication before JavaScript existed:

### **1. Pure HTML (Static Pages)**
* **What it did:** Used exclusively for laying out raw text, links, and early inline images.
* **The Limitation:** HTML had zero logic, condition-checking, or reactivity. You couldn't validate a form, create drop-down menus, or update a single part of a page without a full reload.
### **2. CGI (Common Gateway Interface) Scripts**
* **What it did:** The earliest method for handling interactivity (such as processing contact forms or guestbook entries).
* **How it worked:** Written using backend server languages like **Perl**, **C**, or **C++**. When a user submitted an HTML form, the server ran a CGI script on the machine, generated a brand-new HTML page, and sent it back to the browser.
* **The Limitation:** Extremely slow. Every interaction required a trip to the server and a full page refresh.
### **3. Server-Side Scripting Engines**
* **Languages:** **Perl**, early **CGI-based PHP**, and **ColdFusion** (late 1990s).
* **Role:** They built dynamic HTML documents on the web server before delivering them to the browser. While this made sites dynamic, all the processing still happened on the server rather than in the browser.
### **4. Early Plug-ins & Java Applets**
* **What they were:** Heavy, standalone programs that ran inside a web browser frame.
* **How they worked:** Netscape and early browsers allowed embeddable applets written in languages like **Java** or early multimedia extensions.
* **The Limitation:** They were complex, resource-heavy, required separate software plugins, and took long periods to load.

### **What JavaScript Changed**
JavaScript was created specifically to fill the gap between complex Java applets and static HTML. It allowed browsers to **run code directly on the user's computer (client-side)**:

| Feature               | Pre-JavaScript (1990–1994)                                   | Post-JavaScript (1995+)                            |
| 
| **Form Validation**   | Sent to server; returned an error page if a field was wrong. | Validated instantly in the browser before sending. |
| **Page Updates**      | Required downloading an entirely new page.                   | Changes single parts of the page dynamically.      |
| **User Experience**   | Slow, rigid, static text and images.                         | Interactive, smooth, and event-driven.             |
 ## 2_Variables and Data Types
 In JavaScript, variables are containers used to store data values. They act as symbolic names for values in your application. JavaScript is a dynamically typed language, meaning you do not need to specify the data type (like number or string) when you create a variable; the runtime handles it automatically
 **Declaration Keywords** 
JavaScript provides three main keywords to declare variables: const ,let and var
• `const` (Constant): Used for values that should not be reassigned. It must be initialized at the time of declaration. While the variable binding cannot change, the contents of objects and arrays declared with  can still be modified. 
• `let` : The modern choice for mutable variables (values that need to change over time). 
• `var` : The legacy, pre-ES6 way to declare variables. It is generally avoided in modern JavaScript because its function-scoping and hoisting behaviors frequently cause bugs.

Basic Syntax 
Variable Naming Rules (Identifiers) 
When naming your variables in JavaScript, you must follow these syntax requirements: 

• Names must begin with a **letter, an underscore (), or a dollar sign (). They cannot begin with a number**. 
• Subsequent characters can include letters, numbers, underscores, and dollar signs. 
• Variable names are **case-sensitive** ( and  are completely different variables). 
• You cannot use JavaScript reserved keywords (like if, class,return ,let ) as names. 
• The industry standard best practice is to use camelCase for naming variables (e.g.,userName ,totalPrice).

When to use JavaScript const?
Always declare a variable with const when you know that the value should not be changed.
Use const when you declare:
    A new Array
    A new Object
    A new Function
    A new RegExp
 ### Data Types
    JavaScript has 8 Datatypes
    A JavaScript variable can hold 8 types of data:
```json
    Type	  Description
    String	    A text of characters enclosed in quotes
    Number	    A number representing a mathematical value
    Bigint	    A number representing a large integer
    Boolean	    A data type representing true or false
    Object	    A collection of key-value pairs of data
    Undefined	A primitive variable with no assigned value
    Null	    A primitive value representing object absence
    Symbol	    A unique and primitive identifier
```
```javascript
    Examples
    // String
    let color = "Yellow";
    let lastName = "Vaish";

    // Number
    let length = 16;
    let weight = 7.5;

    // BigInt
    let x = 1234567890123456789012345n;
    let y = BigInt(1234567890123456789012345)

    // Boolean
    let x = true;
    let y = false;

    // Object
    const person = {firstName:"Sri", lastName:"Vaishnavi"};

    // Array object
    const cars = ["Saab", "Volvo", "BMW"];

    // Date object
    const date = new Date("2022-03-25");

    // Undefined
    let x;
    let y;

    // Null
    let x = null;
    let y = null;

    // Symbol
    const x = Symbol();
    const y = Symbol();
```
   #### The typeof Operator
    You can use the JavaScript typeof operator to find the type of a JavaScript variable.
    The typeof operator returns the type of a variable or an expression:
```javascript    
    Example
    typeof ""             // Returns "string"
    typeof "John"         // Returns "string"
    typeof "John Doe"     // Returns "string"
    Example
    typeof 0              // Returns "number"
    typeof 314            // Returns "number"
    typeof 3.14           // Returns "number"
    typeof (3)            // Returns "number"
    typeof (3 + 4)        // Returns "number"
```
   #### JavaScript Strings
    A string (a text string) is a series of characters like "John Doe".
    Strings are written with quotes. You can use single or double quotes:
    Example
```javascript
    // Using double quotes:
    let carName1 = "Volvo XC60";

    // Using single quotes:
    let carName2 = 'Volvo XC60';
```
    You can use quotes inside a string, as long as they don't match the quotes surrounding the string:
    Example
```javascript
    // Single quote inside double quotes:
    let answer1 = "It's alright";
    // Single quotes inside double quotes:
    let answer2 = "He is called 'Johnny'";
    // Double quotes inside single quotes:
    let answer3 = 'He is called "Johnny"';
```
    You will learn a lot more about JavaScript Strings later in this tutorial.
   #### JavaScript Numbers
    All JavaScript numbers are stored as decimal numbers (floating point).
    Numbers can be written with, or without decimals:
    Example
```javascript
    // With decimals:
    let x1 = 34.00;
    // Without decimals:
    let x2 = 34;
```
   #### Exponential Notation

    Extra large or extra small numbers can be written with scientific (exponential) notation:
    Example
```javascript
    let y = 123e5;    // 12300000
    let z = 123e-5;   // 0.00123
```
   #### JavaScript Booleans
    JavaScript booleans can only have one of two values: true or false
    The boolean value of an expression is the basis for JavaScript comparisons.
    Given that x = 5, the table below explains comparison:
```json
    Description 	   Expression 	    Returns
    Equal to 	       (x == 8) 	    false
    Not equal to 	   (x != 8) 	    true
    Greater than 	   (x > 8) 	        false
    Less than 	       (x < 8)      	true
```    
Example
```javascript
    let x = 5;
    (x == 8); // equals false
    (x != 8); // equals true
```
All JavaScript comparison operators `(like ==, !=, <, >)` return true or false from the comparison.
   #### Datatype undefined
    In computer programs, variables are often declared without a value. The value can be something that has to be calculated, or something that will be provided later, like user input.
    A variable without a value has the datatype undefined.
    A variable without a value also has the value undefined.
    Example
   `let carName;`
   #### Empty Values
    An empty value has nothing to do with undefined.
    An empty string has both a legal value and a type.
    Example
   ` let car = "";    // The value is "", the typeof is "string"`
   Sure. Here is a **simple theory explanation + real-time example + small JavaScript program** for each operator.

# 3_JavaScript Operators
Operators are special symbols used to perform operations on variables and values.
## 1. Arithmetic Operators
**Explanation:**
Arithmetic operators are used to perform **mathematical calculations** such as addition, subtraction, multiplication, and division.
**example:**
In a shopping application, arithmetic operators can be used to calculate the **total price of products**.
```javascript
let price = 500;
let quantity = 3;
let total = price * quantity;
console.log("Total Price:", total);
```
**Output:**
```text
Total Price: 1500
```
Common arithmetic operators: `+`, `-`, `*`, `/`, `%`, `++`, `--`
## 2. Assignment Operators
**Explanation:**
Assignment operators are used to **assign or update values** in variables.
**example:**
In a bank application, the account balance can be updated after depositing money.
```javascript
let balance = 5000;
balance += 2000;
console.log("Balance:", balance);
```
**Output:**
```text
Balance: 7000
```
Here, `balance += 2000` means:
```javascript
balance = balance + 2000;
```
Common assignment operators: `=`, `+=`, `-=`, `*=`, `/=`, `%=`
## 3. Comparison Operators
**Explanation:**
Comparison operators are used to **compare two values**. They return either `true` or `false`.
**example:**
A website can check whether a person is old enough to register.
```javascript
let age = 20;
console.log(age >= 18);
```
**Output:**
```text
true
```
Since `20` is greater than or equal to `18`, the result is `true`.
Common comparison operators:
```text
==    Equal
===   Equal value and type
!=    Not equal
!==   Not equal value or type
>     Greater than
<     Less than
>=    Greater than or equal
<=    Less than or equal
```
## 4. Logical Operators
**Explanation:**
Logical operators are used to **combine multiple conditions**.
**example:**
A website may allow a user to log in only when the username and password are correct.
```javascript
let username = "admin";
let password = "1234";
if (username === "admin" && password === "1234") {
    console.log("Login Successful");
}
```
**Output:**
```text
Login Successful
```
Here, `&&` means **AND**. Both conditions must be true.
Main logical operators:
```text
&&    AND
||    OR
!     NOT
```
## 5. Bitwise Operators
**Explanation:**
Bitwise operators perform operations on the **binary representation of numbers**.
**example:**
Bitwise operations are commonly used in areas such as **permissions, flags, networking, and low-level programming**.
For example:
```javascript
let permission = 5;
let readPermission = 1;
console.log(permission & readPermission);
```
**Output:**
```text
1
```
The `&` operator performs a **bitwise AND** operation.
Common bitwise operators:
```text
&     AND
|     OR
^     XOR
~     NOT
<<    Left shift
>>    Right shift
```
For basic web development, bitwise operators are used less frequently than arithmetic, comparison, and logical operators.
## 6. Ternary Operator
**Explanation:**
The ternary operator is a **short form of `if...else`**. It is useful when you need to choose between two values based on a condition.
**example:**
An e-commerce website can display whether a product is available.
```javascript
let stock = 10;
let message = stock > 0 ? "Product Available" : "Out of Stock";
console.log(message);
```
**Output:**
```text
Product Available
```
The syntax is:
```javascript
condition ? valueIfTrue : valueIfFalse;
```
It is similar to:
```javascript
if (stock > 0) {
    message = "Product Available";
} else {
    message = "Out of Stock";
}
```
| Operator       | Purpose                   | Real-time Example    |
| -------------- | ------------------------- | -------------------- |
| **Arithmetic** | Mathematical calculations | Shopping bill        |
| **Assignment** | Assign/update values      | Bank balance         |
| **Comparison** | Compare values            | Age verification     |
| **Logical**    | Combine conditions        | Login system         |
| **Bitwise**    | Work with binary bits     | Permissions/flags    |
| **Ternary**    | Short `if...else`         | Product availability |
# 4_Conditional Statements in JavaScript
Conditional statements are used to **make decisions in a program**. They execute different blocks of code depending on whether a condition is `true` or `false`.
## 1. `if` Statement
**Explanation:**
The `if` statement executes a block of code **only when the given condition is true**.
**example:**
A website checks whether a student has passed an exam.
```javascript
let mark = 75;
if (mark >= 40) {
    console.log("Student has passed");
}
```
**Output:**
```text
Student has passed
```
**Syntax:**
```javascript
if (condition) {
    // code to execute
}
```
## 2. `else if` Statement
**Explanation:**
`else if` is used when there are **multiple conditions** to check. The first condition that is true will be executed.
**example:**
A school calculates a student's grade based on marks.
```javascript
let mark = 85;
if (mark >= 90) {
    console.log("Grade A+");
} else if (mark >= 80) {
    console.log("Grade A");
} else if (mark >= 70) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}
```
**Output:**
```text
Grade A
```
Here, JavaScript checks the conditions from **top to bottom**.
## 3. `else` Statement
**Explanation:**
The `else` statement executes when **none of the previous conditions are true**.
**example:**
Checking whether a person is eligible to vote.
```javascript
let age = 16;
if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}
```
**Output:**
```text
Not eligible to vote
```
`else` does not have a condition because it handles the **remaining case**.

## 4. `switch` Statement
**Explanation:**
The `switch` statement is used to select **one option from multiple fixed values**.
**example:**
A food ordering application displays the selected food item.
```javascript
let choice = 2;
switch (choice) {
    case 1:
        console.log("Pizza");
        break;
    case 2:
        console.log("Burger");
        break;
    case 3:
        console.log("Pasta");
        break;
    default:
        console.log("Invalid choice");
}
```
**Output:**
```text
Burger
```
### keywords
* `case` → specifies a possible value
* `break` → stops the switch after a match
* `default` → executes when no case matches
## 5. Conditional (Ternary) Operator
**Explanation:**
The ternary operator is a **short form of `if...else`**. It is useful when there are only **two possible results**.
**example:**
An online shopping website checks whether a product is available.
```javascript
let stock = 5;
let message = stock > 0 ? "Product Available" : "Out of Stock";
console.log(message);
```
**Output:**

```text
Product Available
```
### Syntax
```javascript
condition ? valueIfTrue : valueIfFalse;
```
The same example using `if...else`:
```javascript
if (stock > 0) {
    message = "Product Available";
} else {
    message = "Out of Stock";
}
```

| Statement | Use                                     |
| --------- | --------------------------------------- |
| `if`      | Check one condition                     |
| `else if` | Check multiple conditions               |
| `else`    | Execute when all conditions are false   |
| `switch`  | Choose between multiple fixed values    |
| `ternary` | Short `if...else` for simple conditions |

**Note:**
`if → else if → else` is best for **conditions/ranges**, while `switch` is convenient for **specific fixed choices**, and `ternary` is for a **simple two-way decision**.
# 5_Loops and Loop Control Statements in JavaScript
Loops are used to **execute a block of code repeatedly** until a particular condition is satisfied.
## 1. `for` Loop
**Explanation:**
The `for` loop is used when you **know how many times** you want to execute a block of code.
**example:**
Displaying the names of 5 students.
```javascript
for (let i = 1; i <= 5; i++) {
    console.log("Student " + i);
}
```
**Output:**
```text
Student 1
Student 2
Student 3
Student 4
Student 5
```
### Syntax
```javascript
for (initialization; condition; increment) {
    // code
}
```
## 2. `while` Loop
**Explanation:**
The `while` loop repeatedly executes code **as long as the condition is true**. It is useful when the number of repetitions is not known beforehand.
**example:**
A login system can keep asking for a password until the correct password is entered.
```javascript
let attempts = 1;
while (attempts <= 3) {
    console.log("Login attempt: " + attempts);
    attempts++;
}
```
**Output:**
```text
Login attempt: 1
Login attempt: 2
Login attempt: 3
```
### Syntax
```javascript
while (condition) {
    // code
}
```
## 3. `do...while` Loop
**Explanation:**
The `do...while` loop executes the code **at least once**, and then checks the condition.
**example:**
A menu in an application should be displayed at least once before asking whether the user wants to continue.
```javascript
let choice = 1;
do {
    console.log("1. View Profile");
    console.log("2. Logout");
    choice++;
} while (choice <= 2);
```
**Output:**
```text
1. View Profile
2. Logout
```
### Syntax
```javascript
do {
    // code
} while (condition);
```
**Important:** `do...while` executes **at least once**, even if the condition is initially false.
# Loop Control Statements
## 4. `break`
**Explanation:**
The `break` statement is used to **stop a loop immediately**, even if the loop condition is still true.
**example:**
Searching for a particular product. Once the product is found, there is no need to continue searching.
```javascript
let products = ["Laptop", "Phone", "Tablet", "Watch"];
for (let product of products) {
    if (product === "Tablet") {
        console.log("Product found");
        break;
    }
}
```
**Output:**
```text
Product found
```
Here, `break` stops the loop when `"Tablet"` is found.
## 5. `continue`
**Explanation:**
The `continue` statement **skips the current iteration** and moves to the next iteration of the loop.
**example:**
Displaying only available products and skipping products that are out of stock.
```javascript
let products = [
    { name: "Laptop", available: true },
    { name: "Phone", available: false },
    { name: "Tablet", available: true }
];
for (let product of products) {
    if (!product.available) {
        continue;
    }

    console.log(product.name);
}
```
**Output:**
```text
Laptop
Tablet
```
The `"Phone"` is skipped because it is unavailable.
# Iteration Statements
## 6. `for...in`
**Explanation:**
The `for...in` loop is mainly used to **iterate over the properties (keys) of an object**.
**example:**
Displaying a user's profile information.
```javascript
let user = {
    name: "Arun",
    age: 21,
    city: "Chennai"
};
for (let key in user) {
    console.log(key + ": " + user[key]);
}
```
**Output:**
```text
name: Arun
age: 21
city: Chennai
```
Here, `key` represents:
```text
name
age
city
```
### Important
Use `for...in` mainly for **objects**.
## 7. `for...of`
**Explanation:**
The `for...of` loop is used to **iterate over the values of an iterable**, such as an array or string.
**example:**
Displaying the names of products in an online store.
```javascript
let products = ["Laptop", "Phone", "Tablet"];
for (let product of products) {
    console.log(product);
}
```
**Output:**
```text
Laptop
Phone
Tablet
```
Here, `product` directly contains each **value**.
# `for...in` vs `for...of`
This is an important difference:
```javascript
let fruits = ["Apple", "Banana", "Mango"];
for (let index in fruits) {
    console.log(index);
}
```
**Output:**
```text
0
1
2
```
`for...in` gives the **index/key**.
```javascript
for (let fruit of fruits) {
    console.log(fruit);
}
```
**Output:**
```text
Apple
Banana
Mango
```
`for...of` gives the **value**.
| Loop         | Main Purpose                   | Example                 |
| ------------ | ------------------------------ | ----------------------- |
| `for`        | Repeat a known number of times | Print 1–10              |
| `while`      | Repeat while condition is true | Login attempts          |
| `do...while` | Execute at least once          | Application menu        |
| `break`      | Stop the loop                  | Stop when item is found |
| `continue`   | Skip current iteration         | Skip unavailable item   |
| `for...in`   | Iterate over object keys       | User properties         |
| `for...of`   | Iterate over values            | Array elements          |
### Easy way to remember
**`for`** → Known number of repetitions
**`while`** → Condition checked first
**`do...while`** → Executes once before checking
**`break`** → Stop
**`continue`** → Skip
**`for...in`** → **Keys/Indexes**
**`for...of`** → **Values**
## 6_JavaScript Functions
A **function** is a reusable block of code designed to perform a specific task. Functions are widely used in real applications to avoid repeating code and to divide a large program into smaller, manageable parts.
## 1. Function Declaration
### Explanation
A **function declaration** defines a function using the `function` keyword. It can be called from different places in the program.
### Technical use
Function declarations are commonly used for **reusable business logic**, such as calculating a bill, validating user input, or processing data.
```javascript
function calculateTotal(price, quantity) {
    return price * quantity;
}
let total = calculateTotal(500, 3);
console.log(total);
```
**Output:**
```text
1500
```
Here, `calculateTotal()` can be reused whenever the application needs to calculate a product's total price.
# 2. Function Expression
### Explanation
A **function expression** stores a function inside a variable.
### Technical use
Function expressions are useful when a function needs to be **stored in a variable, passed to another function, or assigned dynamically**.
```javascript
const calculateDiscount = function(price, discount) {
    return price - (price * discount / 100);
};
console.log(calculateDiscount(1000, 10));
```
**Output:**
```text
900
```
Here, the function is stored in `calculateDiscount`.
A common technical use is passing functions as arguments:
```javascript
const calculate = function(a, b) {
    return a + b;
};

console.log(calculate(10, 20));
```
# 3. Arrow Functions
### Explanation
An **arrow function** provides a shorter syntax for writing functions.
### Technical use
Arrow functions are very common in **modern JavaScript**, especially when working with arrays, callbacks, promises, and event handling.
```javascript
const calculateTotal = (price, quantity) => {
    return price * quantity;
};
console.log(calculateTotal(500, 3));
```
**Output:**
```text
1500
```
For a simple function, it can be written even shorter:
```javascript
const square = n => n * n;

console.log(square(5));
```
**Output:**
```text
25
```
### Real technical example — Array processing
Suppose an e-commerce application has product prices:
```javascript
let prices = [100, 200, 300];
let updatedPrices = prices.map(price => price * 1.18);
console.log(updatedPrices);
```
The arrow function is used as a **callback** to calculate the updated price for every item.
# 4. Function Parameters
### Explanation
**Parameters** are variables specified when defining a function. They allow a function to receive data from outside.
```javascript
function greetUser(name) {
    console.log("Welcome " + name);
}
greetUser("Arun");
```
Here:
* `name` → parameter
* `"Arun"` → argument
**Output:**
```text
Welcome Arun
```
### Technical use
Parameters make functions **reusable with different data**.
For example, instead of creating separate functions for every product:
```javascript
function calculateTotal(price, quantity) {
    return price * quantity;
}
console.log(calculateTotal(500, 2));
console.log(calculateTotal(1000, 3));
```
The same function works with different products.
# 5. `return` Statement
### Explanation
The `return` statement sends a **value from a function back to the place where the function was called**.
```javascript
function add(a, b) {
    return a + b;
}
let result = add(10, 20);
console.log(result);
```
**Output:**
```text
30
```
### Technical use
`return` is important when a function **calculates or processes data that another part of the application needs**.
For example, a login system can return whether the entered credentials are valid:
```javascript
function validateLogin(username, password) {
    if (username === "admin" && password === "1234") {
        return true;
    }
    return false;
}
let isValid = validateLogin("admin", "1234");
console.log(isValid);
```
**Output:**
```text
true
```
The returned value can then be used by another part of the program.
# 6. Hoisting
### Explanation
**Hoisting** is JavaScript's behavior where certain declarations are processed before the code is executed.
Function **declarations are hoisted**, so they can be called before they appear in the code.
```javascript
calculateTotal();
function calculateTotal() {
    console.log("Calculating total...");
}
```
**Output:**
```text
Calculating total...
```
Even though `calculateTotal()` appears before the function declaration, it works.
### Technical use
This behavior allows function declarations to be placed later in a JavaScript file while still being available when called.
### Function Expression and Hoisting
Function expressions behave differently.
```javascript
calculateTotal();
const calculateTotal = function() {
    console.log("Calculating total");
};
```
This produces an error because the function is assigned to `calculateTotal` only when that line executes.
The same applies to arrow functions:
```javascript
calculateTotal();
const calculateTotal = () => {
    console.log("Calculating total");
};
```
# One Technical Example Combining Everything
Consider a **shopping cart application**:
```javascript
// Function declaration
function calculateTotal(price, quantity) {
    return price * quantity;
}
// Function expression
const applyDiscount = function(total, discount) {
    return total - (total * discount / 100);
};
// Arrow function
const displayBill = total => {
    console.log("Final Amount: ₹" + total);
};
// Parameters and return
let total = calculateTotal(500, 3);
let finalAmount = applyDiscount(total, 10);
displayBill(finalAmount);
```
**Output:**
```text
Final Amount: ₹1350
```
### What happens technically?
```text
calculateTotal(500, 3)
        ↓
500 × 3
        ↓
Total = 1500
        ↓
applyDiscount(1500, 10)
        ↓
10% discount
        ↓
Final Amount = 1350
        ↓
displayBill(1350)
```
This is how functions are actually useful in applications: **one function performs a specific task, returns the result, and that result can be passed to another function.**
### Note
| Concept                  | Meaning                                 | Technical use                               |
| ------------------------ | --------------------------------------- | ------------------------------------------- |
| **Function Declaration** | Defines a reusable function             | Business logic / utility functions          |
| **Function Expression**  | Stores a function in a variable         | Callbacks / dynamic functions               |
| **Arrow Function**       | Short function syntax                   | Array methods, callbacks, promises          |
| **Parameter**            | Input received by function              | Passing data into functions                 |
| **Return**               | Sends result back                       | Passing processed data to other code        |
| **Hoisting**             | Declarations processed before execution | Function declarations can be called earlier |
 # 7_JavaScript Scope
**Scope** determines where a variable can be **accessed or used** in a JavaScript program.
The main concepts are **Global Scope, Local Scope, Lexical Scope, Closures, and Variable Shadowing**.
## 1. Global Scope
### Explanation
A variable declared outside all functions or blocks has **global scope**. It can generally be accessed from different parts of the program.
### Technical use
Global variables can be used for **application-wide configuration or constants** that are needed in multiple parts of an application.
```javascript 
const appName = "Shopping App";
function showAppName() {
    console.log(appName);
}
showAppName();
console.log(appName);
```
**Output:**
```text
Shopping App
Shopping App
```
Here, `appName` is available both inside and outside the function.
> In large applications, unnecessary global variables are usually avoided because they can cause naming conflicts and make code harder to maintain.
# 2. Local Scope
### Explanation
A variable declared inside a function or block has **local scope**. It can only be accessed within that particular scope.
### Technical use
Local variables are useful for **temporary data required only for a particular operation**, such as calculating a bill or validating a form.
```javascript
function calculateTotal() {
    let price = 500;
    let quantity = 2;
    let total = price * quantity;
    console.log(total);
}
calculateTotal();
```
**Output:**
```text 
1000
```
But this will cause an error:
```javascript 
console.log(price);
```
Because `price` exists only inside `calculateTotal()`.
### Block Scope
`let` and `const` are also limited to the block `{ }` in which they are declared.
```javascript
if (true) {
    let message = "Login successful";
    console.log(message);
}
// console.log(message); // Error
```
# 3. Lexical Scope
### Explanation
**Lexical scope** means that a function can access variables based on **where the function is written in the source code**, not where it is called.
In simple terms:
> **Inner code can access variables from its outer scope.**
### Technical use
Lexical scope is fundamental to **nested functions, modules, callbacks, and closures**.
```javascript
let company = "ABC Ltd";
function employee() {
    let name = "Arun";
    function display() {
        console.log(name);
        console.log(company);
    }
    display();
}
employee();
```
**Output:**
```text 
Arun
ABC Ltd
```
The `display()` function can access:
1. Its own variables
2. Variables from `employee()`
3. Variables from the global scope
This is called the **scope chain**.
```text
display()
   ↓
employee()
   ↓
Global scope
```
# 4. Closures
### Explanation
A **closure** occurs when an inner function remembers and continues to access variables from its outer function, even after the outer function has finished executing.
This is one of the most important concepts in JavaScript.
### Technical use
Closures are commonly used for:
* Data privacy
* Counters
* Maintaining state
* Function factories
* Callbacks
* Event handlers
### Example: Counter
```javascript 
function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
let counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
```
**Output:**
```text
1
2
3
```
### What happens?
When `createCounter()` runs:
```text
createCounter()
      ↓
count = 0
      ↓
returns inner function
      ↓
counter stores the function
```
Even though `createCounter()` has finished executing, the returned function **remembers `count`**.
```text
counter()
   ↓
remembers count
   ↓
count = 1
counter()
   ↓
remembers count
   ↓
count = 2
```
That preserved access to `count` is a **closure**.
### Technical example: Private data
Closures can be used to keep data private:
```javascript
function createBankAccount() {
    let balance = 1000;
    return {
        getBalance: function() {
            return balance;
        },
        deposit: function(amount) {
            balance += amount;
        }
    };
}
let account = createBankAccount();
account.deposit(500);
console.log(account.getBalance());
```
**Output:**
```text 
1500
```
The `balance` variable cannot be directly accessed from outside:
```javascript
console.log(account.balance);
```
It returns:
```text
undefined
```
The closure keeps `balance` accessible to the functions that were created inside `createBankAccount()`.
# 5. Variable Shadowing
### Explanation
**Variable shadowing** occurs when a variable inside an inner scope has the **same name** as a variable in an outer scope.
The inner variable temporarily "shadows" the outer variable.
### Example
```javascript 
let name = "Arun";
function displayName() {
    let name = "Kumar";
    console.log(name);
}
displayName();
console.log(name);
```
**Output:**
```text 
Kumar
Arun
```
Inside `displayName()`:
```javascript
let name = "Kumar";
```
shadows:
```javascript
let name = "Arun";
```
So JavaScript uses the **nearest variable in the scope chain**.
```text
Global scope
name = "Arun"
       ↓
Function scope
name = "Kumar"  ← JavaScript finds this first
```

| Concept                | Meaning                                                   | Technical use                            |
| ---------------------- | --------------------------------------------------------- | ---------------------------------------- |
| **Global Scope**       | Accessible from the global level                          | Application-wide constants/configuration |
| **Local Scope**        | Accessible only within a function/block                   | Temporary processing data                |
| **Lexical Scope**      | Inner code can access variables from where it was defined | Nested functions, callbacks              |
| **Closure**            | Function remembers variables from its outer scope         | Private data, counters, state            |
| **Variable Shadowing** | Inner variable has same name as outer variable            | Controlling which variable is accessed   |

### Note
```text
Global Scope
     ↓
Local Scope
     ↓
Lexical Scope → "Where the function is written"
     ↓
Closure → "Function remembers outer variables"
     ↓
Shadowing → "Inner variable hides outer variable"
```
## 8_JavaScript Arrays
An **array** is a data structure used to store **multiple values in a single variable**. Arrays are widely used in applications to store lists such as products, students, orders, prices, and user data.
## 1. Array Creation
### Explanation
An array can store multiple values using square brackets `[]`.
```javascript
let fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log(fruits);
```
**Output:**
```text
["Apple", "Banana", "Mango", "Orange"]
```
### Technical use
In an e-commerce application, an array can store a list of products:
```javascript
let products = ["Laptop", "Mobile", "Tablet"];
```
# 2. Array Indexing
### Explanation
Each element in an array has an **index**. Array indexing starts from **0**.
```javascript
let products = ["Laptop", "Mobile", "Tablet"];
console.log(products[0]);
console.log(products[1]);
console.log(products[2]);
```
**Output:**
```text
Laptop
Mobile
Tablet
```
```text
Index:     0          1         2
           ↓          ↓         ↓
Array:  Laptop     Mobile    Tablet
```
### Technical use
You can access a particular product using its index:
```javascript
console.log(products[1]);
```
# 3. `push()`
### Explanation
`push()` adds one or more elements to the **end** of an array.
### Technical use
When a user adds a new product to a shopping cart:
```javascript
let cart = ["Laptop", "Mobile"];
cart.push("Headphones");
console.log(cart);
```
**Output:**
```text
["Laptop", "Mobile", "Headphones"]
```
# 4. `pop()`
### Explanation
`pop()` removes the **last element** from an array.
### Technical use
When the last item is removed from a shopping cart:
```javascript
let cart = ["Laptop", "Mobile", "Headphones"];
cart.pop();
console.log(cart);
```
**Output:**
```text
["Laptop", "Mobile"]
```
# 5. `shift()`
### Explanation
`shift()` removes the **first element** from an array.
### Technical use
It can be used when processing items in a **queue**, where the first item needs to be processed first.
```javascript
let orders = ["Order101", "Order102", "Order103"];
let firstOrder = orders.shift();
console.log(firstOrder);
console.log(orders);
```
**Output:**
```text
Order101
["Order102", "Order103"]
```
# 6. `unshift()`
### Explanation
`unshift()` adds one or more elements to the **beginning** of an array.
### Technical use
A newly received notification can be added to the beginning of a notification list.
```javascript
let notifications = ["Message", "Friend Request"];
notifications.unshift("New Notification");
console.log(notifications);
```
**Output:**
```text
["New Notification", "Message", "Friend Request"]
```
# 7. `splice()`
### Explanation
`splice()` is used to **add, remove, or replace elements** at a particular position in an array.
### Syntax
```javascript
array.splice(start, deleteCount, item1, item2);
```
### Technical use — Removing an item
Suppose a user removes a product from a cart:
```javascript
let cart = ["Laptop", "Mobile", "Tablet"];
cart.splice(1, 1);
console.log(cart);
```
**Output:**
```text
["Laptop", "Tablet"]
```
Here:
```text
1 → starting index
1 → number of elements to remove
```
### Adding an item
```javascript
let products = ["Laptop", "Tablet"];
products.splice(1, 0, "Mobile");
console.log(products);
```
**Output:**
```text
["Laptop", "Mobile", "Tablet"]
```
# 8. `slice()`
### Explanation
`slice()` extracts a portion of an array and **returns a new array**. It does not modify the original array.
### Syntax
```javascript
array.slice(start, end);
```
The `end` index is **not included**.
### Technical use
For example, displaying the first few products on a webpage:
```javascript
let products = [
    "Laptop",
    "Mobile",
    "Tablet",
    "Watch",
    "Headphones"
];
let featuredProducts = products.slice(0, 3);
console.log(featuredProducts);
```
**Output:**
```text
["Laptop", "Mobile", "Tablet"]
```
Original array remains unchanged.
# 9. `map()`
### Explanation
`map()` creates a **new array** by applying a function to every element of the original array.
### Technical use
It is commonly used when data received from an API needs to be **transformed or formatted**.
For example, adding GST to product prices:
```javascript
let prices = [100, 200, 300];
let pricesWithGST = prices.map(price => price * 1.18);
console.log(pricesWithGST);
```
**Output:**
```text
[118, 236, 354]
```
The original array is not changed.
```text
[100, 200, 300]
       ↓ map()
[118, 236, 354]
```
# 10. `filter()`
### Explanation
`filter()` creates a new array containing **only the elements that satisfy a condition**.
### Technical use
In an e-commerce application, it can be used to display only products that are within a customer's budget.
```javascript
let prices = [500, 1200, 800, 2000, 300];
let affordable = prices.filter(price => price <= 1000);
console.log(affordable);
```
**Output:**
```text
[500, 800, 300]
```
Only prices less than or equal to `1000` are selected.
# 11. `reduce()`
### Explanation
`reduce()` processes all elements of an array and produces **one final value**.
### Technical use
It is commonly used to calculate **totals, averages, counts, or other accumulated values**.
For example, calculating the total shopping cart price:
```javascript
let prices = [500, 1000, 1500];
let total = prices.reduce((sum, price) => {
    return sum + price;
}, 0);
console.log(total);
```
**Output:**
```text
3000
```
The process is:
```text
0 + 500   = 500
500 + 1000 = 1500
1500 + 1500 = 3000
```
So:
```text
[500, 1000, 1500]
        ↓ reduce()
       3000
```
# `map()` vs `filter()` vs `reduce()`
This is an important difference:
| Method     | Purpose                  | Result       |
| ---------- | ------------------------ | ------------ |
| `map()`    | Transform every element  | New array    |
| `filter()` | Select matching elements | New array    |
| `reduce()` | Combine elements         | Single value |
### Example
```javascript
let prices = [500, 1000, 1500, 2000];
// Transform
let discounted = prices.map(price => price * 0.9);
// Select
let expensive = prices.filter(price => price >= 1500);
// Calculate total
let total = prices.reduce((sum, price) => sum + price, 0);
console.log(discounted);
console.log(expensive);
console.log(total);
```
**Output:**
```text
[450, 900, 1350, 1800]
[1500, 2000]
5000
```

| Method             | What it does           | Technical usage          |
| ------------------ | ---------------------- | ------------------------ |
| **Array Creation** | Stores multiple values | Products, users, orders  |
| **Indexing**       | Accesses an element    | Get a specific product   |
| `push()`           | Adds to end            | Add item to cart         |
| `pop()`            | Removes from end       | Remove last item         |
| `shift()`          | Removes from beginning | Process queue            |
| `unshift()`        | Adds to beginning      | New notification         |
| `splice()`         | Add/remove/replace     | Remove cart item         |
| `slice()`          | Extracts part of array | Featured products        |
| `map()`            | Transforms elements    | Calculate GST/discount   |
| `filter()`         | Selects elements       | Filter products by price |
| `reduce()`         | Produces one value     | Calculate total          |
#### Note
```text
push      → Add at END
pop       → Remove from END

unshift   → Add at START
shift     → Remove from START

splice    → Add / Remove / Replace
slice     → Copy a PART

map       → Transform ALL
filter    → Select SOME
reduce    → Combine into ONE
```
## 9_Objects
In JavaScript, an object is a dynamic, non-primitive data structure used to store collections of related data and complex entities as key-value pairs. Unlike primitive data types (like strings or numbers) which hold a single value, an object acts like a container for multiple values
The keys in an object are called properties (which are strings or symbols), and when a property's value is a function, it is called a method
A **JavaScript object** is a collection of **key-value pairs** used to represent a real-world entity or a structured piece of data.

* **Key** → property name
* **Value** → data stored in that property

For example, a student has a name, age, department, and marks. Instead of storing these separately, we can group them inside one object.
```javascript
let student = {
    name: "Vaishu",
    age: 21,
    department: "CSE",
    marks: 85
};
console.log(student.name);
console.log(student.age);
```
**Output:**
```text
Vaishu
21
```
### Why do we use objects?
Objects are useful when multiple pieces of information belong to the **same entity**.
### Realtime use cases
Objects are heavily used in:
* User profiles
* Product information
* Employee records
* API responses
* Shopping carts
* Database records
* Configuration settings
* Form data
* JSON data
# 1. Object Properties
### Explanation
A **property** is a piece of information stored inside an object.
In this object:
```javascript
let user = {
    name: "Sri",
    age: 25,
    city: "Chennai"
};
```
The properties are:
```text
name → "Sri"
age  → 25
city → "Chennai"
```
The property name is called the **key**, and the value stored against it is called the **value**.
### Syntax
```javascript
let objectName = {
    property1: value1,
    property2: value2
};
```
### Accessing properties
There are two main ways.
#### 1. Dot notation
```javascript
console.log(user.name);
console.log(user.age);
```
#### 2. Bracket notation
```javascript
console.log(user["name"]);
console.log(user["age"]);
```
Both produce the same result.
### When is bracket notation useful?
It is particularly useful when the property name is stored in a variable.
```javascript
let user = {
    name: "Arun",
    age: 25
};
let property = "name";
console.log(user[property]);
```
**Output:**
```text
Arun
```
If you write:
```javascript
user.property
```
JavaScript looks for a property literally called `"property"`.
### Adding a property
You can add new properties after creating the object.
```javascript
let user = {
    name: "Arun"
};
user.age = 25;
user.city = "Chennai";
console.log(user);
```
**Output:**
```text
{
    name: "Arun",
    age: 25,
    city: "Chennai"
}
```
### Updating a property
```javascript
let user = {
    name: "Arun",
    age: 25
};
user.age = 26;
console.log(user.age);
```
**Output:**
```text
26
```
### Deleting a property
```javascript
let user = {
    name: "Arun",
    age: 25,
    city: "Chennai"
};
delete user.city;
console.log(user);
```
**Output:**
```text
{
    name: "Arun",
    age: 25
}
```
### Realtime use case
Suppose an e-commerce application receives product information:
```javascript
let product = {
    name: "Wireless Mouse",
    price: 999,
    stock: 20
};
product.stock = 19;
console.log(product);
```
When a customer purchases one mouse, the application can update the `stock` property.
# 2. Object Methods
### Explanation
A **method** is a function stored inside an object.
Properties describe **what an object has**, while methods describe **what an object can do**.
For example, a bank account can have:
```text
Properties:
balance
accountNumber
owner
Methods:
deposit()
withdraw()
checkBalance()
```
### Syntax
```javascript
let object = {
    property: value,
    method: function() {
        // code
    }
};
```
A shorter modern syntax is:
```javascript
let object = {
    method() {
        // code
    }
};
```
### Example
```javascript
let person = {
    name: "Rahul",
    greet() {
        console.log("Hello " + this.name);
    }
};
person.greet();
```
**Output:**
```text
Hello Rahul
```
### Understanding `this`
Inside an object method, `this` generally refers to the **object that is calling the method**.
### Realtime use case
A shopping cart can be represented using an object:
```javascript
let cart = {
    total: 0,
    addProduct(price) {
        this.total += price;
    },
    showTotal() {
        console.log("Total: ₹" + this.total);
    }
};
cart.addProduct(500);
cart.addProduct(1000);
cart.showTotal();
```
**Output:**
```text
Total: ₹1500
```
Here:
```javascript
this.total
```
means:
```javascript
cart.name
```
The object stores the **state** (`total`) and provides methods to **modify or use that state**.
# 3. Nested Objects
### Explanation
An object can contain **another object as its property**.
This is called a **nested object**.
This is useful when information itself has multiple levels.
For example, an employee may have:
```text
Employee
 ├── name
 ├── age
 └── address
      ├── city
      ├── state
      └── pincode
```
### Syntax
```javascript
let object = {
    property: {
        nestedProperty: value
    }
};
```
### Example
```javascript
let employee = {
    name: "vais",
    age: 24,
    address: {
        city: "Coimbatore",
        state: "Tamil Nadu",
        pincode: 641001
    }
};
console.log(employee.name);
console.log(employee.address.city);
console.log(employee.address.pincode);
```
**Output:**
```text
Vais
Coimbatore
641001
```
### How does this work?
This:
```javascript
employee.address
```
returns:
```javascript
{
    city: "Coimbatore",
    state: "Tamil Nadu",
    pincode: 641001
}
```
Then:
```javascript
employee.address.city
```
accesses the `city` inside the `address` object.
### Realtime use case
API responses commonly contain nested objects.
```javascript
let user = {
    id: 101,
    name: "Anu",
    profile: {
        email: "anu@gmail.com",
        address: {
            city: "Chennai",
            country: "India"
        }
    }
};
console.log(user.profile.email);
console.log(user.profile.address.city);
```
Nested objects are extremely common when working with **REST APIs and JSON**.
# 4. Object Destructuring
### Explanation
**Destructuring** allows us to extract values from an object and store them in variables easily.
Without destructuring:
```javascript
let user = {
    name: "Arun",
    age: 25,
    city: "Chennai"
};
let name = user.name;
let age = user.age;
let city = user.city;
```
With destructuring:
```javascript
let user = {
    name: "Arun",
    age: 25,
    city: "Chennai"
};
let { name, age, city } = user;
console.log(name);
console.log(age);
console.log(city);
```
**Output:**
```text
Arun
25
Chennai
```
### Syntax
```javascript
let { property1, property2 } = object;
```
The variable names normally need to match the property names.
```javascript
let { name, age } = user;
```
is equivalent to:
```javascript
let name = user.name;
let age = user.age;
```
### Renaming during destructuring
Suppose:
```javascript
let user = {
    name: "Arun",
    age: 25
};
```
You can give the extracted value a different variable name:
```javascript
let { name: userName, age: userAge } = user;
console.log(userName);
console.log(userAge);
```
**Output:**
```text
Arun
25
```
Here:
```javascript
name: userName
```
means:
> Take the `name` property and store its value in a variable called `userName`.
### Default values
If a property doesn't exist, you can provide a default value.
```javascript
let user = {
    name: "Arun"
};
let { name, age = 18 } = user;
console.log(name);
console.log(age);
```
**Output:**
```text
Arun
18
```
Since `age` doesn't exist, JavaScript uses `18`.
### Nested destructuring
```javascript
let employee = {
    name: "Priya",
    address: {
        city: "Coimbatore",
        state: "Tamil Nadu"
    }
};
let {
    name,
    address: { city, state }
} = employee;
console.log(name);
console.log(city);
console.log(state);
```
**Output:**
```text
Priya
Coimbatore
Tamil Nadu
```
### Realtime use case
Destructuring is frequently used when receiving data from an API.
```javascript
let response = {
    id: 101,
    username: "vaishu",
    email: "vaishu@gmail.com"
};
let { username, email } = response;
console.log(username);
console.log(email);
```
Instead of repeatedly writing:
```javascript
response.username
response.email
```
you can directly use:
```javascript
username
email
```
# 5. `Object.keys()`
### Explanation
`Object.keys()` returns an **array containing all the property names (keys)** of an object.
For example:
```javascript
let user = {
    name: "Arun",
    age: 25,
    city: "Chennai"
};
console.log(Object.keys(user));
```
**Output:**
```text
["name", "age", "city"]
```
### Syntax
```javascript
Object.keys(object);
```
### Important point
`Object.keys()` gives you the **keys**, not the values.
```javascript
Object.keys(user);
```
gives:
```text
["name", "age", "city"]
```
### Realtime use case
Suppose you want to know how many fields an object contains:
```javascript
let product = {
    name: "Laptop",
    price: 55000,
    brand: "Dell",
    stock: 10
};
let properties = Object.keys(product);
console.log(properties.length);
```
**Output:**
```text
4
```
You can also loop through them:
```javascript
let product = {
    name: "Laptop",
    price: 55000,
    brand: "Dell"
};
Object.keys(product).forEach(key => {
    console.log(key);
});
```
**Output:**
```text
name
price
brand
```
# 6. `Object.values()`
### Explanation
`Object.values()` returns an **array containing all the values** of an object.
```javascript
let user = {
    name: "Arun",
    age: 25,
    city: "Chennai"
};
console.log(Object.values(user));
```
**Output:**
```text
["Arun", 25, "Chennai"]
```
### Syntax
```javascript
Object.values(object);
```
### Difference
```javascript
Object.keys(user);
```
→ property names
```text
["name", "age", "city"]
```
while:
```javascript
Object.values(user);
```
→ property values
```text
["Arun", 25, "Chennai"]
```
### Realtime use case
Suppose you have student marks:
```javascript
let marks = {
    maths: 90,
    science: 85,
    english: 80
};
let scores = Object.values(marks);
console.log(scores);
```
**Output:**
```text
[90, 85, 80]
```
You can then perform operations on the values:
```javascript
let marks = {
    maths: 90,
    science: 85,
    english: 80
};
let scores = Object.values(marks);
let total = scores.reduce((sum, mark) => sum + mark, 0);
console.log(total);
```
**Output:**
```text
255
```
# 7. `Object.entries()`
### Explanation
`Object.entries()` returns an array containing **key-value pairs**.
```javascript
let user = {
    name: "Arun",
    age: 25,
    city: "Chennai"
};
console.log(Object.entries(user));
```
**Output:**
```text
[
    ["name", "Arun"],
    ["age", 25],
    ["city", "Chennai"]
]
```
Each pair is represented as:
```javascript
[key, value]
```
So:
```javascript
["name", "Arun"]
```
means:
```text
key   → name
value → Arun
```
### Syntax
```javascript
Object.entries(object);
```
### Using `for...of`
This becomes particularly useful when you want both the key and value.
```javascript
let user = {
    name: "Arun",
    age: 25,
    city: "Chennai"
};
for (let [key, value] of Object.entries(user)) {
    console.log(key + ":", value);
}
```
**Output:**
```text
name: Arun
age: 25
city: Chennai
```
### Realtime use case
Suppose an application needs to display all user information dynamically:
```javascript
let user = {
    username: "vaishu",
    email: "vaishu@gmail.com",
    role: "Developer"
};
for (let [key, value] of Object.entries(user)) {
    console.log(`${key}: ${value}`);
}
```
Instead of manually writing:
```javascript
console.log(user.username);
console.log(user.email);
console.log(user.role);
```
the application can process any number of properties dynamically.


| Concept              | Purpose                       | Example             |
| -------------------- | ----------------------------- | ------------------- |
| **Property**         | Stores information            | `user.name`         |
| **Method**           | Performs an action            | `user.login()`      |
| **Nested object**    | Object inside another object  | `user.address.city` |
| **Destructuring**    | Extract values into variables | `let {name} = user` |
| **Object.keys()**    | Gets all keys                 | `["name", "age"]`   |
| **Object.values()**  | Gets all values               | `["Arun", 25]`      |
| **Object.entries()** | Gets key-value pairs          | `[["name","Arun"]]` |


**remember:**

```text
Object
│
├── Properties → data
│
├── Methods → actions
│
├── Nested Objects → structured data
│
├── Destructuring → easily extract data
│
├── Object.keys() → get keys
│
├── Object.values() → get values
│
└── Object.entries() → get key + value pairs
```
These concepts become especially important when you start working with **JSON, APIs, React, Node.js, and real-world application data**.

## 10_Strings
A **string** is a sequence of characters used to represent text.
Strings are commonly used for **user names, emails, messages, passwords, search queries, product names, API data, and form inputs**.
```javascript
let name = "Vaish";
let email = "vaish@gmail.com";
```

# 1. String Creation
Strings can be created using:
* Double quotes `" "`
* Single quotes `' '`
* Backticks `` ` ` ``
```javascript
let name1 = "Vaish";
let name2 = 'Vaish';
let name3 = `Vaish`;
```
All three contain a string.

# 2. String Length
### Explanation
The `length` property returns the **number of characters** in a string.
### Technical use
Very commonly used for **form validation**.
For example, checking whether a password has at least 8 characters:
```javascript
let password = "hello123";
if (password.length >= 8) {
    console.log("Password length is valid");
}
```
**Output:**
```text
Password length is valid
```

# 3. String Concatenation
### Explanation
**Concatenation** means joining two or more strings together.
The `+` operator can be used for concatenation.

### Technical use
Used when creating **messages, labels, URLs, filenames, etc.**
```javascript
let product = "Laptop";
let price = 50000;
let message = "Product: " + product + ", Price: ₹" + price;
console.log(message);
```
**Output:**
```text
Product: Laptop, Price: ₹50000
```
### Important
When `+` is used with strings, JavaScript performs concatenation

# 4. Template Literals
### Explanation
**Template literals** are strings created using backticks:
```javascript
``
```
Their biggest advantage is that you can directly insert variables and expressions using:
```javascript
${}
```
### Technical use
Template literals are very useful when dynamically generating **UI messages, API request data, HTML content, logs, and notifications**.
For example:
```javascript
let product = "Laptop";
let price = 50000;
let quantity = 2;
let bill = `
Product: ${product}
Price: ₹${price}
Quantity: ${quantity}
Total: ₹${price * quantity}
`;
console.log(bill);
```
**Output:**
```text
Product: Laptop
Price: ₹50000
Quantity: 2
Total: ₹100000
```

### Expressions inside `${}`
You can perform calculations:
```javascript
let price = 1000;
let discount = 10;
console.log(`Final price: ₹${price - (price * discount / 100)}`);
```
Output
```text
Final price: ₹900
```
# 5. Escaping Characters
### Explanation
Sometimes you need to include special characters inside a string.
For example, if you use double quotes inside a double-quoted string:
```javascript
let message = "He said "Hello"";
```
This causes an error because JavaScript thinks the string ends before `Hello`.
We use a **backslash `\`** to escape the special character.
```javascript
let message = "He said \"Hello\"";
console.log(message);
```
**Output:**
```text
He said "Hello"
```

## Common Escape Characters

| Escape | Meaning      |
| ------ | ------------ |
| `\"`   | Double quote |
| `\'`   | Single quote |
| `\\`   | Backslash    |
| `\n`   | New line     |
| `\t`   | Tab          |

### `\n` — New line
```javascript
let message = "Hello\nWelcome to JavaScript";
console.log(message);
```
Output:
```text
Hello
Welcome to JavaScript
```
### `\t` — Tab
```javascript
console.log("Name:\tVaish");
```
Output:
```text
Name:   Vaish
```
### Technical use
Escaping is useful when processing **text containing quotes, formatted messages, file paths, JSON-like data, or user-generated text**.

# 6. Important String Methods
String methods are built-in functions that allow you to **search, modify, extract, and manipulate text**.

## `toUpperCase()`
Converts a string to uppercase.
```javascript
let name = "vaish";
console.log(name.toUpperCase());
```
Output:
```text
VAISH
```
### Technical use
Useful when normalizing user input.
```javascript
let search = "laptop";
if (search.toUpperCase() === "LAPTOP") {
    console.log("Product found");
}
```

## `toLowerCase()`
Converts a string to lowercase.
```javascript
let email = "VAISH@GMAIL.COM";
console.log(email.toLowerCase());
```
Output:
```text
vaish@gmail.com
```
### Technical use
Useful for **case-insensitive email/search comparisons**.

# 7. `trim()`
### Explanation
Removes whitespace from the **beginning and end** of a string.
### Technical use
Very common in **form validation**.
```javascript
let username = "   Vaish   ";
username = username.trim();
if (username !== "") {
    console.log("Valid username");
}
```
# 8. `includes()`
### Explanation
Checks whether a string contains a particular substring.
Returns `true` or `false`.
```javascript
let email = "vaish@gmail.com";
console.log(email.includes("@"));
```
Output:
```text
true
```
### Technical use
Checking whether an email contains `@`, or whether a search term exists in a product name.
```javascript
let product = "Apple MacBook";
console.log(product.includes("MacBook"));
```
Output:
```text
true
```

# 9. `startsWith()`
Checks whether a string starts with a particular value.
```javascript
let url = "https://example.com";
console.log(url.startsWith("https"));
```
Output:
```text
true
```
### Technical use
Can be used to check URL prefixes or file naming conventions.


# 10. `endsWith()`
Checks whether a string ends with a particular value.
```javascript
let file = "profile.jpg";
console.log(file.endsWith(".jpg"));
```
Output:
```text
true
```
### Technical use
Useful for **file-type validation**.

```javascript
let fileName = "photo.png";

if (fileName.endsWith(".png") || fileName.endsWith(".jpg")) {
    console.log("Valid image file");
}
```

# 11. `charAt()`
Returns the character at a particular index.
```javascript
let name = "Vaish";
console.log(name.charAt(0));
```
Output:
```text
V
```
You can also use indexing:
```javascript
console.log(name[0]);
```

# 12. `indexOf()`
Returns the index of the first occurrence of a value.
```javascript
let email = "vaish@gmail.com";
console.log(email.indexOf("@"));
```
Output:
```text
5
```
If the value doesn't exist:
```javascript
console.log(email.indexOf("#"));
```
Output:
```text
-1
```
### Technical use
Useful when you need to know **where a particular piece of text occurs**.

# 13. `slice()`
Extracts a portion of a string.
```javascript
let text = "JavaScript";
let result = text.slice(0, 4);
console.log(result);
```
Output:
```text
Java
```
The ending index is not included.
```text
J a v a S c r i p t
0 1 2 3 4 5 6 7 8 9
↑-------↑
0       4
```

### Technical use
Extracting parts of IDs, usernames, filenames, etc.

# 14. `substring()`
Similar to `slice()`, it extracts part of a string.
```javascript
let text = "JavaScript";
console.log(text.substring(0, 4));
```
Output:
```text
Java
```
For modern JavaScript, `slice()` is generally more flexible, especially with negative indexes.

# 15. `replace()`
Replaces the **first matching occurrence**.
```javascript
let message = "Hello Sri";
let result = message.replace("Sri", "Vaish");
console.log(result);
```
Output:
```text
Hello Vaish
```
### Technical use
Useful for replacing text in dynamically generated content.

# 16. `replaceAll()`
Replaces **all occurrences**.
```javascript
let message = "JavaScript is powerful. JavaScript is popular.";
let result = message.replaceAll("JavaScript", "JS");
console.log(result);
```
Output:
```text
JS is powerful. JS is popular.
```

# 17. `split()`
### Explanation
`split()` converts a string into an **array** based on a separator.
```javascript
let fruits = "Apple,Banana,Mango";
let result = fruits.split(",");
console.log(result);
```
Output:
```text
["Apple", "Banana", "Mango"]
```
### Technical use
Very common when processing **CSV-like data, user input, or tags**.

# 18. `concat()`
Joins strings together.
```javascript
let firstName = "Sri";
let lastName = "Vaishnavi";
let fullName = firstName.concat(" ", lastName);
console.log(fullName);
```
Output:

```text
Sri Vaishnavi
```

In modern JavaScript, `+` or template literals are generally more convenient.



| Concept              | Purpose                       | Real-time use              |
| -------------------- | ----------------------------- | -------------------------- |
| **String**           | Store text                    | Name, email, message       |
| `length`             | Count characters              | Password validation        |
| `+`                  | Concatenate strings           | Build messages             |
| **Template literal** | Insert variables into strings | Dynamic UI/messages        |
| `\`                  | Escape special characters     | Quotes/new lines           |
| `toUpperCase()`      | Convert to uppercase          | Search/input normalization |
| `toLowerCase()`      | Convert to lowercase          | Email/search normalization |
| `trim()`             | Remove outer whitespace       | Form validation            |
| `includes()`         | Check substring               | Search/email validation    |
| `startsWith()`       | Check beginning               | URL/prefix validation      |
| `endsWith()`         | Check ending                  | File extension validation  |
| `charAt()`           | Get character                 | Character processing       |
| `indexOf()`          | Find position                 | Search text                |
| `slice()`            | Extract part                  | Extract ID/year/name       |
| `replace()`          | Replace text                  | Modify content             |
| `replaceAll()`       | Replace all matches           | Text processing            |
| `split()`            | String → Array                | CSV/tags/input processing  |
| `concat()`           | Join strings                  | Combine text               |

### Note

```text
length       → How many characters?
includes()   → Does it contain this?
indexOf()    → Where is it?
slice()      → Give me a part
split()      → String → Array
replace()    → Change text
trim()       → Remove outer spaces
toUpperCase  → Uppercase
toLowerCase  → Lowercase

+            → Concatenate
`Hello ${x}` → Template literal
\            → Escape character
```
## 11_Numbers and Math
These methods are commonly used when working with **user input, prices, calculations, form data, APIs, and validation**.

## 1. `parseInt()`
### Explanation
`parseInt()` converts a value into an **integer (whole number)**.
It removes the decimal part.
### Syntax
```js
parseInt(value)
```
### Example
```js
let age = "25";
let result = parseInt(age);
console.log(result);
```
**Output:**
```text
25
```
### Decimal example
```js
let price = "99.99";
console.log(parseInt(price));
```
**Output:**
```text
99
```
### Technical real-time use
When data comes from an HTML form, it usually comes as a **string**.
```js
let quantity = "5";
let totalItems = parseInt(quantity);
console.log(totalItems + 2);
```
Output:
```text
7
```
Without conversion:
```js
console.log(quantity + 2);
```
Output:
```text
52
```
Because `"5"` is a string.
### Important
You can also specify the number system:
```js
parseInt("101", 2);
```
Output:
```text
5
```
Here `101` is interpreted as a **binary number**.
# 2. `parseFloat()`
### Explanation
`parseFloat()` converts a value into a **decimal number**.
### Syntax
```js
parseFloat(value)
```
### Example
```js
let price = "99.99";
let result = parseFloat(price);
console.log(result);
```
Output:
```text
99.99
```
### Technical real-time use
Suppose an e-commerce application receives product price from a form:
```js
let price = "249.50";
let quantity = "3";
let total = parseFloat(price) * parseInt(quantity);
console.log(total);
```
Output:
```text
748.5
```
# 3. `toFixed()`
### Explanation
`toFixed()` is used to format a number with a specific number of **decimal places**.
### Syntax
```js
number.toFixed(decimalPlaces)
```
### Example
```js
let price = 249.5678;
console.log(price.toFixed(2));
```
Output:
```text
249.57
```
It rounds the value to **2 decimal places**.
### Technical real-time use
Very common in **billing, invoices, shopping carts, banking displays**, etc.
```js
let price = 499.99;
let quantity = 3;
let total = price * quantity;
console.log(`Total: ₹${total.toFixed(2)}`);
```
Output:
```text
Total: ₹1499.97
```
### Important
`toFixed()` returns a **string**, not a number.
```js
let value = 12.345;
console.log(typeof value.toFixed(2));
```
Output:
```text
string
```
# 4. `isNaN()`
### Explanation
`isNaN()` checks whether a value is **Not a Number**.
`NaN` means **Not-a-Number**.
### Syntax
```js
isNaN(value)
```
It returns:
* `true` → value cannot be treated as a valid number
* `false` → value can be treated as a number
### Example
```js
console.log(isNaN(100));
console.log(isNaN("100"));
console.log(isNaN("hello"));
```
Output:
```text
false
false
true
```
### Technical real-time use
Suppose a user enters an age:
```js
let age = "twenty";
if (isNaN(age)) {
    console.log("Please enter a valid number");
} else {
    console.log("Valid age");
}
```
Output:
```text
Please enter a valid number
```
### Better modern option: `Number.isNaN()`
```js
console.log(Number.isNaN(NaN));      // true
console.log(Number.isNaN("hello"));  // false
```
`Number.isNaN()` performs a stricter check because it does **not automatically convert the value**.

# 5. Math Methods
JavaScript provides the built-in `Math` object for mathematical operations.
Syntax:
```js
Math.method()
```
## `Math.round()`
Rounds to the nearest integer.
```js
console.log(Math.round(4.4));
console.log(Math.round(4.6));
```
Output:
```text
4
5
```
### Real-time use
Rounding a calculated rating:
```js
let rating = 4.6;

console.log(Math.round(rating));
```

## `Math.floor()`
Rounds **down**.
```js
console.log(Math.floor(4.9));
```
Output:
```text
4
```
### Real-time use
Pagination:
```js
let products = 47;
let productsPerPage = 10;
let pages = Math.ceil(products / productsPerPage);
console.log(pages);
```
Output:
```text
5
```
Here `Math.ceil()` is actually more appropriate because we need enough pages to contain all products.

## `Math.ceil()`
Rounds **up**.
```js
console.log(Math.ceil(4.1));
```
Output:
```text
5
```
### Technical use
```js
let totalItems = 101;
let itemsPerPage = 10;
let pages = Math.ceil(totalItems / itemsPerPage);
console.log(pages);
```
Output:
```text
11
```

## `Math.trunc()`
Removes the decimal part without rounding.
```js
console.log(Math.trunc(8.99));
```
Output:
```text
8
```
Difference:
```js
Math.round(8.99); // 9
Math.floor(8.99); // 8
Math.trunc(8.99); // 8
```
## `Math.max()`
Returns the **largest value**.
```js
console.log(Math.max(10, 50, 30, 20));
```
Output:
```text
50
```
### Technical use
Finding the highest score:
```js
let scores = [75, 92, 68, 88];
console.log(Math.max(...scores));
```
Output:
```text
92
```
## `Math.min()`
Returns the **smallest value**.
```js
console.log(Math.min(10, 50, 30, 20));
```
Output:
```text
10
```

## `Math.abs()`
Returns the positive value of a number.
```js
console.log(Math.abs(-25));
```
Output:
```text
25
```
### Technical use
Finding the difference between two values:
```js
let temperature1 = 35;
let temperature2 = 28;
let difference = Math.abs(temperature1 - temperature2);
console.log(difference);
```
Output:
```text
7
```
## `Math.pow()`
Calculates a number raised to a power.
```js
console.log(Math.pow(2, 3));
```
Output:
```text
8
```
Equivalent modern syntax:
```js
console.log(2 ** 3);
```
## `Math.sqrt()`
Returns the square root.
```js
console.log(Math.sqrt(64));
```
Output:
```text
8
```
### Technical use
Used in mathematical calculations such as distance calculations.

## `Math.random()`
Generates a random number between **0 and less than 1**.
```js
console.log(Math.random());
```
Possible output:
```text
0.726483
```
### Generate a random number from 1 to 10
```js
let number = Math.floor(Math.random() * 10) + 1;
console.log(number);
```
Possible output:
```text
7
```
### Technical use
Randomizing UI elements, games, simulations, test data, etc.
**Important:** Don't use `Math.random()` for security-sensitive values such as OTPs, passwords, or authentication tokens. Use the Web Crypto API instead.

## `Math.PI`
Provides the value of π.
```js
console.log(Math.PI);
```
Output:
```text
3.141592653589793
```
### Technical use
Circle calculation:
```js
let radius = 5;
let area = Math.PI * radius * radius;
console.log(area);
```
Output:
```text
78.53981633974483
```
# Note

| Method          | Purpose                 | Example                         |
| --------------- | ----------------------- | ------------------------------- |
| `parseInt()`    | Convert to integer      | `parseInt("25.8") → 25`         |
| `parseFloat()`  | Convert to decimal      | `parseFloat("25.8") → 25.8`     |
| `toFixed()`     | Format decimal places   | `(25.678).toFixed(2) → "25.68"` |
| `isNaN()`       | Check invalid number    | `isNaN("hello") → true`         |
| `Math.round()`  | Nearest integer         | `4.6 → 5`                       |
| `Math.floor()`  | Round down              | `4.9 → 4`                       |
| `Math.ceil()`   | Round up                | `4.1 → 5`                       |
| `Math.trunc()`  | Remove decimal          | `4.9 → 4`                       |
| `Math.max()`    | Largest value           | `Math.max(2,8,5) → 8`           |
| `Math.min()`    | Smallest value          | `Math.min(2,8,5) → 2`           |
| `Math.abs()`    | Positive/absolute value | `Math.abs(-5) → 5`              |
| `Math.pow()`    | Power                   | `Math.pow(2,3) → 8`             |
| `Math.sqrt()`   | Square root             | `Math.sqrt(25) → 5`             |
| `Math.random()` | Random number           | `0 ≤ x < 1`                     |
| `Math.PI`       | π value                 | `3.14159...`                    |

## 12_Date and Time
The **Date object** is used to work with **dates and time** in JavaScript.
It is commonly used in:
* Login/session timestamps
* Order dates
* Appointment scheduling
* Chat messages
* Age calculation
* File creation dates
* API timestamps
* Reports and dashboards

# 1. Creating a Date Object
### Explanation
You can create a date using the `Date` constructor.
### Syntax
```js
new Date()
```
### Example
```js
let currentDate = new Date();
console.log(currentDate);
```
Output will contain the current date and time, for example:
```text
Thu Sep 17 2026 22:30:00 GMT+0530 (India Standard Time)
```
The exact output depends on the current time.
### Technical real-time use
When a user places an order:
The application can store this date with the order record.

# 2. Creating a Specific Date
You can provide a date manually.
```js
let date = new Date("2026-09-17");
console.log(date);
```
You can also specify date components:
```js
let date = new Date(2026, 8, 17);
console.log(date);
```
### Important
Months are **zero-indexed**:
```text
January   → 0
February  → 1
March     → 2
...
September → 8
December  → 11
```
So:
```js
new Date(2026, 8, 17)
```
means:
```text
September 17, 2026
```
# 3. Date Formatting
The default `Date` output isn't always suitable for displaying to users.
JavaScript provides several formatting methods.
## `toDateString()`
Returns only the date portion in a readable format.
```js
let date = new Date();
console.log(date.toDateString());
```
Example output:
```text
Thu Sep 17 2026
```
## `toTimeString()`
Returns the time information.
```js
let date = new Date();
console.log(date.toTimeString());
```
Example:
```text
22:30:15 GMT+0530 (India Standard Time)
```
## `toISOString()`
Returns the date in **ISO 8601 format**.
```js
let date = new Date();
console.log(date.toISOString());
```
Example:
```text
2026-09-17T17:00:15.000Z
```
### Technical real-time use
`toISOString()` is very common when sending dates through **REST APIs** or storing timestamps in databases.

# 4. Getting Individual Date Values
JavaScript provides methods to extract individual parts.
## `getFullYear()`
Returns the year.
```js
let date = new Date();
console.log(date.getFullYear());
```
Output:
```text
2026
```
## `getMonth()`
Returns the month from `0` to `11`.
```js
let date = new Date();
console.log(date.getMonth());
```
For September:
```text
8
```
To display a normal month number:
```js
console.log(date.getMonth() + 1);
```
Output:
```text
9
```
## `getDate()`
Returns the day of the month.
```js
let date = new Date();
console.log(date.getDate());
```
For September 17:
```text
17
```
## `getDay()`
Returns the day of the week.
Values:
```text
0 → Sunday
1 → Monday
2 → Tuesday
3 → Wednesday
4 → Thursday
5 → Friday
6 → Saturday
```
Example:
```js
let date = new Date();
console.log(date.getDay());
```
For Thursday:
```text
4
```
### Important difference
```text
getDate() → day of the month
getDay()  → day of the week
```
For example:
```text
September 17, Thursday
getDate() → 17
getDay()  → 4
```
## `getHours()`
```js
let date = new Date();
console.log(date.getHours());
```
Returns hours from:
```text
0 - 23
```
## `getMinutes()`
```js
console.log(date.getMinutes());
```
Returns:
```text
0 - 59
```
## `getSeconds()`
```js
console.log(date.getSeconds());
```
Returns:
```text
0 - 59
```
## `getMilliseconds()`
```js
console.log(date.getMilliseconds());
```
Returns:
```text
0 - 999
```
# 5. Setting Date Values
JavaScript also provides `set` methods.
### `setFullYear()`
```js
let date = new Date();
date.setFullYear(2030);
console.log(date);
```
### `setMonth()`
```js
date.setMonth(5);
```
`5` means June.
### `setDate()`
```js
date.setDate(25);
```
### `setHours()`
```js
date.setHours(10);
```
There are also:
```js
setMinutes()
setSeconds()
setMilliseconds()
```
# 6. Timestamps
### Explanation
A **timestamp** represents a date/time as the number of **milliseconds since January 1, 1970 UTC**.
This is called the **Unix epoch** or **epoch time**.
## `Date.now()`
Returns the current timestamp.
```js
let timestamp = Date.now();
console.log(timestamp);
```
Example:
```text
1789660815000
```
The exact value changes continuously.
# 7. Getting Timestamp from a Date
You can use `getTime()`.
```js
let date = new Date();
console.log(date.getTime());
```
This gives the timestamp corresponding to that date.
```js
let date1 = new Date("2026-01-01");
console.log(date1.getTime());
```
# 8. Timestamp → Date
You can convert a timestamp back into a `Date`.
```js
let timestamp = Date.now();
let date = new Date(timestamp);
console.log(date);
```
### Technical real-time use
APIs and databases often exchange timestamps.
```text
Backend
   ↓
1789660815000
   ↓
Frontend
   ↓
new Date(timestamp)
   ↓
Display readable date
```
For example:
```js
let timestamp = 1789660815000;
let date = new Date(timestamp);
console.log(date.toDateString());
```
# 9. Comparing Dates
Since dates can be converted to timestamps, comparing dates is straightforward.
```js
let date1 = new Date("2026-09-10");
let date2 = new Date("2026-09-17");
if (date1 < date2) {
    console.log("date1 is earlier");
}
```
Output:
```text
date1 is earlier
```
### Technical use
Checking whether a subscription has expired:
```js
let expiryDate = new Date("2026-09-20");
let today = new Date();
if (today > expiryDate) {
    console.log("Subscription expired");
} else {
    console.log("Subscription is active");
}
```
# 10. Finding Difference Between Dates
Because timestamps are in milliseconds, we can subtract two dates.
```js
let start = new Date("2026-09-10");
let end = new Date("2026-09-17");
let difference = end - start;
console.log(difference);
```
The result is milliseconds.
To convert it into days:
```js
let millisecondsPerDay = 1000 * 60 * 60 * 24;
let days = difference / millisecondsPerDay;
console.log(days);
```
Output:
```text
7
```
### Technical use
This can be used for:
* Subscription duration
* Delivery estimates
* Booking duration
* Attendance calculations
* Days remaining until an event
# 11. Custom Date Formatting
Suppose you want:
```text
17/09/2026
```
You can construct it yourself.
```js
let date = new Date();
let day = String(date.getDate()).padStart(2, "0");
let month = String(date.getMonth() + 1).padStart(2, "0");
let year = date.getFullYear();
let formattedDate = `${day}/${month}/${year}`;
console.log(formattedDate);
```
Example:
```text
17/09/2026
```
Here we are combining:
* `getDate()`
* `getMonth()`
* `getFullYear()`
* `padStart()`
* Template literals
# 12. `Intl.DateTimeFormat()`
For more professional localization, JavaScript provides `Intl.DateTimeFormat`.
```js
let date = new Date();
let formatted = new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric"
}).format(date);
console.log(formatted);
```
Example:
```text
17 September 2026
```
You can also include time:
```js
let formatted = new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short"
}).format(new Date());
console.log(formatted);
```
Example:
```text
17 Sept 2026, 10:30 pm
```
This is useful for **localized UI, invoices, dashboards, bookings, and notifications**.
# 13. UTC Methods
JavaScript also provides UTC versions of date methods.
For example:
```js
getFullYear()
getMonth()
getDate()
getHours()
```
have corresponding UTC versions:
```js
getUTCFullYear()
getUTCMonth()
getUTCDate()
getUTCHours()
```
Example:
```js
let date = new Date();
console.log(date.getHours());
console.log(date.getUTCHours());
```
The values can differ because local time and UTC are different.
### Important
For APIs and backend systems, timestamps are often stored/transmitted in **UTC**, then converted to the user's local timezone for display.

# 14. Important Date Methods

| Method                  | Purpose                    |
| ----------------------- | -------------------------- |
| `new Date()`            | Create current Date object |
| `Date.now()`            | Current timestamp          |
| `getTime()`             | Get timestamp              |
| `getFullYear()`         | Get year                   |
| `getMonth()`            | Get month `0–11`           |
| `getDate()`             | Get day of month           |
| `getDay()`              | Get day of week            |
| `getHours()`            | Get hour                   |
| `getMinutes()`          | Get minutes                |
| `getSeconds()`          | Get seconds                |
| `setFullYear()`         | Change year                |
| `setMonth()`            | Change month               |
| `setDate()`             | Change day                 |
| `toDateString()`        | Readable date              |
| `toTimeString()`        | Readable time              |
| `toISOString()`         | ISO date/time              |
| `Intl.DateTimeFormat()` | Localized formatting       |


# Note

```text
Date
 ↓
new Date()             → Current date/time
Date.now()             → Current timestamp
getTime()              → Date → timestamp
new Date(timestamp)    → Timestamp → date

getFullYear()          → Year
getMonth()             → Month (0–11)
getDate()              → Day of month
getDay()               → Day of week
getHours()             → Hour
getMinutes()           → Minutes
getSeconds()           → Seconds

toDateString()         → Readable date
toTimeString()         → Readable time
toISOString()          → API/database-friendly format
Intl.DateTimeFormat()  → User-friendly localized format
```
**`getDate()` vs `getDay()`**
```text
getDate() → 17
getDay()  → 4 (Thursday)
```
**`getMonth()`**
```text
January → 0
September → 8
December → 11
```
**Timestamp**
```text
Date → milliseconds since Jan 1, 1970 UTC
```
**API-friendly date**
```js
new Date().toISOString()
```
**Current timestamp**
```js
Date.now()
```

## 13_Error Handling
JavaScript provides **error-handling mechanisms** to prevent an application from crashing when something unexpected happens.
The main concepts are:
* `try`
* `catch`
* `finally`
* `throw`
* Custom Errors
# 1. `try`
### Explanation
The `try` block contains code that **might produce an error**.
If an error occurs inside `try`, JavaScript stops executing that block and moves to `catch`.
### Syntax

```js
try {
    // code that may cause an error
}
```
### Example
```js
try {
    let result = 10 / 0;
    console.log(result);
}
```
Note that `10 / 0` does **not** throw a JavaScript exception; it produces `Infinity`.
A better example:
```js
try {
    let user = null;

    console.log(user.name);
}
```
This causes an error because `user` is `null`.
# 2. `catch`
### Explanation
`catch` handles an error that occurs inside the `try` block.
### Syntax
```js
try {
    // risky code
} catch (error) {
    // handle error
}
```
### Example
```js
try {
    let user = null;
    console.log(user.name);
} catch (error) {
    console.log("Something went wrong");
}
```
**Output:**
```text
Something went wrong
```
You can also inspect the error:
```js
try {
    let user = null;
    console.log(user.name);
} catch (error) {
    console.log(error.message);
}
```
Output will be similar to:
```text
Cannot read properties of null (reading 'name')
```
### Technical real-time use
Suppose an application receives data from an API:
```js
try {
    let data = JSON.parse('{"name":"Arun"}');

    console.log(data.name);
} catch (error) {
    console.log("Invalid server response");
}
```
If the server sends invalid JSON, the application can handle it instead of unexpectedly stopping that operation.
# 3. `finally`
### Explanation
`finally` executes **whether an error occurs or not**.
It is commonly used for **cleanup operations**.
### Syntax
```js
try {
    // risky code
} catch (error) {
    // error handling
} finally {
    // always executed
}
```
### Example
```js
try {
    console.log("Processing payment...");
} catch (error) {
    console.log("Payment failed");
} finally {
    console.log("Closing payment process");
}
```
Output:
```text
Processing payment...
Closing payment process
```
Even if an error occurs:
```js
try {
    throw new Error("Payment failed");
} catch (error) {
    console.log(error.message);
} finally {
    console.log("Payment process completed");
}
```
Output:
```text
Payment failed
Payment process completed
```
### Technical real-time use
`finally` is useful when you need to perform cleanup:
In frontend applications, this pattern is commonly used to ensure a loading indicator is stopped after an API request.

# 4. `throw`
### Explanation
`throw` allows you to **manually generate an error**.
JavaScript normally generates errors when something invalid happens, but sometimes your application needs to detect a business rule violation and create the error itself.
### Syntax
```js
throw new Error("Error message");
```
### Example
```js
let age = 16;

if (age < 18) {
    throw new Error("User must be 18 or older");
}
```
The program generates an error because the condition is invalid.
### Using `throw` with `try...catch`
```js
try {
    let age = 16;
    if (age < 18) {
        throw new Error("User must be 18 or older");
    }
    console.log("Registration allowed");
} catch (error) {
    console.log(error.message);
}
```
Output
```text
User must be 18 or older
```
### Technical real-time use
Suppose an e-commerce application checks stock:
```js
try {
    let stock = 0;
    if (stock <= 0) {
        throw new Error("Product is out of stock");
    }
    console.log("Product added to cart");
} catch (error) {
    console.log(error.message);
}
```
Output:
```text
Product is out of stock
```
Here, **`throw` is used for application/business validation**, not just JavaScript syntax errors.
# 5. `Error` Object
JavaScript provides the built-in `Error` object.
```js
let error = new Error("Something went wrong");
console.log(error.message);
console.log(error.name);
```
Output:
```text
Something went wrong
Error
```
The important properties are:

| Property        | Meaning                   |
| --------------- | ------------------------- |
| `error.name`    | Type of error             |
| `error.message` | Description of error      |
| `error.stack`   | Error location/call stack |

Example:
```js
try {
    throw new Error("Database connection failed");
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}
```
Output:
```text
Error
Database connection failed
```
# 6. Custom Errors
### Explanation
A **custom error** is an error class created by the developer for a specific application requirement.
Instead of having generic:
```text
Error
```
you can create meaningful errors such as:
```text
ValidationError
AuthenticationError
PaymentError
InsufficientBalanceError
```
This is especially useful in larger applications.
## Creating a Custom Error
Use `class` and extend the built-in `Error` class.
### Syntax
```js
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}
```
### Example
```js
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}
try {
    let email = "";
    if (email === "") {
        throw new ValidationError("Email is required");
    }
    console.log("Valid email");
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}
```
Output:
```text
ValidationError
Email is required
```
# 7. Real-Time Example: Login System
Custom errors become useful when different types of failures need different handling.
```js
class AuthenticationError extends Error {
    constructor(message) {
        super(message);
        this.name = "AuthenticationError";
    }
}
function login(username, password) {
    if (username === "") {
        throw new AuthenticationError("Username is required");
    }
    if (password === "") {
        throw new AuthenticationError("Password is required");
    }
    if (password !== "12345") {
        throw new AuthenticationError("Invalid password");
    }
    return "Login successful";
}
try {
    console.log(login("arun", "wrong"));
} catch (error) {
    console.log(`${error.name}: ${error.message}`);
}
```
Output:
```text
AuthenticationError: Invalid password
```
### Why is this useful?
In a real application, different errors can be handled differently:

```js
try {
    login(username, password);
} catch (error) {

    if (error instanceof AuthenticationError) {
        console.log("Show login error to user");
    } else {
        console.log("Unexpected system error");
    }
}
```
This makes error handling more structured.

# 8. `instanceof` with Custom Errors
`instanceof` checks whether an object belongs to a particular class.
```js
class PaymentError extends Error {
    constructor(message) {
        super(message);
        this.name = "PaymentError";
    }
}
try {
    throw new PaymentError("Payment declined");
} catch (error) {
    if (error instanceof PaymentError) {
        console.log("Handle payment error");
    }
}
```
Output:
```text
Handle payment error
```
This is useful when an application has **multiple custom error types**.

# Notes

| Concept      | Purpose                                  |
| ------------ | ---------------------------------------- |
| `try`        | Put potentially problematic code here    |
| `catch`      | Handle the error                         |
| `finally`    | Execute cleanup code regardless of error |
| `throw`      | Manually create/raise an error           |
| `Error`      | Built-in error object                    |
| Custom Error | Application-specific error type          |
| `instanceof` | Check the type of an error               |

```text
try     → Try this code
catch   → Catch the problem
finally → Always do this
throw   → Create an error yourself
Custom Error → Give the error a meaningful type
```

### Typical application flow

```text
User Action
    ↓
try
    ↓
Execute operation
    ↓
 ┌───────────────┐
 │ Error occurs? │
 └───────────────┘
    ↓ Yes
  catch
    ↓
Handle error
    ↓
 finally
    ↓
Cleanup / finish
```

**Note:** `try...catch` handles runtime exceptions, while `throw` lets you create your own exceptions based on application/business rules.
## 14_Events
**Events** allow JavaScript to respond to actions happening in a web page.
Examples:
* User clicks a button
* User types in an input
* A form is submitted
* Mouse moves over an element
* Keyboard key is pressed
* A page finishes loading
The main concepts are:
1. Event Listeners
2. Event Object
3. Event Bubbling
4. Event Delegation

# 1. Event Listeners
### Explanation
An **event listener** waits for a particular event and executes a function when that event happens.
For example, when a user clicks a button, JavaScript can execute some code.
### Syntax
```js
element.addEventListener("event", function);
```
### Simple Example
```html
<button id="btn">Click Me</button>
<script>
    let button = document.getElementById("btn");
    button.addEventListener("click", function () {
        console.log("Button clicked");
    });
</script>
```
When the button is clicked:
```text
Button clicked
```

### Common Events

| Event       | When it occurs                |
| ----------- | ----------------------------- |
| `click`     | Element is clicked            |
| `dblclick`  | Double click                  |
| `mouseover` | Mouse enters element          |
| `mouseout`  | Mouse leaves element          |
| `keydown`   | Keyboard key is pressed       |
| `keyup`     | Keyboard key is released      |
| `input`     | Input value changes           |
| `change`    | Input selection/value changes |
| `submit`    | Form is submitted             |
| `focus`     | Input receives focus          |
| `blur`      | Input loses focus             |

---
### Technical Real-Time Example
A search box can listen for user input:

```html
<input id="search" placeholder="Search products">

<script>
    let searchBox = document.getElementById("search");

    searchBox.addEventListener("input", function () {
        console.log(searchBox.value);
    });
</script>
```
If the user types:
```text
Laptop
```
The input event can be used to:
```text
User types
    ↓
input event
    ↓
Get search text
    ↓
Filter products / call API
    ↓
Display results
```
This pattern is commonly used in **search boxes, filters, form validation, autocomplete, and live UI updates**.

# 2. Event Object
### Explanation
When an event occurs, JavaScript automatically provides an **event object** containing information about that event.
Usually we receive it as:
```js
function(event) {
}
```
or:
```js
function(e) {
}
```
### Example
```html
<button id="btn">Click Me</button>
<script>
    let button = document.getElementById("btn");
    button.addEventListener("click", function (event) {
        console.log(event);
    });
</script>
```
The `event` object contains information such as:
* Which element triggered the event
* What type of event occurred
* Mouse position
* Keyboard key
* Whether the default action was prevented
* etc.
## `event.target`
`event.target` tells you the **actual element that triggered the event**.
```html
<button id="btn">Click Me</button>
<script>
    document.getElementById("btn").addEventListener("click", function (event) {
        console.log(event.target);
    });
</script>
```
Output will refer to:
```html
<button id="btn">Click Me</button>
```
### Technical use
This is especially important when handling events on many elements.

## `event.type`
Returns the type of event.
```js
button.addEventListener("click", function (event) {
    console.log(event.type);
});
```
Output:
```text
click
```
## `event.preventDefault()`
Prevents the browser's default behavior.
### Example
Normally, clicking a link navigates to another page.
```html
<a href="https://example.com" id="link">Visit</a>
<script>
    document.getElementById("link").addEventListener("click", function (event) {
        event.preventDefault();

        console.log("Navigation prevented");
    });
</script>
```
### Technical use
Very common with forms
This allows JavaScript to validate the form or send the data through an API before the browser performs its normal submission.

# 3. Event Bubbling
### Explanation
**Event bubbling** means that an event triggered on a child element can propagate upward through its parent elements.
For example:
```html
<div id="parent">
    <button id="child">Click</button>
</div>
```
When the button is clicked, the event can travel:
```text
button
  ↓
div
  ↓
body
  ↓
html
  ↓
document
```
### Example
```html
<div id="parent">
    <button id="child">Click Me</button>
</div>

<script>
    let parent = document.getElementById("parent");
    let child = document.getElementById("child");

    child.addEventListener("click", function () {
        console.log("Button clicked");
    });

    parent.addEventListener("click", function () {
        console.log("Parent clicked");
    });
</script>
```
Clicking the button produces:
```text
Button clicked
Parent clicked
```
Why?
Because the click happens on the button and then **bubbles up** to the parent.

## `event.target` vs `event.currentTarget`
This is an important interview concept.
```js
parent.addEventListener("click", function (event) {
    console.log(event.target);
    console.log(event.currentTarget);
});
```
### `event.target`
The element where the event **actually started**.
### `event.currentTarget`
The element whose event listener is **currently executing**.
For the previous example:
```text
Clicked element:
button
event.target:
button
event.currentTarget:
div
```
### Easy memory
```text
target         → Who actually triggered it?
currentTarget  → Whose listener is running?
```
# 4. `stopPropagation()`
### Explanation
`event.stopPropagation()` prevents the event from continuing to propagate to parent elements.
### Example
```html
<div id="parent">
    <button id="child">Click</button>
</div>
<script>
    document.getElementById("child").addEventListener("click", function (event) {
        event.stopPropagation();
        console.log("Button clicked");
    });
    document.getElementById("parent").addEventListener("click", function () {
        console.log("Parent clicked");
    });
</script>
```
Output:
```text
Button clicked
```
The parent listener does not execute because propagation was stopped.

# 5. Event Delegation
### Explanation
**Event delegation** means attaching **one event listener to a parent element** instead of attaching separate listeners to every child.
It works because of **event bubbling**.
This is extremely useful when dealing with lists containing many elements.
## Without Event Delegation
Suppose we have:
```html
<ul>
    <li>Apple</li>
    <li>Orange</li>
    <li>Banana</li>
</ul>
```
You could attach a listener to every `<li>`:
```js
let items = document.querySelectorAll("li");
items.forEach(function (item) {
    item.addEventListener("click", function () {
        console.log(item.textContent);
    });
});
```
This works, but if there are hundreds or dynamically added items, managing individual listeners can become inconvenient.

# Using Event Delegation
Instead, attach one listener to the `<ul>`:
```html
<ul id="products">
    <li>Apple</li>
    <li>Orange</li>
    <li>Banana</li>
</ul>
<script>
    let products = document.getElementById("products");
    products.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
            console.log(event.target.textContent);
        }
    });
</script>
```
If the user clicks:
```text
Orange
```
Output:
```text
Orange
```
### What happens?
```text
User clicks <li>
      ↓
click event occurs on <li>
      ↓
event bubbles
      ↓
<ul> listener receives it
      ↓
event.target identifies clicked <li>
```
# 6. Technical Real-Time Example — Shopping Cart
Event delegation is very useful for dynamic interfaces such as shopping carts.
### Why use delegation?
Imagine the cart contains:
```text
100 products
```
Instead of:
```text
100 buttons
↓
100 event listeners
```
we can use:
```text
1 cart
↓
1 event listener
↓
event.target identifies clicked button
```
It is also useful when products/buttons are **added dynamically after the page has loaded**.

# 7. `matches()` with Event Delegation
A cleaner approach is to use `matches()`.
```js
cart.addEventListener("click", function (event) {
    if (event.target.matches("button")) {
        console.log("Product clicked");
    }
});
```
For a specific class:
```js
if (event.target.matches(".remove-btn")) {
    // remove product
}
```
This is common in larger frontend applications.

# Event Listener vs Event Delegation

| Concept               | Meaning                                 |
| --------------------- | --------------------------------------- |
| Event Listener        | Waits for an event on an element        |
| Event Object          | Contains information about the event    |
| Event Bubbling        | Event moves from child toward parent    |
| Event Delegation      | Parent handles events from its children |
| `event.target`        | Actual element that triggered event     |
| `event.currentTarget` | Element whose listener is running       |
| `preventDefault()`    | Stops browser's default action          |
| `stopPropagation()`   | Stops event propagation                 |


```text
Event Listener
    ↓
"Listen for a click"

Event Object
    ↓
"Give me information about the click"

Event Bubbling
    ↓
"Child event travels upward"

Event Delegation
    ↓
"Let the parent handle child events"
```

**Note:**
**Event delegation depends on event bubbling.** Instead of attaching listeners to every child, attach one listener to a common parent and use `event.target`/`matches()` to determine which child triggered the event.

