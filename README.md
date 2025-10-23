# 🍅 Pomodoro Rings - Técnica Pomodoro con Anillos de Apple Watch

Una aplicación web moderna de temporizador Pomodoro con un diseño inspirado en los anillos de Apple Watch. Construida con Angular 19 y diseñada para ayudarte a mantener la productividad usando la técnica Pomodoro.

## ✨ Características

- **Anillos de Progreso Animados**: Tres anillos concéntricos inspirados en Apple Watch que muestran:
  - 🔴 **Anillo Rosa**: Progreso de la sesión actual (25 min trabajo / 5-15 min descanso)
  - 🟣 **Anillo Morado**: Progreso diario (meta de 8 sesiones)
  - 🔵 **Anillo Azul**: Progreso semanal acumulativo

- **Temporizador Pomodoro Completo**: 
  - 25 minutos de trabajo
  - 5 minutos de descanso corto
  - 15 minutos de descanso largo (cada 4 sesiones)
  - Controles de inicio, pausa, reinicio y saltar

- **Diseño Moderno**: 
  - Tema oscuro con gradientes dinámicos
  - Animaciones suaves y efectos visuales
  - Diseño responsivo para móviles y escritorio
  - Tipografía estilo Apple

## 🚀 Inicio Rápido

### Servidor de Desarrollo

Para iniciar el servidor de desarrollo local:

```bash
ng serve
```

La aplicación estará disponible en `http://localhost:4200/`. Se recarga automáticamente al modificar archivos.

### Compilación

Para compilar el proyecto para producción:

```bash
ng build
```

Los archivos de compilación se almacenan en el directorio `dist/`.

## 🛠️ Tecnologías Utilizadas

- **Angular 19**: Framework principal con arquitectura standalone
- **SCSS**: Para estilos avanzados y variables CSS
- **TypeScript**: Tipado estático y características modernas
- **RxJS**: Manejo reactivo del temporizador
- **Angular Signals**: Estado reactivo moderno
- **CSS Grid & Flexbox**: Layout responsivo
- **SVG Animations**: Anillos de progreso animados

## 📱 Uso de la Aplicación

1. **Iniciar Sesión**: Presiona el botón "Iniciar" para comenzar una sesión de trabajo de 25 minutos
2. **Monitorear Progreso**: Observa los anillos de progreso que se llenan gradualmente
3. **Descansos Automáticos**: Al completar una sesión, automáticamente cambia a descanso
4. **Controles Flexibles**: Usa pausa, reinicio o saltar según sea necesario
5. **Seguimiento Diario**: Ve tu progreso hacia la meta diaria de 8 sesiones

## 🎨 Estructura de Componentes

```
src/app/
├── pomodoro-timer/          # Componente principal del temporizador
├── progress-rings/          # Componente de anillos animados
├── services/
│   └── pomodoro.ts         # Servicio de lógica del temporizador
└── app.ts                  # Componente raíz
```

## 📊 Estados del Temporizador

- **Trabajo**: 25 minutos de concentración profunda
- **Descanso Corto**: 5 minutos de pausa
- **Descanso Largo**: 15 minutos cada 4 sesiones completadas

## 🧪 Pruebas

Ejecutar pruebas unitarias:

```bash
ng test
```

## 🔧 Desarrollo

El proyecto utiliza:
- Angular CLI 19.x
- Node.js 18+
- NPM para gestión de dependencias

### Comandos Útiles

```bash
# Instalar dependencias
npm install

# Generar nuevo componente
ng generate component nombre-componente

# Servir con puerto personalizado
ng serve --port 4201

# Compilación con observación de cambios
ng build --watch
```

## 📈 Futuras Mejoras

- [ ] Persistencia local de datos
- [ ] Sonidos de notificación
- [ ] Estadísticas semanales/mensuales
- [ ] Temas de color personalizables
- [ ] Integración con APIs de productividad
- [ ] Aplicación PWA para móviles

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork del proyecto
2. Crear rama de feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit de cambios (`git commit -am 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Crear Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver archivo `LICENSE` para más detalles.

---

**Desarrollado con ❤️ usando Angular y inspirado en el diseño de Apple Watch**