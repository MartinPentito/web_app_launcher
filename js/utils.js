// Utilidades esenciales
class Utils {
  static showNotification(message, type = 'info', duration = 3000) {
    const container = document.getElementById('notifications-container');
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    container.appendChild(notification);
    
    setTimeout(() => {
      notification.style.animation = 'slideOut 0.3s ease forwards';
      setTimeout(() => {
        if (container.contains(notification)) {
          container.removeChild(notification);
        }
      }, 300);
    }, duration);
  }

  static delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  static saveToStorage(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
      return true;
    } catch (error) {
      console.error('Error guardando:', error);
      return false;
    }
  }

  static loadFromStorage(key, defaultValue = null) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : defaultValue;
    } catch (error) {
      console.error('Error cargando:', error);
      return defaultValue;
    }
  }
}

// Estilos de animación
const styleSheet = document.createElement('style');
styleSheet.textContent = `@keyframes slideOut { to { transform: translateX(100%); opacity: 0; } }`;
document.head.appendChild(styleSheet);