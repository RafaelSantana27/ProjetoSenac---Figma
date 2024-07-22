let mensagem = [
    'Eu sou o Batman!', 'Eu sou o Homem de Ferro!', 'Bora Bahea minha Porcaria!"', 'Corra do Barradão!', 'Lucas desistiu do PI', 'Senac é o mundo!', '20:30, hora de recarregar','Os notebook SENAC são muitos pequenos!', 'Lucas saiu da sala denovoooo!', 'Professora a aula já acabou!'
];




function exibirMsg() {

    let a = Math.floor(Math.random() * (mensagem.length));

// Atualizar h2 text0
    document.querySelector('h2').innerHTML = mensagem[a]

// Log do console
    console.log(mensagem)

}

