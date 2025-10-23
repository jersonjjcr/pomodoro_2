import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PomodoroTimer } from './pomodoro-timer/pomodoro-timer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PomodoroTimer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Pomodoro Rings');
}
