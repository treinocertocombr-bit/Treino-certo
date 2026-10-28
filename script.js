
const exercicios = [
  {
    nome: "Supino reto com halteres", grupo: "peito",
    descricao: "Movimento de empurrar para trabalhar o peitoral.", video: "EZMYCLKuGow",
    passos: ["Sente-se no banco e apoie os halteres nas coxas antes de se deitar com controle.", "Mantenha os pés firmes no chão e as costas apoiadas no banco.", "Posicione os halteres ao lado do peito, com os punhos alinhados.", "Empurre para cima e desça devagar até uma amplitude confortável."],
    dica: "Controle a descida e mantenha os cotovelos ligeiramente abaixo dos ombros.",
    cuidado: "Comece leve e peça ajuda para posicionar os halteres se necessário."
  },
  {
    nome: "Supino inclinado com halteres", grupo: "peito",
    descricao: "Supino realizado em banco inclinado.", video: "WP1VLAt8hbM",
    passos: ["Ajuste o banco em uma inclinação moderada.", "Apoie as costas e mantenha os pés firmes.", "Empurre os halteres para cima mantendo os punhos alinhados.", "Desça devagar sem forçar os ombros."],
    dica: "Use uma inclinação confortável e mantenha o movimento controlado.",
    cuidado: "Não exagere na carga nem force uma amplitude dolorosa."
  },
  {
    nome: "Supino declinado", grupo: "peito",
    descricao: "Variação de supino em banco declinado.", video: "J2g6qPBJfqo",
    passos: ["Ajuste o banco e prenda os pés nos apoios.", "Deite-se com as costas apoiadas e segure o peso com firmeza.", "Desça o peso em direção à parte inferior do peito.", "Empurre para cima e devolva o peso ao suporte com cuidado."],
    dica: "Peça ao instrutor para conferir a regulagem do banco.",
    cuidado: "Não tente retirar ou devolver uma barra pesada sozinho."
  },
  {
    nome: "Crucifixo reto com halteres", grupo: "peito",
    descricao: "Abertura controlada dos braços para o peitoral.", video: "uDMmccuPVPQ",
    passos: ["Deite-se no banco com os pés apoiados.", "Segure os halteres acima do peito com cotovelos levemente dobrados.", "Abra os braços lentamente até uma amplitude confortável.", "Aproxime os halteres sem bater um no outro."],
    dica: "Imagine que está abraçando um barril, mantendo os cotovelos flexionados.",
    cuidado: "Não force o alongamento nem use carga excessiva."
  },
  {
    nome: "Crucifixo inclinado", grupo: "peito",
    descricao: "Abertura dos braços em banco inclinado.", video: "uy9Xk3SVrms",
    passos: ["Ajuste o banco e apoie as costas.", "Segure os halteres acima do peito.", "Abra os braços lentamente, sem forçar.", "Volte à posição inicial com controle."],
    dica: "Use pouca carga e priorize a execução.",
    cuidado: "Pare se sentir dor ou pinçamento no ombro."
  },
  {
    nome: "Crossover na polia", grupo: "peito",
    descricao: "Aproximação dos braços usando polias.", video: "jqTlJt3JXzQ",
    passos: ["Ajuste as polias e escolha uma carga leve.", "Fique no centro com um pé à frente.", "Traga as mãos à frente do corpo com os cotovelos levemente dobrados.", "Retorne devagar até um alongamento confortável."],
    dica: "Mantenha o tronco estável, sem balançar.",
    cuidado: "Confira os pinos e cabos antes de começar."
  },
  {
    nome: "Puxada frontal na polia", grupo: "costas",
    descricao: "Puxada vertical para trabalhar as costas.", video: "pIM_rHhluK8",
    passos: ["Ajuste o apoio das coxas.", "Segure a barra um pouco além da largura dos ombros.", "Puxe a barra em direção à parte alta do peito.", "Deixe a barra subir devagar."],
    dica: "Conduza os cotovelos para baixo sem encolher os ombros.",
    cuidado: "Puxe pela frente do corpo, nunca atrás da nuca."
  },
  {
    nome: "Barra fixa", grupo: "costas",
    descricao: "Puxada usando o peso corporal.", video: "thg6cGXSlvY",
    passos: ["Segure uma barra estável com pegada firme.", "Mantenha o corpo controlado, sem balançar.", "Puxe o corpo para cima até onde conseguir confortavelmente.", "Desça devagar."],
    dica: "Use uma máquina assistida se precisar.",
    cuidado: "Confira a estabilidade da barra e não salte para agarrá-la."
  },
  {
    nome: "Levantamento terra", grupo: "costas",
    descricao: "Movimento composto que exige técnica.", video: "50AkPBZwACQ",
    passos: ["Posicione os pés na largura dos quadris e a barra perto das canelas.", "Dobre quadris e joelhos mantendo a coluna neutra.", "Segure a barra e empurre o chão com os pés para ficar em pé.", "Leve o quadril para trás e baixe a barra com controle."],
    dica: "Aprenda primeiro com carga muito leve e supervisão.",
    cuidado: "Peça orientação presencial e não teste cargas máximas."
  },
  {
    nome: "Remada curvada", grupo: "costas",
    descricao: "Puxada horizontal com barra.", video: "TfxJMertfsw",
    passos: ["Segure a barra com os pés firmes.", "Flexione levemente os joelhos e incline o tronco com a coluna neutra.", "Puxe a barra em direção à parte inferior das costelas.", "Desça os braços lentamente."],
    dica: "Mantenha o abdômen firme e evite usar impulso.",
    cuidado: "Comece leve e peça ajuda se não conseguir manter a postura."
  },
  {
    nome: "Remada na máquina", grupo: "costas",
    descricao: "Puxada horizontal usando uma máquina.", video: "QyvIEdEHzHc",
    passos: ["Ajuste o banco e o apoio do peito.", "Segure as alças com firmeza.", "Puxe em direção ao tronco sem elevar os ombros.", "Estenda os braços devagar."],
    dica: "Leve os cotovelos para trás sem encolher os ombros.",
    cuidado: "Confira o ajuste e não solte as alças de repente."
  },
  {
    nome: "Remada unilateral com halter", grupo: "costas",
    descricao: "Remada de um lado por vez com apoio.", video: "m4h4jT9patY",
    passos: ["Apoie uma mão e um joelho em banco firme.", "Segure o halter com o braço estendido.", "Puxe o halter em direção ao quadril.", "Baixe devagar e troque de lado."],
    dica: "Evite girar o tronco durante a puxada.",
    cuidado: "Use banco estável e carga que consiga controlar."
  },
  {
    nome: "Agachamento livre", grupo: "pernas",
    descricao: "Movimento composto para pernas e glúteos.", video: "zgk71dUUt0Y",
    passos: ["Fique em pé com os pés aproximadamente na largura dos ombros.", "Mantenha o abdômen firme e dobre os joelhos levando o quadril para trás.", "Desça até onde consiga manter equilíbrio e postura.", "Empurre o chão para voltar a ficar em pé."],
    dica: "Pratique primeiro sem peso e respeite sua mobilidade.",
    cuidado: "Peça ao instrutor para conferir a técnica antes de adicionar carga."
  },
  {
    nome: "Leg press", grupo: "pernas",
    descricao: "Empurre a plataforma mantendo as costas apoiadas.", video: "nY8UsiAqwds",
    passos: ["Sente-se e apoie as costas e o quadril no encosto.", "Coloque os pés na plataforma.", "Dobre os joelhos devagar sem tirar o quadril do apoio.", "Empurre sem travar os joelhos e retorne com controle."],
    dica: "Mantenha os joelhos alinhados com os pés.",
    cuidado: "Confira as travas e não deixe o quadril sair do encosto."
  },
  {
    nome: "Cadeira extensora", grupo: "pernas",
    descricao: "Extensão dos joelhos para trabalhar o quadríceps.", video: "el3oHblB5DM",
    passos: ["Ajuste o encosto e a almofada nas canelas.", "Alinhe o eixo da máquina com os joelhos.", "Estenda as pernas de forma controlada.", "Retorne devagar sem deixar os pesos caírem."],
    dica: "Evite dar impulso e controle a descida.",
    cuidado: "Ajuste a máquina e não use carga que cause dor."
  },

  {
    nome: "Cadeira flexora", grupo: "pernas",
    descricao: "Trabalha a parte posterior das coxas.", video: "Zss6E3VU6X0",
    passos: ["Ajuste o assento e a almofada conforme a máquina.", "Posicione a almofada perto dos tornozelos.", "Flexione os joelhos sem levantar o quadril.", "Retorne devagar à posição inicial."],
    dica: "Mantenha o quadril apoiado e não balance o corpo.",
    cuidado: "Não force a amplitude nem continue se sentir dor."
  },
  {
    nome: "Stiff com halteres", grupo: "pernas",
    descricao: "Movimento de dobradiça do quadril para pernas e glúteos.", video: "u1E3_u2gJYE",
    passos: ["Segure halteres leves à frente das coxas.", "Leve o quadril para trás com os joelhos levemente flexionados.", "Desça os halteres perto das pernas até sentir alongamento confortável.", "Empurre o quadril para a frente e fique em pé."],
    dica: "Mantenha a coluna neutra e aprenda a técnica antes de aumentar a carga.",
    cuidado: "Peça orientação ao instrutor e não force a descida."
  },
  {
    nome: "Panturrilha em pé", grupo: "pernas",
    descricao: "Elevação controlada dos calcanhares.", video: "824pMjvGXgc",
    passos: ["Fique em pé em um equipamento estável.", "Eleve os calcanhares sem balançar.", "Faça uma pequena pausa no alto.", "Desça lentamente."],
    dica: "Faça o movimento controlado e use apoio para equilíbrio.",
    cuidado: "Não use superfícies instáveis nem dê impulso."
  },
  {
    nome: "Elevação lateral", grupo: "ombros",
    descricao: "Elevação dos braços para os lados.", video: "IwWvZ0rlNXs",
    passos: ["Segure halteres leves ao lado do corpo.", "Mantenha os cotovelos levemente dobrados.", "Eleve os braços para os lados até uma altura confortável.", "Desça devagar."],
    dica: "Use pouca carga e evite encolher os ombros.",
    cuidado: "Pare se sentir dor no ombro."
  },
  {
    nome: "Elevação frontal", grupo: "ombros",
    descricao: "Elevação dos braços à frente do corpo.", video: "NxSuojHZa8k",
    passos: ["Segure halteres à frente das coxas.", "Mantenha o tronco firme.", "Eleve os braços à frente até uma altura confortável.", "Desça lentamente."],
    dica: "Evite balançar o corpo para levantar os pesos.",
    cuidado: "Não force o movimento se houver desconforto."
  },
  {
    nome: "Crucifixo inverso", grupo: "ombros",
    descricao: "Trabalha a parte posterior dos ombros.", video: "5HDkxzxe400",
    passos: ["Use halteres leves e incline o tronco com as costas alinhadas.", "Deixe os braços abaixo dos ombros.", "Abra os braços para os lados com controle.", "Retorne devagar."],
    dica: "Mantenha o pescoço relaxado.",
    cuidado: "Não arredonde as costas nem use carga excessiva."
  },
  {
    nome: "Desenvolvimento com halteres", grupo: "ombros",
    descricao: "Empurrada vertical para os ombros.", video: "EuQAfhXBEvs",
    passos: ["Sente-se com as costas apoiadas.", "Posicione os halteres na altura dos ombros.", "Empurre para cima em uma trajetória confortável.", "Desça lentamente."],
    dica: "Mantenha os pés firmes e evite arquear a lombar.",
    cuidado: "Comece leve e não force a amplitude."
  },
  {
    nome: "Rotação externa do ombro", grupo: "ombros",
    descricao: "Movimento leve para os músculos estabilizadores do ombro.", video: "AevNFIX7lV4",
    passos: ["Use um elástico leve e mantenha o cotovelo junto ao corpo.", "Dobre o cotovelo aproximadamente a 90 graus.", "Gire o antebraço para fora sem afastar o cotovelo.", "Retorne lentamente."],
    dica: "Faça um movimento pequeno e controlado.",
    cuidado: "Se estiver fazendo reabilitação ou sentir dor, procure orientação profissional."
  },
  {
    nome: "Encolhimento com halteres", grupo: "ombros",
    descricao: "Elevação dos ombros para trabalhar o trapézio.", video: "RhGjwIUe16E",
    passos: ["Segure halteres ao lado do corpo.", "Mantenha os braços estendidos.", "Eleve os ombros em direção às orelhas.", "Baixe devagar."],
    dica: "Não gire os ombros em círculos.",
    cuidado: "Evite balançar o corpo ou perder o controle."
  },
  {
    nome: "Rosca direta", grupo: "biceps",
    descricao: "Flexão dos cotovelos com barra.", video: "Q8TqfD8E7BU",
    passos: ["Segure a barra com as palmas para a frente.", "Mantenha os cotovelos perto do tronco.", "Flexione os cotovelos para elevar a barra.", "Desça lentamente."],
    dica: "Mantenha o tronco quieto e os punhos alinhados.",
    cuidado: "Reduza a carga se precisar usar impulso."
  },
  {
    nome: "Rosca martelo", grupo: "biceps",
    descricao: "Rosca com pegada neutra usando halteres.", video: "0qkQy8V2FC0",
    passos: ["Segure os halteres com as palmas voltadas uma para a outra.", "Mantenha os cotovelos próximos ao corpo.", "Eleve os halteres sem girar os punhos.", "Desça de forma controlada."],
    dica: "Evite levantar os ombros durante o movimento.",
    cuidado: "Use uma carga que consiga controlar."
  },
  {
    nome: "Rosca alternada", grupo: "biceps",
    descricao: "Flexão de um braço de cada vez.", video: "S1HAcTVQVYE",
    passos: ["Segure um halter em cada mão.", "Mantenha os cotovelos perto do tronco.", "Eleve um halter de cada vez.", "Desça devagar e alterne os braços."],
    dica: "Não balance o corpo para ajudar.",
    cuidado: "Não force os punhos nem os cotovelos."
  },
  {
    nome: "Rosca Scott", grupo: "biceps",
    descricao: "Rosca com os braços apoiados no banco Scott.", video: "zpTK6eihdSA",
    passos: ["Ajuste o banco para apoiar os braços.", "Segure a barra ou os halteres.", "Flexione os cotovelos para elevar o peso.", "Desça devagar sem esticar bruscamente os cotovelos."],
    dica: "Mantenha os braços apoiados durante todo o exercício.",
    cuidado: "Não deixe os pesos caírem nem force os cotovelos."
  },
  {
    nome: "Rosca concentrada", grupo: "biceps",
    descricao: "Rosca unilateral realizada sentado.", video: "EEpvOQAAtRo",
    passos: ["Sente-se e segure um halter leve.", "Apoie o braço na parte interna da coxa.", "Eleve o halter flexionando o cotovelo.", "Desça devagar e troque de lado."],
    dica: "Evite movimentar o ombro para ajudar.",
    cuidado: "Não pressione uma região dolorida contra a coxa."
  },
  {
    nome: "Rosca na máquina", grupo: "biceps",
    descricao: "Flexão dos cotovelos em máquina específica.", video: "Q8TqfD8E7BU",
    passos: ["Ajuste o assento e os apoios.", "Segure as alças com os braços na posição indicada.", "Flexione os cotovelos de maneira controlada.", "Retorne devagar."],
    dica: "Peça ao instrutor para conferir a regulagem.",
    cuidado: "Não use uma carga que provoque dor."
  },
  {
    nome: "Tríceps nas paralelas", grupo: "triceps",
    descricao: "Exercício com o peso corporal para os tríceps.", video: "LJz40nTE_sI",
    passos: ["Segure as barras com firmeza.", "Estabilize o corpo e mantenha os ombros controlados.", "Dobre os cotovelos apenas até uma profundidade confortável.", "Empurre para voltar à posição inicial."],
    dica: "Uma máquina assistida pode ajudar quem está aprendendo.",
    cuidado: "Pode exigir bastante dos ombros; pare se sentir dor."
  },
  {
    nome: "Mergulho para tríceps", grupo: "triceps",
    descricao: "Extensão dos cotovelos usando um apoio firme.", video: "TCVj8cliLNo",
    passos: ["Use um apoio estável e posicione as mãos confortavelmente.", "Mantenha o tronco próximo ao apoio.", "Dobre os cotovelos um pouco, sem descer demais.", "Empurre o apoio para retornar."],
    dica: "Comece com amplitude curta e controlada.",
    cuidado: "Se incomodar os ombros, interrompa e peça orientação."
  },
  {
    nome: "Supino fechado", grupo: "triceps",
    descricao: "Variação de supino com pegada um pouco mais fechada.", video: "ZiemT4r4DcU",
    passos: ["Deite no banco com os pés firmes.", "Segure a barra com as mãos um pouco mais próximas que no supino comum.", "Desça a barra em direção ao peito com controle.", "Empurre para cima mantendo os punhos alinhados."],
    dica: "Mantenha os cotovelos controlados, sem apertá-los contra o corpo.",
    cuidado: "Peça acompanhamento e não use carga pesada sem ajuda."
  },

  {
    nome: "Tríceps na polia com corda", grupo: "triceps",
    descricao: "Extensão dos cotovelos usando a polia.", video: "2-LAMcpzODU",
    passos: ["Prenda a corda na polia alta e escolha uma carga leve.", "Mantenha os cotovelos junto ao corpo.", "Estenda os braços para baixo sem mover os cotovelos para a frente.", "Retorne lentamente à posição inicial."],
    dica: "Separe levemente as pontas da corda no final, sem forçar os punhos.",
    cuidado: "Não balance o tronco nem use uma carga que tire o controle."
  },
  {
    nome: "Tríceps francês com halter", grupo: "triceps",
    descricao: "Extensão dos cotovelos com um halter acima da cabeça.", video: "YbX7Wd8jQ-Q",
    passos: ["Segure um halter leve com as duas mãos.", "Eleve o halter acima da cabeça mantendo os cotovelos confortáveis.", "Dobre os cotovelos para baixar o peso atrás da cabeça.", "Estenda os braços para voltar à posição inicial."],
    dica: "Mantenha o abdômen firme e evite arquear as costas.",
    cuidado: "Use uma carga leve e não force os ombros ou cotovelos."
  },
  {
    nome: "Tríceps coice com halter", grupo: "triceps",
    descricao: "Extensão do cotovelo com o braço junto ao tronco.", video: "6SS6K3lAwZ8",
    passos: ["Apoie uma mão em um banco firme e incline o tronco.", "Mantenha o braço de trabalho junto ao corpo, com o cotovelo dobrado.", "Estenda o cotovelo levando o halter para trás.", "Dobre o cotovelo lentamente para retornar."],
    dica: "Mantenha o braço parado e movimente apenas o antebraço.",
    cuidado: "Use pouco peso e não gire o tronco."
  },
  {
    nome: "Abdominal tradicional", grupo: "abdomen",
    descricao: "Flexão controlada do tronco para trabalhar o abdômen.", video: "Xyd_fa5zoEU",
    passos: ["Deite-se de costas com os joelhos dobrados e os pés apoiados.", "Coloque as mãos sobre o peito ou ao lado da cabeça, sem puxar o pescoço.", "Eleve um pouco os ombros do chão contraindo o abdômen.", "Desça devagar."],
    dica: "Expire ao subir e mantenha o pescoço relaxado.",
    cuidado: "Não puxe a cabeça com as mãos nem force a lombar."
  },
  {
    nome: "Prancha abdominal", grupo: "abdomen",
    descricao: "Exercício isométrico para o abdômen e o tronco.", video: "pSHjTRCQxIw",
    passos: ["Apoie os antebraços e as pontas dos pés no chão.", "Mantenha os cotovelos alinhados abaixo dos ombros.", "Alinhe a cabeça, o tronco e as pernas.", "Respire normalmente e encerre antes de perder a postura."],
    dica: "Comece com períodos curtos e aumente conforme conseguir manter a técnica.",
    cuidado: "Não deixe a lombar afundar nem prenda a respiração."
  },
  {
    nome: "Elevação de pernas", grupo: "abdomen",
    descricao: "Elevação controlada das pernas para trabalhar o core.", video: "JB2oyawG9KI",
    passos: ["Deite-se de costas e mantenha a lombar confortável.", "Coloque as mãos ao lado do corpo para ter estabilidade.", "Eleve as pernas sem fazer balanço.", "Baixe devagar, parando antes de perder o controle da lombar."],
    dica: "Se estiver difícil, dobre os joelhos para facilitar.",
    cuidado: "Não force a lombar nem continue se sentir dor."
  },
  {
    nome: "Abdominal bicicleta", grupo: "abdomen",
    descricao: "Movimento alternado para o abdômen e os oblíquos.", video: "9FGilxCbdz8",
    passos: ["Deite-se de costas com os joelhos dobrados.", "Eleve levemente os ombros, sem puxar a cabeça.", "Aproxime o cotovelo de um lado do joelho oposto enquanto estende a outra perna.", "Alterne os lados lentamente."],
    dica: "Priorize a rotação controlada do tronco, sem acelerar.",
    cuidado: "Não force o pescoço nem a região lombar."
  },
  {
    nome: "Abdominal na polia", grupo: "abdomen",
    descricao: "Flexão do tronco usando resistência da polia.", video: "2fbujeH3F0E",
    passos: ["Prenda uma corda na polia alta e escolha uma carga leve.", "Ajoelhe-se de frente para a máquina e segure a corda.", "Contraia o abdômen e flexione o tronco suavemente.", "Retorne devagar sem puxar o movimento apenas com os braços."],
    dica: "Pense em aproximar as costelas do quadril.",
    cuidado: "Confira o cabo e o encaixe antes de começar."
  },
  {
    nome: "Dead bug", grupo: "abdomen",
    descricao: "Exercício de controle do core com braços e pernas alternados.", video: "I5xbsA71v1A",
    passos: ["Deite-se de costas com braços apontando para cima e joelhos dobrados.", "Mantenha o abdômen contraído e a lombar confortável.", "Estenda lentamente um braço e a perna oposta.", "Retorne e alterne os lados."],
    dica: "Faça movimentos pequenos se for difícil manter a postura.",
    cuidado: "Não arqueie a lombar para alcançar mais longe."
  }
];

// ELEMENTOS DA PÁGINA
const campoBusca = document.getElementById("busca");
const listaExercicios = document.getElementById("lista-exercicios");
const contador = document.getElementById("contador");
const mensagemVazia = document.getElementById("mensagem-vazia");
const botoesFiltro = document.querySelectorAll(".filtro");

let grupoAtual = "todos";

// Nomes que aparecem nos filtros e cartões
const nomesGrupos = {
  peito: "Peito",
  costas: "Costas",
  pernas: "Pernas",
  ombros: "Ombros",
  biceps: "Bíceps",
  triceps: "Tríceps",
  abdomen: "Abdômen e core"
};

// Evita que textos sejam interpretados como HTML
function escaparHTML(texto) {
  return String(texto).replace(/[&<>"']/g, caractere => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[caractere]);
}

// CRIA O CARTÃO DE CADA EXERCÍCIO
function criarCartao(exercicio, indice) {
  const passosHTML = exercicio.passos
    .map(passo => `<li>${escaparHTML(passo)}</li>`)
    .join("");

  return `
    <article class="exercicio-card">
      <div class="card-conteudo">
        <span class="tag-grupo">
          ${escaparHTML(nomesGrupos[exercicio.grupo])}
        </span>

        <h3>${escaparHTML(exercicio.nome)}</h3>

        <p class="descricao-exercicio">
          ${escaparHTML(exercicio.descricao)}
        </p>

        <h4 class="subtitulo-instrucoes">📋 Como executar</h4>

        <ol class="passos-exercicio">
          ${passosHTML}
        </ol>

        <div class="caixa-dica">
          <strong>💡 Dica</strong>
          <p>${escaparHTML(exercicio.dica)}</p>
        </div>

        <div class="caixa-cuidado">
          <strong>⚠️ Atenção</strong>
          <p>${escaparHTML(exercicio.cuidado)}</p>
        </div>

        <button
          class="botao-video"
          type="button"
          data-indice="${indice}"
          aria-expanded="false"
          aria-controls="video-${indice}">
          ▶ Ver demonstração
        </button>
      </div>

      <div class="video-container" id="video-${indice}" hidden></div>
    </article>
  `;
}

// PESQUISA E FILTROS
function atualizarExercicios() {
  const termo = campoBusca.value.trim().toLocaleLowerCase("pt-BR");

  const encontrados = exercicios
    .map((exercicio, indice) => ({ exercicio, indice }))
    .filter(({ exercicio }) => {
      const correspondeGrupo =
        grupoAtual === "todos" || exercicio.grupo === grupoAtual;

      const textoCompleto = [
        exercicio.nome,
        exercicio.grupo,
        exercicio.descricao,
        ...exercicio.passos,
        exercicio.dica,
        exercicio.cuidado
      ].join(" ").toLocaleLowerCase("pt-BR");

      return correspondeGrupo && textoCompleto.includes(termo);
    });

  listaExercicios.innerHTML = encontrados
    .map(({ exercicio, indice }) => criarCartao(exercicio, indice))
    .join("");

  contador.textContent =
    `${encontrados.length} ${encontrados.length === 1 ? "exercício encontrado" : "exercícios encontrados"}`;

  mensagemVazia.hidden = encontrados.length !== 0;

  // Cada botão abre ou fecha a demonstração do exercício
  listaExercicios.querySelectorAll(".botao-video").forEach(botao => {
    botao.addEventListener("click", () => {
      const indice = Number(botao.dataset.indice);
      const exercicio = exercicios[indice];
      const container = document.getElementById(`video-${indice}`);
      const estavaAberto = !container.hidden;

      container.hidden = estavaAberto;
      botao.setAttribute("aria-expanded", String(!estavaAberto));

      if (estavaAberto) {
        container.innerHTML = "";
        botao.textContent = "▶ Ver demonstração";
      } else {
        const idVideo = escaparHTML(exercicio.video);

        container.innerHTML = `
          <iframe
            src="https://www.youtube-nocookie.com/embed/${idVideo}"
            title="Demonstração: ${escaparHTML(exercicio.nome)}"
            loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
          </iframe>
          <a class="link-video"
             href="https://www.youtube.com/results?search_query=${encodeURIComponent(exercicio.nome + " execução correta musculação")}"
             target="_blank"
             rel="noopener noreferrer">
            Não carregou? Pesquisar este exercício no YouTube ↗
          </a>
        `;

        botao.textContent = "✕ Fechar demonstração";
      }
    });
  });
}

// ATUALIZA A LISTA QUANDO A PESSOA PESQUISA
campoBusca.addEventListener("input", atualizarExercicios);

// ATUALIZA A LISTA QUANDO UM GRUPO É SELECIONADO
botoesFiltro.forEach(botao => {
  botao.addEventListener("click", () => {
    grupoAtual = botao.dataset.grupo;

    botoesFiltro.forEach(filtro => {
      const selecionado = filtro === botao;
      filtro.classList.toggle("ativo", selecionado);

      if (selecionado) {
        filtro.setAttribute("aria-pressed", "true");
      } else {
        filtro.setAttribute("aria-pressed", "false");
      }
    });

    atualizarExercicios();
  });
});

// INICIA O SITE
atualizarExercicios();
