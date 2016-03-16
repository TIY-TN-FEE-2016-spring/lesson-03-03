'use strict';

// Look up the body element
const body = document.querySelector(`body`);

// Create a new heading element (not ont the page)
const header = document.createElement(`h2`);

// Set the text inside of our header
header.innerText = `Hello World`;

// Put the `header` element at the end of our body
body.appendChild(header);

// Look up a list of all elements that match the selector "li"
const animals = document.querySelectorAll(`li`);

// Loop through our list of animals elements
for (let i = 0; i < animals.length; i++) {
  // Set a variable called animal for our current "li" from the list
  const animal = animals[i];

  // Get the animal name and log to the console
  console.log(animal.querySelector(`.title`).innerText);

  // Get the animal weight turn it into a number and log to the console
  const weight = parseInt(animal.querySelector(`.weight`).innerText, 10);
  console.log(weight);
  // Get the animal weight converted to ounces and log to the console
  console.log(weight * 16);

  // Get the animal rating turn it into a number and log to the console
  const rating = parseInt(animal.querySelector(`.rating`).innerText, 10);
  console.log(rating);

  // Create a new perOunce div element
  const perOunce = document.createElement(`div`);

  // Set the text for perOunce to "Loading"
  perOunce.innerText = `Loading...`;

  // Add perOunce to the end of our current "li" element
  animal.appendChild(perOunce);

  // Wait for a bit
  window.setTimeout(() => {
    // Change the text of perOunce to show rating/ounces
    perOunce.innerText = `Cuteness per Ounce: ${rating / (weight * 16)}`;
  }, 2000);
}
