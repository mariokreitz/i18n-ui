import { Component } from '@angular/core';
import { RootLayout } from '../../core/layouts/root-layout/root-layout';
import { Features } from '../../features/features/features';
import { Hero } from '../../features/hero/hero';
import { SimpleToUse } from '../../features/simple-to-use/simple-to-use';

@Component({
  selector: 'app-home',
  imports: [RootLayout, Hero, Features, SimpleToUse],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export default class Home {}
