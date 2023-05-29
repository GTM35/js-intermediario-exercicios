const inputs = document.querySelectorAll(".container input");

inputs.forEach((item) => {
  item.addEventListener("change", () => {
    if (item.value !== "") {
      item.classList.add("border-color-green");
    } else {
      item.classList.remove("border-color-green");
    }
  });
});
