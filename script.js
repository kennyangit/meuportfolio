// Preenche o span com id 'current-year' no rodapé com o ano atual dinamicamente.
document.getElementById('current-year').textContent = new Date().getFullYear();

// Seleciona todos os links que apontam para âncoras internas (href="#secao")
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    // Adiciona um ouvinte de evento de clique
    anchor.addEventListener('click', function (e) {
        // Previne o comportamento padrão do link
        e.preventDefault();
        // Rola a tela até o elemento correspondente ao href e define a rolagem como suave (smooth scroll)
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Adiciona um evento de clique ao botão do menu móvel
document.getElementById('mobile-menu-btn').addEventListener('click', () => {
    // Alterna a classe Tailwind '-translate-x-full' na tag 'aside' (barra lateral),
    // mostrando ou ocultando o menu móvel.
    document.querySelector('aside').classList.toggle('-translate-x-full');
});