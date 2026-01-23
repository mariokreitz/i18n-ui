import { Component } from '@angular/core';
import { CodeCardBody } from '../../shared/components/code-card-body/code-card-body';
import { CodeCardTitle } from '../../shared/components/code-card-title/code-card-title';
import { CodeCard } from '../../shared/components/code-card/code-card';
import { HighlightCodeDirective } from '../../shared/directives';

@Component({
  selector: 'app-simple-to-use',
  imports: [CodeCard, CodeCardTitle, CodeCardBody, HighlightCodeDirective],
  templateUrl: './simple-to-use.html',
  styleUrl: './simple-to-use.css',
})
export class SimpleToUse {}
