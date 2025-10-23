# Pomodoro Rings - Copilot Instructions

Este es un proyecto de aplicación web Pomodoro con diseño de anillos estilo Apple Watch, construido con Angular 19.

## Información del Proyecto

**Tipo**: Aplicación Web Angular  
**Framework**: Angular 19 con arquitectura standalone  
**Estilo**: SCSS con tema oscuro y gradientes  
**Estado**: Signals de Angular para manejo reactivo  
**Diseño**: Inspirado en anillos de Apple Watch  

## Estructura del Proyecto

- **`src/app/pomodoro-timer/`**: Componente principal del temporizador
- **`src/app/progress-rings/`**: Componente de anillos de progreso animados  
- **`src/app/services/pomodoro.ts`**: Servicio con lógica del temporizador Pomodoro
- **`src/styles.scss`**: Estilos globales con tema oscuro

## Funcionalidades Implementadas

✅ Temporizador Pomodoro completo (25min trabajo, 5min descanso corto, 15min descanso largo)  
✅ Tres anillos de progreso animados (sesión actual, progreso diario, progreso semanal)  
✅ Controles de inicio, pausa, reinicio y saltar  
✅ Diseño responsivo con tema oscuro  
✅ Estados reactivos con Angular Signals  
✅ Animaciones CSS suaves  

## Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo  
ng serve

# Compilar para producción
ng build

# Ejecutar pruebas
ng test
```

## Patrones de Código

- Usar **Signals** para estado reactivo
- Componentes **standalone** (no NgModule)
- **SCSS** con variables CSS para temas
- **Computed signals** para valores derivados
- **RxJS** solo para temporizadores y observables necesarios

## Convenciones de Estilo

- Colores principales: ff006e (rosa), 8338ec (morado), 3a86ff (azul)
- Gradientes dinámicos en botones y texto
- Fuentes: sistema Apple/Segoe UI
- Animaciones suaves con `transition` y `transform`
- Diseño mobile-first con breakpoints responsivos

La aplicación está completamente funcional y lista para desarrollo adicional.