// ADDING PAGE CONTENT

// Create variable to store the location on the page
const testimony = document.querySelector('.testimonials');
// Create a new heading element
const subHeading = document.createElement('h2');
// Add text to the heading
subHeading.textContent = 'Advice for New Udacity Students';
// Append the heading to the location on the page
testimony.appendChild(subHeading);
// Create HTML string
const newPara = '<p>My advice for new Udacity students is to take your time and enjoy the process</p>';
// Insert the HTML string after the heading
subHeading.insertAdjacentHTML('afterend', newPara);

// Update the Home Page Colors
const startNow = document.querySelector('#start-now');
startNow.style.backgroundColor = '#2015ff';
startNow.style.borderRadius = '5em';
// Select the element with the hero--homepage class
const heroHome = document.querySelector('.hero--homepage');
// Use the .add method on the element's classList property to add the new-hero class
heroHome.classList.add('new-hero');
// Use appendChild to add the element to the page
// document.body.appendChild(heroHome);
// Create a NodeList of all elements with the .card class
const cards = document.querySelectorAll('.card');
// Loop through the NodeList and add the new-card class to each element
for (let i = 0; i < cards.length; i++) {
  cards[i].classList.add('new-card');
}

// ADDING INTERACTIVITY
// document.addEventListener('click', function() {
//   const mainHeading = document.querySelector('h1');
  
//   mainHeading.style.backgroundColor = 'red';
// })

// document.addEventListener('DOMContentLoaded', function () {
// });
const arHeading = document.querySelector('h1');  

const sameText = arHeading.textContent;
  
const newText = 'Build an AR App';
 
arHeading.addEventListener('mouseover', function () {
  arHeading.textContent = newText;    
});
arHeading.addEventListener('mouseout', function () {
  arHeading.textContent = sameText;    
});  


const heroMod = document.querySelector('.hero__module');
function removeHeroMod() { 
  heroMod.lastElementChild.remove();
  document.removeEventListener('click', removeHeroMod);
}

document.addEventListener('click', removeHeroMod);

// function removeHeroMod() { 
//   heroMod.lastElementChild.remove();
// }