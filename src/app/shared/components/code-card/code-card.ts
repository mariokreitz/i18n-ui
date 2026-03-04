import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-code-card',
  imports: [],
  templateUrl: './code-card.html',
  styleUrl: './code-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeCard {}
