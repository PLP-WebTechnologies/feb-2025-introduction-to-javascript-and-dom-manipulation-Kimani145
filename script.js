/*
>  - Write JavaScript that:
>  - Changes text content dynamically.
>  - Modifies CSS styles via JavaScript.
>  - Adds or removes an element when a button is clicked.
*/

//1. Changes text content dynamically
 const greeting = document.querySelector(".greeting");
 
 // Change text content dynamically
document.getElementById("Greeting").querySelector("h1").textContent = "Welcome to the World of JavaScript and DOM!";

// Modify CSS styles via JavaScript
document.getElementById("introduction").style.color = "blue";
document.getElementById("introduction").style.fontSize = "18px";

// Add or remove an element when a button is clicked
const button = document.createElement("button");
button.textContent = "Add/Remove Element";
document.body.appendChild(button);

let elementAdded = false;

button.addEventListener("click", () => {
    const exampleSection = document.getElementById("example");
    if (!elementAdded) {
        const newElement = document.createElement("p");
        newElement.id = "newElement";
        newElement.textContent = "This is a dynamically added paragraph!";
        exampleSection.appendChild(newElement);
        elementAdded = true;
    } else {
        const newElement = document.getElementById("newElement");
        if (newElement) {
            exampleSection.removeChild(newElement);
        }
        elementAdded = false;
    }
});