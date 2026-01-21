import { Component } from '@angular/core';
import { RootLayout } from '../../core/layouts/root-layout/root-layout';
import { Hero } from '../../features/hero/hero';

@Component({
  selector: 'app-home',
  imports: [RootLayout, Hero],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export default class Home {}
