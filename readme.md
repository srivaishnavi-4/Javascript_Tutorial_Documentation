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



