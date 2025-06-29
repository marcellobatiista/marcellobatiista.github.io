// Função para atualizar o contador de visitantes
async function updateVisitorCounter() {
    try {
        const response = await fetch('https://branwum.tech/visitas', {
            headers: {
                'Referer': window.location.origin + window.location.pathname
            }
        });
        const data = await response.json();
        
        if (data.status === 'success') {
            const counterElement = document.getElementById('visitor-counter');
            if (counterElement) {
                // Pega o total de visitantes únicos do domínio atual
                const visitantesUnicos = data.data.estatisticas_dominio.visitantes_unicos;
                counterElement.textContent = visitantesUnicos;
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