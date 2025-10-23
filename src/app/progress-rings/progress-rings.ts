import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress-rings',
  imports: [CommonModule],
  templateUrl: './progress-rings.html',
  styleUrl: './progress-rings.scss'
})
export class ProgressRings {
  sessionProgress = input<number>(0);
  dailyProgress = input<number>(0);
  weeklyProgress = input<number>(0);
  
  // Configuración de los anillos (desde el más pequeño al más grande)
  readonly rings = [
    {
      progress: this.sessionProgress,
      color: '#ff006e', // Rosa/Rojo - Sesión actual (anillo interior)
      radius: 60,
      strokeWidth: 10,
      label: 'Sesión'
    },
    {
      progress: this.dailyProgress,
      color: '#8338ec', // Morado - Progreso diario (anillo medio)
      radius: 85,
      strokeWidth: 10,
      label: 'Diario'
    },
    {
      progress: this.weeklyProgress,
      color: '#3a86ff', // Azul - Progreso semanal (anillo exterior)
      radius: 110,
      strokeWidth: 10,
      label: 'Semanal'
    }
  ];

  // Calcular el dasharray para cada anillo
  getDashArray(radius: number, progress: number) {
    const circumference = 2 * Math.PI * radius;
    const progressValue = Math.max(0, Math.min(100, progress || 0));
    const filledLength = (progressValue / 100) * circumference;
    const emptyLength = circumference - filledLength;
    return `${filledLength} ${emptyLength}`;
  }

  // Los anillos ahora usan transformación fija en el template
}
