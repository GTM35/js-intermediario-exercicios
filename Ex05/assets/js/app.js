const imagens = document.querySelectorAll(".slide");
const setaVoltar = document.getElementById("seta-voltar");
const setaAvancar = document.getElementById("seta-avancar");

let imagemAtual = 0;

setaAvancar.addEventListener("click", () => {
  if (imagemAtual === imagens.length - 1) {
    return;
  }
  imagemAtual++;

  esconderImagemAberta();
  mostrarImagem();
  mostrarOuEsconderSetar();
});

setaVoltar.addEventListener("click", () => {
  if (imagemAtual === 0) {
    return;
  }

  imagemAtual--;

  esconderImagemAberta();
  mostrarImagem();
  mostrarOuEsconderSetar();
});

function esconderImagemAberta() {
  const imagemaberta = document.querySelector(".mostrar");
  imagemaberta.classList.remove("mostrar");
}

function mostrarImagem() {
  imagens[imagemAtual].classList.add("mostrar");
}

function mostrarOuEsconderSetar() {
  const naoEhAPrimeiraImagem = imagemAtual !== 0;

  if (naoEhAPrimeiraImagem) {
    setaVoltar.classList.remove("opacidade");
  } else {
    setaVoltar.classList.add("opacidade");
  }

  const chegouNaUltimaImagem =
    (imagemAtual !== 0) & (imagemAtual === imagens.length - 1);

  if (chegouNaUltimaImagem) {
    setaAvancar.classList.add("opacidade");
  } else {
    setaAvancar.classList.remove("opacidade");
  }
}
