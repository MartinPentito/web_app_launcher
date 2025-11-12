// App principal limpia
class RiotLauncher {
  constructor() {
    this.currentView = 'aventura';
    this.gameManager = new GameManager();
    this.init();
  }

  async init() {
    await Utils.delay(1500);
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('app').style.display = 'flex';
    this.loadGame('aventura');
    Utils.showNotification('¡Listo!', 'success');
  }

  loadGame(viewName) {
    const gameMapping = {
      'aventura': 'mi-juego-aventura',
      'estrategia': 'mi-juego-estrategia', 
      'indie': 'mi-juego-indie',
      'accion': 'mi-juego-accion',
      'puzzle': 'mi-juego-puzzle'
    };

    const game = this.gameManager.getGameById(gameMapping[viewName]);
    const container = document.querySelector(`[data-game-id="${gameMapping[viewName]}"]`);
    
    if (!game || !container) return;

    container.innerHTML = `
      <div class="game-detail-header">
        <div class="game-detail-image">
          <img src="${game.image}" alt="${game.title}">
          ${game.installed ? '<div class="game-status-overlay"><span class="status-badge installed">✓ Instalado</span></div>' : ''}
        </div>
        <div class="game-detail-info">
          <h1 class="game-detail-title">${game.title}</h1>
          <p class="game-detail-category">${game.category}</p>
          <p class="game-detail-description">${game.description}</p>
          
          <div class="game-detail-specs">
            <div class="spec-item"><strong>Versión:</strong> <span>${game.version}</span></div>
            <div class="spec-item"><strong>Tamaño:</strong> <span>${game.size}</span></div>
            <div class="spec-item"><strong>Última vez:</strong> <span>${game.lastPlayed}</span></div>
            <div class="spec-item"><strong>Tiempo:</strong> <span>${game.playTime}</span></div>
          </div>

          <div class="game-detail-actions">
            ${game.installed ? 
              `<button class="btn btn-primary" onclick="app.gameAction('${gameMapping[viewName]}', 'launch')">🎮 Jugar</button>` :
              `<button class="btn btn-primary" onclick="app.gameAction('${gameMapping[viewName]}', 'install')">📥 Instalar</button>`
            }
            <button class="btn btn-secondary" onclick="app.gameAction('${gameMapping[viewName]}', 'info')">ℹ️ Info</button>
          </div>
        </div>
      </div>

      <div class="game-detail-content">
        <div class="game-detail-section">
          <h2>Requisitos del Sistema</h2>
          <div class="requirements-grid">
            <div class="requirement-item"><strong>SO:</strong> <span>${game.requirements.os.join(', ')}</span></div>
            <div class="requirement-item"><strong>RAM:</strong> <span>${game.requirements.ram}</span></div>
            <div class="requirement-item"><strong>Almacenamiento:</strong> <span>${game.requirements.storage}</span></div>
            <div class="requirement-item"><strong>CPU:</strong> <span>${game.requirements.processor}</span></div>
          </div>
        </div>

        <div class="game-detail-section">
          <h2>Información Adicional</h2>
          <div class="additional-info">
            <div class="info-item"><strong>Directorio:</strong> <span>${game.installDir}</span></div>
            <div class="info-item"><strong>Ejecutable:</strong> <span>${game.executablePath}</span></div>
          </div>
        </div>
      </div>
    `;
  }

  gameAction(gameId, action) {
    const game = this.gameManager.getGameById(gameId);
    
    switch (action) {
      case 'launch':
        this.gameManager.launchGame(gameId);
        Utils.showNotification('Lanzando...', 'info');
        break;
      case 'install':
        this.gameManager.downloadGame(gameId);
        Utils.showNotification('Instalando...', 'info');
        break;
      case 'info':
        Utils.showNotification(`${game.title} - ${game.size}`, 'info');
        break;
    }
  }
}

// Inicializar
let app;
document.addEventListener('DOMContentLoaded', () => {
  app = new RiotLauncher();
});