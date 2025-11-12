# Riot Launcher Web - Clone del Cliente de Riot Games

Una recreación completa del cliente de Riot Games construida con tecnologías web puras (HTML5, CSS3, JavaScript ES6+).

## 🎮 Características

### ✨ Interfaz de Usuario
- **Diseño Auténtico**: Replica fielmente la interfaz del cliente oficial de Riot Games
- **Tema Oscuro**: Colores y estilos consistentes con el cliente original
- **Animaciones Suaves**: Transiciones y efectos visuales fluidos
- **Responsive Design**: Se adapta a diferentes tamaños de pantalla

### 🎯 Funcionalidades Principales

#### 📚 Biblioteca de Juegos
- **Gestión de Juegos**: Visualiza juegos instalados y disponibles
- **Lanzamiento Simulado**: Sistema de lanzamiento de juegos (simulado para web)
- **Progreso de Descarga**: Barras de progreso animadas para descargas
- **Estados Persistentes**: Los datos se guardan en localStorage

#### 🏪 Tienda
- **Catálogo de Juegos**: Explora y descarga nuevos juegos
- **Información Detallada**: Modales con detalles completos de cada juego
- **Requisitos del Sistema**: Información de compatibilidad

#### 📰 Noticias y Actualizaciones
- **Feed de Noticias**: Últimas noticias y actualizaciones
- **Artículos Detallados**: Sistema de modales para contenido completo
- **Categorías**: Organización por tipos de contenido

#### 👤 Perfil de Usuario
- **Estadísticas Personales**: Tiempo jugado, juegos favoritos
- **Historial de Juegos**: Juegos jugados recientemente
- **Progreso**: Seguimiento de logros y estadísticas

#### ⚙️ Configuraciones
- **Idioma y Región**: Configuración de localización
- **Preferencias**: Configuraciones personalizables
- **Almacenamiento Local**: Configuraciones persistentes

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica moderna
- **CSS3**: Estilos avanzados con variables CSS y grid/flexbox
- **JavaScript ES6+**: Clases, módulos, async/await
- **LocalStorage API**: Persistencia de datos local
- **SVG**: Íconos e imágenes vectoriales

## 📁 Estructura del Proyecto

```
web-version/
├── index.html              # Página principal
├── css/
│   └── styles.css          # Estilos principales
├── js/
│   ├── app.js              # Aplicación principal
│   ├── gameManager.js      # Gestión de juegos
│   ├── utils.js            # Utilidades
│   └── config.js           # Configuraciones
└── assets/
    ├── logo.svg            # Logo de la aplicación
    ├── avatar.svg          # Avatar del usuario
    ├── placeholder-game.svg # Imagen placeholder para juegos
    └── placeholder-news.svg # Imagen placeholder para noticias
```

## 🚀 Cómo Usar

### Instalación Local

1. **Clonar o Descargar**: Obtén todos los archivos del proyecto
2. **Servidor Local**: 
   - Opción 1: Abrir `index.html` directamente en el navegador
   - Opción 2: Usar servidor local (recomendado):
     ```bash
     # Con Python 3
     python -m http.server 8000
     
     # Con Node.js (http-server)
     npx http-server .
     
     # Con VS Code Live Server extension
     Click derecho en index.html > "Open with Live Server"
     ```
3. **Acceder**: Navegar a `http://localhost:8000` (o puerto correspondiente)

### Navegación

#### Atajos de Teclado
- `Ctrl + 1`: Biblioteca
- `Ctrl + 2`: Tienda
- `Ctrl + 3`: Noticias
- `Ctrl + 4`: Perfil
- `Ctrl + 5`: Configuraciones
- `Escape`: Cerrar modales

#### Controles de Ventana (Simulados)
- **Minimizar**: Muestra notificación (simulado)
- **Maximizar**: Activa/desactiva pantalla completa
- **Cerrar**: Confirmación antes de cerrar

## 🎮 Funcionalidades de Juegos

### Gestión de Juegos

#### Descargar Juego
1. Navegar a la sección "Biblioteca" o "Tienda"
2. Hacer clic en "⬇ DESCARGAR" en un juego no instalado
3. Ver progreso de descarga en tiempo real
4. El juego aparecerá en "Instalados" al completarse

#### Jugar
1. En la sección "Biblioteca", buscar juegos instalados
2. Hacer clic en "▶ JUGAR"
3. Confirmar lanzamiento en el diálogo

#### Desinstalar
1. Hacer clic en el ícono 🗑️ en un juego instalado
2. Confirmar desinstalación
3. El juego volverá a la sección "Disponibles"

### Características Técnicas

#### Simulación de Descarga
```javascript
// Progreso de descarga realista
downloadGame(gameId) {
  // Simula descarga con progreso incremental
  // Actualiza UI en tiempo real
  // Persiste estado entre sesiones
}
```

#### Gestión de Estados
- **LocalStorage**: Persistencia de datos
- **Estado Global**: Sincronización entre componentes
- **Eventos Personalizados**: Comunicación entre módulos

## 🔧 Configuración

### Juegos Disponibles
Los juegos se configuran en `js/config.js`:

```javascript
const gamesConfig = [
  {
    id: 'game-1',
    title: 'Nombre del Juego',
    description: 'Descripción del juego',
    image: 'ruta/a/imagen.jpg',
    downloadUrl: 'https://ejemplo.com/descarga',
    size: '2.5 GB',
    version: '1.0.0',
    requirements: {
      ram: '8 GB',
      storage: '3 GB'
    }
  }
];
```

### Personalización

#### Colores y Tema
Modificar variables CSS en `css/styles.css`:

```css
:root {
  --primary-color: #c89b3c;
  --bg-primary: #010a13;
  --bg-secondary: #1e2328;
  --text-primary: #f0e6d2;
}
```

#### Idioma y Textos
Los textos se pueden personalizar directamente en:
- `index.html`: Contenido estático
- `js/app.js`: Textos dinámicos
- `js/config.js`: Configuraciones de texto

## 🌐 Limitaciones Web vs Desktop

### Limitaciones del Navegador
- **Lanzamiento de Juegos**: Simulado (no puede ejecutar archivos locales)
- **Sistema de Archivos**: Acceso limitado por seguridad
- **Procesos**: No puede controlar procesos del sistema

### Soluciones Implementadas
- **Confirmaciones**: Diálogos de confirmación para acciones simuladas
- **LocalStorage**: Persistencia de datos sin archivos
- **Progreso Visual**: Simulación realista de descargas

## 📱 Compatibilidad

### Navegadores Soportados
- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

### Características Utilizadas
- ES6+ Classes y Modules
- CSS Grid y Flexbox
- LocalStorage API
- Fullscreen API
- Custom Properties (CSS Variables)

## 🎨 Personalización Avanzada

### Agregar Nuevos Juegos
1. Editar `js/config.js`
2. Agregar entrada al array `gamesConfig`
3. Incluir imagen en la carpeta `assets/`

### Modificar Estilos
1. Editar variables CSS en `:root`
2. Personalizar componentes específicos
3. Agregar nuevas animaciones

### Extender Funcionalidades
1. Crear nuevos módulos en `js/`
2. Importar en `app.js`
3. Agregar event listeners correspondientes

## 🚀 Desarrollo Futuro

### Posibles Mejoras
- **Integración con APIs**: Conectar con servicios reales
- **Multiplayer**: Sistema de amigos y chat
- **Estadísticas Avanzadas**: Gráficos y métricas detalladas
- **Temas Personalizables**: Múltiples esquemas de colores
- **Offline Mode**: Funcionalidad sin conexión

### Migración a Framework
El proyecto está estructurado para fácil migración a:
- **React/Vue/Angular**: Componentes bien definidos
- **Electron**: Para funcionalidad desktop real
- **PWA**: Para instalación como aplicación

## 📄 Licencia

Proyecto educativo inspirado en el cliente de Riot Games. 
No afiliado oficialmente con Riot Games, Inc.

---

**Desarrollado con ❤️ para demostrar capacidades de desarrollo web moderno**