const textInput = document.getElementById('textInput');
const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', () => {
    textInput.disabled = !textInput.disabled;
    toggleButton.textContent = textInput.disabled ? "Enable Input" : "Disable Input";
});


const myLink = document.getElementById('myLink');
myLink.addEventListener('click', (event) => {
    event.preventDefault();
    console.log("Link was clicked, but navigation prevented.");
});


const myDropdown = document.getElementById('myDropdown');
myDropdown.addEventListener('change', () => {
    console.log("Selected value:", myDropdown.value);
});


const myForm = document.getElementById('myForm');
const emailInput = document.getElementById('emailInput');

myForm.addEventListener('submit', (event) => {
    if (!emailInput.validity.valid) {
        emailInput.setCustomValidity("Please enter a valid email address.");
    } else {
        emailInput.setCustomValidity("");
    }
});


document.getElementById('parent').addEventListener('click', () => {
    console.log("Parent Div clicked");
});

document.getElementById('child').addEventListener('click', () => {
    console.log("Child Paragraph clicked");
});


document.getElementById('child').addEventListener('click', (event) => {
    event.stopPropagation();
    console.log("Event bubbling stopped at Child Paragraph");
});


const buttonContainer = document.getElementById('buttonContainer');

buttonContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        console.log(`${event.target.textContent} was clicked.`);
    }
});


const addButton = document.getElementById('addButton');
const itemList = document.getElementById('itemList');

addButton.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${itemList.children.length + 1}`;
    itemList.appendChild(newItem);
});

itemList.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        console.log(event.target.textContent + " clicked");
    }
});


document.querySelector('form').addEventListener('submit', (event) => {
    const inputs = event.target.querySelectorAll('input');
    let isEmpty = false;
    
    inputs.forEach(input => {
        if (input.value.trim() === "") {
            isEmpty = true;
        }
    });

    if (isEmpty) {
        event.preventDefault();
        alert("Please fill in all fields.");
    }
});


const inputField = document.getElementById('inputField');

inputField.addEventListener('focus', () => {
    console.log("Input field is now focused.");
});
