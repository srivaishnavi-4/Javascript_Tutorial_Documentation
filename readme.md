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
    let name = "Vaishu";
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
        },p
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

# JavaScript Strings

A **String** is used to store and manipulate text.

In a real-time application like a **Student Database Management System**, strings are used for student names, emails, departments, addresses, skills, search text, IDs, and messages.

---

## 1. String

### Explanation

A string represents a sequence of characters or text.

### Why is it used?

Student information such as names, emails, departments, and addresses is stored as strings.

### Code

```javascript
const studentName = "Vaishu";
const email = "vaishu@gmail.com";
const department = "CSE";

console.log(studentName);
console.log(email);
console.log(department);
```

---

## 2. `String()`

### Explanation

`String()` converts a value into a string.

### Why is it used?

Form values, IDs, numbers, or other data may need to be converted into text before performing string operations.

### Code

```javascript
const studentNumber = 101;

const studentId = String(studentNumber);

console.log(studentId);
console.log(typeof studentId);
```

Output:

```text
101
string
```

---

## 3. `length`

### Explanation

`length` returns the number of characters in a string.

### Why is it used?

It can be used to validate or analyze user input, such as checking whether a student name has enough characters.

### Code

```javascript
const name = "Vaishu";

console.log(name.length);
```

Output:

```text
6
```

---

## 4. `trim()`

### Explanation

`trim()` removes whitespace from the beginning and end of a string.

### Why is it used?

Users may accidentally enter extra spaces in names, emails, or other fields.

### Code

```javascript
const name = "   Vaishu   ";

const cleanName = name.trim();

console.log(cleanName);
```

Output:

```text
Vaishu
```

---

## 5. `toLowerCase()`

### Explanation

Converts all characters to lowercase.

### Why is it used?

It is commonly used for **case-insensitive searching and comparison**.

For example, `Vaishu`, `VAISHU`, and `vaishu` can be treated as the same search value.

### Code

```javascript
const searchText = "VAISHU";

const normalizedSearch =
    searchText.toLowerCase();

console.log(normalizedSearch);
```

Output:

```text
vaishu
```

---

## 6. `toUpperCase()`

### Explanation

Converts all characters to uppercase.

### Why is it used?

It is useful when information needs to follow a standard format, such as department codes.

### Code

```javascript
const department = "cse";

const standardDepartment =
    department.toUpperCase();

console.log(standardDepartment);
```

Output:

```text
CSE
```

---

## 7. `includes()`

### Explanation

`includes()` checks whether a string contains another string.

It returns `true` or `false`.

### Why is it used?

It is useful for student search functionality.

### Code

```javascript
const name = "Vaishu";

const found =
    name.toLowerCase().includes("vai");

console.log(found);
```

Output:

```text
true
```

---

## 8. `startsWith()`

### Explanation

`startsWith()` checks whether a string begins with a particular value.

### Why is it used?

Useful for validating prefixes such as student IDs.

### Code

```javascript
const studentId = "STU-1001";

const validPrefix =
    studentId.startsWith("STU");

console.log(validPrefix);
```

Output:

```text
true
```

---

## 9. `endsWith()`

### Explanation

`endsWith()` checks whether a string ends with a particular value.

### Why is it used?

Useful for checking email domains or file extensions.

### Code

```javascript
const email = "vaishu@gmail.com";

const isGmail =
    email.endsWith("@gmail.com");

console.log(isGmail);
```

Output:

```text
true
```

---

## 10. `indexOf()`

### Explanation

`indexOf()` returns the position of the first occurrence of a specified string.

### Why is it used?

Useful when you need to find where particular information appears inside a string.

### Code

```javascript
const email = "vaishu@gmail.com";

const position =
    email.indexOf("@");

console.log(position);
```

Output:

```text
6
```

---

## 11. `lastIndexOf()`

### Explanation

`lastIndexOf()` returns the position of the last occurrence of a value.

### Why is it used?

Useful when a character occurs multiple times and you need the final occurrence.

### Code

```javascript
const email = "vaishu@example.com";

const position =
    email.lastIndexOf(".");

console.log(position);
```

This finds the final `.` in the email address.

---

## 12. `charAt()`

### Explanation

`charAt()` returns the character at a specified position.

### Why is it used?

Useful when you need to inspect a particular character, such as getting the first letter of a student's name.

### Code

```javascript
const name = "Vaishu";

const firstLetter =
    name.charAt(0);

console.log(firstLetter);
```

Output:

```text
V
```

---

## 13. String Indexing `[]`

### Explanation

Characters can also be accessed directly using their index.

### Why is it used?

It provides a simple way to access individual characters.

### Code

```javascript
const name = "Vaishu";

console.log(name[0]);
console.log(name[1]);
```

Output:

```text
V
a
```

---

## 14. `charCodeAt()`

### Explanation

`charCodeAt()` returns the UTF-16 code unit of a character.

### Why is it used?

It is useful when applications need to work with the numeric representation of characters.

### Code

```javascript
const letter = "A";

console.log(letter.charCodeAt(0));
```

Output:

```text
65
```

---

## 15. `codePointAt()`

### Explanation

`codePointAt()` returns the Unicode code point of a character.

### Why is it used?

It is particularly useful when working with Unicode characters and emojis.

### Code

```javascript
const symbol = "😀";

console.log(symbol.codePointAt(0));
```

---

## 16. `slice()`

### Explanation

`slice()` extracts a portion of a string without modifying the original string.

### Why is it used?

Useful for extracting parts of information, such as a username from an email.

### Code

```javascript
const email = "vaishu@gmail.com";

const username =
    email.slice(0, email.indexOf("@"));

console.log(username);
```

Output:

```text
vaishu
```

---

## 17. `substring()`

### Explanation

`substring()` extracts characters between two indexes.

### Why is it used?

Useful when you know the beginning and ending positions of the text you want.

### Code

```javascript
const email = "vaishu@gmail.com";

const domain =
    email.substring(
        email.indexOf("@") + 1
    );

console.log(domain);
```

Output:

```text
gmail.com
```

---

## 18. `split()`

### Explanation

`split()` divides a string into an array.

### Why is it used?

Useful when user input contains multiple values separated by commas.

For example:

```text
JavaScript, Java, Python
```

can become:

```javascript
["JavaScript", "Java", "Python"]
```

### Code

```javascript
const skills =
    "JavaScript, Java, Python";

const skillList =
    skills.split(",");

console.log(skillList);
```

---

## 19. `join()`

### Explanation

`join()` combines array elements into a single string.

### Why is it used?

Useful for converting processed student data back into display text.

### Code

```javascript
const skills = [
    "JavaScript",
    "Java",
    "Python"
];

const result =
    skills.join(" | ");

console.log(result);
```

Output:

```text
JavaScript | Java | Python
```

---

## 20. `replace()`

### Explanation

`replace()` replaces the first matching occurrence.

### Why is it used?

Useful for correcting or cleaning user-entered text.

### Code

```javascript
const department =
    "Computer Science Department";

const result =
    department.replace(
        "Computer Science",
        "CSE"
    );

console.log(result);
```

---

## 21. `replaceAll()`

### Explanation

`replaceAll()` replaces every occurrence of a value.

### Why is it used?

Useful when the same unwanted character or text appears multiple times.

### Code

```javascript
const phone =
    "987-654-3210";

const cleanPhone =
    phone.replaceAll("-", "");

console.log(cleanPhone);
```

Output:

```text
9876543210
```

---

## 22. `search()`

### Explanation

`search()` searches a string using a regular expression and returns the position of the match.

### Why is it used?

Useful when searching for patterns in user input.

### Code

```javascript
const email =
    "vaishu@gmail.com";

const position =
    email.search("@");

console.log(position);
```

---

## 23. `match()`

### Explanation

`match()` searches a string for a pattern and returns the matching result.

### Why is it used?

Useful for extracting specific information from text.

### Code

```javascript
const text =
    "Vaishu has 85 marks";

const result =
    text.match(/\d+/);

console.log(result[0]);
```

Output:

```text
85
```

---

## 24. `matchAll()`

### Explanation

`matchAll()` finds all matches of a pattern.

### Why is it used?

Useful when multiple pieces of information need to be extracted from the same string.

### Code

```javascript
const text =
    "JavaScript 90, Java 85, Python 95";

const matches =
    text.matchAll(/\d+/g);

for (const match of matches) {
    console.log(match[0]);
}
```

Output:

```text
90
85
95
```

---

## 25. `concat()`

### Explanation

`concat()` combines strings.

### Why is it used?

Useful for creating structured values such as student IDs.

### Code

```javascript
const prefix = "STU";
const number = "1001";

const studentId =
    prefix.concat("-", number);

console.log(studentId);
```

Output:

```text
STU-1001
```

---

## 26. `padStart()`

### Explanation

`padStart()` adds characters to the beginning of a string until it reaches a specified length.

### Why is it used?

Useful for creating fixed-format IDs.

### Code

```javascript
const number = "25";

const studentId =
    number.padStart(4, "0");

console.log(studentId);
```

Output:

```text
0025
```

---

## 27. `padEnd()`

### Explanation

`padEnd()` adds characters to the end of a string until it reaches a specified length.

### Why is it used?

Useful when creating aligned text or fixed-width reports.

### Code

```javascript
const department = "CSE";

const formatted =
    department.padEnd(10, " ");

console.log(formatted + " | 101");
```

---

## 28. `repeat()`

### Explanation

`repeat()` repeats a string a specified number of times.

### Why is it used?

Useful for creating separators or formatting reports.

### Code

```javascript
const separator =
    "-".repeat(30);

console.log(separator);
```

Output:

```text
------------------------------
```

---

## 29. `localeCompare()`

### Explanation

`localeCompare()` compares two strings according to language/locale sorting rules.

### Why is it used?

Useful for sorting student names alphabetically.

### Code

```javascript
const name1 = "Vaishu";
const name2 = "Priya";

const result =
    name1.localeCompare(name2);

console.log(result);
```

It can be used with `sort()`:

```javascript
const students = [
    "Vaishu",
    "Arun",
    "Priya"
];

students.sort((a, b) =>
    a.localeCompare(b)
);

console.log(students);
```

---

## 30. `normalize()`

### Explanation

`normalize()` converts Unicode text into a standardized representation.

### Why is it used?

Useful when text can contain different Unicode representations of visually similar characters.

### Code

```javascript
const name = "Vaishu";

const normalized =
    name.normalize();

console.log(normalized);
```

---

## 31. `isWellFormed()`

### Explanation

`isWellFormed()` checks whether a string contains well-formed Unicode.

### Why is it used?

Useful when applications process user-generated Unicode text.

### Code

```javascript
const text = "Vaishu";

console.log(text.isWellFormed());
```

Output:

```text
true
```

---

## 32. `toWellFormed()`

### Explanation

`toWellFormed()` converts a string containing malformed Unicode into a well-formed string.

### Why is it used?

Useful for safely processing text before displaying or transmitting it.

### Code

```javascript
const text = "Vaishu";

const safeText =
    text.toWellFormed();

console.log(safeText);
```

---

## 33. Template Literals

### Explanation

Template literals use backticks `` ` `` and allow variables and expressions to be inserted directly into strings.

### Why is it used?

Very useful for dynamically generating student reports, messages, table rows, and UI content.

### Code

```javascript
const name = "Vaishu";
const department = "CSE";
const year = 3;

const profile = `
Student Name: ${name}
Department: ${department}
Year: ${year}
`;

console.log(profile);
```

---

# Real-Time String Processing Flow

The concepts work together rather than independently:

```text
User Input
    ↓
trim()
    ↓
Clean unnecessary spaces
    ↓
toLowerCase() / toUpperCase()
    ↓
Standardize the data
    ↓
includes() / startsWith() / endsWith()
    ↓
Validate or search
    ↓
indexOf() / lastIndexOf()
    ↓
Find required positions
    ↓
slice() / substring()
    ↓
Extract required information
    ↓
split()
    ↓
Convert text into structured data
    ↓
replace() / replaceAll()
    ↓
Clean or modify data
    ↓
match() / matchAll()
    ↓
Extract patterns
    ↓
concat() / padStart() / join()
    ↓
Format the data
    ↓
Template Literals
    ↓
Display the final result
```

### Overall purpose

The main purpose of JavaScript Strings in a real application is **text processing**:

**Raw user text → clean → validate → search → extract → transform → format → display/store.**

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

## 15_DOM Manipulation
**DOM (Document Object Model)** represents an HTML page as a tree of elements.

JavaScript can use the DOM to:
* Find HTML elements
* Change text/content
* Change styles/classes
* Create new elements
* Add/remove elements
* Read and modify attributes
* Dynamically update the UI

The main concepts are:
1. `getElementById()`
2. `querySelector()`
3. `createElement()`
4. `innerHTML`
5. `classList`
6. Attributes

# 1. `getElementById()`
### Explanation
`getElementById()` finds an HTML element using its `id`.
### Syntax
```js
document.getElementById("id");
```
### Example
```html
<h2 id="title">Welcome</h2>
<script>
    let heading = document.getElementById("title");
    console.log(heading);
</script>
```
It returns the `<h2>` element.
### Changing content
```js
heading.textContent = "Hello JavaScript";
```
The page becomes:
```text
Hello JavaScript
```
### Technical real-time use
Suppose a dashboard has:
```html
<h2 id="username"></h2>
```
JavaScript can display the logged-in user's name:
```js
let username = document.getElementById("username");
username.textContent = "Arun Kumar";
```
This is commonly used for **user dashboards, profile pages, counters, status messages, etc.**

# 2. `querySelector()`
### Explanation
`querySelector()` finds the **first element** that matches a CSS selector.
### Syntax
```js
document.querySelector("selector");
```
You can use:
```js
document.querySelector("#title");
document.querySelector(".card");
document.querySelector("button");
```

### Example
```html
<h2 class="title">Products</h2>
<script>
    let heading = document.querySelector(".title");

    heading.textContent = "Available Products";
</script>
```

## ID selector
```js
let element = document.querySelector("#title");
```
Equivalent to:
```js
document.getElementById("title");
```

## Class selector
```js
let card = document.querySelector(".product-card");
```
## Element selector
```js
let button = document.querySelector("button");
```

## Nested selector
```js
let price = document.querySelector(".product .price");
```
This finds `.price` inside `.product`.
### Important
`querySelector()` returns only the **first matching element**.
If you have:
```html
<p class="item">Apple</p>
<p class="item">Orange</p>
<p class="item">Banana</p>
```

Then:
```js
let item = document.querySelector(".item");
console.log(item.textContent);
```
Output:
```text
Apple
```
For multiple elements, you would use `querySelectorAll()`.

# 3. `createElement()`
### Explanation
`createElement()` creates a **new HTML element using JavaScript**.
### Syntax
```js
document.createElement("element");
```
### Example
```js
let heading = document.createElement("h2");
heading.textContent = "New Product";
document.body.appendChild(heading);
```
This dynamically creates:
```html
<h2>New Product</h2>
```

# Creating a Product Card
This is a more realistic DOM manipulation example.
```js
let card = document.createElement("div");
card.textContent = "Laptop - ₹65000";
document.body.appendChild(card);
```
JavaScript has created the element and added it to the page.
### Technical real-time use
`createElement()` is useful when an application receives data from an API and needs to dynamically create:
* Product cards
* Chat messages
* Notifications
* Table rows
* Comments
* Search results

For example:
```js
let products = ["Laptop", "Mouse", "Keyboard"];
products.forEach(function(product) {
    let item = document.createElement("li");
    item.textContent = product;
    document.getElementById("productList").appendChild(item);
});
```

# 4. `innerHTML`
### Explanation
`innerHTML` gets or changes the **HTML content inside an element**.
### Example
```html
<div id="container"></div>
<script>
    let container = document.getElementById("container");
    container.innerHTML = "<h2>Hello</h2>";
</script>
```
The browser creates:
```html
<div id="container">
    <h2>Hello</h2>
</div>
```

## Adding multiple HTML elements
```js
container.innerHTML = `
    <h2>Laptop</h2>
    <p>Price: ₹65000</p>
    <button>Buy Now</button>
`;
```
This is convenient when generating a small block of UI.

## Reading `innerHTML`
```html
<div id="box">
    <h2>Hello</h2>
</div>
<script>
    let box = document.getElementById("box");
    console.log(box.innerHTML);
</script>
```
Output:
```html
<h2>Hello</h2>
```

## `innerHTML` vs `textContent`
This is important.

### `innerHTML`
Interprets HTML:
```js
element.innerHTML = "<b>Hello</b>";
```
Result:
**Hello**
### `textContent`
Treats it as plain text:
```js
element.textContent = "<b>Hello</b>";
```
Result displayed on the page:
```text
<b>Hello</b>
```

### Security warning
Avoid putting untrusted user/API content directly into `innerHTML`.
For example:
```js
element.innerHTML = userInput;
```
If `userInput` contains malicious HTML/script content, it can create an **XSS (Cross-Site Scripting)** vulnerability.
For plain user-provided text, prefer:
```js
element.textContent = userInput;
```

# 5. `classList`
### Explanation
`classList` allows JavaScript to **add, remove, toggle, or check CSS classes**.
Suppose:
```html
<button id="btn" class="button">Login</button>
```
JavaScript can manipulate the `class` attribute.

## `classList.add()`
Adds a class.
```js
let button = document.getElementById("btn");
button.classList.add("active");
```
HTML becomes:
```html
<button id="btn" class="button active">
    Login
</button>
```

## `classList.remove()`
Removes a class.
```js
button.classList.remove("active");
```

## `classList.toggle()`
Adds the class if it doesn't exist and removes it if it does.
```js
button.classList.toggle("active");
```

### Technical real-time use
A menu can be opened/closed:
```js
menu.classList.toggle("open");
```
CSS might contain:
```css
.menu.open {
    display: block;
}
```
So JavaScript controls the UI state by changing the class.

## `classList.contains()`
Checks whether a class exists.
```js
if (button.classList.contains("active")) {
    console.log("Button is active");
}
```

## `classList.replace()`
Replaces one class with another.
```js
button.classList.replace("inactive", "active");
```

# 6. Attributes
HTML elements contain **attributes**.
Example:
```html
<img id="profileImage" src="profile.jpg" alt="Profile">
```
Here:
```text
id    → profileImage
src   → profile.jpg
alt   → Profile
```
JavaScript can read, add, change, and remove attributes.

## `getAttribute()`
Reads an attribute.
```js
let image = document.getElementById("profileImage");
console.log(image.getAttribute("src"));
```
Output:
```text
profile.jpg
```

## `setAttribute()`
Adds or changes an attribute.
### Syntax
```js
element.setAttribute("attribute", "value");
```
Example:
```js
image.setAttribute("src", "new-profile.jpg");
```
The HTML becomes:
```html
<img src="new-profile.jpg">
```
### Technical real-time use
After a user uploads a profile image, JavaScript can update the image:
```js
profileImage.setAttribute("src", uploadedImageUrl);
```

## `removeAttribute()`
Removes an attribute.
```js
image.removeAttribute("alt");
```

## `hasAttribute()`
Checks whether an attribute exists.
```js
if (image.hasAttribute("alt")) {
    console.log("Alt text exists");
}
```
# 7. `data-*` Attributes
Custom data attributes are very useful in real applications.
HTML:
```html
<button data-product-id="101">
    Add to Cart
</button>
```
JavaScript:
```js
let button = document.querySelector("button");
console.log(button.dataset.productId);
```
Output:
```text
101
```
### Technical real-time use
For an e-commerce product list:
```html
<button data-product-id="101">Add to Cart</button>
<button data-product-id="102">Add to Cart</button>
```
JavaScript can identify which product was selected:
```js
button.addEventListener("click", function () {
    let productId = button.dataset.productId;
    console.log("Adding product:", productId);

});
```
This works especially well with **event delegation**.

### What happens?
```text
HTML
 ↓
getElementById()
 ↓
Find container
 ↓
createElement()
 ↓
Create product card
 ↓
classList.add()
 ↓
Add CSS class
 ↓
innerHTML
 ↓
Add product content
 ↓
setAttribute()
 ↓
Store product ID
 ↓
appendChild()
 ↓
Display card
```


| Method                 | Purpose                                  |
| ---------------------- | ---------------------------------------- |
| `getElementById()`     | Find element by ID                       |
| `querySelector()`      | Find first element matching CSS selector |
| `createElement()`      | Create new HTML element                  |
| `innerHTML`            | Read/change HTML content                 |
| `textContent`          | Read/change plain text                   |
| `classList.add()`      | Add CSS class                            |
| `classList.remove()`   | Remove CSS class                         |
| `classList.toggle()`   | Add/remove class                         |
| `classList.contains()` | Check class                              |
| `classList.replace()`  | Replace class                            |
| `getAttribute()`       | Read attribute                           |
| `setAttribute()`       | Add/change attribute                     |
| `removeAttribute()`    | Remove attribute                         |
| `hasAttribute()`       | Check attribute                          |
| `dataset`              | Work with `data-*` attributes            |


```text
Find
 ↓
getElementById()
querySelector()
Create
 ↓
createElement()
Content
 ↓
innerHTML
textContent
Style/Class
 ↓
classList
Attributes
 ↓
getAttribute()
setAttribute()
removeAttribute()
Add to page
 ↓
appendChild()
```
**Note:** DOM manipulation is the process of using JavaScript to **find, create, modify, and remove HTML elements dynamically**. Event listeners + DOM manipulation together form the foundation of interactive frontend applications.

# 16_JavaScript Browser Objects
These objects are part of the **Browser Object Model (BOM)**. They allow JavaScript to interact with the browser and the user's browser environment.
The important ones are:
* `window`
* `alert()`
* `confirm()`
* `prompt()`
* `location`
* `navigator`
* `screen`
# 1. `window`
### Explanation
`window` represents the **browser window/tab** in which your web page is running.
Many browser APIs are actually properties or methods of `window`.
```js
window.alert("Hello");
window.location;
window.navigator;
window.screen;
```
Because `window` is the global object in browser JavaScript, you can usually omit `window.`:
```js
alert("Hello");
```
is equivalent to:
```js
window.alert("Hello");
```
### Example
```js
console.log(window.innerWidth);
console.log(window.innerHeight);
```
This gives the current browser viewport dimensions.
### Technical real-time use
Responsive applications can check the viewport size:
```js
if (window.innerWidth < 768) {
    console.log("Mobile layout");
} else {
    console.log("Desktop layout");
}
```
# 2. `alert()`
### Explanation
`alert()` displays a simple message dialog to the user.
### Syntax
```js
alert("message");
```
### Example
```js
alert("Login successful!");
```
The browser displays a dialog containing:
```text
Login successful!
             [ OK ]
```
### Technical real-time use
It can be used for simple notifications or validation messages:
```js
let username = "";
if (username === "") {
    alert("Username is required");
}
```
### Important
`alert()` blocks interaction with the page until the user clicks **OK**.
For modern applications, custom HTML/CSS notification components or toast messages are often preferred for better UX.
# 3. `confirm()`
### Explanation
`confirm()` displays a message with **OK and Cancel** buttons.
It returns:
* `true` → user clicks OK
* `false` → user clicks Cancel
### Syntax
```js
confirm("message");
```
### Example
```js
let result = confirm("Do you want to delete this item?");
console.log(result);
```
If the user clicks **OK**:
```text
true
```
If the user clicks **Cancel**:
```text
false
```
### Technical real-time use
A delete operation:
```js
let result = confirm("Are you sure you want to delete this account?");
if (result) {
    console.log("Account deleted");
} else {
    console.log("Deletion cancelled");
}
```
The flow is:
```text
Delete button
     ↓
confirm()
     ↓
 ┌───────────────┐
 │ OK     Cancel │
 └───────────────┘
   ↓         ↓
 true      false
   ↓         ↓
Delete    Cancel
```
# 4. `prompt()`
### Explanation
`prompt()` asks the user to enter a value.
### Syntax
```js
prompt("message");
```
### Example
```js
let name = prompt("Enter your name");
console.log(name);
```
If the user enters:
```text
Arun
```
then:
```js
name
```
contains:
```text
Arun
```
### Technical real-time use
For example, collecting a simple input:
```js
let quantity = prompt("Enter quantity");
quantity = parseInt(quantity);
console.log(`Quantity: ${quantity}`);
```
If the user enters `5`:
```text
Quantity: 5
```
### Important
`prompt()` returns a **string**.
So:
```js
let age = prompt("Enter age");
console.log(typeof age);
```
Output:
```text
string
```
If you need a number:
```js
let age = parseInt(prompt("Enter age"));
```
### Cancel
If the user presses **Cancel**, `prompt()` returns:
```js
null
```
So you can check:
```js
let name = prompt("Enter your name");
if (name === null) {
    console.log("User cancelled");
}
```
# 5. `location`
### Explanation
`window.location` contains information about the **current URL** and provides methods for navigating to another URL.
Example URL:
```text
https://example.com/products?id=101
```
The `location` object contains information about this URL.
## `location.href`
Returns the complete current URL.
```js
console.log(location.href);
```
Example:
```text
https://example.com/products?id=101
```
## `location.hostname`
Returns the domain name.
```js
console.log(location.hostname);
```
Output:
```text
example.com
```
## `location.pathname`
Returns the path.
```js
console.log(location.pathname);
```
Output:
```text
/products
```
## `location.search`
Returns the query string.
```js
console.log(location.search);
```
For:
```text
https://example.com/products?id=101
```
Output:
```text
?id=101
```
### Technical real-time use
Reading a product ID from the URL:
```js
let params = new URLSearchParams(location.search);
let productId = params.get("id");
console.log(productId);
```
For:
```text
/products?id=101
```
Output:
```text
101
```
This is commonly used in **product pages, search filters, pagination, and routing**.
## `location.assign()`
Navigates to another URL
```js
location.assign("https://example.com");
```
## `location.reload()`
Reloads the current page.
```js
location.reload();
```
### `href` vs `assign()`
Both can navigate:
```js
location.href = "/dashboard";
```
or:
```js
location.assign("/dashboard");
```
# 6. `navigator`
### Explanation
`navigator` provides information about the **browser and the user's environment**.
For example:
```js
console.log(navigator.userAgent);
```
It can also expose APIs such as:
* Online/offline status
* Clipboard
* Geolocation
* Language preferences
* Browser information
* Media/device capabilities
## `navigator.language`
Returns the browser's preferred language.
```js
console.log(navigator.language);
```
Example:
```text
en-IN
```
### Technical use
An application can use the browser's language preference to choose an initial UI language.
## `navigator.onLine`
Checks whether the browser currently reports an online connection.
```js
if (navigator.onLine) {
    console.log("Online");
} else {
    console.log("Offline");
}
```
### Technical use
Useful for applications such as:
* Offline-first web apps
* Progressive Web Apps
* Data synchronization
* Showing online/offline indicators
## `navigator.geolocation`
Provides access to the browser's Geolocation API, subject to user permission.
```js
navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
});
```
The browser will normally ask the user for permission before providing location data.
### Important
A website **cannot silently obtain precise location just because it uses `navigator.geolocation`**. The browser controls permission.
## `navigator.clipboard`
Provides clipboard functionality in supported contexts.
Example:
```js
navigator.clipboard.writeText("Hello JavaScript");
```
A web application can use this for a **Copy** button.
# 7. `screen`
### Explanation
`screen` provides information about the user's **physical/display screen**.
```js
console.log(screen.width);
console.log(screen.height);
```
Example output:
```text
1920
1080
```
These values describe the screen, not necessarily the size of the browser viewport.
## `screen.width`
Returns screen width.
```js
console.log(screen.width);
```
## `screen.height`
Returns screen height.
```js
console.log(screen.height);
```
## `screen.availWidth`
Returns the available screen width.
```js
console.log(screen.availWidth);
```
This can exclude areas occupied by operating-system UI such as taskbars.
## `screen.availHeight`
```js
console.log(screen.availHeight);
```
Returns the available screen height.
### Technical use
Screen information can sometimes be useful for display-related applications, kiosk applications, or analytics.
However, for **responsive webpage layouts**, `window.innerWidth` is generally more relevant than `screen.width`, because `innerWidth` represents the browser's viewport.
# 8. `window` vs `screen`
This is an important distinction.
```text
screen
 ↓
Physical display
window
 ↓
Browser window / viewport
```
For example:
```js
console.log(screen.width);
console.log(window.innerWidth);
```
You might get:
```text
1920
1365
```
The screen is 1920px wide, but the browser viewport may only be 1365px wide.

# 9. Complete Technical Example

Here's a small browser-information program:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Browser Information</title>
</head>

<body>

    <button id="infoBtn">Show Browser Info</button>

    <script>

        document.getElementById("infoBtn").addEventListener("click", function () {

            console.log("Current URL:", window.location.href);

            console.log("Language:", navigator.language);

            console.log("Online:", navigator.onLine);

            console.log("Screen Width:", screen.width);

            console.log("Screen Height:", screen.height);

            console.log("Viewport Width:", window.innerWidth);

            console.log("Viewport Height:", window.innerHeight);

        });

    </script>

</body>
</html>
```

The application can use this information for things like:

```text
Browser
   ↓
navigator

Current page
   ↓
location

Browser viewport
   ↓
window

Physical display
   ↓
screen
```


| Object / Method         | Purpose                                         |
| ----------------------- | ----------------------------------------------- |
| `window`                | Represents browser window/global browser object |
| `alert()`               | Display a message                               |
| `confirm()`             | Get OK/Cancel decision                          |
| `prompt()`              | Get simple text input                           |
| `location`              | Work with current URL/navigation                |
| `location.href`         | Get current URL                                 |
| `location.reload()`     | Reload page                                     |
| `navigator`             | Browser/environment information and APIs        |
| `navigator.language`    | Browser language                                |
| `navigator.onLine`      | Online status                                   |
| `navigator.geolocation` | Request location through browser permission     |
| `navigator.clipboard`   | Clipboard operations                            |
| `screen`                | Physical display information                    |
| `screen.width`          | Screen width                                    |
| `screen.height`         | Screen height                                   |
| `window.innerWidth`     | Browser viewport width                          |



```text
window
→ Browser window

alert()
→ Show message

confirm()
→ Ask OK / Cancel

prompt()
→ Ask for input

location
→ Where am I in the web?

navigator
→ What browser/device capabilities are available?

screen
→ What is the physical screen like?
```

**BOM vs DOM:**

```text
BOM
├── window
├── location
├── navigator
└── screen

DOM
├── document
├── elements
├── createElement()
├── querySelector()
└── classList
```

The **DOM** mainly lets JavaScript manipulate the webpage, while the **BOM** provides access to the browser environment around that webpage.

## 17_Timers

JavaScript provides timer functions to **execute code after a delay** or **repeatedly at a fixed interval**.
The four important timer functions are:
* `setTimeout()`
* `setInterval()`
* `clearTimeout()`
* `clearInterval()`

## 1. `setTimeout()`
### Explanation
`setTimeout()` executes a function **once after a specified amount of time**.
The delay is given in **milliseconds**.
* `1000 ms = 1 second`
* Executes **only once**
### Syntax
```javascript
setTimeout(function, delay);
```
### Simple Example
```javascript
setTimeout(() => {
    console.log("Hello after 3 seconds");
}, 3000);
```
### Output
After 3 seconds:
```text
Hello after 3 seconds
```
### Technical Real-Time Use
For example, showing a notification message and automatically hiding it after 3 seconds:
```javascript
function showNotification() {
    console.log("Profile updated successfully");
    setTimeout(() => {
        console.log("Notification hidden");
    }, 3000);
}
showNotification();
```
**Use cases:**
* Hide notifications
* Delay API-related UI actions
* Show messages temporarily
* Redirect after a delay
* Debouncing user actions

# 2. `setInterval()`
### Explanation
`setInterval()` repeatedly executes a function after every specified interval.
Unlike `setTimeout()`, it keeps running until it is stopped.
### Syntax
```javascript
setInterval(function, interval);
```
### Simple Example
```javascript
setInterval(() => {
    console.log("Running...");
}, 2000);
```
This prints:
```text
Running...
Running...
Running...
Running...
...
```
Every 2 seconds.
### Technical Real-Time Use
A digital clock can update every second:
```javascript
setInterval(() => {
    let time = new Date();
    console.log(time.toLocaleTimeString());
}, 1000);
```
Example output:
```text
11:05:01 PM
11:05:02 PM
11:05:03 PM
11:05:04 PM
```
**Use cases:**

* Digital clocks
* Countdown timers
* Polling APIs
* Auto-refreshing data
* Live status updates

# 3. `clearTimeout()`
### Explanation
`clearTimeout()` **cancels a `setTimeout()`** before it executes.
To cancel it, we first store the timer ID returned by `setTimeout()`.
### Syntax
```javascript
let timerId = setTimeout(function, delay);
clearTimeout(timerId);
```
### Example
```javascript
let timer = setTimeout(() => {
    console.log("This will not execute");
}, 5000);
clearTimeout(timer);
```
Since the timeout is cancelled, nothing is printed.
### Technical Real-Time Use
Suppose a user starts typing in a search box. You schedule a search after 2 seconds, but if they continue typing, you cancel the previous timer.
```javascript
let timer;
function searchProduct() {
    clearTimeout(timer);
    timer = setTimeout(() => {
        console.log("Searching products...");
    }, 2000);
}
searchProduct();
```
This technique is commonly used for **debouncing**.

# 4. `clearInterval()`
### Explanation
`clearInterval()` stops an interval created using `setInterval()`.
### Syntax
```javascript
let intervalId = setInterval(function, interval);
clearInterval(intervalId);
```
### Example
```javascript
let count = 0;
let timer = setInterval(() => {
    count++;
    console.log(count);
    if (count === 5) {
        clearInterval(timer);
    }
}, 1000);
```
### Output
```text
1
2
3
4
5
```
After `5`, the interval stops.
### Technical Real-Time Use
For example, a countdown:
```javascript
let seconds = 5;
let countdown = setInterval(() => {
    console.log(seconds);
    seconds--;
 if (seconds < 0) {
        clearInterval(countdown);
        console.log("Time's up!");
    }
}, 1000);
```
Output:
```text
5
4
3
2
1
0
Time's up!
```
# `setTimeout()` vs `setInterval()`

| Feature             | `setTimeout()`           | `setInterval()`          |
| ------------------- | ------------------------ | ------------------------ |
| Execution           | Once                     | Repeatedly               |
| Purpose             | Delay execution          | Repeat execution         |
| Stops automatically | Yes                      | No                       |
| Cancel method       | `clearTimeout()`         | `clearInterval()`        |
| Example             | Show message after 3 sec | Update clock every 1 sec |

```text
setTimeout
     ↓
"Do it later, ONE time"

setInterval
     ↓
"Do it again and again"

clearTimeout
     ↓
"Cancel the delayed action"

clearInterval
     ↓
"Stop the repeated action"
```
# Combined Real-Time Example
A simple **session timeout**:
```javascript
let remainingTime = 10;
let countdown = setInterval(() => {
    console.log(`Session expires in ${remainingTime} seconds`);
    remainingTime--;
    if (remainingTime < 0) {
        clearInterval(countdown);
        setTimeout(() => {
            console.log("Session expired. Please login again.");
        }, 1000);
    }
}, 1000);
```
Here:
```text
setInterval()
     ↓
updates countdown every second
     ↓
clearInterval()
     ↓
stops countdown
     ↓
setTimeout()
     ↓
shows expiry message after 1 second
```

## Note
1. Timer delays are specified in **milliseconds**.
2. `setTimeout()` normally executes **once**.
3. `setInterval()` executes **repeatedly**.
4. `setTimeout()` returns a **timer ID**.
5. `setInterval()` returns an **interval ID**.
6. Use `clearTimeout()` to cancel a timeout.
7. Use `clearInterval()` to stop an interval.
8. A timer does **not guarantee exact execution time**. JavaScript schedules the callback when the event loop can run it.

## 18_ ES6 Features

These are some of the most important **ES6 (ECMAScript 2015)** features used in modern JavaScript:
* `let` and `const`
* Arrow functions
* Template literals
* Spread and Rest operators
* Destructuring
* Modules

# 1. `let` and `const`
### Explanation
`let` and `const` are used to declare variables.
They are preferred over the older `var`.
* `let` → value can be reassigned
* `const` → value cannot be reassigned
* Both are **block-scoped**

### Syntax
```javascript
let variableName = value;
const variableName = value;
```
### Example
```javascript
let age = 21;
age = 22;
console.log(age);
```
Output:
```text
22
```
With `const`:
```javascript
const pi = 3.14;
console.log(pi);
```
You cannot do:
```javascript
pi = 3.15; // Error
```
### Technical Real-Time Use
```javascript
let cartCount = 2;
cartCount++;
const taxRate = 0.18;
console.log(cartCount);
console.log(taxRate);
```
Here:
* `cartCount` changes → `let`
* `taxRate` remains fixed → `const`
### Important
`const` prevents **reassignment**, but objects and arrays can still be modified.
```javascript
const user = {
    name: "Arun"
};
user.name = "Kumar"; // Allowed
console.log(user.name);
```
But:
```javascript
user = {}; // Error
```

| `let`                | `const`              |                  |
| -------------------- | -------------------- | ---------------- |
| Can be reassigned    | Cannot be reassigned |                  |
| Block scoped         | Block scoped         |                  |
| Must be initialized? | No                   |                  |
| Common use           | Changing values      | Fixed references |

# 2. Arrow Functions
### Explanation
Arrow functions provide a **shorter syntax for writing functions**.
### Normal Function
```javascript
function add(a, b) {
    return a + b;
}
```
### Arrow Function
```javascript
const add = (a, b) => {
    return a + b;
};
```
For a single expression, it can be shortened further:
```javascript
const add = (a, b) => a + b;
```
### Syntax
```javascript
const functionName = (parameters) => {
    // code
};
```
### Technical Real-Time Use
Arrow functions are heavily used with array methods.
```javascript
const prices = [100, 200, 300];
const discountedPrices = prices.map(price => price * 0.9);
console.log(discountedPrices);
```
Output:
```text
[90, 180, 270]
```
### Important: `this`
Arrow functions **do not have their own `this`**. They use `this` from their surrounding lexical scope.
This is particularly useful in callbacks:
```javascript
class Counter {
    constructor() {
        this.count = 0;
    }
    start() {
        setInterval(() => {
            this.count++;
            console.log(this.count);
        }, 1000);
    }
}
```
# 3. Template Literals
### Explanation
Template literals allow you to create strings using **backticks** `` ` ``.
They make it easy to insert variables and expressions using `${}`.
### Syntax
```javascript
`Hello ${variable}`
```
### Example
```javascript
let name = "Arun";
let age = 22;
console.log(`My name is ${name} and I am ${age} years old.`);
```
Output:
```text
My name is Arun and I am 22 years old.
```
### Expressions
You can also perform calculations:
```javascript
let price = 100;
let quantity = 3;
console.log(`Total: ₹${price * quantity}`);
```
Output:
```text
Total: ₹300
```
### Technical Real-Time Use
Displaying product information:
```javascript
const product = "Laptop";
const price = 55000;
const message = `
Product: ${product}
Price: ₹${price}
`;
console.log(message);
```
Template literals are commonly used for:
* Dynamic UI messages
* HTML generation
* API response display
* Logging
* Notifications
# 4. Spread Operator `...`
### Explanation
The **spread operator** expands the elements of an array or properties of an object.
Think:
```text
... = "spread these values out"
```
### Arrays
```javascript
const numbers = [10, 20, 30];
const newNumbers = [...numbers, 40, 50];
console.log(newNumbers);
```
Output:
```text
[10, 20, 30, 40, 50]
```
### Combining Arrays
```javascript
const frontend = ["HTML", "CSS"];
const backend = ["Node.js", "Express"];
const technologies = [...frontend, ...backend];
console.log(technologies);
```
Output:
```text
["HTML", "CSS", "Node.js", "Express"]
```
### Objects
```javascript
const user = {
    name: "Arun",
    age: 22
};
const updatedUser = {
    ...user,
    role: "Developer"
};
console.log(updatedUser);
```
Output:
```text
{
    name: "Arun",
    age: 22,
    role: "Developer"
}
```
### Technical Real-Time Use
Updating React state is a common example:
```javascript
const user = {
    name: "Arun",
    age: 22
};
const updatedUser = {
    ...user,
    age: 23
};
```
The original object is not directly reassigned.

# 5. Rest Operator `...`
### Explanation
The **rest operator** collects multiple values into a single array.
The syntax is also `...`, but its purpose is different from spread.
```text
Spread → expands values
Rest   → collects values
```
### Example
```javascript
function addNumbers(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}
console.log(addNumbers(10, 20, 30, 40));
```
Output:
```text
100
```
Here:
```javascript
...numbers
```
collects:
```text
10, 20, 30, 40
```
into:
```javascript
[10, 20, 30, 40]
```
### Rest with Parameters
```javascript
function showUser(name, ...skills) {
    console.log(name);
    console.log(skills);
}
showUser("Arun", "JavaScript", "React", "Node.js");
```
Output:
```text
Arun
["JavaScript", "React", "Node.js"]
```
### Technical Real-Time Use
Useful when a function can receive a **variable number of arguments**.
```javascript
function calculateTotal(...prices) {
    return prices.reduce((total, price) => total + price, 0);
}
console.log(calculateTotal(500, 200, 300));
```
Output:
```text
1000
```
# 6. Destructuring
### Explanation
Destructuring allows you to **extract values from arrays or objects and store them in variables**.
There are two main types:
1. Array destructuring
2. Object destructuring

## Array Destructuring
Normally:
```javascript
const colors = ["red", "green", "blue"];
const first = colors[0];
const second = colors[1];
```
With destructuring:
```javascript
const colors = ["red", "green", "blue"];
const [first, second, third] = colors;
console.log(first);
console.log(second);
console.log(third);
```
Output:
```text
red
green
blue
```
### Skip Values
```javascript
const numbers = [10, 20, 30];
const [first, , third] = numbers;
console.log(first);
console.log(third);
```
Output:
```text
10
30
```
# Object Destructuring
Instead of:
```javascript
const user = {
    name: "Arun",
    age: 22,
    role: "Developer"
};
console.log(user.name);
console.log(user.age);
```
We can write:
```javascript
const user = {
    name: "Arun",
    age: 22,
    role: "Developer"
};
const { name, age, role } = user;
console.log(name);
console.log(age);
console.log(role);
```
### Technical Real-Time Use
API responses are often objects:
```javascript
const response = {
    id: 101,
    name: "Arun",
    email: "arun@gmail.com"
};
const { name, email } = response;
console.log(`User: ${name}`);
console.log(`Email: ${email}`);
```
This is extremely common in frontend development.
# 7. Modules
### Explanation
Modules allow you to **split JavaScript code into separate files**.
Instead of keeping everything in one huge file:
```text
app.js
```
you can organize code:
```text
project/
│
├── main.js
├── calculator.js
└── user.js
```
Modules use:
* `export`
* `import`

## Export
### `calculator.js`
```javascript
export function add(a, b) {
    return a + b;
}
export function subtract(a, b) {
    return a - b;
}
```
## Import
### `main.js`
```javascript
import { add, subtract } from "./calculator.js";
console.log(add(10, 5));
console.log(subtract(10, 5));
```
Output:
```text
15
5
```
## Default Export
You can also export one main value as default.
### `user.js`
```javascript
export default function getUser() {
    return {
        name: "Arun",
        role: "Developer"
    };
}
```
### `main.js`
```javascript
import getUser from "./user.js";
console.log(getUser());
```
You don't need `{}` for a default import.

# Technical Real-Time Module Structure
A real application might be organized like:
```text
src/
│
├── main.js
├── api.js
├── auth.js
├── utils.js
└── validation.js
```
For example:
### `api.js`
```javascript
export function getUsers() {
    return ["Arun", "Priya", "Kumar"];
}
```
### `main.js`
```javascript
import { getUsers } from "./api.js";
const users = getUsers();
console.log(users);
```
This makes the application:
* easier to maintain
* easier to test
* easier to reuse
* easier to organize


| Feature          | Purpose                   | Example               |
| ---------------- | ------------------------- | --------------------- |
| `let`            | Changeable variable       | `let count = 0`       |
| `const`          | Non-reassignable variable | `const tax = 0.18`    |
| Arrow function   | Short function syntax     | `x => x * 2`          |
| Template literal | Dynamic strings           | `` `Hello ${name}` `` |
| Spread           | Expand values             | `[...arr]`            |
| Rest             | Collect values            | `(...args)`           |
| Destructuring    | Extract values            | `const {name} = user` |
| Modules          | Split code into files     | `import` / `export`   |

### Most Important Difference

```text
Spread
...array
   ↓
Expands values
Rest
...values
   ↓
Collects values
Destructuring
const { name } = user
          ↓
Extracts values
Modules
export / import
      ↓
Shares code between files
```
These ES6 features are especially important because you'll encounter them constantly in **React, Node.js, Express, and modern frontend development**.

 ## 19_Modules
   
Modern JavaScript applications use **modules** to divide code into multiple files and **bundlers** to prepare those files and dependencies for the browser.
The main concepts are:
1. `export`
2. `import`
3. Default exports
4. Named vs default exports
5. Module bundlers
6. Webpack
7. Vite
# 1. `export`
### Explanation
`export` allows a JavaScript file to make variables, functions, classes, or objects available to other files.
For example:
```text
project/
│
├── main.js
└── math.js
```
### `math.js`
```javascript
export function add(a, b) {
    return a + b;
}
export function multiply(a, b) {
    return a * b;
}
```
Here, `add()` and `multiply()` are available outside `math.js`.
# 2. `import`
### Explanation
`import` allows another JavaScript file to use something that was exported.
### `main.js`
```javascript
import { add, multiply } from "./math.js";
console.log(add(10, 5));
console.log(multiply(10, 5));
```
Output:
```text
15
50
```
### Syntax
```javascript
import { functionName } from "./file.js";
```
For multiple exports:
```javascript
import { add, multiply } from "./math.js";
```
# 3. Named Exports
The exports we saw above are called **named exports**.
```javascript
// math.js
export function add(a, b) {
    return a + b;
}
export function subtract(a, b) {
    return a - b;
}
```
Import using the same exported names:
```javascript
import { add, subtract } from "./math.js";
```
You can also rename them:
```javascript
import { add as addition } from "./math.js";
console.log(addition(10, 20));
```
### Important
Named exports require `{ }`:
```javascript
import { add } from "./math.js";
```
# 4. Default Export
### Explanation
A file can have **one default export**.
It is useful when a module has one primary function, class, or component.
### `user.js`
```javascript
export default function getUser() {
    return {
        name: "Arun",
        role: "Developer"
    };
}
```
### Import
```javascript
import getUser from "./user.js";
console.log(getUser());
```
Notice that there are **no `{ }`**.
You can even give the imported function a different name:
```javascript
import fetchUser from "./user.js";
console.log(fetchUser());
```
The exported function is still the same default export.

# 5. Named Export vs Default Export

| Feature         | Named Export            | Default Export                  |
| --------------- | ----------------------- | ------------------------------- |
| Number per file | Multiple                | One                             |
| Import `{}`     | Required                | Not required                    |
| Import name     | Usually same            | Can be changed                  |
| Example         | `export function add()` | `export default function add()` |

### Named
```javascript
export function add() {}
export function subtract() {}
```
```javascript
import { add, subtract } from "./math.js";
```
### Default
```javascript
export default function add() {}
```
```javascript
import add from "./math.js";
```
# 6. Combining Named and Default Exports
You can have one default export along with multiple named exports.
### `user.js`
```javascript
export default function getUser() {
    return "Arun";
}
export const role = "Developer";
export function login() {
    return "Login successful";
}
```
### `main.js`
```javascript
import getUser, { role, login } from "./user.js";
console.log(getUser());
console.log(role);
console.log(login());
```
Output:
```text
Arun
Developer
Login successful
```
# 7. Why Do We Need Modules?
Imagine a large application:
```text
project/
│
├── main.js
├── login.js
├── register.js
├── api.js
├── validation.js
├── cart.js
├── payment.js
└── utils.js
```
Instead of putting thousands of lines into one file, each file handles a specific responsibility.
For example:
```text
login.js
    ↓
Authentication
api.js
    ↓
API requests
validation.js
    ↓
Form validation
cart.js
    ↓
Shopping cart logic
```
This improves:
* Code organization
* Reusability
* Maintainability
* Testing
* Team development

# 8. What Is a Module Bundler?
### Explanation
A **module bundler** takes JavaScript modules and their dependencies and prepares them for the application.
For example:
```text
main.js
   │
   ├── api.js
   │
   ├── user.js
   │
   └── utils.js
        ↓
   Bundler
        ↓
   Application build
```
Instead of manually managing all dependencies, the bundler analyzes:
```javascript
import { getUser } from "./user.js";
```
and determines that `user.js` is required by `main.js`.
### Why is this useful?
Modern applications may contain:

* Hundreds of JavaScript files
* CSS
* Images
* Fonts
* Third-party libraries
* npm packages
A bundler manages these dependencies and creates optimized files for deployment.
# 9. Webpack
### Explanation
**Webpack** is a popular JavaScript module bundler.
It analyzes your application's dependency graph and creates bundles that can be served to the browser.
Conceptually:
```text
                 main.js
                    │
          ┌─────────┼─────────┐
          ↓         ↓         ↓
       api.js    user.js   utils.js
          │
          ↓
    npm libraries
          │
          ↓
       Webpack
          │
          ↓
    Production files
```
Webpack can handle more than JavaScript through loaders and plugins.
### Example
Suppose:
```javascript
// main.js
import { calculateTotal } from "./cart.js";
console.log(calculateTotal());
```
Webpack follows the dependency:
```text
main.js
   ↓
cart.js
   ↓
other dependencies
```
and builds the application.
### Where Webpack is commonly seen
Webpack has been widely used in:
* React applications
* Large enterprise applications
* Complex frontend projects
* Older versions of frameworks/toolchains

# 10. Vite
### Explanation
**Vite** is a modern frontend development tool and build tool.
It provides:
* Fast development server
* Very fast Hot Module Replacement (HMR)
* Production builds
* Modern JavaScript support
* Easy project setup

Vite is commonly used with:
* React
* Vue
* Svelte
* Vanilla JavaScript
* Other frontend frameworks
# 11. Vite Development Flow
When you run:
```bash
npm run dev
```
Vite starts a development server.

Conceptually:

```text
Your source code
      ↓
     Vite
      ↓
Development server
      ↓
   Browser
```
When you modify a file:

```text
Edit React/JS file
       ↓
Vite detects change
       ↓
Updates affected module
       ↓
Browser updates
```
This is called **Hot Module Replacement (HMR)**.
It makes development much faster because you don't normally need to completely reload the application after every small change.

# 12. Vite Project Example
Create a Vite project:
```bash
npm create vite@latest my-app
```
Then:
```bash
cd my-app
npm install
npm run dev
```
A typical structure might look like:
```text
my-app/
│
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   └── utils.js
│
├── public/
├── package.json
└── vite.config.js
```
For example:
### `utils.js`
```javascript
export function greet(name) {
    return `Hello, ${name}!`;
}
```
### `App.jsx`
```javascript
import { greet } from "./utils.js";
console.log(greet("Arun"));
```
Vite handles the module dependency during development and builds the application for production.

# 13. Webpack vs Vite

| Feature             | Webpack                      | Vite                    |
| ------------------- | ---------------------------- | ----------------------- |
| Type                | Module bundler               | Dev server + build tool |
| Development startup | Generally more bundling work | Very fast               |
| HMR                 | Supported                    | Very fast HMR           |
| Configuration       | Can become complex           | Usually simpler         |
| Modern frontend     | Used widely                  | Very common             |
| React support       | Yes                          | Yes                     |
| Production build    | Yes                          | Yes                     |

The important point is that **Vite is not simply "Webpack but faster."** Their development architectures differ.
# 14. Simple Real-Time Example
Imagine a shopping application:
```text
src/
│
├── main.js
├── products.js
├── cart.js
├── payment.js
└── utils.js
```
### `products.js`
```javascript
export function getProducts() {
    return [
        { name: "Laptop", price: 50000 },
        { name: "Mouse", price: 1000 }
    ];
}
```
### `cart.js`
```javascript
export function calculateTotal(products) {
    return products.reduce((total, product) => {
        return total + product.price;
    }, 0);
}
```
### `main.js`
```javascript
import { getProducts } from "./products.js";
import { calculateTotal } from "./cart.js";
const products = getProducts();
const total = calculateTotal(products);
console.log(`Cart Total: ₹${total}`);
```
Output:
```text
Cart Total: ₹51000
```
A tool such as Vite can manage this application during development and create a production build.

**Note:** remember the distinction clearly: **ES modules (`import`/`export`) are a JavaScript language feature, while Webpack and Vite are development/build tools that work with your modules and dependencies.**
 
  ## 20_JSON

These concepts are very important when working with **JSON data, REST APIs, frontend applications, and objects**.
# 1. Parsing
### Explanation
**Parsing** means converting data from a string format into a JavaScript value/object that the program can work with.
The most common example is:
```javascript
JSON.parse()
```
It converts a **JSON string → JavaScript object**.
### Syntax
```javascript
JSON.parse(jsonString);
```
### Example
```javascript
const jsonData = '{"name":"Arun","age":22}';
const user = JSON.parse(jsonData);
console.log(user);
console.log(user.name);
```
Output:
```text
{ name: "Arun", age: 22 }
Arun
```
Before parsing:
```text
'{"name":"Arun","age":22}'
```
After parsing:
```javascript
{
    name: "Arun",
    age: 22
}
```
### Technical Real-Time Use
When an API returns JSON data:
```javascript
const response = '{"id":101,"name":"Arun","role":"Developer"}';
const user = JSON.parse(response);
console.log(user.name);
```
Now JavaScript can access:
```javascript
user.name
user.role
user.id
```
### Important
Invalid JSON causes an error:
```javascript
const data = '{"name":"Arun"';
const user = JSON.parse(data); // SyntaxError
```
You can handle it with `try...catch`:
```javascript
try {
    const user = JSON.parse(data);
    console.log(user);
} catch (error) {
    console.log("Invalid JSON data");
}
```
# 2. Stringifying
### Explanation
**Stringifying** means converting a JavaScript object/value into a JSON string.
The method is:
```javascript
JSON.stringify()
```
It performs:
```text
JavaScript Object → JSON String
```

### Syntax
```javascript
JSON.stringify(value);
```

### Example
```javascript
const user = {
    name: "Arun",
    age: 22
};
const jsonData = JSON.stringify(user);
console.log(jsonData);
```
Output:
```text
{"name":"Arun","age":22}
```
Notice that `jsonData` is now a **string**.
```javascript
console.log(typeof jsonData);
```
Output:
```text
string
```

# 3. Parsing vs Stringifying

| Operation    | Method             | Conversion              |
| ------------ | ------------------ | ----------------------- |
| Parsing      | `JSON.parse()`     | JSON string → JS object |
| Stringifying | `JSON.stringify()` | JS object → JSON string |

### Easy Memory Trick
```text
JSON.parse()
     ↓
String → Object

JSON.stringify()
     ↓
Object → String
```
# 4. APIs
### Explanation
An **API (Application Programming Interface)** allows different software systems to communicate with each other.
In frontend development, JavaScript commonly communicates with a backend through **HTTP APIs**.
For example:
```text
Frontend
   ↓
HTTP Request
   ↓
Backend API
   ↓
Database
   ↓
Response
   ↓
Frontend
```
A typical API response may look like:
```json
{
    "id": 101,
    "name": "Arun",
    "role": "Developer"
}
```

# 5. Using `fetch()` with an API
JavaScript provides `fetch()` for making HTTP requests.
### Syntax
```javascript
fetch(url)
    .then(response => response.json())
    .then(data => {
        // use data
    });
```
### Example
```javascript
fetch("https://example.com/api/users")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log("Error:", error);
    });
```
Here:
```javascript
response.json()
```
converts the JSON response into a JavaScript object.
# 6. API with `async/await`
Modern JavaScript commonly uses `async/await`.
```javascript
async function getUsers() {
    try {
        const response = await fetch("https://example.com/api/users");
        const users = await response.json();
        console.log(users);
    } catch (error) {
        console.log("Failed to fetch users");
    }
}
getUsers();
```
### Real-Time Example
Imagine a dashboard displaying user information:
```javascript
async function loadUser() {
    try {
        const response = await fetch("/api/user/101");
        if (!response.ok) {
            throw new Error("Failed to fetch user");
        }
        const user = await response.json();
        console.log(`Name: ${user.name}`);
        console.log(`Role: ${user.role}`);
    } catch (error) {
        console.log(error.message);
    }
}
loadUser();
```
Typical flow:
```text
fetch()
   ↓
HTTP Response
   ↓
response.json()
   ↓
JavaScript Object
   ↓
Display in DOM
```
# 7. Sending JSON to an API
You can also send JavaScript objects to a backend.
```javascript
const user = {
    name: "Arun",
    email: "arun@gmail.com"
};
fetch("/api/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
});
```
Here:
```javascript
JSON.stringify(user)
```
converts:
```javascript
{
    name: "Arun",
    email: "arun@gmail.com"
}
```
into:
```text
{"name":"Arun","email":"arun@gmail.com"}
```
which can be sent as the HTTP request body.

# 8. Shallow Copy
### Explanation
A **shallow copy** creates a new outer object, but nested objects are still referenced by the original object.
Common ways:
```javascript
{ ...object }
```
or:
```javascript
Object.assign({}, object)
```
### Example
```javascript
const user = {
    name: "Arun",
    address: {
        city: "Coimbatore"
    }
};
const copy = { ...user };
copy.name = "Kumar";
console.log(user.name);
console.log(copy.name);
```
Output:
```text
Arun
Kumar
```
The top-level `name` is independent.
But look at the nested object:
```javascript
copy.address.city = "Chennai";
console.log(user.address.city);
```
Output:
```text
Chennai
```
Why?
Because both objects reference the **same nested `address` object**.
```text
user
 │
 ├── name ──────── "Arun"
 │
 └── address ─────┐
                   ↓
              { city: "Chennai" }
                   ↑
                   │
copy ──────────────┘
```
# 9. Deep Copy
### Explanation
A **deep copy** creates an independent copy of the object, including nested objects.
One common approach for JSON-compatible data is:
```javascript
JSON.parse(JSON.stringify(object))
```
### Example
```javascript
const user = {
    name: "Arun",
    address: {
        city: "Coimbatore"
    }
};
const copy = JSON.parse(JSON.stringify(user));
copy.address.city = "Chennai";
console.log(user.address.city);
console.log(copy.address.city);
```
Output:
```text
Coimbatore
Chennai
```
Now changing the nested object doesn't affect the original.

# 10. Modern Deep Copy: `structuredClone()`
Modern JavaScript provides:
```javascript
structuredClone()
```
for creating deep copies of many JavaScript values
```javascript
const user = {
    name: "Arun",
    address: {
        city: "Coimbatore"
    }
};
const copy = structuredClone(user);
copy.address.city = "Chennai";
console.log(user.address.city);
console.log(copy.address.city);
```
Output:
```text
Coimbatore
Chennai
```
For general JavaScript data, `structuredClone()` is usually preferable to the JSON trick because it supports more data types.

# 11. Shallow vs Deep Copy

| Feature                               | Shallow Copy      | Deep Copy                |
| ------------------------------------- | ----------------- | ------------------------ |
| Outer object                          | New copy          | New copy                 |
| Nested objects                        | Shared references | Independently copied     |
| Nested modification affects original? | Yes               | No                       |
| Example                               | `{ ...user }`     | `structuredClone(user)`  |
| Performance                           | Generally cheaper | Generally more expensive |

### Visual Difference
**Shallow copy:**
```text
Original ──┐
           ├──→ Nested Object
Copy ──────┘
```
**Deep copy:**
```text
Original ──→ Nested Object A
Copy ──────→ Nested Object B
```
# 12. Important Difference: Reference
Consider:
```javascript
const user1 = {
    name: "Arun"
};
const user2 = user1;
user2.name = "Kumar";
console.log(user1.name);
```
Output:
```text
Kumar
```
This isn't a copy at all.
Both variables point to the same object:
```text
user1 ──┐
        ↓
     Object
        ↑
user2 ──┘
```
Using:
```javascript
const user2 = { ...user1 };
```
creates a new outer object.
# 13. Real-Time Example: API + Copy
Suppose an application receives user data from an API:
```javascript
const apiUser = {
    name: "Arun",
    preferences: {
        theme: "dark",
        language: "English"
    }
};
```
You want to modify the data for a form without changing the original API response.
A deep copy is appropriate:
```javascript
const formUser = structuredClone(apiUser);
formUser.preferences.theme = "light";
console.log(apiUser.preferences.theme);
console.log(formUser.preferences.theme);
```
Output:
```text
dark
light
```
The original API data remains unchanged.

# Note
```text
JSON.parse()
    ↓
JSON String → JavaScript Object
JSON.stringify()
    ↓
JavaScript Object → JSON String
fetch()
    ↓
Communicate with APIs
Shallow Copy
    ↓
New outer object
Nested references remain shared
Deep Copy
    ↓
Entire nested structure is copied
```
# 21_Session and cookies
These three are used to **store data in the browser**, but they differ in **lifetime, storage capacity, and how data is sent to the server**.
# 1. `localStorage`
### Explanation
`localStorage` stores data in the browser and keeps it **even after the browser is closed**.
The data remains until it is explicitly removed.
### Syntax
```javascript
localStorage.setItem("key", "value");
localStorage.getItem("key");
localStorage.removeItem("key");
localStorage.clear();
```
### Simple Example
```javascript
localStorage.setItem("username", "Arun");
const username = localStorage.getItem("username");
console.log(username);
```
Output:
```text
Arun
```
Even if you close and reopen the browser, the data normally remains.
## Storing Objects
`localStorage` stores values as **strings**, so objects need `JSON.stringify()`.
```javascript
const user = {
    name: "Arun",
    role: "Developer"
};
localStorage.setItem("user", JSON.stringify(user));
```
To retrieve it:
```javascript
const data = localStorage.getItem("user");
const user = JSON.parse(data);
console.log(user.name);
```
Output:
```text
Arun
```
### Technical Real-Time Use
Remembering a user's UI preference:
```javascript
localStorage.setItem("theme", "dark");
const theme = localStorage.getItem("theme");
if (theme === "dark") {
    document.body.classList.add("dark");
}
```
Common uses:
* Theme preference
* Language preference
* Shopping cart data
* Non-sensitive application settings
* Recently selected UI options
### Important Security Point
Do **not** store sensitive authentication secrets such as passwords or long-lived authentication tokens in `localStorage` when a safer server-managed/session-cookie design is available. JavaScript-accessible storage can be exposed if your site suffers an XSS attack.
# 2. `sessionStorage`
### Explanation
`sessionStorage` works similarly to `localStorage`, but the data is associated with the **current browser tab/session**.
When that tab is closed, its `sessionStorage` data is normally removed.
### Syntax
```javascript
sessionStorage.setItem("key", "value");
sessionStorage.getItem("key");
sessionStorage.removeItem("key");
sessionStorage.clear();
```
### Example
```javascript
sessionStorage.setItem("username", "Arun");
const username = sessionStorage.getItem("username");
console.log(username);
```
Output:
```text
Arun
```
If the tab is closed, the stored data is normally removed.
### Technical Real-Time Use
Suppose a multi-step registration form has:
```text
Step 1 → Personal Details
Step 2 → Address
Step 3 → Confirmation
```
You can temporarily store progress:
```javascript
sessionStorage.setItem("currentStep", "2");
```
When the page is refreshed:
```javascript
const step = sessionStorage.getItem("currentStep");
console.log(`Continue from step ${step}`);
```
This is useful for:
* Temporary form data
* Multi-step forms
* Temporary UI state
* Current page/step
* Data needed only during a browser session
# 3. Cookies
### Explanation
A **cookie** is a small piece of data associated with a website.
Unlike `localStorage` and `sessionStorage`, cookies can be automatically included in HTTP requests to the relevant server.
Cookies are therefore commonly used for **server-managed sessions and authentication state**.
### Creating a Cookie
```javascript
document.cookie = "username=Arun";
```
Reading cookies:
```javascript
console.log(document.cookie);
```
Example:
```text
username=Arun
```
# 4. Cookie Expiration
You can specify an expiration time:
```javascript
document.cookie = "username=Arun; max-age=3600";
```
`3600` seconds = 1 hour.
You can delete it by setting its maximum age to zero:
```javascript
document.cookie = "username=Arun; max-age=0";
```
# 5. Important Cookie Security Attributes
Cookies have security-related attributes that are especially important for authentication.
### `HttpOnly`
```text
HttpOnly
```
Prevents JavaScript from reading the cookie through `document.cookie`.
This is useful for server-managed authentication cookies because it reduces exposure to JavaScript-based theft.
### `Secure`
```text
Secure
```
The browser sends the cookie only over HTTPS, except for special local-development considerations.
### `SameSite`
Controls when cookies are sent with cross-site requests.
Common values:
```text
SameSite=Strict
SameSite=Lax
SameSite=None
```
For example:
```http
Set-Cookie: sessionId=abc123; HttpOnly; Secure; SameSite=Lax
```
For authentication cookies, the exact settings should match your application's architecture and cross-site requirements.

# 6. `localStorage` vs `sessionStorage` vs Cookies
| Feature                                | `localStorage`         | `sessionStorage`               | Cookies                         |
| -------------------------------------- | ---------------------- | ------------------------------ | ------------------------------- |
| Lifetime                               | Until removed          | Usually until tab/session ends | Configurable                    |
| Capacity                               | Larger                 | Larger                         | Small                           |
| Sent automatically to server?          | No                     | No                             | Yes, when applicable            |
| JavaScript access                      | Yes                    | Yes                            | Usually yes, unless `HttpOnly`  |
| `JSON.stringify()` needed for objects? | Yes                    | Yes                            | Usually yes for structured data |
| Typical use                            | Persistent preferences | Temporary session data         | Server sessions/auth state      |

# 7. Real-Time Example
Imagine an e-commerce application.
### `localStorage`
Store a theme:
```javascript
localStorage.setItem("theme", "dark");
```
The user expects the theme preference to remain after reopening the browser.
### `sessionStorage`
Store checkout progress:
```javascript
sessionStorage.setItem("checkoutStep", "2");
```
The information is useful while the current tab/session is active.
### Cookie
A server can issue a session cookie:
```http
Set-Cookie: sessionId=abc123; HttpOnly; Secure; SameSite=Lax
```
The browser can then send the cookie with applicable requests to that site.
# 8. Cookies vs Web Storage
The biggest conceptual difference is:
```text
localStorage
      ↓
Browser storage
      ↓
JavaScript reads/writes it
      ↓
NOT automatically sent with HTTP requests
sessionStorage
      ↓
Browser-tab/session storage
      ↓
JavaScript reads/writes it
      ↓
NOT automatically sent with HTTP requests

Cookies
      ↓
Browser cookie storage
      ↓
Can be automatically sent with HTTP requests
      ↓
Can also be configured as HttpOnly/Secure/SameSite
```
# 9. Quick Revision
### localStorage
> **Persistent browser storage**
```javascript
localStorage.setItem("theme", "dark");
```
### sessionStorage
> **Temporary storage associated with a browser tab/session**
```javascript
sessionStorage.setItem("step", "2");
```
### Cookies
> **Small browser-stored values that can be automatically sent with HTTP requests**
```text
Set-Cookie: sessionId=abc123; HttpOnly; Secure; SameSite=Lax
```
```text
localStorage
→ Keep it for later
sessionStorage
→ Keep it for this session/tab
cookies
→ Small data that can travel with HTTP requests
```
**Note:** Don't simply say *"cookies are for authentication."* Cookies are a general mechanism; they're often used for **server-managed sessions and authentication**, while `localStorage`/`sessionStorage` are client-side Web Storage APIs.

# 22_FETCH API & Ajax
These concepts are the foundation of **frontend ↔ backend communication**.
A typical flow is:
```text
Frontend
   ↓
fetch()
   ↓
HTTP Request
   ↓
Backend API
   ↓
HTTP Response
   ↓
JSON
   ↓
JavaScript Object
   ↓
Update UI
```
# 1. Asynchronous Requests
### Explanation
An **asynchronous request** allows JavaScript to send a request to a server without blocking the rest of the application while waiting for the response.
For example, when a website requests user data:
```text
Send request
     ↓
Continue running JavaScript
     ↓
Server processes request
     ↓
Response arrives
     ↓
Handle response
```
This is important because network requests can take time.
### Example
```javascript
console.log("Start");
fetch("/api/users")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
console.log("End");
```
Typically:
```text
Start
End
[user data]
```
The request happens asynchronously.

# 2. Promises
### Explanation
A **Promise** represents the eventual result of an asynchronous operation.
A Promise has three states:
```text
Pending
   ↓
Fulfilled
```
or
```text
Pending
   ↓
Rejected
```
### Example
```javascript
const promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Request successful");
    } else {
        reject("Request failed");
    }
});
promise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });
```
Output:
```text
Request successful
```
### Important Methods
```javascript
.then()
```
Runs when the Promise succeeds.
```javascript
.catch()
```
Runs when the Promise rejects.
```javascript
.finally()
```
Runs after completion regardless of success or failure.
# 3. `fetch()`
### Explanation
`fetch()` is the modern JavaScript API for making HTTP requests.
### Syntax
```javascript
fetch(url)
    .then(response => {
        // process response
    })
    .catch(error => {
        // handle error
    });
```
### GET Request
```javascript
fetch("/api/users")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log("Error:", error);
    });
```
The important part is:
```javascript
response.json()
```
It reads the response body and parses JSON into a JavaScript value.

# 4. `fetch()` with `async/await`
`async/await` provides a cleaner way to work with Promises.
### Example
```javascript
async function getUsers() {
    try {
        const response = await fetch("/api/users");
        const users = await response.json();
        console.log(users);
    } catch (error) {
        console.log("Request failed:", error);
    }
}
getUsers();
```
### How it works
```text
fetch()
   ↓
Promise
   ↓
await
   ↓
Wait for response
   ↓
response.json()
   ↓
JavaScript data
```
# 5. Checking HTTP Errors
One important interview point:
`fetch()` does **not automatically reject the Promise for HTTP errors such as 404 or 500**.
Therefore, check `response.ok` or `response.status`.
```javascript
async function getUser() {
    try {
        const response = await fetch("/api/users/101");
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        const user = await response.json();
        console.log(user);
    } catch (error) {
        console.log(error.message);
    }
}
```
For example:
```text
200 → response.ok = true
404 → response.ok = false
500 → response.ok = false
```
# 6. GET Request
A GET request retrieves data.
```javascript
async function getProducts() {
    const response = await fetch("/api/products");
    const products = await response.json();
    console.log(products);
}
getProducts();
```
Conceptually:
```text
GET /api/products
        ↓
Backend
        ↓
JSON response
```
# 7. POST Request
A POST request commonly sends data to the server.
```javascript
async function createUser() {
    const user = {
        name: "Arun",
        email: "arun@gmail.com"
    };
    const response = await fetch("/api/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });
    const result = await response.json();
    console.log(result);
}
createUser();
```
The important part:
```javascript
body: JSON.stringify(user)
```
converts the JavaScript object into a JSON string for the request body.
# 8. PUT and DELETE
### PUT
Used to update data:
```javascript
await fetch("/api/users/101", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: "Kumar"
    })
});
```
### DELETE
Used to delete data:
```javascript
await fetch("/api/users/101", {
    method: "DELETE"
});
```
Common HTTP methods:

| Method | Purpose          |
| ------ | ---------------- |
| GET    | Retrieve         |
| POST   | Create/send      |
| PUT    | Replace/update   |
| PATCH  | Partially update |
| DELETE | Delete           |

# 9. HTTP Headers
### Explanation
**Headers** provide additional information about an HTTP request or response.
For example:
```javascript
headers: {
    "Content-Type": "application/json"
}
```
This tells the server:
> The request body contains JSON.
### Common Headers
#### `Content-Type`
Describes the format of the request body.
```javascript
"Content-Type": "application/json"
```
#### `Authorization`
Used to send authentication credentials such as a bearer token when the API requires it.
```javascript
"Authorization": "Bearer YOUR_TOKEN"
```
#### `Accept`
Tells the server what response format the client prefers.
```javascript
"Accept": "application/json"
```
### Example
```javascript
const response = await fetch("/api/profile", {
    method: "GET",
    headers: {
        "Accept": "application/json",
        "Authorization": "Bearer YOUR_TOKEN"
    }
});
```
# 10. JSON
### Explanation
**JSON (JavaScript Object Notation)** is a text-based data format commonly used for exchanging data between frontend and backend.
Example:
```json
{
    "id": 101,
    "name": "Arun",
    "role": "Developer"
}
```
JSON supports values such as:
```text
String
Number
Boolean
Array
Object
null
```
### JSON → JavaScript
```javascript
const jsonString = '{"name":"Arun","age":22}';
const user = JSON.parse(jsonString);
console.log(user.name);
```
Output:
```text
Arun
```
### JavaScript → JSON
```javascript
const user = {
    name: "Arun",
    age: 22
};
const jsonString = JSON.stringify(user);
console.log(jsonString);
```
Output:
```text
{"name":"Arun","age":22}
```
# 11. XMLHttpRequest
### Explanation
`XMLHttpRequest` (**XHR**) is an older browser API for making HTTP requests.
It existed before `fetch()` and is still found in older applications and some libraries.
### Basic Example
```javascript
const xhr = new XMLHttpRequest();
xhr.open("GET", "/api/users");
xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
        const users = JSON.parse(xhr.responseText);
        console.log(users);
    }
};
xhr.onerror = function () {
    console.log("Network error");
};
xhr.send();
```
### Flow
```text
new XMLHttpRequest()
        ↓
xhr.open()
        ↓
xhr.send()
        ↓
Server
        ↓
xhr.onload
        ↓
JSON.parse()
```
# 12. XHR vs Fetch
| Feature               | XMLHttpRequest          | Fetch             |
| --------------------- | ----------------------- | ----------------- |
| API style             | Older                   | Modern            |
| Promise-based         | No                      | Yes               |
| `async/await`         | Not directly            | Yes               |
| Syntax                | More verbose            | Cleaner           |
| JSON handling         | `JSON.parse()` manually | `response.json()` |
| Common in modern code | Less common             | Very common       |
### XHR
```javascript
const xhr = new XMLHttpRequest();
xhr.open("GET", "/api/users");
xhr.onload = () => {
    console.log(JSON.parse(xhr.responseText));
};
xhr.send();
```
### Fetch
```javascript
const response = await fetch("/api/users");
const users = await response.json();
console.log(users);
```
For new browser code, `fetch()` is generally the more convenient API.


| Concept              | Meaning                                                     |
| -------------------- | ----------------------------------------------------------- |
| Asynchronous request | Request runs without blocking the application while waiting |
| Promise              | Represents future success/failure of an async operation     |
| `fetch()`            | Modern API for HTTP requests                                |
| `async`              | Makes a function return a Promise                           |
| `await`              | Waits for a Promise result inside an async function         |
| Headers              | Metadata/instructions attached to HTTP requests/responses   |
| JSON                 | Common text format for exchanging structured data           |
| `JSON.parse()`       | JSON string → JavaScript value                              |
| `JSON.stringify()`   | JavaScript value → JSON string                              |
| `XMLHttpRequest`     | Older API for HTTP requests                                 |

```text
fetch()
   ↓
HTTP Request
   ↓
Promise
   ↓
await
   ↓
Response
   ↓
response.json()
   ↓
JavaScript Object
```
And when sending data:
```text
JavaScript Object
       ↓
JSON.stringify()
       ↓
HTTP Request Body
       ↓
Backend API
```
**Note:** `fetch()` is Promise-based, while `XMLHttpRequest` uses an event/callback-based API. `async/await` is syntax built around Promises, not a separate networking mechanism.

# 23_Promises
Promises are used to handle **asynchronous operations** such as API calls, database requests, file operations, and timers.
A Promise has three states:
```text
Pending → Fulfilled
        ↘ Rejected
```
## 1. `.then()`
### Explanation
`.then()` is executed when a Promise is **successfully fulfilled**.
### Syntax
```js
promise.then(successFunction);
```
### Simple Example
```js
const promise = Promise.resolve("Login successful");
promise.then(message => {
    console.log(message);
});
```
### Output
```text
Login successful
```
### Technical Real-Time Use
After fetching user data from an API, `.then()` can process the successful response.
```js
fetch("/api/users")
    .then(response => response.json())
    .then(users => {
        console.log(users);
    });
```
Here:
```text
fetch()
   ↓
Promise
   ↓
.then()
   ↓
response.json()
   ↓
users
```
# 2. `.catch()`
### Explanation
`.catch()` handles a **rejected Promise or an error** that occurs in the Promise chain.
### Syntax
```js
promise.catch(errorHandler);
```
### Example
```js
const promise = Promise.reject("Payment failed");
promise
    .then(message => {
        console.log(message);
    })
    .catch(error => {
        console.log("Error:", error);
    });
```
### Output
```text
Error: Payment failed
```
### Technical Real-Time Use
```js
fetch("/api/payment")
    .then(response => response.json())
    .then(data => {
        console.log("Payment successful:", data);
    })
    .catch(error => {
        console.log("Payment failed:", error);
    });
```
If the network request fails or an error is thrown in the chain, `.catch()` can handle it.
### Important
`fetch()` does **not** reject merely because the server returns `404` or `500`.
So usually check:
```js
fetch("/api/payment")
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error.message);
    });
```
# 3. `.finally()`
### Explanation
`.finally()` runs **whether the Promise succeeds or fails**.
It is mainly used for **cleanup operations**.
### Syntax
```js
promise
    .then(...)
    .catch(...)
    .finally(...);
```
### Example
```js
const login = Promise.resolve("Login successful");
login
    .then(message => {
        console.log(message);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log("Login process completed");
    });
```
### Output
```text
Login successful
Login process completed
```
Even if the Promise fails:
```js
const login = Promise.reject("Invalid password");
login
    .then(message => {
        console.log(message);
    })
    .catch(error => {
        console.log("Error:", error);
    })
    .finally(() => {
        console.log("Login process completed");
    });
```
### Output
```text
Error: Invalid password
Login process completed
```
### Technical Real-Time Use
A very common use is hiding a loading spinner:
```js
showLoading();
fetch("/api/users")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        hideLoading();
    });
```
Whether the request succeeds or fails, the loading indicator is removed.
# 4. Promise Chaining
### Explanation
**Promise chaining** means executing multiple asynchronous operations one after another using multiple `.then()` calls.
The important point is:
> A `.then()` can return another value or another Promise, which can be handled by the next `.then()`.
### Example
```js
Promise.resolve(10)
    .then(number => {
        return number * 2;
    })
    .then(number => {
        return number + 5;
    })
    .then(result => {
        console.log(result);
    });
```
### Output
```text
25
```
Flow:
```text
10
 ↓
10 × 2
 ↓
20
 ↓
20 + 5
 ↓
25
```
## Chaining with API Calls
Suppose we first get a user and then use that user's ID to get their orders.
```js
fetch("/api/user")
    .then(response => response.json())
    .then(user => {
        return fetch(`/api/orders/${user.id}`);
    })
    .then(response => response.json())
    .then(orders => {
        console.log("Orders:", orders);
    })
    .catch(error => {
        console.log("Error:", error);
    });
```
Flow:
```text
Get User
   ↓
Convert response to JSON
   ↓
Get user.id
   ↓
Get Orders
   ↓
Convert response to JSON
   ↓
Display Orders
```
### Important Interview Point
Always **return** the next Promise when chaining:
```js
.then(user => {
    return fetch(`/api/orders/${user.id}`);
})
```
This allows the next `.then()` to wait for that request.
# 5. Returning Values in Promise Chaining
A `.then()` can return a normal value:
```js
Promise.resolve(5)
    .then(value => {
        return value * 2;
    })
    .then(value => {
        console.log(value);
    });
```
Output:
```text
10
```
It can also return another Promise:
```js
Promise.resolve("Vaishu")
    .then(name => {
        return Promise.resolve(`Hello ${name}`);
    })
    .then(message => {
        console.log(message);
    });
```
Output:
```text
Hello Vaishu
```
The next `.then()` waits for the returned Promise.
# 6. `Promise.all()`
### Explanation
`Promise.all()` is used when **multiple asynchronous operations need to complete successfully**.
It runs Promises concurrently and waits for all of them.
### Syntax
```js
Promise.all([promise1, promise2, promise3])
    .then(results => {
        console.log(results);
    })
    .catch(error => {
        console.log(error);
    });
```
### Example
```js
const userPromise = Promise.resolve("User data");
const orderPromise = Promise.resolve("Order data");
const productPromise = Promise.resolve("Product data");
Promise.all([
    userPromise,
    orderPromise,
    productPromise
])
.then(results => {
    console.log(results);
})
.catch(error => {
    console.log(error);
});
```
### Output
```text
[
    "User data",
    "Order data",
    "Product data"
]
```
### Important
The results maintain the **same order as the input Promises**.
```js
Promise.all([
    Promise.resolve("A"),
    Promise.resolve("B"),
    Promise.resolve("C")
])
.then(results => console.log(results));
```
Output:
```text
["A", "B", "C"]
```
Even if `B` actually finishes before `A`, the result array is still ordered according to the input.
## Technical Real-Time Use
Suppose a dashboard needs:
* User profile
* Orders
* Notifications
These requests are independent, so they can be requested concurrently.
```js
const profile = fetch("/api/profile").then(res => res.json());
const orders = fetch("/api/orders").then(res => res.json());
const notifications = fetch("/api/notifications")
    .then(res => res.json());
Promise.all([
    profile,
    orders,
    notifications
])
.then(([profileData, orderData, notificationData]) => {
    console.log(profileData);
    console.log(orderData);
    console.log(notificationData);

})
.catch(error => {
    console.log("Failed:", error);
});
```
### Flow
```text
        ┌── Profile
        │
Start ──┼── Orders ──→ Promise.all() → Continue
        │
        └── Notifications
```
### Important Rule
If **one Promise rejects**, `Promise.all()` rejects.
```js
Promise.all([
    Promise.resolve("A"),
    Promise.reject("B failed"),
    Promise.resolve("C")
])
.catch(error => {
    console.log(error);
});
```
Output:
```text
B failed
```
# 7. `Promise.race()`
### Explanation
`Promise.race()` waits for the **first Promise to settle**.
"Settle" means either:
* fulfilled
* rejected
Whichever Promise finishes first determines the result.
### Syntax
```js
Promise.race([promise1, promise2])
    .then(...)
    .catch(...);
```
### Example
```js
const fast = new Promise(resolve => {
    setTimeout(() => resolve("Fast request"), 1000);
});
const slow = new Promise(resolve => {
    setTimeout(() => resolve("Slow request"), 3000);
});
Promise.race([fast, slow])
    .then(result => {
        console.log(result);
    });
```
### Output
```text
Fast request
```
Because:
```text
Fast → 1 second
Slow → 3 seconds
Winner → Fast
```
# 8. Real-Time Use of `Promise.race()`
A common use is implementing a **request timeout**.
```js
const apiRequest = fetch("/api/users");
const timeout = new Promise((_, reject) => {
    setTimeout(() => {
        reject(new Error("Request timed out"));
    }, 5000);
});
Promise.race([
    apiRequest,
    timeout
])
.then(response => {
    console.log("Response received");
})
.catch(error => {
    console.log(error.message);
});
```
Here:
```text
API request ────────┐
                    ├── Promise.race()
5-second timeout ───┘
```
Whichever settles first determines the result.
**Note:** `Promise.race()` does not automatically cancel the losing operation. For actually cancelling a `fetch`, use `AbortController`.

# 9. `Promise.all()` vs `Promise.race()`
| Feature    | `Promise.all()`                  | `Promise.race()`                      |
| ---------- | -------------------------------- | ------------------------------------- |
| Purpose    | Wait for all                     | Wait for first settled                |
| Success    | All must fulfill                 | First settled determines result       |
| Failure    | One rejection rejects the result | First rejection can reject the result |
| Result     | Array of results                 | Single result/error                   |
| Common use | Multiple API calls               | Timeout/fallback                      |
| Waits for  | All Promises                     | First settled Promise                 |
### note
```text
Promise.all()
→ "Everyone must finish."

Promise.race()
→ "Whoever finishes first wins."
```

| Concept          | Meaning                               |
| ---------------- | ------------------------------------- |
| `.then()`        | Handle successful result              |
| `.catch()`       | Handle error/rejection                |
| `.finally()`     | Run cleanup regardless of result      |
| Chaining         | Execute async operations sequentially |
| `Promise.all()`  | Wait for all Promises                 |
| `Promise.race()` | Take the first settled Promise        |

### Note

1. `.then()` handles fulfillment.
2. `.catch()` handles rejection/errors.
3. `.finally()` runs for both success and failure.
4. Promise chaining works because `.then()` returns a **new Promise**.
5. `Promise.all()` rejects if any input Promise rejects.
6. `Promise.race()` settles when the first input Promise settles.
7. `Promise.all()` preserves **input order** in its result array.
8. `Promise.race()` does **not** cancel the losing Promises.

# 24_Async &Await
These concepts are used together to write **clean and readable asynchronous JavaScript**, especially for API calls.
## 1. `async` Functions
### Explanation
An `async` function is a function that **always returns a Promise**.
It allows us to use `await` inside the function.
### Syntax
```js
async function functionName() {
    // asynchronous code
}
```
### Simple Example
```js
async function getMessage() {
    return "Hello Vaishu";
}
getMessage().then(message => {
    console.log(message);
});
```
### Output
```text
Hello Vaishu
```
Even though we returned a normal string, an `async` function automatically wraps it in a Promise.
Conceptually:
```text
"Hello Vaishu"
      ↓
   Promise
```
### Technical Real-Time Use
API functions are commonly written as `async` functions:
```js
async function getUsers() {
    const response = await fetch("/api/users");
    const users = await response.json();
    return users;
}
```
# 2. `await`
### Explanation
`await` waits for a Promise to settle and gives you its fulfilled value.
It can normally be used inside an `async` function.
### Syntax
```js
const result = await promise;
```
### Example
```js
function getUser() {
    return Promise.resolve({
        name: "Vaishu",
        role: "Developer"
    });
}
async function displayUser() {
    const user = await getUser();
    console.log(user);
}
displayUser();
```
### Output
```text
{ name: "Vaishu", role: "Developer" }
```
Without `await`, you would receive the Promise itself:
```js
const user = getUser();
console.log(user);
```
Instead of the actual user object, `user` is a Promise.
# 3. `async` + `await` with `fetch()`
A common API pattern is:
```js
async function getUsers() {
    const response = await fetch("/api/users");
    const users = await response.json();
    console.log(users);
}
getUsers();
```
The flow is:
```text
fetch()
   ↓
Promise<Response>
   ↓
await
   ↓
Response
   ↓
response.json()
   ↓
Promise<Data>
   ↓
await
   ↓
JavaScript data
```
This is easier to read than a long `.then()` chain.
### Promise version
```js
fetch("/api/users")
    .then(response => response.json())
    .then(users => {
        console.log(users);
    });
```
### `async/await` version
```js
async function getUsers() {
    const response = await fetch("/api/users");
    const users = await response.json();
    console.log(users);
}
```
Both can perform the same asynchronous operation.
# 4. Error Handling with `try...catch`
### Explanation
When using `async/await`, the common way to handle rejected Promises is:
```js
try {
    // asynchronous operation
} catch (error) {
    // handle error
}
```
### Example
```js
async function getUsers() {
    try {
        const response = await fetch("/api/users");
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        const users = await response.json();
        console.log(users);
    } catch (error) {
        console.log("Error:", error.message);
    }
}
getUsers();
```
If the API fails, the `catch` block handles the error.
# 5. `finally` with `async/await`
`finally` is useful for code that should execute **regardless of success or failure**.
```js
async function getUsers() {
    try {
        console.log("Loading...");
        const response = await fetch("/api/users");
        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }
        const users = await response.json();
        console.log(users);
    } catch (error) {
        console.log("Error:", error.message);
    } finally {
        console.log("Request completed");
    }
}
getUsers();
```
### Technical Real-Time Use
For example, hiding a loading spinner:
```js
showLoading();
try {
    const response = await fetch("/api/products");
    if (!response.ok) {
        throw new Error("Failed to load products");
    }
    const products = await response.json();
    displayProducts(products);
} catch (error) {
    showError(error.message);
} finally {
    hideLoading();
}
```
# 6. `async/await` Error Flow
Consider:
```js
async function login() {
    try {
        const response = await fetch("/api/login");
        if (!response.ok) {
            throw new Error("Login failed");
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Something went wrong:", error.message);
    }
}
```
Flow:
```text
async function
      ↓
   await fetch()
      ↓
   Success?
   /      \
 Yes       No
 ↓          ↓
continue   catch
            ↓
        error handling
```
# 7. Important: `fetch()` and HTTP Errors
One important interview point:
`fetch()` rejects for **network-level failures**, but an HTTP `404` or `500` does not automatically cause rejection.
Therefore:
```js
if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
}
```
is often important.
Example:
```js
async function getUser() {
    try {
        const response = await fetch("/api/users/101");
        if (!response.ok) {
            throw new Error(`Server returned ${response.status}`);
        }
        const user = await response.json();
        console.log(user);
    } catch (error) {
        console.log(error.message);
    }
}
```
# 8. Sequential Execution
Consider:
```js
async function getData() {
    const user = await fetch("/api/user");
    const orders = await fetch("/api/orders");
    console.log(user);
    console.log(orders);
}
```
The second request starts **after the first `await` completes**.
```text
Request 1
   ↓
wait
   ↓
Request 2
   ↓
wait
   ↓
Result
```
This is appropriate when the second operation **depends on the first**.
### Example
```js
async function getUserOrders() {
    const response = await fetch("/api/user");
    const user = await response.json();
    const orderResponse =
        await fetch(`/api/orders/${user.id}`);
    const orders = await orderResponse.json();
    console.log(orders);
}
```
Here we need `user.id` before requesting the orders.
# 9. Concurrency
### Explanation
**Concurrency** means starting multiple independent asynchronous operations without unnecessarily waiting for one to finish before starting another.
Suppose we need:
* user profile
* products
* notifications
These operations are independent.
Instead of:
```js
const user = await fetch("/api/user");
const products = await fetch("/api/products");
const notifications =
    await fetch("/api/notifications");
```
we can start them together.
# 10. Concurrent Requests with `Promise.all()`
```js
async function loadDashboard() {
    const userPromise = fetch("/api/user");
    const productsPromise = fetch("/api/products");
    const notificationsPromise =
        fetch("/api/notifications");
    const [
        userResponse,
        productsResponse,
        notificationsResponse
    ] = await Promise.all([
        userPromise,
        productsPromise,
        notificationsPromise
    ]);
    const user = await userResponse.json();
    const products = await productsResponse.json();
    const notifications = await notificationsResponse.json();
    console.log(user);
    console.log(products);
    console.log(notifications);
}
```
The requests are started without waiting for one another.
```text
        ┌── User API ─────────┐
        │                     │
Start ──┼── Products API ─────┼──→ Promise.all()
        │                     │
        └── Notifications ────┘
```
### Why is this useful?
If three independent APIs each take roughly 2 seconds:
Sequential:
```text
2s + 2s + 2s ≈ 6s
```
Concurrent:
```text
max(2s, 2s, 2s) ≈ 2s
```
Actual timing depends on the network, server, browser, and other factors, but the principle is important.
# 11. Better Concurrent API Pattern
You can also create the Promises directly:
```js
async function loadDashboard() {
    try {
        const [
            userResponse,
            productsResponse,
            notificationResponse
        ] = await Promise.all([
            fetch("/api/user"),
            fetch("/api/products"),
            fetch("/api/notifications")
        ]);
        const user = await userResponse.json();
        const products = await productsResponse.json();
        const notifications =
            await notificationResponse.json();
        console.log(user);
        console.log(products);
        console.log(notifications);
    } catch (error) {
        console.log("Dashboard error:", error.message);

    }
}
```
# 12. Sequential vs Concurrent
### Sequential
```js
const user = await getUser();
const products = await getProducts();
const orders = await getOrders();
```
```text
User
 ↓
Products
 ↓
Orders
```
Use when operations **depend on each other**.
### Concurrent
```js
const [user, products, orders] =
    await Promise.all([
        getUser(),
        getProducts(),
        getOrders()
    ]);
```
```text
User      ──┐
Products  ──┼──→ Promise.all()
Orders    ──┘
```
Use when operations are **independent**.
# 13. Concurrency with Different Functions
You don't need to use `fetch()` only.
```js
function getUser() {
    return Promise.resolve("Vaishu");
}
function getRole() {
    return Promise.resolve("Developer");
}
function getSkills() {
    return Promise.resolve(["JavaScript", "Python", "React"]);
}
async function getProfile() {
    const [user, role, skills] =
        await Promise.all([
            getUser(),
            getRole(),
            getSkills()
        ]);
    console.log(user);
    console.log(role);
    console.log(skills);
}
getProfile();
```
### Output
```text
Vaishu
Developer
["JavaScript", "Python", "React"]
```
# 14. Handling Individual Errors in Concurrent Operations
`Promise.all()` rejects if **one Promise rejects**.
If you want each operation to complete independently and inspect individual results, `Promise.allSettled()` can be useful.
```js
async function loadData() {
    const results = await Promise.allSettled([
        fetch("/api/users"),
        fetch("/api/products"),
        fetch("/api/orders")
    ]);
    console.log(results);
}
```
Possible result:
```text
[
    { status: "fulfilled", value: ... },
    { status: "rejected", reason: ... },
    { status: "fulfilled", value: ... }
]
```
This is useful for dashboards where one failed API shouldn't necessarily prevent you from displaying the other successful data.
# 15. `await` Does Not Block the Entire JavaScript Program
This is an important concept.
```js
async function test() {
    console.log("A");
    await Promise.resolve();
    console.log("B");
}
console.log("Start");
test();
console.log("End");
```
Output:
```text
Start
A
End
B
```
Why?
`await` pauses the **async function's continuation**, not the entire JavaScript thread.
Conceptually:
```text
Start
 ↓
test()
 ↓
A
 ↓
await
 ↓
control returns
 ↓
End
 ↓
B
```
This is why JavaScript can continue handling other work while an asynchronous operation is pending.
# 16. `async/await` vs `.then()/.catch()`
### Promise chaining
```js
fetch("/api/users")
    .then(response => response.json())
    .then(users => {
        console.log(users);
    })
    .catch(error => {
        console.log(error);
    });
```
### `async/await`
```js
async function getUsers() {
    try {
        const response = await fetch("/api/users");
        if (!response.ok) {
            throw new Error("Request failed");
        }
        const users = await response.json();
        console.log(users);
    } catch (error) {
        console.log(error);
    }
}
```

| `.then()`                 | `async/await`              |
| ------------------------- | -------------------------- |
| Promise chaining          | Synchronous-looking syntax |
| `.catch()` for errors     | `try...catch`              |
| Good for chaining         | Often easier to read       |
| Promise-based             | Still Promise-based        |
| Does not replace Promises | Built on top of Promises   |

**Important:** `async/await` does not eliminate Promises. It is a cleaner way to work with them.

| Concept                | Meaning                                      |
| ---------------------- | -------------------------------------------- |
| `async`                | Makes a function return a Promise            |
| `await`                | Waits for a Promise inside an async function |
| `try`                  | Contains code that may fail                  |
| `catch`                | Handles errors                               |
| `finally`              | Runs whether success or failure              |
| Sequential             | One async operation after another            |
| Concurrent             | Independent operations started together      |
| `Promise.all()`        | Wait for all concurrent operations           |
| `Promise.allSettled()` | Get every operation's outcome                |
| `Promise.race()`       | First settled Promise determines result      |

```text
async  → "This function works with Promises"
await  → "Wait for this Promise"
try    → "Try the operation"
catch  → "Handle the error"
finally → "Do this anyway"
Promise.all()
         → "Wait for everyone"
Promise.race()
         → "First one to finish/settle"
```
### note
**When should you use sequential `await` vs `Promise.all()`?**
```text
If B depends on A:
    await A
    await B
If A and B are independent:
    await Promise.all([A, B])
```
That distinction is one of the most important practical concepts in JavaScript asynchronous programming.

# 25_Classes 

JavaScript classes provide a cleaner syntax for creating **objects and object-oriented programs**.
They are especially useful when an application has multiple objects with similar properties and behavior, such as **users, employees, products, bank accounts, or vehicles**.
# 1. Class Syntax
### Explanation
A **class** is a blueprint for creating objects.
It defines:
* properties/data
* methods/behavior
* constructors
* inheritance relationships
### Syntax
```js
class ClassName {
    // properties
    // methods
}
```
### Example
```js
class User {
    login() {
        console.log("User logged in");
    }
}
const user = new User();
user.login();
```
## Output
```text
User logged in
```
Here:
```text
User
 ↓
Class / Blueprint
 ↓
new User()
 ↓
Object
```
### Technical Real-Time Use
A web application may have different users:
```js
class User {
    login() {
        console.log("User logged in");
    }
    logout() {
        console.log("User logged out");
    }
}
const vaishu = new User();
vaishu.login();
vaishu.logout();
```
The class defines common behavior that every `User` object can use.
# 2. Constructor
### Explanation
A **constructor** is a special method that runs automatically when an object is created using `new`.
It is mainly used to initialize object properties.
### Syntax
```js
class ClassName {
    constructor(parameters) {
        // initialize properties
    }
}
```
### Example
```js
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}
const user = new User("Vaishu", "vaishu@gmail.com");
console.log(user.name);
console.log(user.email);
```
### Output
```text
Vaishu
vaishu@gmail.com
```
### What happens?
```js
new User("Vaishu", "vaishu@gmail.com");
```
calls:
```js
constructor("Vaishu", "vaishu@gmail.com")
```
and:
```js
this.name = name;
this.email = email;
```
creates properties on the object.
### Technical Real-Time Use
When registering a user:
```js
class User {
    constructor(id, name, role) {
        this.id = id;
        this.name = name;
        this.role = role;
    }
}
const user = new User(
    101,
    "Vaishu",
    "Developer"
);
console.log(user);
```
Output:
```text
{
    id: 101,
    name: "Vaishu",
    role: "Developer"
}
```
# 3. Methods
### Explanation
A **method** is a function defined inside a class.
It represents the behavior of an object.
### Syntax
```js
class ClassName {
    methodName() {
        // code
    }
}
```
### Example
```js
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    checkBalance() {
        console.log(`Balance: ₹${this.balance}`);
    }
}
const account = new BankAccount(5000);
account.deposit(2000);
account.checkBalance();
```
### Output
```text
Balance: ₹7000
```
### Technical Real-Time Use
A banking application can keep account data and operations together:
```text
BankAccount
├── balance
├── deposit()
├── withdraw()
└── checkBalance()
```
This is one of the main ideas behind **encapsulation**.
# 4. `this` in Classes
### Explanation
`this` refers to the **current object**.
```js
class User {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(this.name);
    }
}
const user = new User("Vaishu");
user.showName();
```
Output:
```text
Vaishu
```
Here:
```js
this.name
```
means:
> the `name` property of the current object.
# 5. Multiple Objects from One Class
One class can create many independent objects.
```js
class Employee {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }
    display() {
        console.log(`${this.name} - ${this.role}`);
    }
}
const employee1 = new Employee("Vaishu", "AI Engineer");
const employee2 = new Employee("Priya", "Frontend Developer");
employee1.display();
employee2.display();
```
Output:
```text
Vaishu - AI Engineer
Priya - Frontend Developer
```
The class is shared, but each object has its own data.
# 6. Inheritance
### Explanation
**Inheritance** allows one class to reuse properties and methods from another class.
The class being inherited from is called the **parent/base class**.
The class that inherits is called the **child/derived class**.
### Syntax
```js
class Child extends Parent {
}
```
### Example
```js
class User {
    login() {
        console.log("User logged in");
    }
}
class Admin extends User {
    manageUsers() {
        console.log("Managing users");
    }
}
const admin = new Admin();
admin.login();
admin.manageUsers();
```
### Output
```text
User logged in
Managing users
```
`Admin` automatically gets the `login()` method from `User`.
```text
User
 │
 │ extends
 ↓
Admin
```
### Technical Real-Time Example
In an application:
```text
User
 ├── login()
 └── logout()
Admin extends User
 ├── login()
 ├── logout()
 └── manageUsers()
```
An admin is a user but has additional capabilities.
# 7. Constructor with Inheritance
When a child class has its own constructor, it must call `super()` **before using `this`**.
### Example
```js
class User {
    constructor(name) {
        this.name = name;
    }
}
class Admin extends User {
    constructor(name, permission) {
        super(name);
        this.permission = permission;
    }
}
const admin = new Admin(
    "Vaishu",
    "Full Access"
);
console.log(admin.name);
console.log(admin.permission);
```
### Output
```text
Vaishu
Full Access
```
# 8. `super()`
### Explanation
`super()` calls the **parent class constructor**.
It is mainly used inside a child constructor.
```js
class Parent {
    constructor(name) {
        this.name = name;
    }
}
class Child extends Parent {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
}
```
Here:
```js
super(name);
```
calls:
```js
Parent constructor
```
### Important Rule
If a derived class has a constructor, you cannot use `this` before calling `super()`.
Incorrect:
```js
class Admin extends User {

    constructor(name) {
        this.name = name;
        super(name);
    }
}
```
Correct
```js
class Admin extends User {
    constructor(name) {
        super(name);
        this.name = name;
    }
}
```
Although in this example the second assignment is unnecessary.
# 9. `super` for Parent Methods
`super` is not only used for constructors.
It can also call a method from the parent class.
### Example
```js
class User {
    login() {
        console.log("User login");
    }
}
class Admin extends User {
    login() {
        super.login();
        console.log("Admin authentication");
    }
}
const admin = new Admin();
admin.login();
```
### Output
```text
User login
Admin authentication
```
Here:
```js
super.login();
```
calls the parent's `login()` method.
# 10. Method Overriding
### Explanation
A child class can provide its own implementation of a parent method.
This is called **method overriding**.
```js
class User {
    getRole() {
        return "User";
    }
}
class Admin extends User {
    getRole() {
        return "Admin";
    }
}
const admin = new Admin();
console.log(admin.getRole());
```
### Output
```text
Admin
```
The child version overrides the parent version.
You can still access the parent implementation using `super`:
```js
class Admin extends User {
    getRole() {
        return `${super.getRole()} + Admin`;
    }
}
```
Output:
```text
User + Admin
```
# 11. `static`
### Explanation
A `static` method belongs to the **class itself**, not to individual objects.
You call it using the class name.
### Syntax
```js
class ClassName {
    static methodName() {
        // code
    }
}
```
### Example
```js
class MathUtils {
    static add(a, b) {
        return a + b;
    }
}
console.log(MathUtils.add(10, 20));
```
### Output
```text
30
```
You don't create an object:
```js
MathUtils.add(10, 20);
```
This would not work:
```js
const math = new MathUtils();
math.add(10, 20); // Error
```
because `add()` is static.
# 12. Real-Time Use of `static`
Static methods are useful for **utility operations** that don't depend on a particular object's data.
```js
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    static validateEmail(email) {
        return email.includes("@");
    }
}
console.log(
    User.validateEmail("vaishu@gmail.com")
);
```
### Output
```text
true
```
Why static?
Email validation doesn't require a particular `User` object.
# 13. Static Property
A class can also have static properties.
```js
class Company {
    static companyName = "Tech Solutions";
}
console.log(Company.companyName);
```
Output:
```text
Tech Solutions
```
It belongs to the class:
```text
Company
   │
   └── companyName
```
not to individual instances.
# 14. Instance vs Static
### Instance method
```js
class User {
    constructor(name) {
        this.name = name;
    }
    displayName() {
        console.log(this.name);
    }
}
const user = new User("Vaishu");
user.displayName();
```
Called using:
```js
user.displayName();
```
### Static method
```js
class User {
    static createGuest() {
        return new User("Guest");
    }
    constructor(name) {
        this.name = name;
    }
}
const guest = User.createGuest();
console.log(guest.name);
```
Called using:
```js
User.createGuest();
```
### Key Difference
| Instance                                | Static                           |
| --------------------------------------- | -------------------------------- |
| Belongs to object                       | Belongs to class                 |
| Requires `new` object                   | No object required               |
| Called using `object.method()`          | Called using `Class.method()`    |
| Can access instance data through `this` | Does not have an instance `this` |

# 15. Complete Example
Here's a practical employee-management example combining everything:
```js
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    getDetails() {
        return `${this.name} earns ₹${this.salary}`;
    }
    static companyPolicy() {
        return "Employees must follow company policies";
    }
}
class Developer extends Employee {
    constructor(name, salary, language) {
        super(name, salary);
        this.language = language;
    }
    getDetails() {
        return `${super.getDetails()} and works with ${this.language}`;
    }
    writeCode() {
        console.log(`${this.name} is writing ${this.language} code`);
    }
}
const developer = new Developer(
    "Vaishu",
    60000,
    "JavaScript"
);
console.log(developer.getDetails());
developer.writeCode();
console.log(Employee.companyPolicy());
```
### Output
```text
Vaishu earns ₹60000 and works with JavaScript
Vaishu is writing JavaScript code
Employees must follow company policies
```
This example contains:
```text
class
   ↓
constructor
   ↓
methods
   ↓
extends
   ↓
super()
   ↓
method overriding
   ↓
static method
```

| Concept          | Meaning                                      |
| ---------------- | -------------------------------------------- |
| `class`          | Blueprint for creating objects               |
| `constructor()`  | Initializes an object                        |
| `this`           | Refers to the current object                 |
| Method           | Function inside a class                      |
| `extends`        | Creates inheritance                          |
| `super()`        | Calls parent constructor                     |
| `super.method()` | Calls parent method                          |
| Overriding       | Child provides its own method implementation |
| `static`         | Member belongs to the class, not instances   |

### Easy Memory Trick
```text
class       → Blueprint

constructor → Initialize object

this        → Current object

extends     → Inherit

super()     → Parent constructor

super.method()
            → Parent method
static      → Class-level member
```
# 26_Prototype and Inheritance
JavaScript uses **prototypes** to implement inheritance.
Classes are actually built on top of JavaScript's existing **prototype-based object system**.
# 1. What is a Prototype?
### Explanation
A **prototype** is an object that another object can use to access properties and methods.
If JavaScript cannot find a property/method directly on an object, it looks at its prototype.
### Simple Example
```js
const user = {
    name: "Vaishu"
};
console.log(user.toString());
```
We never defined `toString()` inside `user`.
So where does it come from?
```text 
user
 ↓
Object.prototype
 ↓
null
```
`toString()` is available through `Object.prototype`.
# 2. Prototype Chain
### Explanation
The **prototype chain** is the sequence JavaScript follows when looking for a property or method.
Suppose:
```js
const user = {
    name: "Vaishu"
};
console.log(user.toString());
```
JavaScript searches:
```text
user
 ↓
Object.prototype
 ↓
null
```
If `toString()` isn't found in `user`, JavaScript checks `Object.prototype`.
If it isn't there either, it continues to `null`.
Then JavaScript returns `undefined` or throws an error depending on how the property is used.
### Example
```js
const user = {
    name: "Vaishu"
};
console.log(user.name);
console.log(user.toString);
```
* `name` → found directly in `user`
* `toString` → found through the prototype chain
# 3. Prototype Chain with Inheritance
Consider:
```js
const animal = {
    eat() {
        console.log("Animal is eating");
    }
};
const dog = Object.create(animal);
dog.bark = function () {
    console.log("Dog is barking");
};
dog.eat();
dog.bark();
```
Output:
```text id="8i8t3q"
Animal is eating
Dog is barking
```
The structure is:
```text id="j3m5bp"
dog
 ├── bark()
 │
 ↓ prototype
animal
 └── eat()
```
When we call:
```js id="yj4v9c"
dog.eat();
```
JavaScript doesn't find `eat()` directly on `dog`.
It searches the prototype:
```text id="x3d6c9"
dog
 ↓
animal
 ↓
Object.prototype
 ↓
null
```
It finds `eat()` in `animal`.
# 4. `__proto__`
### Explanation
`__proto__` is an accessor that exposes an object's prototype.
Example:
```js 
const animal = {
    eat() {
        console.log("Eating");
    }
};
const dog = Object.create(animal);
console.log(dog.__proto__ === animal);
```
Output:
```text 
true
```
So:
```js 
dog.__proto__
```
refers to the prototype object of `dog`.
### Important
`__proto__` is commonly seen when learning/debugging prototypes, but for modern code, prefer:
```js 
Object.getPrototypeOf(object);
```
and:
```js 
Object.setPrototypeOf(object, prototype);
```
when you actually need to inspect or change prototypes.
# 5. `Object.getPrototypeOf()`
This is the standard way to inspect an object's prototype.
```js 
const animal = {
    eat() {
        console.log("Eating");
    }
};
const dog = Object.create(animal);
console.log(Object.getPrototypeOf(dog) === animal);
```
Output:
```text
true
```
Compare:
```js 
dog.__proto__
```
with:
```js
Object.getPrototypeOf(dog)
```
Both can reveal the prototype, but `Object.getPrototypeOf()` is the standard API.
# 6. `Object.create()`
### Explanation
`Object.create()` creates a new object with a specified object as its prototype.
### Syntax
```js
Object.create(prototype);
```
### Example
```js
const userMethods = {
    login() {
        console.log(`${this.name} logged in`);
    },
    logout() {
        console.log(`${this.name} logged out`);
    }
};
const user = Object.create(userMethods);
user.name = "Vaishu";
user.login();
user.logout();
```
### Output
```text id="r5n6g7"
Vaishu logged in
Vaishu logged out
```
The structure is:
```text 
user
 ├── name = "Vaishu"
 │
 ↓ prototype
userMethods
 ├── login()
 └── logout()
```
# 7. Why Use `Object.create()`?
It can be useful when you want to create objects that **share behavior through a prototype** without defining a class.
For example:
```js 
const employeeMethods = {
    work() {
        console.log(`${this.name} is working`);
    }
};
const employee1 = Object.create(employeeMethods);
employee1.name = "Vaishu";
const employee2 = Object.create(employeeMethods);
employee2.name = "Priya";
employee1.work();
employee2.work();
```
Output:
```text id="q4x7n2"
Vaishu is working
Priya is working
```
Both objects share the same `work()` method through the prototype.
# 8. `Object.create(null)`
You can also create an object with **no prototype**:
```js 
const data = Object.create(null);
data.name = "Vaishu";
console.log(data.name);
```
Here:
```text 
data
 ↓
null
```
There is no `Object.prototype`.
Therefore, methods normally inherited from `Object.prototype` aren't available:
```js 
const data = Object.create(null);
console.log(data.toString);
```
Output:
```text 
undefined
```
This can be useful for special dictionary-like objects where you don't want inherited properties.
# 9. Constructor Functions
Before ES6 classes became common, JavaScript frequently used **constructor functions** to create multiple similar objects.
### Example
```js
function User(name, role) {
    this.name = name;
    this.role = role;
}
const user1 = new User("Vaishu", "Developer");
const user2 = new User("Priya", "Tester");
console.log(user1);
console.log(user2);
```
Output:
```text 
User {
    name: "Vaishu",
    role: "Developer"
}
User {
    name: "Priya",
    role: "Tester"
}
```
The `new` keyword is important here.
# 10. How `new` Works
When you write:
```js 
const user = new User("Vaishu", "Developer");
```
JavaScript conceptually performs several steps:
### Step 1 — Create a new object
```text 
{}
```
### Step 2 — Connect its prototype
The new object's prototype becomes:
```js 
User.prototype
```
### Step 3 — Execute the constructor
```js 
User("Vaishu", "Developer")
```
with `this` referring to the new object.
### Step 4 — Return the object
Conceptually:
```text 
new User()
     ↓
New Object
     ↓
[[Prototype]] → User.prototype
     ↓
constructor executes
     ↓
Object returned
```
# 11. Constructor Function + Prototype Methods
A common pattern is to put shared methods on the constructor's `.prototype`.
```js
function User(name) {
    this.name = name;
}
User.prototype.login = function () {
    console.log(`${this.name} logged in`);
};
const user1 = new User("Vaishu");
const user2 = new User("Priya");
user1.login();
user2.login();
```
Output:
```text
Vaishu logged in
Priya logged in
```
The important part is:
```js
User.prototype.login
```
There is **one shared `login()` function** rather than creating a separate function for every object.
# 12. Why Put Methods on the Prototype?
Consider this:
```js
function User(name) {
    this.name = name;
    this.login = function () {
        console.log("Login");
    };
}
```
Every object gets its own `login` function.
Instead:
```js 
function User(name) {
    this.name = name;
}
User.prototype.login = function () {
    console.log("Login");
};
```
Now objects can share the same method through the prototype.
```text 
user1 ──┐
        ├──→ User.prototype.login()
user2 ──┘
```
This avoids unnecessarily creating separate copies of the same method.
# 13. `prototype` vs `__proto__`
This is a **very common interview question**.
### `prototype`
`prototype` is mainly a property of **constructor functions/classes**.
```js 
function User() {}
console.log(User.prototype);
```
### `__proto__`
`__proto__` refers to the prototype of an **object**.
```js 
const user = new User();
console.log(user.__proto__ === User.prototype);
```
Output:
```text id="r8n2q5"
true
```
```text 
Constructor Function
        ↓
   .prototype
        ↓
 Prototype Object
        ↑
        │
      __proto__
        │
        │
     Instance
```
So:
```text 
User.prototype
     ↑
     │
user.__proto__
```
They refer to the same prototype object in this example, but they are accessed from different sides.
# 14. `constructor` Property
Prototype objects have a `constructor` property that points back to the constructor function.
```js
function User(name) {
    this.name = name;
}
const user = new User("Vaishu");
console.log(user.constructor === User);
```
Output:
```text 
true
```
Relationship:
```text 
User
 ↑
 │ constructor
 │
User.prototype
 ↑
 │ [[Prototype]]
 │
user
```
# 15. Complete Prototype Chain
Let's see the chain:
```js 
function User(name) {
    this.name = name;
}
User.prototype.login = function () {
    console.log("Login");
};
const user = new User("Vaishu");
user.login();
```
The lookup roughly follows:
```text
user
  ↓
User.prototype
  ↓
Object.prototype
  ↓
null
```
When JavaScript sees:
```js
user.login();
```
it searches:
1. Does `user` have `login`? → No
2. Does `User.prototype` have `login`? → Yes
3. Execute it.
For:
```js 
user.toString();
```
it searches:
1. `user` → No
2. `User.prototype` → No
3. `Object.prototype` → Yes
4. Execute it.

# 16. Classes and Prototypes
This is an important connection with the previous topic.
When you write:
```js
class User {
    login() {
        console.log("Login");
    }
}
```
the `login()` method is placed on:
```js id="b9k4x1"
User.prototype
```
Conceptually:
```text 
class User
    │
    └── User.prototype
            │
            └── login()
```
So:
```js
const user = new User();
user.login();
```
works through the prototype chain.
### Important
**JavaScript classes do not replace prototypes.**
Classes provide a cleaner syntax for working with JavaScript's prototype-based inheritance.
# 17. Prototype Inheritance vs Class Inheritance
### Prototype style
```js
const animal = {
    eat() {
        console.log("Eating");
    }
};
const dog = Object.create(animal);
dog.bark = function () {
    console.log("Barking");
};
```
### Class style
```js 
class Animal {
    eat() {
        console.log("Eating");
    }
}
class Dog extends Animal {
    bark() {
        console.log("Barking");
    }
}
```
Both use JavaScript's prototype system underneath.
The class syntax is generally easier to read when modeling traditional object-oriented relationships.

| Concept                   | Meaning                                                   |
| ------------------------- | --------------------------------------------------------- |
| Prototype                 | Object used for shared properties/methods                 |
| Prototype chain           | Chain JavaScript searches for properties                  |
| `__proto__`               | Accessor for an object's prototype                        |
| `Object.getPrototypeOf()` | Standard way to get prototype                             |
| `Object.create()`         | Creates object with specified prototype                   |
| Constructor function      | Older function-based object creation pattern              |
| `prototype`               | Property on constructor functions/classes                 |
| `new`                     | Creates object and connects it to constructor's prototype |
| `User.prototype`          | Shared prototype object for `User` instances              |
| `constructor`             | Reference back to the constructor                         |

### Note
```text 
prototype
→ property of constructor function/class
__proto__
→ prototype of an individual object
```
Example:
```js
function User() {}
const user = new User();
console.log(user.__proto__ === User.prototype);
```
Output:
```text id="c6x9k2"
true
```
 # 27_this keyword
The `this` keyword is one of the most important JavaScript interview topics.
The key idea is:
> **`this` refers to a context determined by how a function is called, not simply where the function was defined.**

# 1. Global Context
### Explanation
At the top level, `this` behaves differently depending on whether the code is running as a **script** or an **ES module**.
In a browser script:
```js 
console.log(this);
```
It refers to the global `window` object.
```text 
this
 ↓
window
```
But in an ES module:
```js 
console.log(this);
```
top-level `this` is `undefined`.
### Important
Don't memorize:
> "`this` always means window."
That is only true for certain browser-script contexts.

# 2. Object Context
### Explanation
When a function is called as an **object method**, `this` usually refers to the object before the dot.
### Example
```js 
const user = {
    name: "Vaishu",
    showName() {
        console.log(this.name);
    }
};
user.showName();
```
### Output
```text
Vaishu
```
Here:
```js 
user.showName();
```
means:
```text 
this → user
```
So:
```js
this.name
```
is equivalent to:
```js 
user.name
```
# 3. `this` Depends on the Call Site
Consider:
```js 
const user = {
    name: "Vaishu",
    showName() {
        console.log(this.name);
    }
};
user.showName();
```
`this` is `user`.
But if we extract the method:
```js 
const show = user.showName;
show();
```
it is no longer being called as:
```js 
user.showName();
```
Therefore, `this` changes.
In strict mode, it becomes:
```text
undefined
```
This demonstrates the important rule:
> **Look at how the function is called to determine `this`.**

# 4. Function Context
### Regular Function
For a normal function, `this` depends on the calling context.
```js 
"use strict";
function showThis() {
    console.log(this);
}
showThis();
```
Output:
```text
undefined
```
Because the function is called without an object.
### Non-Strict Function
In non-strict browser code:
```js 
function showThis() {
    console.log(this);
}
showThis();
```
`this` may refer to the global object.
This is one reason modern JavaScript generally prefers strict mode/module code.
# 5. Function Called as an Object Method
```js 
const employee = {
    name: "Vaishu",
    display() {
        console.log(this.name);
    }
};
employee.display();
```
Here:
```text 
this → employee
```
Output:
```text
Vaishu
```
# 6. Function Called with `new`
When a function is used as a constructor with `new`, `this` refers to the newly created object.
```js 
function User(name) {
    this.name = name;
}
const user = new User("Vaishu");
console.log(user.name);
```
Output:
```text
Vaishu
```
Conceptually:
```text
new User("Vaishu")
        ↓
new object created
        ↓
this → new object
        ↓
this.name = "Vaishu"
```
# 7. Class Context
Inside a class method, `this` normally refers to the **instance on which the method was called**.
```js 
class User {
    constructor(name) {
        this.name = name;
    }
    display() {
        console.log(this.name);
    }
}
const user = new User("Vaishu");
user.display();
```
### Output
```text 
Vaishu
```
Here:
```text
user.display()
      ↓
this → user
```
# 8. `this` in a Class Constructor
```js 
class Employee {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }
}
const employee = new Employee(
    "Vaishu",
    "AI Engineer"
);
console.log(employee.name);
console.log(employee.role);
```
Output:
```text
Vaishu
AI Engineer
```
Here `this` refers to the newly created `employee` object.
# 9. Arrow Functions and `this`
Arrow functions are special.
They **do not have their own `this`**.
Instead, they inherit `this` from their surrounding lexical context.
### Example
```js 
const user = {
    name: "Vaishu",
    showName() {
        const printName = () => {
            console.log(this.name);
        };
        printName();
    }
};
user.showName();
```
### Output
```text 
Vaishu
```
The arrow function gets `this` from `showName()`.
# 10. Regular Function vs Arrow Function
Compare:
### Regular function
```js 
const user = {
    name: "Vaishu",
    showName() {
        function printName() {
            console.log(this.name);
        }
        printName();
    }
};
```
The inner regular function gets its own `this` based on how it is called.
### Arrow function
```js
const user = {
    name: "Vaishu",
    showName() {
        const printName = () => {
            console.log(this.name);
        };
        printName();
    }
};
```
The arrow function inherits `this` from `showName()`.
### Easy Memory
```text 
Regular function
→ gets its own `this`
Arrow function
→ does NOT create its own `this`
→ inherits surrounding `this`
```

# 11. `call()`
### Explanation
`call()` allows you to **explicitly set `this`** when calling a function.
### Syntax
```js
functionName.call(thisValue, arg1, arg2);
```
### Example
```js 
const user1 = {
    name: "Vaishu"
};
const user2 = {
    name: "Priya"
};
function greet(role) {
    console.log(`${this.name} is a ${role}`);
}
greet.call(user1, "Developer");
greet.call(user2, "Tester");
```
### Output
```text 
Vaishu is a Developer
Priya is a Tester
```
`call()` executes the function **immediately**.
# 12. `apply()`
### Explanation
`apply()` is almost the same as `call()`.
The main difference is how arguments are passed.
### `call()`
Arguments are passed individually:
```js
greet.call(user1, "Developer");
```
### `apply()`
Arguments are passed as an array:
```js 
greet.apply(user1, ["Developer"]);
```
### Example
```js 
const user = {
    name: "Vaishu"
};
function introduce(role, company) {
    console.log(
        `${this.name} is a ${role} at ${company}`
    );
}
introduce.apply(
    user,
    ["AI Engineer", "Tech Solutions"]
);
```
### Output
```text
Vaishu is a AI Engineer at Tech Solutions
```
# 13. `call()` vs `apply()`

| Feature              | `call()`          | `apply()`            |
| -------------------- | ----------------- | -------------------- |
| Sets `this`          | Yes               | Yes                  |
| Executes immediately | Yes               | Yes                  |
| Arguments            | Individual        | Array/array-like     |
| Syntax               | `call(obj, a, b)` | `apply(obj, [a, b])` |

```text 
call  → comma-separated arguments
apply → array of arguments
```
# 14. `bind()`
### Explanation
`bind()` creates a **new function** with `this` permanently bound to the specified object.
Unlike `call()` and `apply()`, `bind()` does **not immediately execute** the function.
### Syntax
```js 
const newFunction = functionName.bind(object);
```
### Example
```js 
const user = {
    name: "Vaishu"
};
function greet() {
    console.log(`Hello ${this.name}`);
}
const boundGreet = greet.bind(user);
boundGreet();
```
### Output
```text 
Hello Vaishu
```
Flow:
```text 
greet
 ↓
bind(user)
 ↓
new function
 ↓
boundGreet()
 ↓
this → user
```
# 15. `bind()` with Arguments
`bind()` can also pre-set arguments.
```js
function introduce(role, company) {
    console.log(
        `${this.name} is a ${role} at ${company}`
    );
}
const user = {
    name: "Vaishu"
};
const introduceVaishu =
    introduce.bind(
        user,
        "AI Engineer"
    );
introduceVaishu("Tech Solutions");
```
Output:
```text 
Vaishu is a AI Engineer at Tech Solutions
```
Here:
```js 
"AI Engineer"
```
was pre-filled using `bind()`.

# 16. `call`, `apply`, and `bind` Together
```js
const user = {
    name: "Vaishu"
};
function greet(role, company) {
    console.log(
        `${this.name} - ${role} - ${company}`
    );
}
```
### `call()`
```js 
greet.call(
    user,
    "Developer",
    "ABC"
);
```
### `apply()`
```js
greet.apply(
    user,
    ["Developer", "ABC"]
);
```
### `bind()`
```js 
const boundGreet =
    greet.bind(
        user,
        "Developer",
        "ABC"
    );
boundGreet();
```
All produce:
```text 
Vaishu - Developer - ABC
```
But their behavior differs:
```text 
call
→ execute now
→ arguments separately
apply
→ execute now
→ arguments as array
bind
→ return new function
→ execute later
```
Now the method's `this` is explicitly bound to the `Counter` instance.

| Concept             | `this` behavior                                     |
| ------------------- | --------------------------------------------------- |
| Global script       | Usually global object (`window` in browser scripts) |
| ES module top level | `undefined`                                         |
| Object method       | Object before `.`                                   |
| Regular function    | Depends on call; `undefined` in strict mode         |
| `new`               | Newly created object                                |
| Class method        | Instance when called as an instance method          |
| Arrow function      | Inherits surrounding `this`                         |
| `call()`            | Explicitly sets `this`, executes immediately        |
| `apply()`           | Explicitly sets `this`, arguments as array          |
| `bind()`            | Creates a new function with bound `this`            |

```text 
call()
→ calls function now

apply()
→ calls function now

bind()
→ returns a new function
→ call it later
```
# 28_Higher Order Functions
These concepts are important because JavaScript heavily uses **functions as values**. They are commonly used with arrays, APIs, event handlers, and asynchronous operations.
# 1. Callback Functions
### Explanation
A **callback function** is a function passed as an argument to another function, which can then execute it.
### Syntax
```js
function mainFunction(callback) {
    callback();
}
```
### Simple Example
```js
function greet(name, callback) {
    console.log(`Hello ${name}`);
    callback();
}
function finished() {
    console.log("Task completed");
}
greet("Vaishu", finished);
```
### Output
```text
Hello Vaishu
Task completed
```
Here:
```js
finished
```
is the callback function.
### Technical Real-Time Use
Callbacks are commonly used for:
* event handling
* asynchronous operations
* array methods
* timers
Example:
```js
setTimeout(() => {
    console.log("Data loaded");
}, 2000);
```
The arrow function passed to `setTimeout()` is a callback.
# 2. `forEach()`
### Explanation
`forEach()` executes a callback function **once for every element** in an array.
### Syntax

```js
array.forEach(function(element) {
    // code
});
```
### Example
```js
const users = ["Vaishu", "Priya", "Anu"];
users.forEach(user => {
    console.log(user);
});
```
### Output
```text
Vaishu
Priya
Anu
```
### With Index
```js
const users = ["Vaishu", "Priya", "Anu"];
users.forEach((user, index) => {
    console.log(index, user);
});
```
Output:
```text
0 Vaishu
1 Priya
2 Anu
```
### Technical Real-Time Use
Display notifications:
```js
const notifications = [
    "New message",
    "Payment received",
    "Order shipped"
];
notifications.forEach(notification => {
    console.log(`Notification: ${notification}`);
});
```
### Important
`forEach()` is mainly used when you want to **perform an action for each element**.
It does not create a new transformed array.
# 3. `map()`
### Explanation
`map()` creates a **new array** by applying a function to every element.
### Syntax
```js
const newArray = array.map(element => {
    return transformedValue;
});
```
### Example
```js
const prices = [100, 200, 300];
const updatedPrices = prices.map(price => {
    return price * 2;
});
console.log(updatedPrices);
```
### Output
```text
[200, 400, 600]
```
Original array:
```text
[100, 200, 300]
```
New array:
```text
[200, 400, 600]
```
### Technical Real-Time Use
Suppose an API returns products and you want to extract their names:
```js
const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 30000 },
    { id: 3, name: "Tablet", price: 20000 }
];
const productNames = products.map(product => {
    return product.name;
});
console.log(productNames);
```
Output:
```text
["Laptop", "Phone", "Tablet"]
```
### Easy Memory
```text
map()
→ transform every element
→ returns a new array
```
# 4. `filter()`
### Explanation
`filter()` creates a **new array containing only the elements that satisfy a condition**.
### Syntax
```js
const result = array.filter(element => {
    return condition;
});
```
### Example
```js
const prices = [500, 1500, 300, 2000, 800];
const expensiveProducts = prices.filter(price => {
    return price > 1000;
});
console.log(expensiveProducts);
```
### Output
```text
[1500, 2000]
```
### Technical Real-Time Use
Filter active users:
```js
const users = [
    { name: "Vaishu", active: true },
    { name: "Priya", active: false },
    { name: "Anu", active: true }
];
const activeUsers = users.filter(user => {
    return user.active;
});
console.log(activeUsers);
```
Output:
```text
[
    { name: "Vaishu", active: true },
    { name: "Anu", active: true }
]
```
### Easy Memory
```text
filter()
→ select elements
→ returns a new array
```
# 5. `reduce()`
### Explanation
`reduce()` processes all elements and produces **one final accumulated value**.
That value can be:
* number
* string
* object
* array
* any other JavaScript value
### Syntax
```js
const result = array.reduce((accumulator, currentValue) => {
    return updatedAccumulator;
}, initialValue);
```
## Simple Example
```js
const numbers = [10, 20, 30, 40];
const total = numbers.reduce((sum, number) => {
    return sum + number;
}, 0);
console.log(total);
```
### Output
```text
100
```
Flow:
```text
sum = 0
0 + 10 = 10
10 + 20 = 30
30 + 30 = 60
60 + 40 = 100
```
# 6. `reduce()` Real-Time Example
Calculate a shopping cart total:
```js
const cart = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2000 }
];
const total = cart.reduce((sum, product) => {
    return sum + product.price;
}, 0);
console.log(`Total: ₹${total}`);
```
### Output
```text
Total: ₹53000
```
### Easy Memory
```text
reduce()
→ combine all elements
→ produce one result
```
# 7. `map()` vs `filter()` vs `reduce()`
This is an important interview comparison.

| Method      | Purpose                  | Returns                  |
| ----------- | ------------------------ | ------------------------ |
| `map()`     | Transform each element   | New array                |
| `filter()`  | Select matching elements | New array                |
| `reduce()`  | Combine elements         | Single accumulated value |
| `forEach()` | Perform an action        | `undefined`              |

### Example
Given:
```js
const numbers = [1, 2, 3, 4, 5];
```
### `map()`
```js
numbers.map(n => n * 2);
```
Result:
```text
[2, 4, 6, 8, 10]
```
### `filter()`
```js
numbers.filter(n => n > 3);
```
Result:
```text
[4, 5]
```
### `reduce()`
```js
numbers.reduce((sum, n) => sum + n, 0);
```
Result:
```text
15
```
### `forEach()`
```js
numbers.forEach(n => console.log(n));
```
Prints each value but does not create a new array.
# 8. Callback Parameters
These methods can receive multiple callback parameters.
```js
const users = ["Vaishu", "Priya", "Anu"];
users.map((user, index, array) => {
    console.log(user);
    console.log(index);
    console.log(array);
});
```
The callback can receive:
```text
element
index
array
```
For `reduce()`, the parameters are different:
```js
array.reduce((accumulator, currentValue, index, array) => {
    // ...
}, initialValue);
```
The most important ones are:
```text
accumulator
currentValue
```
# 9. Chaining Array Methods
You can combine these methods.
### Example
```js
const prices = [500, 1200, 300, 2000, 800];
const total = prices
    .filter(price => price > 500)
    .map(price => price * 2)
    .reduce((sum, price) => sum + price, 0);
console.log(total);
```
### Flow
```text
Original
[500, 1200, 300, 2000, 800]

       ↓ filter > 500

[1200, 2000, 800]

       ↓ map × 2

[2400, 4000, 1600]

       ↓ reduce
8000
```
### Output
```text
8000
```
This pattern is very common when processing API data.
# 10. Function Returning a Function
### Explanation
JavaScript functions can return other functions because **functions are first-class values**.
### Example
```js
function createGreeting() {
    return function () {
        console.log("Hello Vaishu");
    };
}
const greet = createGreeting();
greet();
```
### Output
```text
Hello Vaishu
```
Flow:
```text
createGreeting()
       ↓
returns function
       ↓
greet
       ↓
greet()
```
# 11. Function Returning a Function with Parameters
```js
function createMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    };
}
const double = createMultiplier(2);
const triple = createMultiplier(3);
console.log(double(5));
console.log(triple(5));
```
### Output
```text
10
15
```
The returned function remembers the `multiplier`.
This is an example of a **closure**.
```text
createMultiplier(2)
        ↓
 multiplier = 2
        ↓
returned function remembers 2
```
# 12. Real-Time Use: Function Factory
Suppose an application needs different discount functions.
```js
function createDiscount(discount) {
    return function (price) {
        return price - (price * discount / 100);
    };
}
const studentDiscount = createDiscount(10);
const festivalDiscount = createDiscount(20);
console.log(studentDiscount(1000));
console.log(festivalDiscount(1000));
```
### Output
```text
900
800
```
Instead of writing separate functions for every discount type, we create functions dynamically.
# 13. Callback + `map()` Example
```js
const users = [
    { name: "Vaishu", age: 22 },
    { name: "Priya", age: 23 },
    { name: "Anu", age: 21 }
];
const names = users.map(function(user) {
    return user.name;
});
console.log(names);
```
Here:
```js
function(user) {
    return user.name;
}
```
is a **callback function** passed to `map()`.
Output:
```text
["Vaishu", "Priya", "Anu"]
```
# 14. Callback + `filter()` + `reduce()`
A practical example:
```js
const employees = [
    { name: "Vaishu", salary: 60000, active: true },
    { name: "Priya", salary: 50000, active: false },
    { name: "Anu", salary: 70000, active: true }
];
const totalSalary = employees
    .filter(employee => employee.active)
    .reduce((total, employee) => {
        return total + employee.salary;
    }, 0);
console.log(totalSalary);
```
### Output
```text
130000
```
Flow:
```text
Employees
    ↓
filter()
    ↓
Active employees
    ↓
reduce()
    ↓
Total salary
```
# 15. Important Difference: `forEach()` vs `map()`
This is frequently asked in interviews.
### `forEach()`
```js
const numbers = [1, 2, 3];
const result = numbers.forEach(n => n * 2);
console.log(result);
```
Output:
```text
undefined
```
`forEach()` does not create a transformed array.
### `map()`
```js
const numbers = [1, 2, 3];
const result = numbers.map(n => n * 2);
console.log(result);
```
Output:
```text
[2, 4, 6]
```
```text
forEach → "Do something"
map     → "Transform"
filter  → "Select"
reduce  → "Combine"
```

| Concept                     | Main Purpose                        | Returns           |
| --------------------------- | ----------------------------------- | ----------------- |
| Callback                    | Function passed to another function | Depends on caller |
| `forEach()`                 | Execute for every element           | `undefined`       |
| `map()`                     | Transform elements                  | New array         |
| `filter()`                  | Select elements                     | New array         |
| `reduce()`                  | Accumulate/combine                  | Single value      |
| Function returning function | Create specialized functions        | Function          |

### Note
```text
forEach()
→ perform an action

map()
→ transform every item

filter()
→ keep matching items

reduce()
→ combine into one result

callback
→ function passed to another function

function returning function
→ function factory / closure
```
# 29_Functional Programming Concepts
These are important **functional programming concepts** in JavaScript. They help make code predictable, reusable, testable, and easier to maintain.
## 1. Pure Functions
### Explanation
A **pure function** is a function that:
1. Gives the **same output for the same input**
2. Does **not modify anything outside the function** (no side effects)
### Syntax
```js
function functionName(input) {
    return result;
}
```
### Simple Example
```js
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));
console.log(add(10, 20));
```
### Output
```text
30
30
```
The same inputs always produce the same output.
### Impure Function
```js
let total = 100;
function addAmount(amount) {
    total += amount;
    return total;
}
```
This is **impure** because it modifies the external variable `total`.
### Technical Real-Time Use
Suppose an e-commerce application calculates a discount.
```js
function calculateDiscount(price, discount) {
    return price - (price * discount / 100);
}
console.log(calculateDiscount(1000, 10));
```
Output:
```text
900
```
The function doesn't modify external data.
### Important
```text
Pure Function
    ↓
Same input
    ↓
Same output
    ↓
No side effects
```
Common side effects include:
* modifying global variables
* modifying input objects
* changing the DOM
* API calls
* writing to files
* `console.log()` in strict functional-programming definitions


# 2. Immutability
### Explanation
**Immutability** means **not changing existing data after it has been created**.
Instead of modifying the original data, create a **new value**.
### Mutable Example
```js
const user = {
    name: "Vaishu",
    age: 22
};
user.age = 23;
console.log(user);
```
The original object was modified.
### Immutable Approach
```js
const user = {
    name: "Vaishu",
    age: 22
};
const updatedUser = {
    ...user,
    age: 23
};
console.log(user);
console.log(updatedUser);
```
Output:
```text
{ name: "Vaishu", age: 22 }
{ name: "Vaishu", age: 23 }
```
The original `user` remains unchanged.
### Arrays
Mutable:
```js
const numbers = [10, 20, 30];
numbers.push(40);
console.log(numbers);
```
Immutable:
```js
const numbers = [10, 20, 30];
const updatedNumbers = [...numbers, 40];
console.log(numbers);
console.log(updatedNumbers);
```
Output:
```text
[10, 20, 30]
[10, 20, 30, 40]
```
### Technical Real-Time Use
In frontend applications, especially React, instead of modifying state directly:
```js
user.name = "Vaishu";
```
create updated state:
```js
const updatedUser = {
    ...user,
    name: "Vaishu"
};
```
This makes changes easier to track.
### Important
`const` **does not mean immutable**.
```js
const user = {
    name: "Vaishu"
};
user.name = "Priya"; // Allowed
```
`const` prevents reassignment of the variable, not modification of the object's contents.
# 3. Function Composition
### Explanation
**Function composition** means combining multiple small functions so that the **output of one function becomes the input of another function**.
For example:
```text
Input
 ↓
Function A
 ↓
Function B
 ↓
Function C
 ↓
Output
```
### Simple Example
```js
function double(number) {
    return number * 2;
}
function addTen(number) {
    return number + 10;
}
const result = addTen(double(5));
console.log(result);
```
Output:
```text
20
```
Flow:
```text
5
↓
double(5)
↓
10
↓
addTen(10)
↓
20
```
### Creating a Composition Function
```js
function compose(function1, function2) {
    return function(value) {
        return function1(function2(value));
    };
}
function double(number) {
    return number * 2;
}
function addTen(number) {
    return number + 10;
}
const process = compose(addTen, double);
console.log(process(5));
```
Output:
```text
20
```
### Technical Real-Time Use
Suppose we need to process a user's name:
```js
function trimName(name) {
    return name.trim();
}
function convertToUpperCase(name) {
    return name.toUpperCase();
}
function addWelcome(name) {
    return `Welcome, ${name}!`;
}
const result = addWelcome(
    convertToUpperCase(
        trimName("   Vaishu   ")
    )
);
console.log(result);
```
Output:
```text
Welcome, VAISHU!
```
The functions are combined into a processing pipeline.
### Easy Memory
```text
Composition = Function + Function + Function
```
# 4. Currying
### Explanation
**Currying** means converting a function that takes **multiple arguments** into a sequence of functions that each take **one argument**.
Normal function:
```js
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));
```
Curried version:
```js
function add(a) {
    return function(b) {
        return a + b;
    };
}
console.log(add(10)(20));
```
Output:
```text
30
```
### Flow
```text
add(10)
   ↓
returns function
   ↓
(20)
   ↓
30
```
### Arrow Function Version
```js
const add = a => b => a + b;
console.log(add(10)(20));
```
Output:
```text
30
```
## Technical Real-Time Use
Suppose an application has different discount types.
Instead of repeatedly passing the discount:
```js
function calculatePrice(discount, price) {
    return price - (price * discount / 100);
}
console.log(calculatePrice(10, 1000));
console.log(calculatePrice(10, 2000));
```
We can curry it:
```js
function createDiscount(discount) {
    return function(price) {
        return price - (price * discount / 100);
    };
}
const studentDiscount = createDiscount(10);
console.log(studentDiscount(1000));
console.log(studentDiscount(2000));
```
Output:
```text
900
1800
```
Here:
```js
const studentDiscount = createDiscount(10);
```
creates a reusable function that remembers the `10%` discount.
This works using **closures**.

# Pure Functions vs Immutability vs Composition vs Currying

| Concept           | Meaning                                                | Main Purpose                   |
| ----------------- | ------------------------------------------------------ | ------------------------------ |
| **Pure Function** | Same input → same output, no side effects              | Predictable code               |
| **Immutability**  | Don't modify existing data                             | Safe state/data handling       |
| **Composition**   | Combine functions together                             | Build reusable pipelines       |
| **Currying**      | Convert multi-argument function into chained functions | Reusability and specialization |

# Combined Real-Time Example
These concepts can work together:
```js
const products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 30000 }
];
// Pure function
function applyDiscount(discount) {
    return function(product) {
        return {
            ...product,
            price: product.price - (product.price * discount / 100)
        };
    };
}
// Pure function
function addTax(tax) {
    return function(product) {
        return {
            ...product,
            price: product.price + (product.price * tax / 100)
        };
    };
}
const discount10 = applyDiscount(10);
const tax18 = addTax(18);
const updatedProducts = products
    .map(discount10)
    .map(tax18);
console.log(updatedProducts);
console.log(products);
```
Here:
* `applyDiscount()` → **currying**
* `addTax()` → **currying**
* Functions don't modify the original product → **immutability**
* Each function produces predictable results → **pure functions**
* `.map(discount10).map(tax18)` → **composition/pipeline style**
### Note
```text
Pure Function   → Don't cause side effects
Immutability    → Don't change original data
Composition     → Combine functions
Currying        → One argument at a time
```
 # 30_Regular Expessions
A **Regular Expression (Regex)** is a pattern used to **search, validate, extract, or replace text**.
For example, regex can be used to check:

* email format
* phone numbers
* passwords
* usernames
* specific words
* numbers inside text
## 1. Regex Syntax
### Explanation
There are two common ways to create a regular expression.
### Syntax 1: Regex Literal
```js
/pattern/flags
```
Example:
```js
const pattern = /hello/;
```
This searches for the word `hello`.
### Syntax 2: `RegExp` Constructor
```js
const pattern = new RegExp("pattern", "flags");
```
Example:
```js
const pattern = new RegExp("hello", "i");
```
### Simple Example
```js
const pattern = /javascript/;
console.log(pattern.test("I am learning javascript"));
```
Output:
```text
true
```
# 2. Regex Flags
Flags change how the regex behaves.
### Common Flags

| Flag | Meaning                   | Example  |
| ---- | ------------------------- | -------- |
| `g`  | Global — find all matches | `/cat/g` |
| `i`  | Case-insensitive          | `/cat/i` |
| `m`  | Multiline                 | `/cat/m` |
| `s`  | Dot matches newline       | `/cat/s` |
| `u`  | Unicode mode              | `/😊/u`  |
| `y`  | Sticky matching           | `/cat/y` |

### `g` — Global
Without `g`:
```js
const pattern = /cat/;
```
It finds only the first occurrence for operations such as `match()` and `replace()`.
With `g`:
```js
const pattern = /cat/g;
```
It finds all occurrences.
### `i` — Case Insensitive
```js
const pattern = /hello/i;
console.log(pattern.test("HELLO"));
```
Output:
```text
true
```
### Combining Flags
Flags can be combined:
```js
const pattern = /hello/gi;
```
Meaning:
```text
g → find all
i → ignore uppercase/lowercase
```
# 3. `test()`
### Explanation
`test()` checks whether a string contains a match for the regex.
It returns:
```text
true
```
or
```text
false
```
### Syntax
```js
regex.test(string);
```
### Example
```js
const pattern = /javascript/i;
console.log(pattern.test("I am learning JavaScript"));
```
Output:
```text
true
```
### Invalid Example
```js
const pattern = /python/i;
console.log(pattern.test("I am learning JavaScript"));
```
Output:
```text
false
```
### Technical Real-Time Use
Checking whether a username contains only letters:
```js
const usernamePattern = /^[A-Za-z]+$/;
console.log(usernamePattern.test("Vaishu"));
console.log(usernamePattern.test("Vaishu123"));
```
Output:
```text
true
false
```
### Important
`test()` is mainly useful when you only need:
> **Does it match or not?**
# 4. `match()`
### Explanation
`match()` searches a string using a regex and returns the matching results.
It is a **String method**.
### Syntax
```js
string.match(regex);
```
### Example
```js
const text = "I like JavaScript";
const result = text.match(/JavaScript/);
console.log(result);
```
The result contains information about the match.
### Using `g`
```js
const text = "JavaScript is powerful. JavaScript is popular.";
const result = text.match(/JavaScript/g);
console.log(result);
```
Output:
```text
["JavaScript", "JavaScript"]
```
Without `g`, you get the first match plus match metadata.
### Technical Real-Time Use
Extract all numbers from a message:
```js
const message = "Order 101 contains 3 products costing 5000";
const numbers = message.match(/\d+/g);
console.log(numbers);
```
Output:
```text
["101", "3", "5000"]
```
Here:
```regex
\d+
```
means one or more digits.
# 5. `replace()`
### Explanation
`replace()` finds matching text and replaces it with another value.
It is a **String method**.
### Syntax
```js
string.replace(regex, replacement);
```
### Simple Example
```js
const message = "Hello Vaishu";
const result = message.replace(/Vaishu/, "Developer");
console.log(result);
```
Output:
```text
Hello Developer
```
### Replacing All Matches
Without `g`:
```js
const text = "cat cat cat";
console.log(text.replace(/cat/, "dog"));
```
Output:
```text
dog cat cat
```
With `g`:
```js
const text = "cat cat cat";
console.log(text.replace(/cat/g, "dog"));
```
Output:
```text
dog dog dog
```
### Technical Real-Time Use
Remove unnecessary spaces:
```js
const username = "Vaishu    Sri";
const result = username.replace(/\s+/g, " ");
console.log(result);
```
Output:
```text
Vaishu Sri
```
Here:
```regex
\s+
```
means one or more whitespace characters.
# 6. `exec()`
### Explanation
`exec()` searches for a match and returns a **match object** containing detailed information.
It is a **RegExp method**.
### Syntax
```js
regex.exec(string);
```
### Example
```js
const pattern = /JavaScript/;
const result = pattern.exec("I am learning JavaScript");
console.log(result);
```
The returned object contains information such as:
```text
match
index
input
groups
```
For example, the matched text is:
```js
console.log(result[0]);
```
Output:
```text
JavaScript
```
### Getting Match Position
```js
const pattern = /JavaScript/;
const result = pattern.exec("I am learning JavaScript");
console.log(result[0]);
console.log(result.index);
```
Output:
```text
JavaScript
15
```
`index` tells us where the match starts.
# 7. `exec()` with Capturing Groups
One useful feature of `exec()` is extracting specific parts of a match.
```js
const pattern = /Name: (\w+), Age: (\d+)/;
const result = pattern.exec("Name: Vaishu, Age: 22");
console.log(result[1]);
console.log(result[2]);
```
Output:
```text
Vaishu
22
```
Here:
```regex
(\w+)
```
captures the name.
```regex
(\d+)
```
captures the age.
# 8. `test()` vs `match()` vs `replace()` vs `exec()`

| Method      | Belongs to | Purpose                      | Returns               |
| ----------- | ---------- | ---------------------------- | --------------------- |
| `test()`    | RegExp     | Check whether pattern exists | `true/false`          |
| `match()`   | String     | Find matches                 | Array / `null`        |
| `replace()` | String     | Replace matches              | New string            |
| `exec()`    | RegExp     | Detailed match information   | Match object / `null` |

```text
test()     → Does it match?
match()    → What matches?
replace()  → Change the match
exec()     → Give detailed match information
```
# 9. Real-Time Example — Form Validation
Suppose a registration form asks for a username.
```js
const username = "Vaishu123";
const usernamePattern = /^[A-Za-z]+$/;
if (usernamePattern.test(username)) {
    console.log("Valid username");
} else {
    console.log("Username should contain only letters");
}
```
Output:
```text
Username should contain only letters
```
Here:
```regex
^
```
means start of string.
```regex
[A-Za-z]+
```
means one or more letters.
```regex
$
```
means end of string.
So the **entire username** must contain only letters.
```text
Regex Syntax
/pattern/flags
Flags
g → global
i → case-insensitive
m → multiline
s → dot matches newline
u → Unicode
y → sticky
Methods
test()    → true / false
match()   → find matches
replace() → replace matches
exec()    → detailed match information
```
**Note:** `test()` and `exec()` are methods of the **RegExp object**, while `match()` and `replace()` are methods of the **String object**.

 # 31_Error Handling
These concepts are useful when building real applications because they help you create **meaningful errors, pass errors through functions, and identify where an error happened**.
## 1. Custom Errors
### Explanation
A **custom error** is an error that you create for a specific situation in your application.
JavaScript already provides errors such as:
```text
Error
TypeError
ReferenceError
SyntaxError
RangeError
```
But in real applications, you may want errors such as:
```text
InsufficientBalanceError
InvalidUserError
PaymentError
AuthenticationError
```
### Syntax
```js
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}
```
### Simple Example
```js
class InsufficientBalanceError extends Error {
    constructor(message) {
        super(message);
        this.name = "InsufficientBalanceError";
    }
}
function withdraw(balance, amount) {
    if (amount > balance) {
        throw new InsufficientBalanceError(
            "Insufficient balance"
        );
    }

    return balance - amount;
}
try {
    console.log(withdraw(5000, 7000));
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}
```
### Output
```text
InsufficientBalanceError
Insufficient balance
```
### Why `super()`?
```js
super(message);
```
calls the parent `Error` constructor and sets the error message.
Since our class extends `Error`:
```js
class InsufficientBalanceError extends Error
```
we use `super()` to initialize the parent `Error`.
### Technical Real-Time Use
In an online shopping application:
```js
class PaymentError extends Error {
    constructor(message) {
        super(message);
        this.name = "PaymentError";
    }
}
function processPayment(amount) {
    if (amount <= 0) {
        throw new PaymentError("Invalid payment amount");
    }

    return "Payment successful";
}
try {
    console.log(processPayment(-500));
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}
```
Output:
```text
PaymentError
Invalid payment amount
```
This makes it easier for the application to distinguish payment errors from other errors.
# 2. Error Propagation
### Explanation
**Error propagation** means an error moves from the function where it occurs to the **calling function** until something handles it.
Consider:
```text
Function A
   ↓ calls
Function B
   ↓ calls
Function C
   ↓
Error occurs
   ↓
C cannot handle
   ↓
B cannot handle
   ↓
A handles error
```
### Example
```js
function functionC() {
    throw new Error("Something went wrong");
}
function functionB() {
    functionC();
}
function functionA() {
    functionB();
}
try {
    functionA();
} catch (error) {
    console.log("Error handled:", error.message);
}
```
Output:
```text
Error handled: Something went wrong
```
### What happened?
```text
functionA()
    ↓
functionB()
    ↓
functionC()
    ↓
throw Error
    ↓
functionC doesn't catch
    ↓
functionB doesn't catch
    ↓
functionA doesn't catch
    ↓
try...catch handles it
```
This movement of the error is called **error propagation**.
## Handling Error at Different Levels
An error can be caught inside the function where it happens:
```js
function functionC() {
    try {
        throw new Error("Database error");
    } catch (error) {
        console.log("Handled in C");
    }
}
```
Or it can propagate upward:
```js
function functionC() {
    throw new Error("Database error");
}
function functionB() {
    functionC();
}
try {
    functionB();
} catch (error) {
    console.log("Handled outside");
}
```
### Technical Real-Time Example
Imagine:
```text
UI
 ↓
Login function
 ↓
API function
 ↓
Database
```
If the API function encounters an error:
```js
async function getUser() {
    throw new Error("User not found");
}
async function login() {
    const user = await getUser();
    return user;
}
async function handleLogin() {
    try {
        const user = await login();
        console.log(user);
    } catch (error) {
        console.log("Login failed:", error.message);
    }
}
handleLogin();
```
Output:
```text
Login failed: User not found
```
The error propagated from:
```text
getUser()
    ↓
login()
    ↓
handleLogin()
    ↓
catch
```
# 3. Stack Traces
### Explanation
A **stack trace** shows the sequence of function calls that led to an error.
It helps developers answer:
> **Where did the error happen, and which functions called it?**
### Example
```js
function first() {
    second();
}
function second() {
    third();
}
function third() {
    throw new Error("Something went wrong");
}
first();
```
The console may show something similar to:
```text
Error: Something went wrong
    at third (...)
    at second (...)
    at first (...)
```
The exact file names and line numbers depend on where the code runs.
### Reading the Stack
```text
Error: Something went wrong
    at third()
    at second()
    at first()
```
Means:
```text
first()
  ↓
second()
  ↓
third()
  ↓
ERROR
```
So the stack trace tells you the **call path**.
## Accessing `.stack`
```js
try {
    throw new Error("Payment failed");
} catch (error) {
    console.log(error.stack);
}
```
Output will contain something similar to:
```text
Error: Payment failed
    at ...
    at ...
```
The stack usually contains:
* error type
* error message
* function names
* file/location information
* line/column information where supported
# 4. Custom Error + Propagation + Stack Trace
These concepts can be combined.
```js
class PaymentError extends Error {
    constructor(message) {
        super(message);
        this.name = "PaymentError";
    }
}
function validatePayment(amount) {
    if (amount <= 0) {
        throw new PaymentError("Invalid payment amount");
    }
}
function processOrder(amount) {
    validatePayment(amount);
    return "Order processed";
}
function placeOrder(amount) {
    return processOrder(amount);
}
try {
    placeOrder(-500);
} catch (error) {
    console.log("Name:", error.name);
    console.log("Message:", error.message);
    console.log("Stack:", error.stack);
}
```
### Flow
```text
placeOrder()
      ↓
processOrder()
      ↓
validatePayment()
      ↓
PaymentError
      ↓
propagates upward
      ↓
catch
      ↓
name + message + stack
```
# 5. `throw` vs `try...catch`
### `throw`
Used to **create/raise an error**.
```js
throw new Error("Invalid data");
```
### `try...catch`
Used to **handle an error**.
```js
try {
    riskyOperation();
} catch (error) {
    console.log(error.message);
}
```
So:
```text
throw      → raises error
catch      → handles error
propagation → moves error upward
stack      → shows where it came from
```
# 6. `instanceof` with Custom Errors
You can check what type of error occurred.
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
    } else {
        console.log("Handle general error");
    }
}
```
Output:
```text
Handle payment error
```
This is useful when an application has different error types.

| Concept               | Meaning                                   |
| --------------------- | ----------------------------------------- |
| **Custom Error**      | Application-specific error type           |
| **`throw`**           | Raises an error                           |
| **Error Propagation** | Error moves up through calling functions  |
| **`catch`**           | Handles propagated error                  |
| **Stack Trace**       | Shows the call path that led to the error |
| **`instanceof`**      | Checks the error's type                   |

```text
Custom Error
    ↓
What type of problem?
throw
    ↓
Raise the problem
Propagation
    ↓
Move the problem upward
catch
    ↓
Handle the problem
stack
    ↓
Where did the problem happen?
```
**Note:** A stack trace is especially valuable in debugging because it preserves the chain of function calls leading to the error, not just the error message.

# 32_Event Loop and Concurrency
These concepts explain **how JavaScript handles asynchronous operations** even though JavaScript execution is generally single-threaded.
The main idea is the **Event Loop**.
```text
JavaScript Code
      ↓
  Call Stack
      ↓
   Web APIs
      ↓
 ┌───────────────┐
 │ Task Queue    │
 │ Microtask Q.  │
 └───────────────┘
      ↓
  Event Loop
      ↓
  Call Stack
      ↓
   Rendering
```
# 1. Call Stack
### Explanation
The **Call Stack** keeps track of the functions currently being executed.
JavaScript executes one stack frame at a time.
### Example
```js 
function first() {
    second();
}
function second() {
    console.log("Hello Vaishu");
}
first();
```
### Stack Flow
When `first()` runs:
```text
Call Stack
| second() |
| first()  |
| global   |
------------
```
`second()` finishes first:
```text 
| first() |
| global  |
----------
```
Then `first()` finishes:
```text 
| global |
---------
```
### Important
The Call Stack follows:
**LIFO — Last In, First Out**
The function added last is executed/removed first.
# 2. Web APIs
### Explanation
The **Web APIs** are browser-provided capabilities that JavaScript can use for operations such as:
* `setTimeout()`
* DOM events
* `fetch()`
* HTTP requests
* `addEventListener()`
* Geolocation
* Timers
These operations are handled by the **browser environment**, rather than being executed entirely on the JavaScript call stack.
### Example
```js 
console.log("Start");
setTimeout(() => {
    console.log("Timer finished");
}, 2000);
console.log("End");
```
Output:
```text
Start
End
Timer finished
```
### What happens?
```text 
console.log("Start")
       ↓
Call Stack
       ↓
"Start"
setTimeout()
       ↓
Browser Web API
       ↓
Timer starts
console.log("End")
       ↓
Call Stack
       ↓
"End"
After 2 seconds
       ↓
Task Queue
       ↓
Event Loop
       ↓
Call Stack
       ↓
"Timer finished"
```
The timer doesn't block the JavaScript code for two seconds.
# 3. Task Queue
### Explanation
The **Task Queue**, also called the **Macrotask Queue**, stores callbacks that are ready to execute after asynchronous operations such as:
* `setTimeout`
* `setInterval`
* certain DOM events
* some browser events
### Example
```js 
console.log("A");
setTimeout(() => {
    console.log("B");
}, 0);
console.log("C");
```
Output:
```text 
A
C
B
```
Even though the timer is `0ms`, `B` does not execute immediately.
Flow:
```text 
console.log("A")
     ↓
Call Stack
     ↓
A
setTimeout()
     ↓
Web API
     ↓
Task Queue

console.log("C")
     ↓
Call Stack
     ↓
C

Call Stack becomes empty
     ↓
Event Loop
     ↓
Task Queue
     ↓
B
```
### Important
`setTimeout(fn, 0)` means:
> Run the callback **as soon as it can be scheduled**, not immediately.
# 4. Microtasks
### Explanation
**Microtasks** are small asynchronous callbacks that have **higher priority than normal tasks**.
Common sources include:
* `Promise.then()`
* `Promise.catch()`
* `Promise.finally()`
* `queueMicrotask()`
* continuation after `await`
### Example
```js 
console.log("Start");
Promise.resolve().then(() => {
    console.log("Promise");
});
console.log("End");
```
Output:
```text 
Start
End
Promise
```
The Promise callback runs after the current synchronous code finishes.
# 5. Microtask vs Task Queue
This is a very important interview topic.
```js 
console.log("A");
setTimeout(() => {
    console.log("B");
}, 0);
Promise.resolve().then(() => {
    console.log("C");
});
console.log("D");
```
Output:
```text 
A
D
C
B
```
### Why?
Execution order:
```text 
1. A
2. D
3. Microtasks → C
4. Tasks → B
```
The Event Loop generally processes **microtasks before moving on to the next task**.
# 6. Event Loop
### Explanation
The **Event Loop** coordinates:
* Call Stack
* Task Queue
* Microtask Queue
* browser rendering opportunities
A simplified model:
```text 
             ┌──────────────┐
             │  Call Stack  │
             └──────┬───────┘
                    ↑
                    │
                Event Loop
                    │
          ┌─────────┴─────────┐
          ↓                   ↓
   Microtask Queue       Task Queue
```
### Basic Rule
The Event Loop checks whether the Call Stack is empty.
If it is empty:
```text 
1. Process microtasks
2. Rendering may happen at an appropriate opportunity
3. Take the next task
4. Repeat
```
The exact rendering/event-loop scheduling details are browser-dependent, so this is a useful conceptual model rather than a literal implementation diagram.
# 7. Microtasks Example with `async/await`
```js 
async function test() {
    console.log("B");
    await Promise.resolve();
    console.log("C");
}
console.log("A");
test();
console.log("D");
```
Output:
```text 
A
B
D
C
```
### Why?
Initially:
```text
A
```
Then `test()` starts:
```text
B
```
When execution reaches:
```js
await Promise.resolve();
```
the continuation after `await` is scheduled as a microtask.
The current synchronous code continues:
```text
D
```
Then the microtask runs:
```text
C
```
So:
```text
A → B → D → C
```
# 8. Rendering
### Explanation
The browser also needs to **render/update the webpage**.
Rendering can involve:
```text 
JavaScript
   ↓
Style calculation
   ↓
Layout
   ↓
Paint
   ↓
Display
```
For example, if JavaScript changes:
```js 
document.body.textContent = "Hello Vaishu";
```
the browser eventually needs to update what you see on screen.
### Important
JavaScript and rendering interact closely.
If JavaScript performs a huge amount of synchronous work:
```js 
for (let i = 0; i < 10000000000; i++) {
    // heavy work
}
```
the main thread can remain busy, preventing the browser from responding and rendering smoothly.
This can cause:
* frozen UI
* delayed clicks
* animation stuttering
* slow scrolling

# 9. Complete Example
```js
console.log("1");
setTimeout(() => {
    console.log("2 - Timer");
}, 0);
Promise.resolve().then(() => {
    console.log("3 - Promise");
});
console.log("4");
```
### Output
```text
1
4
3 - Promise
2 - Timer
```
### Execution
**Step 1 — Synchronous code**
```text 
console.log("1")
console.log("4")
```
Output:
```text
1
4
```
**Step 2 — Microtask**
```text 
Promise.then()
```
Output:
```text
3 - Promise
```
**Step 3 — Task**
```text 
setTimeout()
```
Output:
```text
2 - Timer
```
So the simplified order is:
```text 
Synchronous code
      ↓
Microtasks
      ↓
Rendering opportunity
      ↓
Next task
```
# 10. Real-Time Example — Button Click + API
Consider:
```js 
button.addEventListener("click", async () => {
    console.log("Button clicked");
    const response = await fetch("/api/users");
    const users = await response.json();
    console.log(users);
});
```
Conceptually:
```text 
User clicks button
       ↓
Browser event system
       ↓
Task Queue
       ↓
Event Loop
       ↓
Call Stack
       ↓
Click callback
       ↓
fetch()
       ↓
Web API / browser networking
       ↓
Network response
       ↓
Promise settlement
       ↓
Microtask
       ↓
Continue after await
       ↓
Update DOM
       ↓
Browser rendering
```
This is why the browser can continue handling other work while the network request is waiting.
# 11. Call Stack vs Web APIs vs Queues

| Component           | Purpose                                                  |
| ------------------- | -------------------------------------------------------- |
| **Call Stack**      | Executes JavaScript functions                            |
| **Web APIs**        | Browser-provided asynchronous capabilities               |
| **Task Queue**      | Holds ready task callbacks                               |
| **Microtask Queue** | Holds Promise/`await` continuations and other microtasks |
| **Event Loop**      | Coordinates when queued work can enter the Call Stack    |
| **Rendering**       | Updates what the user sees                               |

### What is the output?
```js 
console.log("Start");
setTimeout(() => {
    console.log("Timeout");
}, 0);
Promise.resolve().then(() => {
    console.log("Promise");
});
console.log("End");
```
### Answer
```text 
Start
End
Promise
Timeout
```

```text 
CALL STACK
   ↓
Execute synchronous JavaScript
   ↓
MICROTASKS
   ↓
Promises / await
   ↓
RENDERING OPPORTUNITY
   ↓
TASK
   ↓
setTimeout / events
   ↓
Repeat
```
**Note:**
> The Call Stack executes JavaScript, Web APIs handle browser-provided asynchronous work, completed callbacks enter task or microtask queues, and the Event Loop coordinates when they can execute; microtasks are processed before the next task, while the browser gets opportunities to render between pieces of work.

# 33_Memory Management
These concepts explain **how JavaScript manages memory** and why an application can become slow when unused objects remain reachable.
## 1. References
### Explanation
In JavaScript, objects and arrays are stored in memory, and variables hold **references** to those objects.
For example:
```js
const user = {
    name: "Vaishu",
    age: 22
};
```
Conceptually:
```text
user
 ↓
┌──────────────────┐
│ Object           │
│ name: "Vaishu"   │
│ age: 22           │
└──────────────────┘
```
The variable `user` refers to the object.
### Two Variables Can Refer to the Same Object
```js
const user1 = {
    name: "Vaishu"
};
const user2 = user1;
user2.name = "Priya";
console.log(user1.name);
```
Output:
```text
Priya
```
Why?
```text
user1 ──┐
        ↓
     Object
        ↑
user2 ──┘
```
Both variables reference the **same object**.
# 2. Reference vs Copy
### Primitive Values
Primitive values are copied by value.
```js
let a = 10;
let b = a;
b = 20;
console.log(a);
console.log(b);
```
Output:
```text
10
20
```
Changing `b` doesn't affect `a`.
### Objects
Objects behave differently:
```js
let user1 = {
    name: "Vaishu"
};
let user2 = user1;
user2.name = "Priya";
console.log(user1.name);
```
Output:
```text
Priya
```
Because:
```text
user1 ──┐
        ↓
      Object
        ↑
user2 ──┘
```
### Important
```text
Primitive → copied value
Object    → copied reference
Array     → copied reference
Function  → copied reference
```
# 3. Garbage Collection
### Explanation
**Garbage Collection (GC)** is the automatic process by which JavaScript engines identify objects that are no longer reachable and reclaim their memory.
You generally **don't manually free memory** in JavaScript.
Example:
```js
let user = {
    name: "Vaishu"
};
user = null;
```
Initially:
```text
user
 ↓
Object
```
After:
```js
user = null;
```
there is no longer a reference from `user` to that object.
Conceptually:
```text
user → null
Object → unreachable
```
If nothing else references that object, the JavaScript engine can eventually garbage-collect it.
**Important:** garbage collection is automatic and the exact time it runs is implementation-dependent.
# 4. Reachability
### Explanation
Garbage collection is based on the idea of **reachability**.
An object is generally considered alive if it can still be reached through references from active roots, such as currently executing code and certain global/runtime references.
### Example
```js
let user = {
    name: "Vaishu"
};
let admin = user;
user = null;
```
Is the object garbage collected?
**No.**
Because:
```text
user → null
admin
  ↓
Object
```
`admin` still references the object.
If:
```js
admin = null;
```
and no other references exist, the object becomes unreachable.

# 5. Garbage Collection Example
```js
function createUser() {
    const user = {
        name: "Vaishu"
    };
    console.log(user.name);
}
createUser();
```
After `createUser()` finishes, if nothing outside the function references `user`, the object can become unreachable.
```text
createUser()
     ↓
 local user
     ↓
  Object
     ↓
function finishes
     ↓
no reference
     ↓
eligible for GC
```
# 6. Memory Leaks
### Explanation
A **memory leak** occurs when a program keeps references to objects that it no longer needs.
Because those objects are still reachable, the garbage collector cannot reclaim them.
```text
No longer needed
       ↓
Still referenced
       ↓
Still reachable
       ↓
GC cannot remove it
       ↓
Memory usage increases
```
# 7. Common Cause: Unused Global Data
```js
const users = [];
function addUser(user) {
    users.push(user);
}
addUser({
    name: "Vaishu"
});
```
If `users` is global and continuously keeps old objects that the application no longer needs:
```text
Global users
     ↓
Object 1
Object 2
Object 3
Object 4
...
```
those objects remain reachable.
If this continues indefinitely, memory usage can grow.
### Better Approach
Remove data when it is no longer required:
```js
users.length = 0;
```
Or use a more appropriate data structure/lifecycle.
# 8. Event Listener Memory Leak
This is a very important browser example.
```js
const button = document.getElementById("button");
function handleClick() {
    console.log("Clicked");
}
button.addEventListener("click", handleClick);
```
If an application creates listeners repeatedly without removing listeners that are no longer needed, callbacks and related objects may remain reachable longer than intended.
### Cleanup
```js
button.removeEventListener("click", handleClick);
```
Notice that we use the **same function reference**.
This works:
```js
button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick);
```
But this does not remove the original listener:
```js
button.addEventListener("click", () => {
    console.log("Clicked");
});
button.removeEventListener("click", () => {
    console.log("Clicked");
});
```
These are two different function objects.
# 9. Timer Memory Leak
Consider:
```js
const data = {
    name: "Vaishu"
};
setInterval(() => {
    console.log(data.name);
}, 1000);
```
The interval continues running indefinitely.
The callback keeps access to `data`, so the related objects may remain reachable for as long as that interval exists.
### Cleanup
```js
const intervalId = setInterval(() => {
    console.log(data.name);
}, 1000);
clearInterval(intervalId);
```
When the timer is no longer required, cancel it.
# 10. Closures and Memory
Closures can also keep references alive.
```js
function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}
const counter = createCounter();
```
The returned function remembers `count`.
```text
counter
   ↓
Function
   ↓
Closure
   ↓
count
```
This is **not automatically a memory leak**.
The closure is useful because the application still needs `count`.
It becomes a potential memory problem when a long-lived object unnecessarily retains large data through a closure.
# 11. Detached DOM Elements
A common browser memory issue is retaining references to DOM elements that are no longer part of the document.
Example concept:
```js
let element = document.getElementById("profile");
element.remove();
console.log(element);
```
The element has been removed from the DOM, but the variable `element` still references it.
```text
element
   ↓
Detached DOM element
```
If a large application keeps unnecessary references to many detached elements, memory usage can increase.
When no longer needed:
```js
element = null;
```
# 12. Shallow Copy and Shared References
Remember the earlier immutability concept:
```js
const user = {
    name: "Vaishu",
    address: {
        city: "Tiruppur"
    }
};
const copy = {
    ...user
};
```
The outer object is copied, but the nested `address` object is still shared.
```text
user ──────────────┐
                   ↓
             address object
                   ↑
copy ──────────────┘
```
Therefore:
```js
copy.address.city = "Chennai";
console.log(user.address.city);
```
Output:
```text
Chennai
```
For a deep independent copy, modern JavaScript can use:
```js
const deepCopy = structuredClone(user);
```
# 13. `WeakMap` and `WeakSet`
JavaScript also provides weak collections that are useful for certain cases involving object references.
### `WeakMap`
```js
const cache = new WeakMap();
let user = {
    name: "Vaishu"
};
cache.set(user, "User data");
console.log(cache.get(user));
```
Output:
```text
User data
```
If later:
```js
user = null;
```
and there are no other strong references to the original object, the `WeakMap` entry does not by itself keep that object alive.
This is useful for metadata associated with objects without forcing those objects to remain reachable.
### Important
`WeakMap` keys must be objects.
# 14. Common Causes of Memory Leaks

| Cause             | Example                           | Solution                               |
| ----------------- | --------------------------------- | -------------------------------------- |
| Global references | Large global arrays               | Remove unused data                     |
| Event listeners   | Repeated listeners                | `removeEventListener()`                |
| Timers            | Unstopped `setInterval()`         | `clearInterval()`                      |
| Closures          | Unnecessary retained data         | Release references / lifecycle cleanup |
| Detached DOM      | Removed elements still referenced | Remove unnecessary references          |
| Caches            | Cache grows forever               | Expire/remove old entries              |

# 15. Garbage Collection vs Memory Leak

| Garbage Collection          | Memory Leak                                        |
| --------------------------- | -------------------------------------------------- |
| Automatic memory management | Unwanted memory retention                          |
| Finds unreachable objects   | Objects remain reachable unnecessarily             |
| Reclaims eligible memory    | Memory cannot be reclaimed while references remain |
| Built into JS engines       | Usually caused by application design/code          |

```text
Reference
    ↓
Keeps object reachable

No references
    ↓
Object becomes unreachable
    ↓
Eligible for Garbage Collection

Unnecessary reference
    ↓
Object stays reachable
    ↓
Potential Memory Leak
```
### Note
> **JavaScript uses automatic garbage collection to reclaim memory occupied by objects that are no longer reachable. A memory leak happens when objects that are no longer needed remain reachable because unnecessary references, event listeners, timers, caches, or closures continue to hold them.**

# 34_Web APIs
These are important **Browser Web APIs** that JavaScript uses to interact with the webpage, browser, device, and user.
```text
Browser Web APIs
│
├── DOM API          → Work with HTML elements
├── Canvas API       → Draw graphics
├── Geolocation API  → Get user's location
├── Web Storage      → Store data in browser
└── Notifications    → Show browser notifications
```
# 1. DOM API
### Explanation
**DOM (Document Object Model)** represents an HTML page as a tree of objects.
JavaScript uses the DOM API to:
* find HTML elements
* change content
* change styles/classes
* create elements
* remove elements
* handle user interactions
### Example HTML
```html
<h2 id="title">Welcome</h2>
<button id="btn">Change Text</button>
```
### JavaScript
```js 
const title = document.getElementById("title");
const button = document.getElementById("btn");
button.addEventListener("click", () => {
    title.textContent = "Welcome Vaishu!";
});
```
When the button is clicked:
```text
Welcome
   ↓
Welcome Vaishu!
```
### Common DOM APIs
```js
document.getElementById("title");
document.querySelector(".product");
document.createElement("div");
element.textContent = "Hello";
element.classList.add("active");
element.setAttribute("id", "user");
element.appendChild(child);
```
### Technical Real-Time Use
In an e-commerce application:
```js
const price = document.querySelector("#price");
price.textContent = "₹50,000";
```
The product price can be updated dynamically without reloading the page.
### Remember
> **DOM API → Manipulate the webpage.**
# 2. Canvas API
### Explanation
The **Canvas API** allows JavaScript to draw graphics inside an HTML `<canvas>` element.
It can be used for:
* charts
* games
* image processing
* drawing applications
* animations
* signatures
* visualizations
### HTML
```html
<canvas id="canvas" width="400" height="200"></canvas>
```
### JavaScript
```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.fillRect(50, 50, 150, 80);
```
This draws a rectangle.
### Drawing a Circle
```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.arc(150, 100, 50, 0, Math.PI * 2);
ctx.fill();
```
### Drawing Text
```js
ctx.font = "30px Arial";
ctx.fillText("Vaishu", 50, 50);
```
### Technical Real-Time Use
A simple signature/drawing application can use:
```text
Mouse / Touch
     ↓
Canvas
     ↓
Draw pixels
```
Similarly, a game can continuously update the canvas:
```js 
function gameLoop() {
    // update game objects
    // draw game objects
    requestAnimationFrame(gameLoop);
}
gameLoop();
```
### Important
Canvas is **pixel-based drawing**, unlike DOM elements which represent structured HTML elements.
### Remember
> **Canvas API → Draw graphics.**

# 3. Geolocation API
### Explanation
The **Geolocation API** allows a website to request the user's geographic location.
The browser normally asks the user for permission.
### Syntax
```js
navigator.geolocation.getCurrentPosition(
    success,
    error
);
```
### Example
```js
navigator.geolocation.getCurrentPosition(
    position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        console.log("Latitude:", latitude);
        console.log("Longitude:", longitude);
    },
    error => {
        console.log("Unable to get location:", error.message);
    }
);
```
Example output:
```text
Latitude: 11.xxxxx
Longitude: 77.xxxxx
```
The exact coordinates depend on the user's device and permission.
### Important Properties
```js
position.coords.latitude
position.coords.longitude
position.coords.accuracy
```
### Technical Real-Time Use
A food delivery application can use the location to determine nearby restaurants:
```text
User
 ↓
Allow Location
 ↓
Geolocation API
 ↓
Latitude + Longitude
 ↓
Backend / Maps Service
 ↓
Nearby Restaurants
```
### Continuous Location
For applications such as navigation or delivery tracking:
```js
const watchId = navigator.geolocation.watchPosition(position => {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
});
```
Stop watching:
```js
navigator.geolocation.clearWatch(watchId);
```
### Security/Privacy
Location is sensitive information. Websites should request it only when necessary and clearly explain why it is needed.
### Remember
> **Geolocation API → Get device location with user permission.**
# 4. Web Storage API
### Explanation
**Web Storage** allows websites to store data in the browser.
It provides:
```text
localStorage
sessionStorage
```
Both use a key-value interface and store strings.
## `localStorage`
Data remains available across browser sessions until it is removed.
### Syntax
```js
localStorage.setItem("username", "Vaishu");
const username = localStorage.getItem("username");
console.log(username);
```
Output:
```text
Vaishu
```
### Remove Data
```js
localStorage.removeItem("username");
```
Remove everything for that origin:
```js 
localStorage.clear();
```
### Storing Objects
Storage values are strings, so use JSON:
```js
const user = {
    name: "Vaishu",
    age: 22
};
localStorage.setItem(
    "user",
    JSON.stringify(user)
);
```
Read it:
```js 
const user = JSON.parse(
    localStorage.getItem("user")
);
console.log(user.name);
```
Output:
```text
Vaishu
```
### Technical Real-Time Uses
* theme preference
* language preference
* non-sensitive UI settings
* shopping cart data
* recently selected filters
## `sessionStorage`
It has almost the same API:
```js 
sessionStorage.setItem("step", "2");
console.log(
    sessionStorage.getItem("step")
);
```
It is associated with the current page session/tab and is generally cleared when that tab/session ends.
### Real-Time Example
Multi-step registration:
```text
Step 1
  ↓
sessionStorage
  ↓
Step 2
  ↓
sessionStorage
  ↓
Step 3
```
This can preserve temporary form progress.
### localStorage vs sessionStorage
| Feature                      | `localStorage`          | `sessionStorage`         |
| ---------------------------- | ----------------------- | ------------------------ |
| Persistence                  | Across browser sessions | Current page session/tab |
| API                          | Same                    | Same                     |
| Stores                       | Strings                 | Strings                  |
| Automatically sent to server | No                      | No                       |
| Typical use                  | Preferences             | Temporary state          |

### Security Note
Do not treat Web Storage as a secure place for sensitive authentication secrets. JavaScript-accessible storage can be exposed if your application has an XSS vulnerability.
### Remember
> **Web Storage → Store browser-side data.**
# 5. Notifications API
### Explanation
The **Notifications API** allows a website to display notifications through the browser/operating system.
Examples:
```text
 New message
Your order has been shipped.
```
The user must grant permission.
### Step 1 — Request Permission
```js 
Notification.requestPermission()
    .then(permission => {
        console.log(permission);
    });
```
Possible results:
```text
"granted"
"denied"
"default"
```
### Step 2 — Show Notification
```js 
if (Notification.permission === "granted") {
    new Notification("Hello Vaishu!");
}
```
### Technical Real-Time Example
An order application could show:
```js
if (Notification.permission === "granted") {
    new Notification("Order Update", {
        body: "Your order has been shipped!"
    });
}
```
Conceptually:
```text
Order status changes
       ↓
Application
       ↓
Notification API
       ↓
Browser / OS notification
       ↓
"Your order has been shipped!"
```
### Important
Notifications require **user permission**. A website should not repeatedly request permission or send unnecessary notifications.
For notifications that need to work even when the page isn't open, applications commonly use **Service Workers + Push API** in addition to the Notifications API.
### Remember
> **Notifications API → Show user-facing browser notifications.**

| API                   | Main Purpose       | Example            |
| --------------------- | ------------------ | ------------------ |
| **DOM API**           | Manipulate webpage | Change button/text |
| **Canvas API**        | Draw graphics      | Games/charts       |
| **Geolocation API**   | Get location       | Delivery apps      |
| **Web Storage**       | Store browser data | Theme/cart         |
| **Notifications API** | Show notifications | Order updates      |

Imagine a **food delivery website**.
```text
                 Food Delivery App
                        │
       ┌────────────────┼────────────────┐
       ↓                ↓                ↓
     DOM            Geolocation       Web Storage
       │                │                │
Update restaurant    Get location     Save preferences
list / cart              │
       │                 ↓
       │            Nearby restaurants
       │
       ├──── Canvas → Delivery/map visualization
       │
       └──── Notifications → "Order delivered"
```
```text
DOM           → Modify
Canvas        → Draw
Geolocation   → Locate
Web Storage   → Store
Notifications → Inform
```
These five are all **browser Web APIs**, but they solve different problems: **DOM for page structure, Canvas for graphics, Geolocation for location, Web Storage for client-side persistence, and Notifications for user alerts.**

