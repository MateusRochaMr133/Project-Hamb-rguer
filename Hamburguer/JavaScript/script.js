
/* Criando uma Variavel para pegar os cards dos hamburguers */
let cards = document.querySelector('.hamburguer-card')

/* Fetch - Faz a leitura de alguma informação(requisita) */
fetch('hamburguer.json')

/* Then faz a conversão e depois joga dentro de uma variavel no caso pegou o hamburguer do json e jogou dentro da variavel hamburguer, ele sempre aguarda a resposta do anterior */
.then(hamburguer => hamburguer.json())

/* ForEach = Laço de repetição,enquanto tiver posição no array ele vai trazendo as informações */
.then(info => info.forEach(hamburg => {
    
    /* Criar um card padrao */
    let card = document.createElement('div')

    /* Da uma classe css para o elemento especificado */
    cards.classList.add('hamburguer-card')

    /* Cria um elemento filho dentro do elemento especificado */
    card.appendChild("card")

    /* InnerHtml = insere qualquer conteudo dentro do html da tag */
    card.innerHTML = `
    <div class="hamburguer-card">
        <img src="./${hamburg.foto}.png" alt="card-hamburguer">
        <h2>${hamburg.tipo}</h2>
        <h3>${hamburg.nome}</h3>
        <p>${hamburg.preco}</p>
        <button>${hamburg.promocao}</button>
    </div>
    `
}))

/* `
        <span class = "posicaoP"> ${jogador.posicao}</span>

        <span class = "posicaoG"> ${jogador.posicao}</span>

        <img class = "escudo" src = "images/escudos/${jogador.escudo}.png" alt = ""/>

        <img class = "jogador" src = "images/jogadores/${jogador.foto}.png" alt=""/>

        <h3 class = "nomeJogador">${jogador.nome}</h3>

        <h4 class = "numero">${jogador.numero}</h4>
        ` */