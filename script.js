
/* =================================
   GUIAFIT - FUNCIONALIDADES
================================= */

// Elementos do HTML
const campoBusca = document.querySelector("#busca");
const botoesFiltro = document.querySelectorAll(".filtro");
const cartoes = document.querySelectorAll(".exercicio-card");
const mensagemVazia = document.querySelector("#mensagem-vazia");

// Categoria selecionada atualmente
let grupoSelecionado = "todos";

/* =================================
   PESQUISA E FILTROS
================================= */

function filtrarExercicios() {
    // Texto digitado na pesquisa
    const textoBusca = campoBusca.value
        .trim()
        .toLocaleLowerCase("pt-BR");

    let quantidadeVisivel = 0;

    cartoes.forEach((cartao) => {
        // Informações de cada exercício
        const nome = cartao
            .querySelector("h3")
            .textContent
            .toLocaleLowerCase("pt-BR");

        const categoria = cartao
            .querySelector(".categoria")
            .textContent
            .toLocaleLowerCase("pt-BR");

        const descricao = cartao
            .querySelector(".card-conteudo > p:not(.categoria):not(.nivel)")
            .textContent
            .toLocaleLowerCase("pt-BR");

        const grupo = cartao.dataset.grupo;

        // Verifica se corresponde à pesquisa
        const correspondeTexto =
            nome.includes(textoBusca) ||
            categoria.includes(textoBusca) ||
            descricao.includes(textoBusca);

        // Verifica se corresponde ao grupo selecionado
        const correspondeGrupo =
            grupoSelecionado === "todos" ||
            grupo === grupoSelecionado;

        // Exibe somente os exercícios correspondentes
        if (correspondeTexto && correspondeGrupo) {
            cartao.hidden = false;
            quantidadeVisivel++;
        } else {
            cartao.hidden = true;
        }
    });

    // Mostra uma mensagem quando não há resultados
    mensagemVazia.hidden = quantidadeVisivel !== 0;
}

/* =================================
   CLIQUES NOS FILTROS
================================= */

botoesFiltro.forEach((botao) => {
    botao.addEventListener("click", () => {
        // Atualiza o grupo selecionado
        grupoSelecionado = botao.dataset.grupo;

        // Atualiza o botão visualmente selecionado
        botoesFiltro.forEach((outroBotao) => {
            const selecionado = outroBotao === botao;

            outroBotao.classList.toggle("ativo", selecionado);
            outroBotao.setAttribute(
                "aria-pressed",
                String(selecionado)
            );
        });

        // Aplica o filtro
        filtrarExercicios();
    });
});

/* =================================
   PESQUISA EM TEMPO REAL
================================= */

campoBusca.addEventListener("input", filtrarExercicios);

/* =================================
   INICIALIZAÇÃO
================================= */

// Define o estado inicial dos filtros
botoesFiltro.forEach((botao) => {
    botao.setAttribute(
        "aria-pressed",
        String(botao.dataset.grupo === "todos")
    );
});

// Mostra todos os exercícios inicialmente
filtrarExercicios();

console.log("GuiaFit carregado com sucesso!");
