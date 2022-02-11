let tentativas = 6;
let listaDinamica = [];
let palavraCategoria;
let palavraSorteada
//palavra que vai ser revelada e categoria
const palavras = [
  palavra001 = {
    nome: "AMAZONAS",
    categoria: "ESTADO"
  },
  palavra002 = {
    nome: "BAHIA",
    categoria: "ESTADO"
  },
  palavra003 = {
    nome: "TOCANTINS",
    categoria: "ESTADO"
  },
  palavra004 = {
    nome: "SERGIPE",
    categoria: "ESTADO"
  },
  palavra005 = {
    nome: "RORAIMA",
    categoria: "ESTADO"
  },
  palavra006 = {
    nome: "RONDÔNIA",
    categoria: "ESTADO"
  },
  palavra007 = {
    nome: "AMAPÁ",
    categoria: "ESTADO"
  },
  palavra008 = {
    nome: "PARÁ",
    categoria: "ESTADO"
  },
  palavra009 = {
    nome: "ALAGOAS",
    categoria: "ESTADO"
  },
  palavra010 = {
    nome: "GOIÁS",
    categoria: "ESTADO"
  },
  palavra011 = {
    nome: "BRASIL",
    categoria: "PAÍS"
  },
  palavra012 = {
    nome: "CHINA",
    categoria: "PAÍS"
  },
  palavra013 = {
    nome: "CHILE",
    categoria: "PAÍS"
  },
  palavra014 = {
    nome: "ITÁLIA",
    categoria: "PAÍS"
  },
  palavra015 = {
    nome: "JAPÃO",
    categoria: "PAÍS"
  },
  palavra016 = {
    nome: "AGENTINA",
    categoria: "PAÍS"
  },
  palavra017 = {
    nome: "INGLATERRA",
    categoria: "PAÍS"
  },
  palavra018 = {
    nome: "ESPANHA",
    categoria: "PAÍS"
  },
  palavra019 = {
    nome: "AUSTRALHA",
    categoria: "PAÍS"
  },
  palavra020 = {
    nome: "FRANÇA",
    categoria: "PAÍS"
  },
  palavra021 = {
    nome: "DAMASCO",
    categoria: "FRUTA"
  },
  palavra022 = {
    nome: "GOIABA",
    categoria: "FRUTA"
  },
  palavra023 = {
    nome: "AMORA",
    categoria: "FRUTA"
  },
  palavra024 = {
    nome: "LARANJA",
    categoria: "FRUTA"
  },
  palavra025 = {
    nome: "LIMÃO",
    categoria: "FRUTA"
  },
  palavra026 = {
    nome: "BANANA",
    categoria: "FRUTA"
  },
  palavra027 = {
    nome: "ABACAXI",
    categoria: "FRUTA"

  },
  palavra028 = {
    nome: "AMEIXA",
    categoria: "FRUTA"
  },
  palavra029 = {
    nome: "UVA",
    categoria: "FRUTA"
  },
  palavra030 = {
    nome: "MORANGO",
    categoria: "FRUTA"
  },
  palavra031 = {
    nome: "BODE",
    categoria: "ANIMAL"
  },
  palavra032 = {
    nome: "JUMENTO",
    categoria: "ANIMAL"
  },
  palavra033 = {
    nome: "CAVALO",
    categoria: "ANIMAL"
  },
  palavra034 = {
    nome: "COELHO",
    categoria: "ANIMAL"
  },
  palavra035 = {
    nome: "LHAMAS",
    categoria: "ANIMAL"
  },
  palavra036 = {
    nome: "ELEFANTE",
    categoria: "ANIMAL"
  },
  palavra037 = {
    nome: "CACHORRO",
    categoria: "ANIMAL"
  },
  palavra038 = {
    nome: "GATO",
    categoria: "ANIMAL"
  },
  palavra039 = {
    nome: "RATO",
    categoria: "ANIMAL"
  },
  palavra040 = {
    nome: "PATO",
    categoria: "ANIMAL"
  },
];

//sorteia uma das palavras para ser  descoberta
criarPalavras();
function criarPalavras() {
  const indexPalavra = parseInt(Math.random() * palavras.length)
  palavraSorteada = palavras[indexPalavra].nome;
  palavraCategoria = palavras[indexPalavra].categoria;
}

//faz a palavra aparecer na pagina
palavraNaTela();
function palavraNaTela() {
  const categoria = document.getElementById("categoria");
  categoria.innerHTML = palavraCategoria;
  const secreta = document.getElementById("palavra");
  secreta.innerHTML = "";
  //esconde a palavra e aparece por letra de acordo com as regras do jogo
  for (i = 0; i < palavraSorteada.length; i++) {
    if (listaDinamica[i] == undefined) {
      listaDinamica[i] = "&nbsp;"
      secreta.innerHTML = secreta.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
    } else {
      secreta.innerHTML = secreta.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
    }
  }
}

function marcarLetraEscolhida(letra) {
  // console.log(letra)
  document.getElementById("tecla-" + letra).disabled = true;
  if (tentativas > 0) {
    mudarstylebutton('tecla-' + letra)
    comparalistas(letra);
    palavraNaTela()
  }
}
//muda cor dos botões e a cor das letras
function mudarstylebutton(tecla) {
  document.getElementById(tecla).style.background = "#FFF";
  document.getElementById(tecla).style.color = 'red';
}
function comparalistas(letra) {
  const pos = palavraSorteada.indexOf(letra)
  if (pos < 0) {
    tentativas--
    carregaImagemForca();

    if (tentativas == 0) {
      abrirModal("Ops!!", "Não foii dessa vez... <br> A palavra era: <br>" + palavraSorteada)
    }
  }
  else {
    for (i = 0; i < palavraSorteada.length; i++) {

      if (palavraSorteada[i] == letra) {
        listaDinamica[i] = letra;
      }
    }
  }
  let vitoria = true;
  for (i = 0; i < palavraSorteada.length; i++) {
    if (palavraSorteada[i] != listaDinamica[i]) {
      vitoria = false;
    }
  }
  if (vitoria == true) {
    abrirModal("PARABÉNS!!!!!!", "Você Ganhou :)" + palavraSorteada)
  //  tentativas = 0
  }
}
//troca imagem de fundo (faz os membros aparecer)   
function carregaImagemForca() {
  switch (tentativas) {
    case 5:
      document.getElementById("imagem").style.background = "url('img/forca02.png')";
      break;
    case 4:
      document.getElementById("imagem").style.background = "url('img/forca03.png')";
      break;
    case 3:
      document.getElementById("imagem").style.background = "url('img/forca04.png')";
      break;
    case 2:
      document.getElementById("imagem").style.background = "url('img/forca05.png')";
      break;
    case 1:
      document.getElementById("imagem").style.background = "url('img/forca06.png')";
      break;
    case 0:
      document.getElementById("imagem").style.background = "url('img/forca07.png')";
      break;
    default:
      document.getElementById("imagem").style.background = "url('img/forca.png')";
      break;
  }
}
//aparece a div com uma mssg de vitória ou derrota
function abrirModal(titulo, menssagem) {
  let modalTitulo = document.getElementById("exampleModalLabel");
  modalTitulo.innerText = titulo;

  let modalbody = document.getElementById("modalbody");
  modalbody.innerHTML = menssagem;

  $("#modal").modal({
    show: true
  })
}
//recarregar a pagina
let reiniciar = document.getElementById("reiniciar")
reiniciar.addEventListener('click', function () {
  location.reload()
});

