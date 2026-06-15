// Uma lista (Array) com várias curiosidades sobre esportes
const facts = [
    "A primeira Copa do Mundo de futebol foi realizada em 1930, no Uruguai.",
    "O basquete foi inventado em 1891 por um professor de educação física canadense chamado James Naismith.",
    "A partida de tênis mais longa da história durou 11 horas e 5 minutos, em Wimbledon (2010).",
    "A natação faz parte dos Jogos Olímpicos modernos desde a primeira edição, em 1896.",
    "Michael Phelps é o maior medalhista olímpico da história, com 28 medalhas, sendo 23 de ouro.",
    "O vôlei foi criado em 1895 nos Estados Unidos como uma alternativa menos cansativa que o basquete."
];

// Pegando os elementos do HTML usando os IDs
const button = document.getElementById('factButton');
const display = document.getElementById('factDisplay');

// Adicionando uma ação de 'clique' no botão
button.addEventListener('click', () => {
    // Sorteia um número aleatório baseado no tamanho da lista
    const randomIndex = Math.floor(Math.random() * facts.length);
    
    // Exibe a curiosidade na tela
    display.textContent = `"${facts[randomIndex]}"`;
});
