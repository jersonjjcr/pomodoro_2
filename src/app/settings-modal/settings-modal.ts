import { Component, inject, signal, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Pomodoro, PomodoroSettings } from '../services/pomodoro';

@Component({
  selector: 'app-settings-modal',
  imports: [CommonModule, FormsModule],
  templateUrl: './settings-modal.html',
  styleUrl: './settings-modal.scss'
})
export class SettingsModal {
  private pomodoroService = inject(Pomodoro);
  
  // Signals para los valores del formulario
  workMinutes = signal(25);
  shortBreakMinutes = signal(5);
  longBreakMinutes = signal(15);
  dailyGoal = signal(8);
  
  // Outputs para cerrar el modal
  close = output<void>();
  
  constructor() {
    // Inicializar con los valores actuales del servicio
    const currentSettings = this.pomodoroService.currentSettings;
    this.workMinutes.set(Math.floor(currentSettings.workTime / 60));
    this.shortBreakMinutes.set(Math.floor(currentSettings.shortBreakTime / 60));
    this.longBreakMinutes.set(Math.floor(currentSettings.longBreakTime / 60));
    this.dailyGoal.set(currentSettings.dailyGoal);
  }

  onSave() {
    const newSettings: PomodoroSettings = {
      workTime: this.workMinutes() * 60,
      shortBreakTime: this.shortBreakMinutes() * 60,
      longBreakTime: this.longBreakMinutes() * 60,
      dailyGoal: this.dailyGoal()
    };
    
    this.pomodoroService.updateSettings(newSettings);
    this.close.emit();
  }

  onCancel() {
    this.close.emit();
  }

  onReset() {
    // Valores por defecto
    this.workMinutes.set(25);
    this.shortBreakMinutes.set(5);
    this.longBreakMinutes.set(15);
    this.dailyGoal.set(8);
  }
}
