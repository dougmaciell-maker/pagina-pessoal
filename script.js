document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o botão e o parágrafo da mensagem pelo ID
    const mensagemBtn = document.getElementById('mensagemBtn');
    const mensagemParagrafo = document.getElementById('mensagem');

    // Adiciona um "ouvinte de evento" (event listener) para o clique no botão
    mensagemBtn.addEventListener('click', function() {
        // Define a mensagem que será exibida
        const fraseMotivacional = "O sucesso é a soma de pequenos esforços repetidos dia após dia, de Robert Collier";

        // Altera o texto do parágrafo da mensagem
        mensagemParagrafo.textContent = fraseMotivacional;

        // Se já estiver visível, pode-se adicionar um efeito de toggle aqui
        if (mensagemParagrafo.style.display === 'none' || mensagemParagrafo.textContent === '') {
            mensagemParagrafo.style.display = 'block'; 
        } else {
            
        }
    });
});