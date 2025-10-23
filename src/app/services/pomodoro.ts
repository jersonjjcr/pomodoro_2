import { Injectable, signal, computed } from '@angular/core';
import { interval, takeWhile, tap } from 'rxjs';

export interface PomodoroState {
  currentMode: 'work' | 'shortBreak' | 'longBreak';
  timeRemaining: number;
  totalTime: number;
  isRunning: boolean;
  sessionsCompleted: number;
  dailyGoal: number;
}

export interface PomodoroSettings {
  workTime: number;
  shortBreakTime: number;
  longBreakTime: number;
  dailyGoal: number;
}

@Injectable({
  providedIn: 'root'
})
export class Pomodoro {
  // Configuración de tiempos (se puede personalizar)
  private settings = signal<PomodoroSettings>({
    workTime: 25 * 60, // 25 minutos
    shortBreakTime: 5 * 60, // 5 minutos  
    longBreakTime: 15 * 60, // 15 minutos
    dailyGoal: 8 // 8 sesiones por día
  });

  private state = signal<PomodoroState>({
    currentMode: 'work',
    timeRemaining: this.settings().workTime,
    totalTime: this.settings().workTime,
    isRunning: false,
    sessionsCompleted: 0,
    dailyGoal: this.settings().dailyGoal
  });

  // Computed signals para los anillos
  readonly progress = computed(() => {
    const state = this.state();
    return ((state.totalTime - state.timeRemaining) / state.totalTime) * 100;
  });

  readonly dailyProgress = computed(() => {
    const state = this.state();
    return (state.sessionsCompleted / state.dailyGoal) * 100;
  });

  readonly formattedTime = computed(() => {
    const timeRemaining = this.state().timeRemaining;
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  });

  // Getters para exponer el estado
  get currentState() {
    return this.state();
  }

  get currentSettings() {
    return this.settings();
  }

  start() {
    this.state.update(state => ({ ...state, isRunning: true }));
    this.runTimer();
  }

  pause() {
    this.state.update(state => ({ ...state, isRunning: false }));
  }

  reset() {
    const currentMode = this.state().currentMode;
    const totalTime = this.getTotalTimeForMode(currentMode);
    this.state.update(state => ({
      ...state,
      timeRemaining: totalTime,
      totalTime: totalTime,
      isRunning: false
    }));
  }

  skip() {
    this.completeSession();
  }

  private runTimer() {
    interval(1000)
      .pipe(
        takeWhile(() => this.state().isRunning && this.state().timeRemaining > 0),
        tap(() => {
          this.state.update(state => ({
            ...state,
            timeRemaining: state.timeRemaining - 1
          }));
          
          if (this.state().timeRemaining <= 0) {
            this.completeSession();
          }
        })
      )
      .subscribe();
  }

  private completeSession() {
    const currentState = this.state();
    
    if (currentState.currentMode === 'work') {
      const newSessionsCompleted = currentState.sessionsCompleted + 1;
      const nextMode = newSessionsCompleted % 4 === 0 ? 'longBreak' : 'shortBreak';
      
      this.state.update(state => ({
        ...state,
        sessionsCompleted: newSessionsCompleted,
        currentMode: nextMode,
        timeRemaining: this.getTotalTimeForMode(nextMode),
        totalTime: this.getTotalTimeForMode(nextMode),
        isRunning: false
      }));
    } else {
      this.state.update(state => ({
        ...state,
        currentMode: 'work',
        timeRemaining: this.settings().workTime,
        totalTime: this.settings().workTime,
        isRunning: false
      }));
    }
  }

  private getTotalTimeForMode(mode: 'work' | 'shortBreak' | 'longBreak'): number {
    const settings = this.settings();
    switch (mode) {
      case 'work': return settings.workTime;
      case 'shortBreak': return settings.shortBreakTime;
      case 'longBreak': return settings.longBreakTime;
    }
  }

  // Función para actualizar configuración
  updateSettings(newSettings: PomodoroSettings) {
    this.settings.set(newSettings);
    // Reiniciar el temporizador con los nuevos valores si no está corriendo
    if (!this.state().isRunning) {
      this.reset();
    }
  }
}
