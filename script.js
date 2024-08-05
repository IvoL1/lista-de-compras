const form = document.querySelector("form");
const inputTask = document.querySelector("#inputTask");
const ul = document.querySelector(".task-wrapper");
const alert = document.querySelector(".alert-action");
// ====== VARIABLES ======

// ====== SUBMIT ======
form.onsubmit = (e) => {
	e.preventDefault();
	createElement(inputTask.value);
	inputTask.value = "";
};

// ====== VALIDATION ======
inputTask.addEventListener("input", () => {
	inputTask.value = inputTask.value.replace(/\d+/g, "");
});

// ====== CREATE NEW TASK ELEMENT ======
function createElement(value) {
	const li = document.createElement("li");
	li.innerHTML = `
  <div onclick="checkElement(event)"></div>
	<span>${value}</span>
	<img onclick="deleteElement(event)"  class="trashs" src="assets/icons/trash.svg" alt="trash icon" />
  `;
	ul.appendChild(li);
}

// ====== CHECKED ELEMENT ======
function checkElement(e) {
	e.target.classList.toggle("checked");
}

// ====== DELETE ELEMENT (LI) ======
function deleteElement(e) {
	e.target.parentElement.remove();
	alert.classList.remove("hidden");
}

// ====== CLOSE ALERT ELEMENT ======
function closeElement() {
	alert.classList.add("hidden");
}
