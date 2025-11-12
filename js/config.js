// Configuración de juegos reales - Reemplaza con tus juegos
const gamesConfig = [
  {
    id: 'mi-juego-aventura',
    title: 'Mi Juego de Aventura',
    description: 'Un increíble juego de aventura que he creado con Unity. Explora mundos fantásticos y completa misiones épicas.',
    image: 'assets/games/aventura.svg',
    downloadUrl: 'https://ejemplo.com/games/aventura.zip',
    executablePath: 'C:\\Games\\Mi Juego Aventura\\game.exe',
    installDir: 'C:\\Games\\Mi Juego Aventura',
    version: '1.2.0',
    size: '850 MB',
    requirements: {
      os: ['Windows 10', 'Windows 11'],
      ram: '4 GB',
      storage: '2 GB',
      processor: 'Intel i3 o AMD equivalente'
    },
    installed: false,
    installing: false,
    downloadProgress: 0,
    lastPlayed: 'Nunca',
    playTime: '0h',
    category: 'Aventura'
  },
  {
    id: 'mi-juego-estrategia',
    title: 'Mi Juego de Estrategia',
    description: 'Juego de estrategia por turnos con elementos RPG. Construye tu imperio y conquista territorios enemigos.',
    image: 'assets/games/estrategia.svg',
    downloadUrl: 'https://ejemplo.com/games/estrategia.zip',
    executablePath: 'C:\\Games\\Mi Juego Estrategia\\estrategia.exe',
    installDir: 'C:\\Games\\Mi Juego Estrategia',
    version: '2.1.0',
    size: '1.2 GB',
    requirements: {
      os: ['Windows 10', 'Windows 11'],
      ram: '8 GB',
      storage: '3 GB',
      processor: 'Intel i5 o AMD equivalente'
    },
    installed: true, // Ya está instalado
    installing: false,
    downloadProgress: 0,
    lastPlayed: 'Hace 2 días',
    playTime: '45h',
    category: 'Estrategia'
  },
  {
    id: 'mi-juego-indie',
    title: 'Mi Juego Indie',
    description: 'Un juego indie experimental con mecánicas innovadoras. Arte pixelado y música original.',
    image: 'assets/games/indie.svg',
    downloadUrl: 'https://github.com/mi-usuario/mi-juego/releases/latest/download/game.zip',
    executablePath: 'C:\\Games\\Mi Juego Indie\\indie.exe',
    installDir: 'C:\\Games\\Mi Juego Indie',
    version: '0.9.5',
    size: '320 MB',
    requirements: {
      os: ['Windows 10', 'Windows 11'],
      ram: '2 GB',
      storage: '800 MB',
      processor: 'Intel i3 o AMD equivalente'
    },
    installed: false,
    installing: false,
    downloadProgress: 0,
    lastPlayed: 'Nunca',
    playTime: '0h',
    category: 'Indie'
  },
  {
    id: 'mi-juego-accion',
    title: 'Mi Juego de Acción',
    description: 'Shooter en tercera persona con elementos de supervivencia. Combate intenso y crafting avanzado.',
    image: 'assets/games/accion.svg',
    downloadUrl: 'https://ejemplo.com/games/accion.zip',
    executablePath: 'C:\\Games\\Mi Juego Acción\\shooter.exe',
    installDir: 'C:\\Games\\Mi Juego Acción',
    version: '3.0.1',
    size: '2.5 GB',
    requirements: {
      os: ['Windows 10', 'Windows 11'],
      ram: '16 GB',
      storage: '5 GB',
      processor: 'Intel i7 o AMD equivalente'
    },
    installed: true,
    installing: false,
    downloadProgress: 0,
    lastPlayed: 'Ayer',
    playTime: '120h',
    category: 'Acción'
  },
  {
    id: 'mi-juego-puzzle',
    title: 'Mi Juego de Puzzles',
    description: 'Juego de rompecabezas con más de 200 niveles desafiantes. Perfecto para ejercitar la mente.',
    image: 'assets/games/puzzle.svg',
    downloadUrl: 'https://ejemplo.com/games/puzzle.zip',
    executablePath: 'C:\\Games\\Mi Juego Puzzle\\puzzle.exe',
    installDir: 'C:\\Games\\Mi Juego Puzzle',
    version: '1.5.2',
    size: '180 MB',
    requirements: {
      os: ['Windows 10', 'Windows 11'],
      ram: '1 GB',
      storage: '500 MB',
      processor: 'Cualquier procesador moderno'
    },
    installed: false,
    installing: false,
    downloadProgress: 0,
    lastPlayed: 'Nunca',
    playTime: '0h',
    category: 'Puzzle'
  }
];

// Configuración de noticias
const newsConfig = [
  {
    id: 1,
    title: "Nueva actualización de Mi Juego de Aventura",
    summary: "La versión 1.2.0 incluye nuevos mundos, misiones y mejoras de rendimiento.",
    content: "Estamos emocionados de anunciar la nueva actualización de Mi Juego de Aventura. Esta versión incluye 3 nuevos mundos para explorar, 15 misiones adicionales y importantes mejoras de rendimiento.",
    date: "Hace 2 días",
    image: "assets/news/update-aventura.jpg",
    category: "Actualización"
  },
  {
    id: 2,
    title: "Mi Juego de Estrategia - Torneo Mundial",
    summary: "Participa en el primer torneo mundial con premios increíbles.",
    content: "El primer torneo mundial de Mi Juego de Estrategia está aquí. Compite contra los mejores jugadores del mundo por premios en efectivo y reconocimiento.",
    date: "Hace 1 semana",
    image: "assets/news/torneo-estrategia.jpg",
    category: "Evento"
  },
  {
    id: 3,
    title: "Mi Juego Indie llega a Steam",
    summary: "Después de meses en desarrollo, finalmente disponible en Steam.",
    content: "Mi Juego Indie ha sido aprobado y ya está disponible en Steam. Incluye logros, cartas coleccionables y soporte para Steam Workshop.",
    date: "Hace 2 semanas",
    image: "assets/news/steam-indie.jpg",
    category: "Lanzamiento"
  }
];

// Configuración del launcher
const launcherConfig = {
  appName: 'Mi Game Launcher',
  version: '2.0.0',
  gamesDirectory: 'C:\\Games',
  downloadsDirectory: 'C:\\Games\\Downloads',
  downloadOptions: {
    maxConcurrentDownloads: 2,
    retryAttempts: 3,
    timeout: 30000
  },
  user: {
    username: 'Invocador',
    level: 150,
    region: 'LAS',
    avatar: 'assets/avatar.svg',
    status: 'En línea'
  }
};