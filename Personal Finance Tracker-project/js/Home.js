function changeColor(element) {
    element.style.backgroundColor = '#c19ee0';
  }
  
  function revertColor(element) {
    element.style.backgroundColor = 'white';
  }


// Get all the feature elements
const features = document.querySelectorAll('.feature');

// Loop through each feature and add event listeners
features.forEach(feature => {
  // Add mouseover event listener
  feature.addEventListener('mouseover', () => {
    // Change background color or any other styles you want
    feature.style.backgroundColor = '#dec9e9'; // Change to desired color
  });

  // Add mouseout event listener
  feature.addEventListener('mouseout', () => {
    // Revert back to original styles
    feature.style.backgroundColor = '#fff'; // Revert to original color
  });
});

