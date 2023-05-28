const element = document.getElementById("square");

element.addEventListener("click", () => {
  if (!element.classList.contains("color-blue")) {
    element.classList.add("color-blue");
  }
});
