# 📅 Minuta Semanal PWA

Aplicación Progressive Web App para gestionar tu minuta semanal nutricional con React, Vite, Tailwind CSS y Framer Motion.

![PWA](https://img.shields.io/badge/PWA-Ready-success)
![React](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-7-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-cyan)

## ✨ Características

- ✅ **Vista semanal** con tabs por día (Lunes - Domingo)
- ✅ **Tracking de comidas** realizadas con persistencia en localStorage
- ✅ **Detalles y sustitutos** por cada comida
- ✅ **Exportación JSON** de tu plan y progreso
- ✅ **Función de impresión** optimizada
- ✅ **Instalable como PWA** en dispositivos móviles y desktop
- ✅ **Funciona offline** gracias al Service Worker
- ✅ **Animaciones fluidas** con Framer Motion
- ✅ **Diseño responsive** adaptado a móviles y escritorio

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 20.19+ o 22.12+ (recomendado)
- npm o pnpm

### Instalación

```bash
# Instalar dependencias
npm install
```

### Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### Compilación

```bash
# Generar versión de producción
npm run build

# Vista previa de la versión compilada
npm run preview
```

## 📱 Instalación como PWA

### En Android/iOS:

1. Abre la aplicación en tu navegador (Chrome/Safari)
2. Toca el menú del navegador
3. Selecciona "Agregar a pantalla de inicio" o "Instalar app"

### En Desktop (Chrome/Edge):

1. Busca el ícono de instalación en la barra de direcciones
2. Haz clic en "Instalar"

## 🛠️ Stack Tecnológico

- **Framework UI**: React 18
- **Build Tool**: Vite 7
- **Estilos**: Tailwind CSS 4 (usando @tailwindcss/vite)
- **Animaciones**: Framer Motion
- **PWA**: vite-plugin-pwa (Workbox)
- **Persistencia**: localStorage API

## 📂 Estructura del Proyecto

```
dieta-pwa/
├── public/
│   ├── pwa-192x192.png      # Ícono PWA 192x192
│   └── pwa-512x512.png      # Ícono PWA 512x512
├── src/
│   ├── App.jsx              # Componente principal
│   ├── index.css            # Estilos globales (@import "tailwindcss")
│   └── main.jsx             # Entry point
├── .github/
│   └── copilot-instructions.md
├── index.html               # HTML base
├── vite.config.js           # Configuración Vite + Tailwind v4 + PWA
└── package.json
```

## 🔧 Configuración

### Tailwind CSS v4

Este proyecto usa **Tailwind CSS v4** con el nuevo plugin de Vite (`@tailwindcss/vite`):

- ✅ No requiere `tailwind.config.js` ni `postcss.config.js`
- ✅ Configuración simplificada directamente en `vite.config.js`
- ✅ Usa `@import "tailwindcss"` en lugar de `@tailwind` directives
- ✅ Mejor rendimiento y compatibilidad con Vite

### Personalizar PWA

Edita `vite.config.js` para modificar:

- Nombre de la aplicación
- Colores del tema
- Íconos
- Estrategia de cacheo

### Modificar la Minuta

Edita el objeto `PLAN` en `src/App.jsx` para actualizar las comidas, horarios o sustitutos.

## 📋 Funcionalidades Disponibles

### Marcar comidas como realizadas

Cada comida tiene un checkbox "Hecho" que persiste tu progreso localmente.

### Exportar datos

Exporta tu plan completo y tu progreso en formato JSON.

### Reiniciar progreso

- **Reiniciar día**: Limpia el progreso del día actual
- **Reiniciar todo**: Limpia todo el progreso de la semana

### Imprimir

Versión optimizada para impresión que oculta controles y muestra solo el contenido relevante.

## 🎨 Personalización

### Cambiar colores

Edita `src/App.jsx`:

```jsx
// Cambiar el gradiente de fondo (Tailwind v4)
className = "min-h-screen bg-linear-to-b from-amber-50 to-white";
```

> **Nota**: Tailwind v4 cambió `bg-gradient-to-*` por `bg-linear-to-*`

### Modificar horarios

Edita el objeto `HORAS` en `src/App.jsx`.

## 🐛 Solución de Problemas

### El PWA no se instala

- Verifica que estés usando HTTPS (en producción)
- Comprueba que los íconos existan en `/public`
- Revisa la consola del navegador para errores del Service Worker

### Los estilos no se aplican

- Asegúrate de que `@tailwind` esté en `src/index.css`
- Ejecuta `npm run build` para regenerar los estilos

## 📄 Licencia

Este proyecto fue creado para uso personal. Puedes modificarlo según tus necesidades.

---

**Versión**: 1.0  
**Última actualización**: Octubre 2025
