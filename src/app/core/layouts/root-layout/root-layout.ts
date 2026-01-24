import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { BackToTopComponent } from '../../../shared/components/back-to-top/back-to-top';
import { ToastComponent } from '../../../shared/components/toast/toast';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-root-layout',
  imports: [Header, Footer, ToastComponent, BackToTopComponent, TranslatePipe],
  templateUrl: './root-layout.html',
  styleUrl: './root-layout.css',
  host: { class: 'min-h-screen flex flex-col' },
})
export class RootLayout {}
