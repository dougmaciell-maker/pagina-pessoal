document.addEventListener('DOMContentLoaded', function() {
    // Aqui vai selecionar o botão e o parágrafo da mensagem pelo ID
    const mensagemBtn = document.getElementById('mensagemBtn');
    const mensagemParagrafo = document.getElementById('mensagem');

    // Aqui vai adicionar um "ouvinte de evento" (event listener) para o clique no botão
    mensagemBtn.addEventListener('click', function() {
        
        const fraseMotivacional = "O sucesso é a soma de pequenos esforços repetidos dia após dia, de Robert Collier";

        
        mensagemParagrafo.textContent = fraseMotivacional;

        // Se já ta dispoível, pode-se adicionar um efeito de toggle aqui
        if (mensagemParagrafo.style.display === 'none' || mensagemParagrafo.textContent === '') {
            mensagemParagrafo.style.display = 'block'; 
        } else {
            
        }
    });
});
