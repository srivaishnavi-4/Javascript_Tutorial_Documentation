import { getProducts, createProduct } from "./api.js";
import {
  taxRate, formatPrice, calculateTotal, getProductSummary,
  shallowCopy, deepCopy, welcomeMessage
} from "./utils.js";

const searchForm = document.getElementById("searchForm");
const searchInput = document.querySelector("#searchInput");
const searchStatus = document.querySelector("#searchStatus");
const productList = document.querySelector("#productList");
const cartCount = document.getElementById("cartCount");
const eventParent = document.getElementById("eventParent");
const eventChild = document.getElementById("eventChild");
const eventOutput = document.getElementById("eventOutput");
const domBox = document.getElementById("domBox");
const delegationList = document.getElementById("delegationList");
const delegationOutput = document.getElementById("delegationOutput");

let products = [];
let cart = [];
const appName = "Vaishu Product Dashboard";

console.log(welcomeMessage("Vaishu"));
console.log("App:", appName);
console.log("Tax:", taxRate);

// ---------- API + JSON + DOM ----------
async function loadProducts() {
  try {
    products = await getProducts();
    searchStatus.textContent = `${products.length} products loaded.`;
    renderProducts(products);
    renderDelegationProducts(products);
  } catch (error) {
    searchStatus.textContent = "Failed to load products.";
    console.error(error);
  }
}

function renderProducts(items) {
  productList.innerHTML = "";

  items.forEach(product => {
    const li = document.createElement("li");
    li.classList.add("product");
    li.setAttribute("data-product-id", product.id);

    const name = document.createElement("strong");
    name.textContent = product.name;

    const price = document.createElement("span");
    price.textContent = ` — ${formatPrice(product.price)}`;

    const button = document.createElement("button");
    button.textContent = "Add to Cart";
    button.setAttribute("data-product-id", product.id);
    button.classList.add("add-btn");

    li.append(name, price, button);
    productList.appendChild(li);
  });
}

// ---------- Event listeners + event object ----------
searchInput.addEventListener("input", event => {
  const keyword = event.target.value.toLowerCase();
  searchStatus.textContent = `Searching for: ${event.target.value}`;

  renderProducts(products.filter(product =>
    product.name.toLowerCase().includes(keyword)
  ));
});

searchForm.addEventListener("submit", event => {
  event.preventDefault();
  searchStatus.textContent =
    `Search submitted: ${searchInput.value || "all products"}`;
});

// ---------- Event delegation + target/currentTarget + data-* ----------
productList.addEventListener("click", event => {
  console.log("target:", event.target);
  console.log("currentTarget:", event.currentTarget);
  console.log("type:", event.type);

  if (event.target.matches(".add-btn")) {
    const product = products.find(
      item => item.id === Number(event.target.dataset.productId)
    );

    if (product) {
      cart.push(product);
      cartCount.textContent = cart.length;
      event.target.textContent = "Added";
      event.target.classList.toggle("highlight");
    }
  }
});

// ---------- Bubbling + stopPropagation ----------
eventParent.addEventListener("click", event => {
  eventOutput.textContent =
    `Parent listener: target=${event.target.id}, currentTarget=${event.currentTarget.id}`;
});

eventChild.addEventListener("click", event => {
  event.stopPropagation();
  eventOutput.textContent =
    `Child listener: target=${event.target.id}, currentTarget=${event.currentTarget.id}`;
});

// ---------- Other common events ----------
domBox.addEventListener("dblclick", () => console.log("dblclick"));
domBox.addEventListener("mouseover", () => console.log("mouseover"));
domBox.addEventListener("mouseout", () => console.log("mouseout"));
searchInput.addEventListener("keydown", e => console.log("keydown:", e.key));
searchInput.addEventListener("keyup", e => console.log("keyup:", e.key));
searchInput.addEventListener("focus", () => console.log("focus"));
searchInput.addEventListener("blur", () => console.log("blur"));

// ---------- DOM manipulation ----------
document.getElementById("changeTextBtn").addEventListener("click", () => {
  domBox.textContent = "<b>textContent treats this as plain text</b>";
});

document.getElementById("htmlBtn").addEventListener("click", () => {
  // Static/trusted HTML only; don't place untrusted user input here.
  domBox.innerHTML = "<strong>innerHTML created formatted HTML</strong>";
});

document.getElementById("toggleBtn").addEventListener("click", () => {
  domBox.classList.toggle("highlight");
  console.log("contains:", domBox.classList.contains("highlight"));
});

document.getElementById("attributeBtn").addEventListener("click", () => {
  domBox.setAttribute("data-status", "updated");
  console.log("getAttribute:", domBox.getAttribute("data-status"));
  console.log("hasAttribute:", domBox.hasAttribute("data-status"));
  domBox.setAttribute("data-old", "temporary");
  domBox.removeAttribute("data-old");
});

document.getElementById("createBtn").addEventListener("click", () => {
  const p = document.createElement("p");
  p.textContent = "Created dynamically with createElement().";
  domBox.appendChild(p);
});

// ---------- BOM ----------
function showBrowserInfo() {
  const info = {
    href: location.href,
    hostname: location.hostname,
    pathname: location.pathname,
    search: location.search,
    language: navigator.language,
    online: navigator.onLine,
    screen: `${screen.width} x ${screen.height}`,
    availableScreen: `${screen.availWidth} x ${screen.availHeight}`,
    viewport: `${window.innerWidth} x ${window.innerHeight}`
  };
  document.getElementById("browserInfo").textContent =
    JSON.stringify(info, null, 2);
}
showBrowserInfo();

document.getElementById("alertBtn").addEventListener("click", () => {
  alert("Vaishu dashboard is working!");
});

document.getElementById("confirmBtn").addEventListener("click", () => {
  if (confirm("Clear the cart?")) {
    cart = [];
    cartCount.textContent = "0";
  }
});

document.getElementById("promptBtn").addEventListener("click", () => {
  const name = prompt("Enter your name:");
  if (name !== null) alert(`Hello, ${name}!`);
});

document.getElementById("urlBtn").addEventListener("click", () => {
  const params = new URLSearchParams(location.search);
  alert(
    `URL: ${location.href}\n` +
    `Path: ${location.pathname}\n` +
    `Query id: ${params.get("id")}`
  );
});

document.getElementById("reloadBtn").addEventListener("click", () => {
  if (confirm("Reload the page?")) location.reload();
});

// location.assign("/dashboard") would navigate; kept as a safe reference:
// location.assign("/dashboard");

document.getElementById("clipboardBtn").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText("Vaishu Product Dashboard");
    alert("Copied.");
  } catch {
    alert("Clipboard access is unavailable.");
  }
});

document.getElementById("geoBtn").addEventListener("click", () => {
  if (!navigator.geolocation) {
    alert("Geolocation is not supported.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    position => alert(
      `Latitude: ${position.coords.latitude}\nLongitude: ${position.coords.longitude}`
    ),
    error => alert(`Location error: ${error.message}`)
  );
});

// ---------- Timers ----------
let intervalId = null;
let timeoutId = null;
let remaining = 10;

document.getElementById("startTimerBtn").addEventListener("click", () => {
  if (intervalId !== null) return;

  remaining = 10;
  document.getElementById("timerValue").textContent = remaining;

  intervalId = setInterval(() => {
    remaining--;
    document.getElementById("timerValue").textContent = remaining;

    if (remaining <= 0) {
      clearInterval(intervalId);
      intervalId = null;
      document.getElementById("timerMessage").textContent = "Interval finished.";
    }
  }, 1000);
});

document.getElementById("stopTimerBtn").addEventListener("click", () => {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
    document.getElementById("timerMessage").textContent =
      "Stopped with clearInterval().";
  }
});

document.getElementById("delayBtn").addEventListener("click", () => {
  timeoutId = setTimeout(() => {
    document.getElementById("timerMessage").textContent =
      "setTimeout() executed after 3 seconds.";
    timeoutId = null;
  }, 3000);
});

document.getElementById("cancelDelayBtn").addEventListener("click", () => {
  if (timeoutId !== null) {
    clearTimeout(timeoutId);
    timeoutId = null;
    document.getElementById("timerMessage").textContent =
      "Cancelled with clearTimeout().";
  }
});

// ---------- JSON parse/stringify ----------
document.getElementById("jsonBtn").addEventListener("click", () => {
  const jsonString = '{"name":"Vaishu","role":"Developer","age":22}';

  try {
    const user = JSON.parse(jsonString);
    document.getElementById("jsonOutput").textContent =
      JSON.stringify({
        parsedObject: user,
        name: user.name,
        stringifiedAgain: JSON.stringify(user)
      }, null, 2);
  } catch (error) {
    document.getElementById("jsonOutput").textContent = error.message;
  }
});

// ---------- Shallow vs deep copy ----------
document.getElementById("shallowBtn").addEventListener("click", () => {
  const original = { name: "Vaishu", address: { city: "Coimbatore" } };
  const copy = shallowCopy(original);

  copy.name = "Updated Vaishu";
  copy.address.city = "Chennai";

  document.getElementById("jsonOutput").textContent =
    JSON.stringify({ original, copy, note: "Nested object is shared." }, null, 2);
});

document.getElementById("deepBtn").addEventListener("click", () => {
  const original = { name: "Vaishu", address: { city: "Coimbatore" } };
  const copy = deepCopy(original);

  copy.name = "Updated Vaishu";
  copy.address.city = "Chennai";

  document.getElementById("jsonOutput").textContent =
    JSON.stringify({ original, copy, note: "Nested object is independent." }, null, 2);
});

// ---------- ES6 ----------
const prices = [100, 200, 300];
const allPrices = [...prices, 400];              // spread
const total = calculateTotal(...allPrices);      // rest
const [first, second] = allPrices;               // array destructuring

const user = { name: "Vaishu", role: "Developer" };
const { name, role } = user;                    // object destructuring
const updatedUser = { ...user, role: "AI Engineer" }; // object spread

document.getElementById("es6Output").textContent = [
  `let/const: ${appName}`,
  `Arrow function: ${formatPrice(50000)}`,
  `Template literal: Hello ${name}`,
  `Spread: ${JSON.stringify(allPrices)}`,
  `Rest: total=${total}`,
  `Array destructuring: ${first}, ${second}`,
  `Object destructuring: ${name}, ${role}`,
  `Object spread: ${JSON.stringify(updatedUser)}`,
  `Module function: ${getProductSummary({
    name: "Laptop", price: 50000, category: "Electronics"
  })}`
].join("\n");

// ---------- Event delegation + data-* ----------
function renderDelegationProducts(items) {
  delegationList.innerHTML = "";

  items.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product");

    const name = document.createElement("strong");
    name.textContent = product.name;

    const button = document.createElement("button");
    button.textContent = "View Details";
    button.classList.add("details-btn");
    button.setAttribute("data-product-id", product.id);

    card.append(name, document.createTextNode(` — ${formatPrice(product.price)} `), button);
    delegationList.appendChild(card);
  });
}

delegationList.addEventListener("click", event => {
  if (!event.target.matches(".details-btn")) return;

  const id = Number(event.target.dataset.productId);
  const product = products.find(item => item.id === id);

  if (product) {
    delegationOutput.textContent = `Selected: ${getProductSummary(product)}`;
  }
});

// ---------- API POST + JSON.stringify ----------
async function demonstratePostData() {
  const newProduct = {
    name: "Keyboard",
    price: 1500,
    category: "Accessories"
  };

  const result = await createProduct(newProduct);
  console.log("Simulated API POST body:", result.sentBody);
}

demonstratePostData();
loadProducts();