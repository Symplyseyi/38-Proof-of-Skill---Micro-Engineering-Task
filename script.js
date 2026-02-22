// DOM REFERENCES
const navLinks = document.querySelectorAll(".nav");
const cards = document.querySelectorAll(".card");
const sectionName = document.getElementById("section-number");
const sectionTitle = document.getElementById("section-title");
const taskList = document.getElementById("task-list");
const modalOverlay = document.getElementById("modal-overlay");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalBody = document.getElementById("modal-body");
const modalResult = document.getElementById("modal-result");
const modalCloseBtn = document.getElementById("modal-close-btn");

// NAVIGATION — Cards click (index.html)
function sectionCards() {
  if (cards.length > 0) {
    cards.forEach((card) => {
      card.addEventListener("click", () => {
        const sectionNumber = card.getAttribute("data-section");
        window.location.href = `sub-sections.html?id=section${sectionNumber}`;
      });
    });
  }
}
sectionCards();

// NAVIGATION — Nav links
function navLINKS() {
  if (navLinks.length > 0) {
    navLinks.forEach((navlink) => {
      navlink.addEventListener("click", () => {
        const navNumber = navlink.getAttribute("data-section");
        window.location.href = `sub-sections.html?id=section${navNumber}`;
      });
    });
  }
}
navLINKS();

// SECTION DATA — All 38 tasks with taskId
const sectionsCard = {
  1: {
    name: "section 1",
    title: "Variables, Strings & Conditionals",
    tasks: [
      {
        taskId: "age-checker",
        taskName: "Age Category Checker",
        taskDescription:
          "Input an age and categorize it as Child, Teen, Adult or Senior.",
      },
      {
        taskId: "password-strength",
        taskName: "Password Strength Checker",
        taskDescription:
          "Evaluate password strength based on length and character variety.",
      },
      {
        taskId: "username-formatter",
        taskName: "Username Formatter",
        taskDescription:
          "Format a username by trimming, lowercasing and removing spaces.",
      },
      {
        taskId: "temp-converter",
        taskName: "Temperature Converter",
        taskDescription: "Convert temperature between Celsius and Fahrenheit.",
      },
      {
        taskId: "grade-calculator",
        taskName: "Basic Grade Calculator",
        taskDescription:
          "Input a score and output the corresponding letter grade.",
      },
      {
        taskId: "discount-calculator",
        taskName: "Discount Calculator",
        taskDescription:
          "Calculate the final price after applying a discount percentage.",
      },
      {
        taskId: "greeting-generator",
        taskName: "Greeting Message Generator",
        taskDescription:
          "Generate a personalized greeting based on time of the day and name.",
      },
      {
        taskId: "login-validator",
        taskName: "Login Validator",
        taskDescription:
          "Simulate a login form with basic username / password validation.",
      },
      {
        taskId: "vowel-counter",
        taskName: "Vowel Counter",
        taskDescription: "Count the number of vowels in a given text input.",
      },
      {
        taskId: "odd-even",
        taskName: "Odd & Even Identifier",
        taskDescription: "Determine whether a given number is even or odd.",
      },
    ],
  },
  2: {
    name: "Section 2",
    title: "Functions & Logic Building",
    tasks: [
      {
        taskId: "calculator",
        taskName: "Reusable Calculator Function",
        taskDescription: "Build add, subtract, multiply, and divide functions.",
      },
      {
        taskId: "max-min",
        taskName: "Find Max & Min of 5 Numbers",
        taskDescription:
          "Find the maximum and minimum from a set of 5 numbers.",
      },
      {
        taskId: "factorial",
        taskName: "Factorial Calculator",
        taskDescription: "Calculate the factorial of a given number.",
      },
      {
        taskId: "reverse-string",
        taskName: "Reverse String",
        taskDescription: "Reverse any string input using a function.",
      },
      {
        taskId: "interest-calc",
        taskName: "Interest Calculator",
        taskDescription: "Calculate simple and compound interest.",
      },
      {
        taskId: "bmi-calc",
        taskName: "BMI Calculator",
        taskDescription: "Calculate Body Mass Index from weight and height.",
      },
      {
        taskId: "leap-year",
        taskName: "Leap Year Checker",
        taskDescription: "Determine if a given year is a leap year.",
      },
      {
        taskId: "voting-age",
        taskName: "Voting Age Eligibility Checker",
        taskDescription: "Check if a person is old enough to vote.",
      },
    ],
  },
  3: {
    name: "Section 3",
    title: "Arrays & Iteration",
    tasks: [
      {
        taskId: "sum-array",
        taskName: "Sum of Numbers in an Array",
        taskDescription: "Calculate the sum of numbers in an array.",
      },
      {
        taskId: "average-score",
        taskName: "Average Score Calculator",
        taskDescription: "Calculate the average of a set of scores.",
      },
      {
        taskId: "largest-number",
        taskName: "Find Largest Number in an Array",
        taskDescription: "Find the largest number in an array of values.",
      },
      {
        taskId: "remove-duplicates",
        taskName: "Remove Duplicates from an Array",
        taskDescription: "Remove duplicate values from an array.",
      },
      {
        taskId: "sort-numbers",
        taskName: "Sort Numbers: Ascending & Descending",
        taskDescription:
          "Sort a set of numbers in ascending and descending order.",
      },
      {
        taskId: "count-occurrence",
        taskName: "Count Value Occurrence",
        taskDescription: "Count how many times a value appears in an array.",
      },
      {
        taskId: "filter-even",
        taskName: "Filter Even Numbers",
        taskDescription: "Filter out the even numbers from an array.",
      },
      {
        taskId: "merge-arrays",
        taskName: "Merge Two Arrays",
        taskDescription: "Merge two arrays into one combined array.",
      },
    ],
  },
  4: {
    name: "Section 4",
    title: "Objects & Data Structures",
    tasks: [
      {
        taskId: "student-object",
        taskName: "Student Object Creator",
        taskDescription: "Create a student object with name, age, and grade.",
      },
      {
        taskId: "key-checker",
        taskName: "Key Existence Checker",
        taskDescription: "Check if a key exists in an object.",
      },
      {
        taskId: "contact-book",
        taskName: "Simple Contact Book",
        taskDescription:
          "Create a simple contact book using an object literal.",
      },
      {
        taskId: "price-object",
        taskName: "Self-Calculating Price Object",
        taskDescription:
          "Create an object that calculates the total price of its own keys.",
      },
      {
        taskId: "shopping-cart",
        taskName: "Shopping Cart Simulator",
        taskDescription:
          "Add and remove items from a shopping cart with real-time totals.",
      },
      {
        taskId: "json-formatter",
        taskName: "Simple JSON Formatter",
        taskDescription: "Format and display JSON data in a readable way.",
      },
      {
        taskId: "key-counter",
        taskName: "Object Key Counter",
        taskDescription: "Count how many keys are in an object.",
      },
    ],
  },
  5: {
    name: "Section 5",
    title: "DOM & The Browser",
    tasks: [
      {
        taskId: "click-counter",
        taskName: "Button Click Counter",
        taskDescription:
          "Count and display how many times a button was clicked.",
      },
      {
        taskId: "char-counter",
        taskName: "Live Character Counter",
        taskDescription: "Show a live character counter as the user types.",
      },
      {
        taskId: "todo-app",
        taskName: "Simple Todo App",
        taskDescription: "Add, remove, and check off items in a live list.",
      },
      {
        taskId: "modal-popup",
        taskName: "Modal Popup",
        taskDescription: "Trigger a styled modal overlay with a button.",
      },
      {
        taskId: "form-validation",
        taskName: "Form Validation",
        taskDescription: "Validate form input fields with real-time feedback.",
      },
    ],
  },
};

// PARSE URL — Get section data
const urlParams = new URLSearchParams(window.location.search);
const sectionId = urlParams.get("id");

let sectionData = null;
if (sectionId) {
  sectionData = sectionsCard[sectionId.replace("section", "")];
}

// CREATE TASK LIST HTML
function createTaskHTML() {
  if (!sectionData || !taskList) return;

  sectionTitle.textContent = sectionData.title;
  sectionName.textContent = sectionData.name;

  sectionData.tasks.forEach((task) => {
    const taskCard = document.createElement("div");
    taskCard.classList.add("section-card");
    taskCard.setAttribute("data-task-id", task.taskId);

    const inputIconAndCardName = document.createElement("div");
    inputIconAndCardName.classList.add("inputIcon-and-cardName");

    const inputIcon = document.createElement("span");
    inputIcon.classList.add("material-symbols-outlined");
    inputIcon.textContent = "circle";

    const cardNameAndDescript = document.createElement("div");
    cardNameAndDescript.classList.add("cardName-and-description");

    const cardName = document.createElement("p");
    cardName.classList.add("card-name");
    cardName.textContent = task.taskName;

    const cardDescription = document.createElement("p");
    cardDescription.classList.add("card-description");
    cardDescription.textContent = task.taskDescription;

    const rightArrow = document.createElement("span");
    rightArrow.classList.add("material-symbols-outlined");
    rightArrow.textContent = "arrow_right_alt";

    taskList.append(taskCard);
    taskCard.append(inputIconAndCardName, rightArrow);
    inputIconAndCardName.append(inputIcon, cardNameAndDescript);
    cardNameAndDescript.append(cardName, cardDescription);

    // Click handler — open modal
    taskCard.addEventListener("click", () => {
      openModal(task.taskId, task.taskName, task.taskDescription);
    });
  });
}
createTaskHTML();

// MODAL — Open / Close
function openModal(taskId, name, description) {
  if (!modalOverlay) return;
  modalTitle.textContent = name;
  modalDescription.textContent = description;
  modalBody.innerHTML = "";
  modalResult.innerHTML = "";
  buildModalUI(taskId);
  modalOverlay.classList.add("active");
}

function closeModal() {
  if (!modalOverlay) return;
  modalOverlay.classList.remove("active");
}

if (modalCloseBtn) {
  modalCloseBtn.addEventListener("click", closeModal);
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// HELPERS
function showResult(text, type = "success") {
  modalResult.innerHTML = `<div class="modal-result-box result-${type}">${text}</div>`;
}

function inputGroup(label, id, type = "text", placeholder = "") {
  return `<div class="modal-input-group">
    <label for="${id}">${label}</label>
    <input type="${type}" id="${id}" placeholder="${placeholder}" autocomplete="off" />
  </div>`;
}

function runBtn(text = "Run") {
  return `<button class="modal-btn modal-btn-primary" id="modal-run-btn">${text}</button>`;
}

function parseNumArray(str) {
  return str
    .split(",")
    .map((s) => Number(s.trim()))
    .filter((n) => !isNaN(n));
}

// BUILD MODAL UI — Switch on taskId
function buildModalUI(taskId) {
  switch (taskId) {
    //  SECTION 1

    case "age-checker": {
      modalBody.innerHTML =
        inputGroup("Enter Age", "inp-age", "number", "e.g. 25") +
        runBtn("Check Category");
      document.getElementById("modal-run-btn").addEventListener("click", () => {
        const age = parseInt(document.getElementById("inp-age").value);
        if (isNaN(age) || age < 0)
          return showResult("Please enter a valid age.", "error");
        let category;
        if (age < 13) category = "Child 👶";
        else if (age < 18) category = "Teenager 🧑";
        else if (age < 60) category = "Adult 🧔";
        else category = "Senior 👴";
        showResult(`Age ${age} → <strong>${category}</strong>`);
      });
      break;
    }

    case "password-strength": {
      modalBody.innerHTML =
        inputGroup("Enter Password", "inp-pass", "text", "Type a password…") +
        runBtn("Check Strength");
      document.getElementById("modal-run-btn").addEventListener("click", () => {
        const pw = document.getElementById("inp-pass").value;
        if (!pw) return showResult("Please enter a password.", "error");
        let score = 0;
        if (pw.length >= 8) score++;
        if (pw.length >= 12) score++;
        if (/[A-Z]/.test(pw)) score++;
        if (/[0-9]/.test(pw)) score++;
        if (/[^A-Za-z0-9]/.test(pw)) score++;
        let strength, type;
        if (score <= 1) {
          strength = "Weak 🔴";
          type = "error";
        } else if (score <= 3) {
          strength = "Medium 🟡";
          type = "info";
        } else {
          strength = "Strong 🟢";
          type = "success";
        }
        showResult(
          `Password Strength: <strong>${strength}</strong> (Score: ${score}/5)`,
          type,
        );
      });
      break;
    }

    case "username-formatter": {
      modalBody.innerHTML =
        inputGroup("Enter Username", "inp-user", "text", "e.g. John Doe ") +
        runBtn("Format");
      document.getElementById("modal-run-btn").addEventListener("click", () => {
        const raw = document.getElementById("inp-user").value;
        if (!raw.trim()) return showResult("Please enter a username.", "error");
        const formatted = raw.trim().toLowerCase().replace(/\s+/g, "_");
        showResult(`Formatted: <strong>${formatted}</strong>`);
      });
      break;
    }

    case "temp-converter": {
      modalBody.innerHTML =
        `
        <div class="modal-input-row">
          ${inputGroup("Temperature", "inp-temp", "number", "e.g. 100")}
          <div class="modal-input-group">
            <label for="inp-unit">Unit</label>
            <select id="inp-unit"><option value="C">Celsius → Fahrenheit</option><option value="F">Fahrenheit → Celsius</option></select>
          </div>
        </div>` + runBtn("Convert");
      document.getElementById("modal-run-btn").addEventListener("click", () => {
        const temp = parseFloat(document.getElementById("inp-temp").value);
        const unit = document.getElementById("inp-unit").value;
        if (isNaN(temp))
          return showResult("Please enter a valid temperature.", "error");
        let result;
        if (unit === "C")
          result = `${temp}°C = <strong>${((temp * 9) / 5 + 32).toFixed(2)}°F</strong>`;
        else
          result = `${temp}°F = <strong>${(((temp - 32) * 5) / 9).toFixed(2)}°C</strong>`;
        showResult(result);
      });
      break;
    }

    case "grade-calculator": {
      modalBody.innerHTML =
        inputGroup("Enter Score (0–100)", "inp-score", "number", "e.g. 85") +
        runBtn("Get Grade");
      document.getElementById("modal-run-btn").addEventListener("click", () => {
        const s = parseFloat(document.getElementById("inp-score").value);
        if (isNaN(s) || s < 0 || s > 100)
          return showResult("Enter a score between 0 and 100.", "error");
        let grade;
        if (s >= 90) grade = "A";
        else if (s >= 80) grade = "B";
        else if (s >= 70) grade = "C";
        else if (s >= 60) grade = "D";
        else grade = "F";
        showResult(`Score ${s} → Grade: <strong>${grade}</strong>`);
      });
      break;
    }

    case "discount-calculator": {
      modalBody.innerHTML =
        `<div class="modal-input-row">
        ${inputGroup("Original Price ($)", "inp-price", "number", "e.g. 200")}
        ${inputGroup("Discount (%)", "inp-disc", "number", "e.g. 15")}
      </div>` + runBtn("Calculate");
      document.getElementById("modal-run-btn").addEventListener("click", () => {
        const price = parseFloat(document.getElementById("inp-price").value);
        const disc = parseFloat(document.getElementById("inp-disc").value);
        if (isNaN(price) || isNaN(disc) || price < 0 || disc < 0 || disc > 100)
          return showResult("Enter valid price and discount.", "error");
        const saved = (price * disc) / 100;
        const final_ = price - saved;
        showResult(
          `Original: $${price.toFixed(2)}\nDiscount: −$${saved.toFixed(2)} (${disc}%)\n<strong>Final Price: $${final_.toFixed(2)}</strong>`,
        );
      });
      break;
    }

    case "greeting-generator": {
      modalBody.innerHTML =
        inputGroup("Enter Your Name", "inp-name", "text", "e.g. Sarah") +
        runBtn("Generate Greeting");
      document.getElementById("modal-run-btn").addEventListener("click", () => {
        const name = document.getElementById("inp-name").value.trim();
        if (!name) return showResult("Please enter your name.", "error");
        const hour = new Date().getHours();
        let greeting;
        if (hour < 12) greeting = "Good Morning";
        else if (hour < 17) greeting = "Good Afternoon";
        else if (hour < 21) greeting = "Good Evening";
        else greeting = "Good Night";
        showResult(
          `${greeting}, <strong>${name}</strong>! 👋\nCurrent time: ${new Date().toLocaleTimeString()}`,
        );
      });
      break;
    }

    case "login-validator": {
      modalBody.innerHTML =
        inputGroup("Username", "inp-luser", "text", "admin") +
        inputGroup("Password", "inp-lpass", "password", "••••••") +
        runBtn("Login");
      document.getElementById("modal-run-btn").addEventListener("click", () => {
        const u = document.getElementById("inp-luser").value.trim();
        const p = document.getElementById("inp-lpass").value;
        if (!u || !p) return showResult("Both fields are required.", "error");
        if (u === "admin" && p === "password123") {
          showResult("✅ Login Successful! Welcome, admin.", "success");
        } else {
          showResult(
            "❌ Invalid username or password.\nHint: admin / password123",
            "error",
          );
        }
      });
      break;
    }

    case "vowel-counter": {
      modalBody.innerHTML =
        inputGroup("Enter Text", "inp-text", "text", "e.g. Hello World") +
        runBtn("Count Vowels");
      document.getElementById("modal-run-btn").addEventListener("click", () => {
        const text = document.getElementById("inp-text").value;
        if (!text.trim()) return showResult("Please enter some text.", "error");
        const vowels = text.match(/[aeiouAEIOU]/g) || [];
        showResult(
          `Text: "${text}"\nVowels found: <strong>${vowels.length}</strong>\nVowels: ${vowels.length ? vowels.join(", ") : "none"}`,
        );
      });
      break;
    }

    case "odd-even": {
      modalBody.innerHTML =
        inputGroup("Enter a Number", "inp-num", "number", "e.g. 42") +
        runBtn("Check");
      document.getElementById("modal-run-btn").addEventListener("click", () => {
        const n = parseInt(document.getElementById("inp-num").value);
        if (isNaN(n))
          return showResult("Please enter a valid number.", "error");
        const result =
          n % 2 === 0
            ? `${n} is <strong>Even</strong> ✅`
            : `${n} is <strong>Odd</strong> 🔵`;
        showResult(result);
      });
      break;
    }

    //  SECTION 2

    case "calculator": {
      modalBody.innerHTML =
        `<div class="modal-input-row">
        ${inputGroup("Number 1", "inp-n1", "number", "e.g. 10")}
        <div class="modal-input-group">
          <label for="inp-op">Operator</label>
          <select id="inp-op"><option value="+">+  Add</option><option value="-">−  Subtract</option><option value="*">×  Multiply</option><option value="/">÷  Divide</option></select>
        </div>
        ${inputGroup("Number 2", "inp-n2", "number", "e.g. 5")}
      </div>` + runBtn("Calculate");
      document.getElementById("modal-run-btn").addEventListener("click", () => {
        const a = parseFloat(document.getElementById("inp-n1").value);
        const b = parseFloat(document.getElementById("inp-n2").value);
        const op = document.getElementById("inp-op").value;
        if (isNaN(a) || isNaN(b))
          return showResult("Enter valid numbers.", "error");
        let result;
        if (op === "+") result = a + b;
        else if (op === "-") result = a - b;
        else if (op === "*") result = a * b;
        else if (op === "/") {
          if (b === 0) return showResult("Cannot divide by zero!", "error");
          result = a / b;
        }
        showResult(
          `${a} ${op} ${b} = <strong>${parseFloat(result.toFixed(6))}</strong>`,
        );
      });
      break;
    }

    case "max-min": {
      modalBody.innerHTML =
        `<div class="modal-input-row">
        ${inputGroup("Num 1", "inp-m1", "number", "")}
        ${inputGroup("Num 2", "inp-m2", "number", "")}
        ${inputGroup("Num 3", "inp-m3", "number", "")}
      </div>
      <div class="modal-input-row">
        ${inputGroup("Num 4", "inp-m4", "number", "")}
        ${inputGroup("Num 5", "inp-m5", "number", "")}
      </div>` + runBtn("Find Max & Min");
      document.getElementById("modal-run-btn").addEventListener("click", () => {
        const nums = [1, 2, 3, 4, 5].map((i) =>
          parseFloat(document.getElementById(`inp-m${i}`).value),
        );
        if (nums.some(isNaN))
          return showResult("Please fill in all 5 numbers.", "error");
        showResult(
          `Numbers: ${nums.join(", ")}\nMaximum: <strong>${Math.max(...nums)}</strong>\nMinimum: <strong>${Math.min(...nums)}</strong>`,
        );
      });
      break;
    }

    case "factorial": {
      modalBody.innerHTML =
        inputGroup("Enter a Number", "inp-fact", "number", "e.g. 6") +
        runBtn("Calculate Factorial");
      document.getElementById("modal-run-btn").addEventListener("click", () => {
        const n = parseInt(document.getElementById("inp-fact").value);
        if (isNaN(n) || n < 0)
          return showResult("Enter a non-negative integer.", "error");
        if (n > 170) return showResult("Number too large (max 170).", "error");
        let f = 1;
        for (let i = 2; i <= n; i++) f *= i;
        showResult(`${n}! = <strong>${f}</strong>`);
      });
      break;
    }

    case "reverse-string": {
      modalBody.innerHTML =
        inputGroup("Enter a String", "inp-str", "text", "e.g. Hello World") +
        runBtn("Reverse");
      document.getElementById("modal-run-btn").addEventListener("click", () => {
        const s = document.getElementById("inp-str").value;
        if (!s) return showResult("Enter a string to reverse.", "error");
        const reversed = s.split("").reverse().join("");
        showResult(
          `Original: "${s}"\nReversed: <strong>"${reversed}"</strong>`,
        );
      });
      break;
    }

    case "interest-calc": {
      modalBody.innerHTML =
        `<div class="modal-input-row">
        ${inputGroup("Principal ($)", "inp-p", "number", "e.g. 1000")}
        ${inputGroup("Rate (%)", "inp-r", "number", "e.g. 5")}
      </div>
      <div class="modal-input-row">
        ${inputGroup("Time (years)", "inp-t", "number", "e.g. 3")}
        <div class="modal-input-group">
          <label for="inp-itype">Type</label>
          <select id="inp-itype"><option value="simple">Simple Interest</option><option value="compound">Compound Interest</option></select>
        </div>
      </div>` + runBtn("Calculate Interest");
      document.getElementById("modal-run-btn").addEventListener("click", () => {
        const p = parseFloat(document.getElementById("inp-p").value);
        const r = parseFloat(document.getElementById("inp-r").value);
        const t = parseFloat(document.getElementById("inp-t").value);
        const type = document.getElementById("inp-itype").value;
        if (isNaN(p) || isNaN(r) || isNaN(t) || p < 0 || r < 0 || t < 0)
          return showResult("Enter valid positive values.", "error");
        let interest, total;
        if (type === "simple") {
          interest = (p * r * t) / 100;
          total = p + interest;
        } else {
          total = p * Math.pow(1 + r / 100, t);
          interest = total - p;
        }
        showResult(
          `Type: ${type === "simple" ? "Simple" : "Compound"} Interest\nPrincipal: $${p.toFixed(2)}\nInterest: <strong>$${interest.toFixed(2)}</strong>\nTotal Amount: <strong>$${total.toFixed(2)}</strong>`,
        );
      });
      break;
    }

    case "bmi-calc": {
      modalBody.innerHTML =
        `<div class="modal-input-row">
        ${inputGroup("Weight (kg)", "inp-w", "number", "e.g. 70")}
        ${inputGroup("Height (cm)", "inp-h", "number", "e.g. 175")}
      </div>` + runBtn("Calculate BMI");
      document.getElementById("modal-run-btn").addEventListener("click", () => {
        const w = parseFloat(document.getElementById("inp-w").value);
        const h = parseFloat(document.getElementById("inp-h").value);
        if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0)
          return showResult("Enter valid weight and height.", "error");
        const bmi = w / Math.pow(h / 100, 2);
        let cat;
        if (bmi < 18.5) cat = "Underweight";
        else if (bmi < 25) cat = "Normal weight ✅";
        else if (bmi < 30) cat = "Overweight";
        else cat = "Obese";
        showResult(
          `BMI: <strong>${bmi.toFixed(1)}</strong>\nCategory: <strong>${cat}</strong>`,
        );
      });
      break;
    }

    case "leap-year": {
      modalBody.innerHTML =
        inputGroup("Enter a Year", "inp-year", "number", "e.g. 2024") +
        runBtn("Check");
      document.getElementById("modal-run-btn").addEventListener("click", () => {
        const y = parseInt(document.getElementById("inp-year").value);
        if (isNaN(y) || y < 1)
          return showResult("Enter a valid year.", "error");
        const isLeap = (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
        showResult(
          isLeap
            ? `${y} is a <strong>Leap Year</strong> ✅`
            : `${y} is <strong>NOT a Leap Year</strong> ❌`,
          isLeap ? "success" : "info",
        );
      });
      break;
    }

    case "voting-age": {
      modalBody.innerHTML =
        inputGroup("Enter Your Age", "inp-vage", "number", "e.g. 17") +
        runBtn("Check Eligibility");
      document.getElementById("modal-run-btn").addEventListener("click", () => {
        const age = parseInt(document.getElementById("inp-vage").value);
        if (isNaN(age) || age < 0)
          return showResult("Enter a valid age.", "error");
        if (age >= 18)
          showResult(
            `Age ${age}: You are <strong>eligible to vote</strong> 🗳️`,
            "success",
          );
        else
          showResult(
            `Age ${age}: You are <strong>not eligible</strong> to vote. ${18 - age} year(s) to go!`,
            "info",
          );
      });
      break;
    }

    //  SECTION 3

    case "sum-array": {
      modalBody.innerHTML =
        inputGroup(
          "Enter numbers (comma-separated)",
          "inp-arr",
          "text",
          "e.g. 10, 20, 30, 40",
        ) + runBtn("Calculate Sum");
      document.getElementById("modal-run-btn").addEventListener("click", () => {
        const arr = parseNumArray(document.getElementById("inp-arr").value);
        if (!arr.length)
          return showResult(
            "Enter valid numbers separated by commas.",
            "error",
          );
        const sum = arr.reduce((a, b) => a + b, 0);
        showResult(`Array: [${arr.join(", ")}]\nSum: <strong>${sum}</strong>`);
      });
      break;
    }

    case "average-score": {
      modalBody.innerHTML =
        inputGroup(
          "Enter scores (comma-separated)",
          "inp-scores",
          "text",
          "e.g. 85, 90, 78, 92",
        ) + runBtn("Calculate Average");
      document.getElementById("modal-run-btn").addEventListener("click", () => {
        const arr = parseNumArray(document.getElementById("inp-scores").value);
        if (!arr.length)
          return showResult("Enter valid scores separated by commas.", "error");
        const avg = arr.reduce((a, b) => a + b, 0) / arr.length;
        showResult(
          `Scores: [${arr.join(", ")}]\nAverage: <strong>${avg.toFixed(2)}</strong>`,
        );
      });
      break;
    }

    case "largest-number": {
      modalBody.innerHTML =
        inputGroup(
          "Enter numbers (comma-separated)",
          "inp-larr",
          "text",
          "e.g. 3, 99, 7, 42",
        ) + runBtn("Find Largest");
      document.getElementById("modal-run-btn").addEventListener("click", () => {
        const arr = parseNumArray(document.getElementById("inp-larr").value);
        if (!arr.length) return showResult("Enter valid numbers.", "error");
        showResult(
          `Array: [${arr.join(", ")}]\nLargest: <strong>${Math.max(...arr)}</strong>`,
        );
      });
      break;
    }

    case "remove-duplicates": {
      modalBody.innerHTML =
        inputGroup(
          "Enter values (comma-separated)",
          "inp-dupes",
          "text",
          "e.g. 1, 2, 2, 3, 3, 4",
        ) + runBtn("Remove Duplicates");
      document.getElementById("modal-run-btn").addEventListener("click", () => {
        const raw = document.getElementById("inp-dupes").value;
        if (!raw.trim()) return showResult("Enter some values.", "error");
        const arr = raw.split(",").map((s) => s.trim());
        const unique = [...new Set(arr)];
        showResult(
          `Original: [${arr.join(", ")}]\nUnique:   [${unique.join(", ")}]\nRemoved ${arr.length - unique.length} duplicate(s)`,
        );
      });
      break;
    }

    case "sort-numbers": {
      modalBody.innerHTML =
        inputGroup(
          "Enter numbers (comma-separated)",
          "inp-sort",
          "text",
          "e.g. 5, 1, 8, 3, 9",
        ) + runBtn("Sort");
      document.getElementById("modal-run-btn").addEventListener("click", () => {
        const arr = parseNumArray(document.getElementById("inp-sort").value);
        if (!arr.length) return showResult("Enter valid numbers.", "error");
        const asc = [...arr].sort((a, b) => a - b);
        const desc = [...arr].sort((a, b) => b - a);
        showResult(
          `Original:   [${arr.join(", ")}]\nAscending:  [${asc.join(", ")}]\nDescending: [${desc.join(", ")}]`,
        );
      });
      break;
    }

    case "count-occurrence": {
      modalBody.innerHTML =
        inputGroup(
          "Enter values (comma-separated)",
          "inp-oarr",
          "text",
          "e.g. a, b, a, c, a, b",
        ) +
        inputGroup("Value to count", "inp-oval", "text", "e.g. a") +
        runBtn("Count");
      document.getElementById("modal-run-btn").addEventListener("click", () => {
        const raw = document.getElementById("inp-oarr").value;
        const val = document.getElementById("inp-oval").value.trim();
        if (!raw.trim() || !val)
          return showResult("Fill in both fields.", "error");
        const arr = raw.split(",").map((s) => s.trim());
        const count = arr.filter((v) => v === val).length;
        showResult(
          `Array: [${arr.join(", ")}]\nValue "${val}" appears <strong>${count}</strong> time(s)`,
        );
      });
      break;
    }

    case "filter-even": {
      modalBody.innerHTML =
        inputGroup(
          "Enter numbers (comma-separated)",
          "inp-even",
          "text",
          "e.g. 1, 2, 3, 4, 5, 6",
        ) + runBtn("Filter Even");
      document.getElementById("modal-run-btn").addEventListener("click", () => {
        const arr = parseNumArray(document.getElementById("inp-even").value);
        if (!arr.length) return showResult("Enter valid numbers.", "error");
        const evens = arr.filter((n) => n % 2 === 0);
        showResult(
          `Original: [${arr.join(", ")}]\nEven numbers: <strong>[${evens.join(", ")}]</strong>`,
        );
      });
      break;
    }

    case "merge-arrays": {
      modalBody.innerHTML =
        inputGroup(
          "Array 1 (comma-separated)",
          "inp-ma1",
          "text",
          "e.g. 1, 2, 3",
        ) +
        inputGroup(
          "Array 2 (comma-separated)",
          "inp-ma2",
          "text",
          "e.g. 4, 5, 6",
        ) +
        runBtn("Merge");
      document.getElementById("modal-run-btn").addEventListener("click", () => {
        const r1 = document.getElementById("inp-ma1").value;
        const r2 = document.getElementById("inp-ma2").value;
        if (!r1.trim() || !r2.trim())
          return showResult("Fill in both arrays.", "error");
        const a1 = r1.split(",").map((s) => s.trim());
        const a2 = r2.split(",").map((s) => s.trim());
        const merged = [...a1, ...a2];
        showResult(
          `Array 1: [${a1.join(", ")}]\nArray 2: [${a2.join(", ")}]\nMerged:  <strong>[${merged.join(", ")}]</strong>`,
        );
      });
      break;
    }

    //  SECTION 4

    case "student-object": {
      modalBody.innerHTML =
        `<div class="modal-input-row">
        ${inputGroup("Name", "inp-sname", "text", "e.g. John")}
        ${inputGroup("Age", "inp-sage", "number", "e.g. 20")}
      </div>
      ${inputGroup("Grade", "inp-sgrade", "text", "e.g. A")}` +
        runBtn("Create Object");
      document.getElementById("modal-run-btn").addEventListener("click", () => {
        const name = document.getElementById("inp-sname").value.trim();
        const age = document.getElementById("inp-sage").value.trim();
        const grade = document.getElementById("inp-sgrade").value.trim();
        if (!name || !age || !grade)
          return showResult("Please fill all fields.", "error");
        const student = { name, age: Number(age), grade };
        modalResult.innerHTML = `<div class="json-output">${JSON.stringify(student, null, 2)}</div>`;
      });
      break;
    }

    case "key-checker": {
      modalBody.innerHTML =
        `<div class="modal-input-group">
        <label for="inp-json">Object (JSON)</label>
        <textarea id="inp-json" placeholder='e.g. { "name": "John", "age": 25 }'></textarea>
      </div>` +
        inputGroup("Key to check", "inp-key", "text", "e.g. name") +
        runBtn("Check Key");
      document.getElementById("modal-run-btn").addEventListener("click", () => {
        const raw = document.getElementById("inp-json").value;
        const key = document.getElementById("inp-key").value.trim();
        if (!raw.trim() || !key)
          return showResult("Fill in both fields.", "error");
        try {
          const obj = JSON.parse(raw);
          if (key in obj)
            showResult(
              `✅ Key "<strong>${key}</strong>" exists! Value: ${JSON.stringify(obj[key])}`,
              "success",
            );
          else
            showResult(
              `❌ Key "<strong>${key}</strong>" does not exist in the object.`,
              "error",
            );
        } catch {
          showResult("Invalid JSON. Make sure to use double quotes.", "error");
        }
      });
      break;
    }

    case "contact-book": {
      let contacts = {};
      modalBody.innerHTML = `<div class="modal-input-row">
        ${inputGroup("Name", "inp-cname", "text", "e.g. Alice")}
        ${inputGroup("Phone", "inp-cphone", "text", "e.g. 555-1234")}
      </div>
      <div class="modal-btn-row">
        <button class="modal-btn modal-btn-primary" id="btn-add-contact">Add Contact</button>
        <button class="modal-btn modal-btn-secondary" id="btn-search-contact">Search</button>
      </div>
      <div class="contact-list" id="contact-list"></div>`;

      const renderContacts = () => {
        const list = document.getElementById("contact-list");
        const keys = Object.keys(contacts);
        if (!keys.length) {
          list.innerHTML = "";
          modalResult.innerHTML = "";
          return;
        }
        list.innerHTML = keys
          .map(
            (name) => `<div class="contact-item">
          <span>${name}: ${contacts[name]}</span>
          <span class="material-symbols-outlined remove-contact" data-name="${name}" style="font-size:18px;color:#ef4444;cursor:pointer;">delete</span>
        </div>`,
          )
          .join("");
        list.querySelectorAll(".remove-contact").forEach((btn) => {
          btn.addEventListener("click", () => {
            delete contacts[btn.dataset.name];
            renderContacts();
          });
        });
        showResult(`${keys.length} contact(s) in book`, "info");
      };

      document
        .getElementById("btn-add-contact")
        .addEventListener("click", () => {
          const name = document.getElementById("inp-cname").value.trim();
          const phone = document.getElementById("inp-cphone").value.trim();
          if (!name || !phone)
            return showResult("Enter name and phone.", "error");
          contacts[name] = phone;
          document.getElementById("inp-cname").value = "";
          document.getElementById("inp-cphone").value = "";
          renderContacts();
        });

      document
        .getElementById("btn-search-contact")
        .addEventListener("click", () => {
          const name = document.getElementById("inp-cname").value.trim();
          if (!name) return showResult("Enter a name to search.", "error");
          if (contacts[name])
            showResult(
              `Found: <strong>${name}</strong> → ${contacts[name]}`,
              "success",
            );
          else showResult(`Contact "${name}" not found.`, "error");
        });
      break;
    }

    case "price-object": {
      let items = {};
      modalBody.innerHTML = `<div class="modal-input-row">
        ${inputGroup("Item Name", "inp-pname", "text", "e.g. Shirt")}
        ${inputGroup("Price ($)", "inp-pprice", "number", "e.g. 25")}
      </div>
      <div class="modal-btn-row">
        <button class="modal-btn modal-btn-primary" id="btn-add-price">Add Item</button>
        <button class="modal-btn modal-btn-secondary" id="btn-calc-total">Calculate Total</button>
      </div>
      <div class="price-rows-container" id="price-rows"></div>`;

      const renderPriceItems = () => {
        const container = document.getElementById("price-rows");
        const keys = Object.keys(items);
        container.innerHTML = keys
          .map(
            (k) => `<div class="price-row">
          <input type="text" value="${k}" disabled style="flex:1;" />
          <input type="text" value="$${items[k].toFixed(2)}" disabled style="flex:1;" />
          <span class="material-symbols-outlined remove-price" data-key="${k}" style="cursor:pointer;color:#ef4444;font-size:20px;">close</span>
        </div>`,
          )
          .join("");
        container.querySelectorAll(".remove-price").forEach((btn) => {
          btn.addEventListener("click", () => {
            delete items[btn.dataset.key];
            renderPriceItems();
          });
        });
      };

      document.getElementById("btn-add-price").addEventListener("click", () => {
        const name = document.getElementById("inp-pname").value.trim();
        const price = parseFloat(document.getElementById("inp-pprice").value);
        if (!name || isNaN(price) || price < 0)
          return showResult("Enter valid item name and price.", "error");
        items[name] = price;
        document.getElementById("inp-pname").value = "";
        document.getElementById("inp-pprice").value = "";
        renderPriceItems();
      });

      document
        .getElementById("btn-calc-total")
        .addEventListener("click", () => {
          const keys = Object.keys(items);
          if (!keys.length) return showResult("Add items first.", "error");
          const total = keys.reduce((sum, k) => sum + items[k], 0);
          const breakdown = keys
            .map((k) => `  ${k}: $${items[k].toFixed(2)}`)
            .join("\n");
          showResult(
            `${breakdown}\n\nTotal: <strong>$${total.toFixed(2)}</strong>`,
          );
        });
      break;
    }

    case "shopping-cart": {
      let cart = [];
      modalBody.innerHTML = `<div class="modal-input-row">
        ${inputGroup("Item", "inp-cartitem", "text", "e.g. Laptop")}
        ${inputGroup("Price ($)", "inp-cartprice", "number", "e.g. 999")}
      </div>
      <button class="modal-btn modal-btn-primary" id="btn-add-cart">Add to Cart</button>
      <div class="cart-list" id="cart-list"></div>
      <div class="cart-total" id="cart-total"></div>`;

      const renderCart = () => {
        const list = document.getElementById("cart-list");
        const totalEl = document.getElementById("cart-total");
        if (!cart.length) {
          list.innerHTML = "";
          totalEl.textContent = "";
          modalResult.innerHTML = "";
          return;
        }
        list.innerHTML = cart
          .map(
            (item, i) => `<div class="cart-item">
          <span>${item.name} — $${item.price.toFixed(2)}</span>
          <span class="material-symbols-outlined remove-item" data-index="${i}" style="font-size:18px;color:#ef4444;cursor:pointer;">delete</span>
        </div>`,
          )
          .join("");
        const total = cart.reduce((s, i) => s + i.price, 0);
        totalEl.textContent = `Total: $${total.toFixed(2)}`;
        list.querySelectorAll(".remove-item").forEach((btn) => {
          btn.addEventListener("click", () => {
            cart.splice(Number(btn.dataset.index), 1);
            renderCart();
          });
        });
        showResult(
          `${cart.length} item(s) in cart — Total: $${total.toFixed(2)}`,
          "info",
        );
      };

      document.getElementById("btn-add-cart").addEventListener("click", () => {
        const name = document.getElementById("inp-cartitem").value.trim();
        const price = parseFloat(
          document.getElementById("inp-cartprice").value,
        );
        if (!name || isNaN(price) || price < 0)
          return showResult("Enter valid item and price.", "error");
        cart.push({ name, price });
        document.getElementById("inp-cartitem").value = "";
        document.getElementById("inp-cartprice").value = "";
        renderCart();
      });
      break;
    }

    case "json-formatter": {
      modalBody.innerHTML =
        `<div class="modal-input-group">
        <label for="inp-rawjson">Paste Raw JSON</label>
        <textarea id="inp-rawjson" rows="5" placeholder='e.g. {"name":"John","age":25,"skills":["JS","CSS"]}'></textarea>
      </div>` + runBtn("Format JSON");
      document.getElementById("modal-run-btn").addEventListener("click", () => {
        const raw = document.getElementById("inp-rawjson").value;
        if (!raw.trim()) return showResult("Paste some JSON.", "error");
        try {
          const parsed = JSON.parse(raw);
          const formatted = JSON.stringify(parsed, null, 2);
          modalResult.innerHTML = `<div class="json-output">${formatted}</div>`;
        } catch {
          showResult("Invalid JSON. Please check your input.", "error");
        }
      });
      break;
    }

    case "key-counter": {
      modalBody.innerHTML =
        `<div class="modal-input-group">
        <label for="inp-kcjson">Object (JSON)</label>
        <textarea id="inp-kcjson" rows="4" placeholder='e.g. {"a":1, "b":2, "c":3}'></textarea>
      </div>` + runBtn("Count Keys");
      document.getElementById("modal-run-btn").addEventListener("click", () => {
        const raw = document.getElementById("inp-kcjson").value;
        if (!raw.trim()) return showResult("Paste some JSON.", "error");
        try {
          const obj = JSON.parse(raw);
          const keys = Object.keys(obj);
          showResult(
            `Keys: [${keys.map((k) => `"${k}"`).join(", ")}]\nTotal Keys: <strong>${keys.length}</strong>`,
          );
        } catch {
          showResult("Invalid JSON.", "error");
        }
      });
      break;
    }

    //  SECTION 5

    case "click-counter": {
      let count = 0;
      modalBody.innerHTML = `<div class="click-count-display" id="click-display">0</div>
      <div class="modal-btn-row" style="justify-content:center;">
        <button class="modal-btn modal-btn-primary" id="btn-click">Click Me!</button>
        <button class="modal-btn modal-btn-secondary" id="btn-reset-click">Reset</button>
      </div>`;
      document.getElementById("btn-click").addEventListener("click", () => {
        count++;
        document.getElementById("click-display").textContent = count;
      });
      document
        .getElementById("btn-reset-click")
        .addEventListener("click", () => {
          count = 0;
          document.getElementById("click-display").textContent = 0;
        });
      break;
    }

    case "char-counter": {
      modalBody.innerHTML = `<div class="modal-input-group">
        <label for="inp-chartext">Type something…</label>
        <textarea id="inp-chartext" rows="4" placeholder="Start typing here…"></textarea>
      </div>
      <div class="char-count-display" id="char-display">0 characters</div>`;
      document.getElementById("inp-chartext").addEventListener("input", (e) => {
        const len = e.target.value.length;
        document.getElementById("char-display").textContent =
          `${len} character${len !== 1 ? "s" : ""}`;
      });
      break;
    }

    case "todo-app": {
      let todos = [];
      modalBody.innerHTML = `<div class="modal-input-row">
        <div class="modal-input-group" style="flex:1;">
          <input type="text" id="inp-todo" placeholder="e.g. Buy groceries" />
        </div>
        <button class="modal-btn modal-btn-primary" id="btn-add-todo" style="height:fit-content;align-self:flex-end;">Add</button>
      </div>
      <div class="todo-list-container" id="todo-list"></div>`;

      const renderTodos = () => {
        const list = document.getElementById("todo-list");
        if (!todos.length) {
          list.innerHTML = "";
          modalResult.innerHTML = "";
          return;
        }
        list.innerHTML = todos
          .map(
            (
              t,
              i,
            ) => `<div class="todo-item ${t.done ? "done" : ""}" data-index="${i}">
          <div class="todo-left" data-index="${i}">
            <span class="material-symbols-outlined">${t.done ? "check_circle" : "circle"}</span>
            <span>${t.text}</span>
          </div>
          <span class="material-symbols-outlined todo-remove" data-index="${i}">delete</span>
        </div>`,
          )
          .join("");

        list.querySelectorAll(".todo-left").forEach((el) => {
          el.addEventListener("click", () => {
            todos[el.dataset.index].done = !todos[el.dataset.index].done;
            renderTodos();
          });
        });
        list.querySelectorAll(".todo-remove").forEach((el) => {
          el.addEventListener("click", () => {
            todos.splice(Number(el.dataset.index), 1);
            renderTodos();
          });
        });
        const done = todos.filter((t) => t.done).length;
        showResult(`${done}/${todos.length} completed`, "info");
      };

      document.getElementById("btn-add-todo").addEventListener("click", () => {
        const input = document.getElementById("inp-todo");
        const text = input.value.trim();
        if (!text) return;
        todos.push({ text, done: false });
        input.value = "";
        renderTodos();
      });

      document.getElementById("inp-todo").addEventListener("keydown", (e) => {
        if (e.key === "Enter") document.getElementById("btn-add-todo").click();
      });
      break;
    }

    case "modal-popup": {
      modalBody.innerHTML = `<button class="modal-btn modal-btn-primary" id="btn-trigger-popup">Show Popup</button>
      <div id="inner-popup" style="display:none;padding:1.5rem;border:1px solid #e2e8f0;border-radius:0.75rem;background:#f8fafc;text-align:center;row-gap:0.75rem;flex-direction:column;display:none;">
        <p style="font-weight:700;font-size:1.1rem;color:#020817;">🎉 Popup Triggered!</p>
        <p style="color:#64748b;margin-top:0.5rem;">This is a styled popup modal demonstration.</p>
        <button class="modal-btn modal-btn-secondary" id="btn-close-popup" style="margin-top:0.75rem;">Dismiss</button>
      </div>`;
      document
        .getElementById("btn-trigger-popup")
        .addEventListener("click", () => {
          document.getElementById("inner-popup").style.display = "flex";
          showResult("Popup is now visible! ✅", "success");
        });
      document
        .getElementById("btn-close-popup")
        .addEventListener("click", () => {
          document.getElementById("inner-popup").style.display = "none";
          showResult("Popup dismissed.", "info");
        });
      break;
    }

    case "form-validation": {
      modalBody.innerHTML =
        `
      <div class="modal-input-group">
        <label for="inp-vname">Full Name</label>
        <input type="text" id="inp-vname" placeholder="e.g. John Doe" />
        <span class="validation-msg" id="msg-vname"></span>
      </div>
      <div class="modal-input-group">
        <label for="inp-vemail">Email</label>
        <input type="text" id="inp-vemail" placeholder="e.g. john@email.com" />
        <span class="validation-msg" id="msg-vemail"></span>
      </div>
      <div class="modal-input-group">
        <label for="inp-vpass">Password</label>
        <input type="password" id="inp-vpass" placeholder="Min 8 chars, 1 upper, 1 number" />
        <span class="validation-msg" id="msg-vpass"></span>
      </div>` + runBtn("Submit");

      const validate = (id, msgId, fn) => {
        const el = document.getElementById(id);
        el.addEventListener("input", () => {
          const msgEl = document.getElementById(msgId);
          const result = fn(el.value);
          msgEl.textContent = result.msg;
          msgEl.className = `validation-msg ${result.valid ? "valid" : "invalid"}`;
        });
      };

      validate("inp-vname", "msg-vname", (v) => {
        if (!v.trim()) return { valid: false, msg: "Name is required." };
        if (v.trim().length < 2)
          return { valid: false, msg: "Name must be at least 2 characters." };
        return { valid: true, msg: "✓ Looks good!" };
      });
      validate("inp-vemail", "msg-vemail", (v) => {
        if (!v.trim()) return { valid: false, msg: "Email is required." };
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v))
          return { valid: false, msg: "Enter a valid email." };
        return { valid: true, msg: "✓ Valid email!" };
      });
      validate("inp-vpass", "msg-vpass", (v) => {
        if (!v) return { valid: false, msg: "Password is required." };
        if (v.length < 8) return { valid: false, msg: "Min 8 characters." };
        if (!/[A-Z]/.test(v))
          return { valid: false, msg: "Add an uppercase letter." };
        if (!/[0-9]/.test(v)) return { valid: false, msg: "Add a number." };
        return { valid: true, msg: "✓ Strong password!" };
      });

      document.getElementById("modal-run-btn").addEventListener("click", () => {
        const n = document.getElementById("inp-vname").value.trim();
        const e = document.getElementById("inp-vemail").value.trim();
        const p = document.getElementById("inp-vpass").value;
        const nameOk = n.length >= 2;
        const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
        const passOk = p.length >= 8 && /[A-Z]/.test(p) && /[0-9]/.test(p);
        if (nameOk && emailOk && passOk)
          showResult("✅ Form submitted successfully!", "success");
        else
          showResult("❌ Please fix errors above before submitting.", "error");
      });
      break;
    }

    default:
      modalBody.innerHTML = `<p style="color:#64748b;">Task UI not implemented yet.</p>`;
  }
}
