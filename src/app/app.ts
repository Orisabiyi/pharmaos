import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './sidebar/sidebar';
import { TopNav } from "./top-nav/top-nav";

@Component({
  imports: [RouterOutlet, Sidebar, TopNav],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('pharmaos');
}
