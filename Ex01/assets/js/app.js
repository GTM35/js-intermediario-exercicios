function changeColor() {
  const element = document.querySelector(".color-blue");

  element.classList.add("color-yellow");
  element.classList.remove("color-blue");
  console.dir(element);
}
