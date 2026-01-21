import { Component } from '@angular/core';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-root-layout',
  imports: [Header, Footer],
  templateUrl: './root-layout.html',
  styleUrl: './root-layout.css',
  host: { class: 'min-h-screen flex flex-col' },
})
export class RootLayout {}
