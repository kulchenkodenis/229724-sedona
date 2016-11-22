var formlink = document.querySelector(".search-btn");
var formblock = document.querySelector(".true-form");

formlink.addEventListener("click", function(event) {
  event.preventDefault();
  formblock.classList.toggle("show-up");


});
