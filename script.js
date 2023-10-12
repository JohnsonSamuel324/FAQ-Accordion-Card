// Learning from: https://www.freecodecamp.org/news/build-an-accordion-menu-using-html-css-and-javascript/
const container = document.getElementsByClassName("container");

// For every container in accordion
// Add a listener for click
// If clicked, add class active
for (i = 0; i < container.length; i++) {
  container[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
