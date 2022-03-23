// validação do formulário para cadastrar novo Pokémon.
//Inputs.
const inputNome = document.querySelector("#nome");
const inputDescricao = document.querySelector("#descricao");
const inputTipo = document.querySelector("#tipo");
const inputImagem = document.querySelector("#imagem");
const inputAltura = document.querySelector("#altura");
const inputPeso = document.querySelector("#peso");
const inputCategoria = document.querySelector("#categoria");
const inputHabilidade = document.querySelector("#habilidade");

//Labels.
const labelNome = document.querySelector("#labelNome");
const labelDescricao = document.querySelector("#labelDescricao");
const labelTipo = document.querySelector("#labelTipo");
const labelImagem = document.querySelector("#labelImagem");
const labelAltura = document.querySelector("#labelAltura");
const labelPeso = document.querySelector("#labelPeso");
const labelCategoria = document.querySelector("#labelCategoria");
const labelHabilidade = document.querySelector("#labelHabilidade");

//Validando as entradas.
const buttonCadastrar = document.querySelector("#btnCadastrar");
let camposOk = false;

inputNome.addEventListener("keyup", () => {
  if (inputNome.value.length < 3) {
    labelNome.innerText = "Nome (Digite o nome do Pokémon)";
    labelNome.style.color = "rgb(161, 9, 34)";
    camposOk = false;
  } else {
    labelNome.innerText = "Nome";
    labelNome.style.color = "rgb(238, 196, 98)";
    camposOk = true;
  }
  validaButton();
});

inputDescricao.addEventListener("keyup", () => {
  if (inputDescricao.value.length < 10) {
    labelDescricao.innerText = "Descrição (Digite a descrição do Pokémon)";
    labelDescricao.style.color = "rgb(161, 9, 34)";
    camposOk = false;
  } else {
    labelDescricao.innerText = "Descrição";
    labelDescricao.style.color = "rgb(238, 196, 98)";
    camposOk = true;
  }
  validaButton();
});

inputTipo.addEventListener("keyup", () => {
  if (inputTipo.value.length < 3) {
    labelTipo.innerText = "Tipo (Digite o tipo do Pokémon)";
    labelTipo.style.color = "rgb(161, 9, 34)";
    camposOk = false;
  } else {
    labelTipo.innerText = "Tipo";
    labelTipo.style.color = "rgb(238, 196, 98)";
    camposOk = true;
  }
  validaButton();
});


inputImagem.addEventListener("keyup", () => {
  if (inputImagem.value.length == 0) {
    labelImagem.innerText = "Imagem (Insira o link da imagem do Pokémon)";
    labelImagem.style.color = "rgb(161, 9, 34)";
    camposOk = false;
  } else {
    labelImagem.innerText = "Imagem";
    labelImagem.style.color = "rgb(238, 196, 98)";
    camposOk = true;
  }
  validaButton();
});


inputAltura.addEventListener("keyup", () => {
  if (inputAltura.value.length < 3) {
    labelAltura.innerText = "Altura (Digite a altura - número e unidade de medida - do Pokémon)";
    labelAltura.style.color = "rgb(161, 9, 34)";
    camposOk = false;
  } else {
    labelAltura.innerText = "Altura";
    labelAltura.style.color = "rgb(238, 196, 98)";
    camposOk = true;
  }
  validaButton();
});


inputPeso.addEventListener("keyup", () => {
  if (inputPeso.value.length < 3) {
    labelPeso.innerText = "Peso (Digite o peso - número e unidade de medida - do Pokémon)";
    labelPeso.style.color = "rgb(161, 9, 34)";
    camposOk = false;
  } else {
    labelPeso.innerText = "Peso";
    labelPeso.style.color = "rgb(238, 196, 98)";
    camposOk = true;
  }
  validaButton();
});


inputCategoria.addEventListener("keyup", () => {
  if (inputCategoria.value.length < 3) {
    labelCategoria.innerText = "Categoria (Digite a categoria do Pokémon)";
    labelCategoria.style.color = "rgb(161, 9, 34)";
    camposOk = false;
  } else {
    labelCategoria.innerText = "Categoria";
    labelCategoria.style.color = "rgb(238, 196, 98)";
    camposOk = true;
  }
  validaButton();
});

inputHabilidade.addEventListener("keyup", () => {
  if (inputHabilidade.value.length < 3) {
    labelHabilidade.innerText = "Habilidade (Digite a habilidade do Pokémon)";
    labelHabilidade.style.color = "rgb(161, 9, 34)";
    camposOk = false;
  } else {
    labelHabilidade.innerText = "Habilidade";
    labelHabilidade.style.color = "rgb(238, 196, 98)";
    camposOk = true;
  }
  validaButton();
});

//Validando o botão.
const validaButton = () => {
  if (camposOk == false) {
    buttonCadastrar.setAttribute("disabled", "disabled");
    buttonCadastrar.classList.add("buttonDisable");
  } else {
    buttonCadastrar.removeAttribute("disabled", "disabled");
    buttonCadastrar.classList.remove("buttonDisable");
  }
};

validaButton();
