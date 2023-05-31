const questions = document.querySelectorAll(".question");

questions.forEach((item) => {
  item.addEventListener("click", () => {
    removerItems();

    addItems(item);
  });
});

function addItems(item) {
  item.childNodes[1].childNodes[3].classList.add("mostrar");
  item.childNodes[3].childNodes[0].nextSibling.classList.add("aberta");
}

function removerItems() {
  let itemAtivo = document.querySelector(".mostrar");
  let setaAtiva = document.querySelector(".aberta");

  itemAtivo.classList.remove("mostrar");
  setaAtiva.classList.remove("aberta");
}
