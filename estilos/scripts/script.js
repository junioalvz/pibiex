// Espera o documento carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os links na página
    const links = document.querySelectorAll('a[href^="#"]');
    
    // Adiciona o evento de clique a cada link
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        // Previne o comportamento padrão do link
        e.preventDefault();
        
        // Obtém o alvo para onde deve rolar
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        // Se o elemento existir, rola até ele suavemente
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  });