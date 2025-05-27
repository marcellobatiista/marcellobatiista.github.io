// Função para atualizar o contador de visitantes
async function updateVisitorCounter() {
    try {
        const response = await fetch('https://branwum.tech/visitas');
        const data = await response.json();
        
        if (data.status === 'success') {
            const counterElement = document.getElementById('visitor-counter');
            if (counterElement) {
                counterElement.textContent = data.data.visitantes_unicos;
            }
        }
    } catch (error) {
        console.error('Erro ao atualizar contador de visitantes:', error);
    }
}

// Inicializa o contador quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
    updateVisitorCounter();
}); 