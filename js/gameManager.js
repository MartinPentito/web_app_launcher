// Gestor de juegos simplificado
class GameManager {
  constructor() {
    this.games = [...gamesConfig];
    this.loadGamesState();
  }

  loadGamesState() {
    const savedState = Utils.loadFromStorage('gamesState', {});
    this.games = this.games.map(game => ({
      ...game,
      ...savedState[game.id]
    }));
  }

  saveGamesState() {
    const state = {};
    this.games.forEach(game => {
      state[game.id] = {
        installed: game.installed,
        lastPlayed: game.lastPlayed,
        playTime: game.playTime
      };
    });
    Utils.saveToStorage('gamesState', state);
  }

  getGameById(id) {
    return this.games.find(game => game.id === id);
  }

  async launchGame(gameId) {
    const game = this.getGameById(gameId);
    if (!game || !game.installed) return;
    
    await Utils.delay(1000);
    game.lastPlayed = 'Ahora';
    game.playTime = `${parseInt(game.playTime) + 1 || 1}h`;
    this.saveGamesState();
    Utils.showNotification(`Lanzando ${game.title}...`, 'success');
  }

  async downloadGame(gameId) {
    const game = this.getGameById(gameId);
    if (!game || game.installed) return;

    await Utils.delay(2000);
    game.installed = true;
    game.lastPlayed = 'Nunca';
    this.saveGamesState();
    Utils.showNotification(`${game.title} instalado!`, 'success');
  }

}