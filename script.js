const exercicios = [
  // PEITO — 6 exercícios
  {
    nome: "Supino reto com halteres",
    grupo: "peito",
    descricao: "Movimento de empurrar que trabalha principalmente o peitoral.",
    video: "EZMYCLKuGow"
  },
  {
    nome: "Supino inclinado com halteres",
    grupo: "peito",
    descricao: "Variação do supino com o banco inclinado.",
    video: "WP1VLAt8hbM"
  },
  {
    nome: "Supino declinado",
    grupo: "peito",
    descricao: "Variação de supino em banco declinado.",
    video: "J2g6qPBJfqo"
  },
  {
    nome: "Crucifixo reto com halteres",
    grupo: "peito",
    descricao: "Abertura controlada dos braços para trabalhar o peitoral.",
    video: "uDMmccuPVPQ"
  },
  {
    nome: "Crucifixo inclinado",
    grupo: "peito",
    descricao: "Abertura dos braços realizada em banco inclinado.",
    video: "uy9Xk3SVrms"
  },
  {
    nome: "Crossover na polia",
    grupo: "peito",
    descricao: "Movimento de aproximar os braços usando as polias.",
    video: "jqTlJt3JXzQ"
  },

  // COSTAS — 6 exercícios
  {
    nome: "Puxada frontal na polia",
    grupo: "costas",
    descricao: "Puxada vertical para trabalhar os músculos das costas.",
    video: "pIM_rHhluK8"
  },
  {
    nome: "Barra fixa",
    grupo: "costas",
    descricao: "Puxada com o peso corporal; há versões assistidas.",
    video: "thg6cGXSlvY"
  },
  {
    nome: "Levantamento terra",
    grupo: "costas",
    descricao: "Movimento composto que exige técnica e orientação.",
    video: "50AkPBZwACQ"
  },
  {
    nome: "Remada curvada",
    grupo: "costas",
    descricao: "Puxada horizontal com barra.",
    video: "TfxJMertfsw"
  },
  {
    nome: "Remada na máquina",
    grupo: "costas",
    descricao: "Puxada horizontal com o corpo apoiado na máquina.",
    video: "QyvIEdEHzHc"
  },
  {
    nome: "Remada unilateral com halter",
    grupo: "costas",
    descricao: "Trabalho unilateral com apoio para manter a estabilidade.",
    video: "m4h4jT9patY"
  },

  // PERNAS — 6 exercícios
  {
    nome: "Agachamento livre",
    grupo: "pernas",
    descricao: "Movimento composto para pernas e glúteos.",
    video: "zgk71dUUt0Y"
  },
  {
    nome: "Leg press",
    grupo: "pernas",
    descricao: "Empurre a plataforma sem tirar as costas do apoio.",
    video: "nY8UsiAqwds"
  },
  {
    nome: "Cadeira extensora",
    grupo: "pernas",
    descricao: "Extensão dos joelhos para trabalhar o quadríceps.",
    video: "el3oHblB5DM"
  },
  {
    nome: "Cadeira flexora",
    grupo: "pernas",
    descricao: "Flexão dos joelhos para a parte posterior das coxas.",
    video: "Zss6E3VU6X0"
  },
  {
    nome: "Stiff com halteres",
    grupo: "pernas",
    descricao: "Movimento de dobradiça do quadril; comece com carga leve.",
    video: "u1E3_u2gJYE"
  },
  {
    nome: "Panturrilha em pé",
    grupo: "pernas",
    descricao: "Elevação controlada dos calcanhares.",
    video: "824pMjvGXgc"
  },

  // OMBROS — 6 exercícios
  {
    nome: "Elevação lateral",
    grupo: "ombros",
    descricao: "Elevação dos braços para os lados com carga controlada.",
    video: "IwWvZ0rlNXs"
  },
  {
    nome: "Elevação frontal com halteres",
    grupo: "ombros",
    descricao: "Elevação dos braços à frente do corpo.",
    video: "NxSuojHZa8k"
  },
  {
    nome: "Crucifixo inverso",
    grupo: "ombros",
    descricao: "Movimento que trabalha a parte posterior dos ombros.",
    video: "5HDkxzxe400"
  },
  {
    nome: "Desenvolvimento com halteres",
    grupo: "ombros",
    descricao: "Empurre os halteres para cima sem forçar as costas.",
    video: "EuQAfhXBEvs"
  },
  {
    nome: "Rotação externa do ombro",
    grupo: "ombros",
    descricao: "Movimento controlado para os músculos do manguito rotador.",
    video: "AevNFIX7lV4"
  },
  {
    nome: "Encolhimento com halteres",
    grupo: "ombros",
    descricao: "Elevação controlada dos ombros, trabalhando o trapézio.",
    video: "RhGjwIUe16E"
  },

  // BÍCEPS — 6 exercícios
  {
    nome: "Rosca direta",
    grupo: "biceps",
    descricao: "Flexão dos cotovelos sem balançar o tronco.",
    video: "Q8TqfD8E7BU"
  },
  {
    nome: "Rosca martelo",
    grupo: "biceps",
    descricao: "Rosca com pegada neutra, mantendo os punhos alinhados.",
    video: "0qkQy8V2FC0"
  },
  {
    nome: "Rosca alternada",
    grupo: "biceps",
    descricao: "Flexione um braço de cada vez, de forma controlada.",
    video: "S1HAcTVQVYE"
  },
  {
    nome: "Rosca Scott",
    grupo: "biceps",
    descricao: "Rosca com os braços apoiados no banco Scott.",
    video: "zpTK6eihdSA"
  },
  {
    nome: "Rosca concentrada",
    grupo: "biceps",
    descricao: "Variação sentada com o braço apoiado na coxa.",
    video: "EEpvOQAAtRo"
  },
  {
    nome: "Rosca direta na máquina",
    grupo: "biceps",
    descricao: "Flexão dos cotovelos usando a máquina apropriada.",
    video: "Q8TqfD8E7BU"
  },

  // TRÍCEPS — 6 exercícios
  {
    nome: "Tríceps nas paralelas",
    grupo: "triceps",
    descricao: "Exercício com o peso corporal; use assistência se necessário.",
    video: "LJz40nTE_sI"
  },
  {
    nome: "Mergulho para tríceps",
    grupo: "triceps",
    descricao: "Variação de extensão dos cotovelos com apoio.",
    video: "TCVj8cliLNo"
  },
  {
    nome: "Supino fechado",
    grupo: "triceps",
    descricao: "Variação de supino com pegada mais fechada.",
    video: "ZiemT4r4DcU"
  },
  {
    nome: "Tríceps testa",
    grupo: "triceps",
    descricao: "Extensão dos cotovelos deitado; use carga confortável.",
    video: "zznCYBVZOVA"
  },
  {
    nome: "Tríceps na polia com corda",
    grupo: "triceps",
    descricao: "Estenda os cotovelos sem balançar o corpo.",
    video: "dTqDKC0D6P4"
  },
  {
    nome: "Tríceps coice",
    grupo: "triceps",
    descricao: "Extensão do cotovelo mantendo o braço estável.",
    video: "PyKv23F-fVM"
  },

  // ABDÔMEN E CORE — 6 exercícios
  {
    nome: "Abdominal supra",
    grupo: "abdomen",
    descricao: "Elevação controlada da parte superior do tronco.",
    video: "7YxVRiATugo"
  },
  {
    nome: "Abdominal infra",
    grupo: "abdomen",
    descricao: "Movimento controlado para a região abdominal.",
    video: "ixJcUH8AlL8"
  },
  {
    nome: "Abdominal oblíquo",
    grupo: "abdomen",
    descricao: "Movimento que envolve os músculos oblíquos do abdômen.",
    video: "Smr8ipkN5A0"
  },
  {
    nome: "Prancha abdominal",
    grupo: "abdomen",
    descricao: "Mantenha o tronco alinhado e respire normalmente.",
    video: "qNRqGqESAWU"
  },
  {
    nome: "Abdominal bicicleta",
    grupo: "abdomen",
    descricao: "Movimento alternado, sem puxar o pescoço.",
    video: "apmprS8H1MY"
  },
  {
    nome: "Extensão lombar",
    grupo: "abdomen",
    descricao: "Exercício para a região lombar, com movimento controlado.",
    video: "z0rx9swRDR0"
  }
];

const nomesGrupos = {
  peito: "Peito",
  costas: "Costas",
  pernas: "Pernas",
  ombros: "Ombros",
  biceps: "Bíceps",
  triceps: "Tríceps",
  abdomen: "Abdômen e core"
};

const lista = document.querySelector("#lista-exercicios");
const busca = document.querySelector("#busca");
const filtros = document.querySelectorAll(".filtro");
const contador = document.querySelector("#contador");
const mensagemVazia = document.querySelector("#mensagem-vazia");

let grupoAtual = "todos";

function criarCartao(exercicio, indice) {
  const cartao = document.createElement("article");
  cartao.className = "exercicio-card";

  const conteudo = document.createElement("div");
  conteudo.className = "card-conteudo";

  const etiqueta = document.createElement("span");
  etiqueta.className = "tag-grupo";
  etiqueta.textContent = nomesGrupos[exercicio.grupo];

  const titulo = document.createElement("h3");
  titulo.textContent = exercicio.nome;

  const descricao = document.createElement("p");
  descricao.textContent = exercicio.descricao;

  const botao = document.createElement("button");
  botao.className = "botao-video";
  botao.type = "button";
  botao.textContent = "▶ Ver demonstração";
  botao.setAttribute("aria-expanded", "false");

  const areaVideo = document.createElement("div");
  areaVideo.className = "video-container";
  areaVideo.hidden = true;

  botao.addEventListener("click", () => {
    if (areaVideo.hidden) {
      const iframe = document.createElement("iframe");
      iframe.src =
        "https://www.youtube-nocookie.com/embed/" +
        encodeURIComponent(exercicio.video);
      iframe.title = "Demonstração: " + exercicio.nome;
      iframe.loading = "lazy";
      iframe.referrerPolicy = "strict-origin-when-cross-origin";
      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.allowFullscreen = true;

      const link = document.createElement("a");
      link.className = "link-video";
      link.href =
        "https://www.youtube.com/watch?v=" +
        encodeURIComponent(exercicio.video);
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = "Se o vídeo não abrir, assistir no YouTube ↗";

      areaVideo.replaceChildren(iframe, link);
      areaVideo.hidden = false;
      botao.textContent = "✕ Fechar vídeo";
      botao.setAttribute("aria-expanded", "true");
    } else {
      areaVideo.hidden = true;
      areaVideo.replaceChildren();
      botao.textContent = "▶ Ver demonstração";
      botao.setAttribute("aria-expanded", "false");
    }
  });

  conteudo.append(etiqueta, titulo, descricao, botao);
  cartao.append(conteudo, areaVideo);
  return cartao;
}

function atualizarLista() {
  const termo = busca.value.trim().toLocaleLowerCase("pt-BR");

  const encontrados = exercicios.filter((exercicio) => {
    const combinaGrupo =
      grupoAtual === "todos" || exercicio.grupo === grupoAtual;

    const texto = (
      exercicio.nome + " " +
      exercicio.descricao + " " +
      nomesGrupos[exercicio.grupo]
    ).toLocaleLowerCase("pt-BR");

    return combinaGrupo && texto.includes(termo);
  });

  lista.replaceChildren();

  encontrados.forEach((exercicio, indice) => {
    lista.appendChild(criarCartao(exercicio, indice));
  });

  contador.textContent =
    encontrados.length + (encontrados.length === 1
      ? " exercício encontrado"
      : " exercícios encontrados");

  mensagemVazia.hidden = encontrados.length !== 0;
}

filtros.forEach((botao) => {
  botao.addEventListener("click", () => {
    grupoAtual = botao.dataset.grupo;

    filtros.forEach((filtro) => {
      const selecionado = filtro === botao;
      filtro.classList.toggle("ativo", selecionado);
      filtro.setAttribute("aria-pressed", String(selecionado));
    });

    atualizarLista();
  });

  botao.setAttribute(
    "aria-pressed",
    String(botao.classList.contains("ativo"))
  );
});

busca.addEventListener("input", atualizarLista);

atualizarLista();