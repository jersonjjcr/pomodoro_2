import { Component, inject, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pomodoro } from '../services/pomodoro';
import { ProgressRings } from '../progress-rings/progress-rings';
import { SettingsModal } from '../settings-modal/settings-modal';

@Component({
  selector: 'app-pomodoro-timer',
  imports: [CommonModule, ProgressRings, SettingsModal],
  templateUrl: './pomodoro-timer.html',
  styleUrl: './pomodoro-timer.scss'
})
export class PomodoroTimer {
  private pomodoroService = inject(Pomodoro);

  // Signal para controlar la visibilidad del modal de configuración
  showSettings = signal(false);

  // Computed properties para la UI
  currentState = computed(() => this.pomodoroService.currentState);
  formattedTime = computed(() => this.pomodoroService.formattedTime());
  progress = computed(() => this.pomodoroService.progress());
  dailyProgress = computed(() => this.pomodoroService.dailyProgress());
  
  // Progreso semanal simulado (podrías implementar persistencia local)
  weeklyProgress = computed(() => {
    const sessionsThisWeek = this.currentState().sessionsCompleted;
    const weeklyGoal = 40; // 8 sesiones × 5 días
    return Math.min((sessionsThisWeek / weeklyGoal) * 100, 100);
  });

  // Métodos para controlar el temporizador
  onStart() {
    this.pomodoroService.start();
  }

  onPause() {
    this.pomodoroService.pause();
  }

  onReset() {
    this.pomodoroService.reset();
  }

  onSkip() {
    this.pomodoroService.skip();
  }

  // Métodos para el modal de configuración
  openSettings() {
    this.showSettings.set(true);
  }

  closeSettings() {
    this.showSettings.set(false);
  }

  onSettingsSaved(settings: any) {
    this.pomodoroService.updateSettings(settings);
    this.closeSettings();
  }

  // Getter para mostrar el texto del modo actual
  get modeText() {
    const mode = this.currentState().currentMode;
    switch (mode) {
      case 'work': return 'Trabajo';
      case 'shortBreak': return 'Descanso Corto';
      case 'longBreak': return 'Descanso Largo';
      default: return 'Trabajo';
    }
  }

  // Getter para el color del modo actual
  get modeColor() {
    const mode = this.currentState().currentMode;
    switch (mode) {
      case 'work': return '#ff006e';
      case 'shortBreak': return '#8338ec';
      case 'longBreak': return '#3a86ff';
      default: return '#ff006e';
    }
  }
}
