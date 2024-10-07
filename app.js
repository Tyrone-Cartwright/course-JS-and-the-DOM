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
