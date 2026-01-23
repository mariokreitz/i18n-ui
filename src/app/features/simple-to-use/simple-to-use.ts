import { Component, inject } from '@angular/core';
import { FaIconComponent, IconDefinition } from '@fortawesome/angular-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons/faWandMagicSparkles';
import { TranslatePipe } from '@ngx-translate/core';
import { CodeCardBody } from '../../shared/components/code-card-body/code-card-body';
import { CodeCardTitle } from '../../shared/components/code-card-title/code-card-title';
import { CodeCard } from '../../shared/components/code-card/code-card';
import { HighlightCodeDirective } from '../../shared/directives';
import { EnvironmentService } from '../../shared/services/environment';

@Component({
  selector: 'app-simple-to-use',
  imports: [CodeCard, CodeCardTitle, CodeCardBody, HighlightCodeDirective, TranslatePipe, FaIconComponent],
  templateUrl: './simple-to-use.html',
  styleUrl: './simple-to-use.css',
})
export class SimpleToUse {
  public readonly aiIcon: IconDefinition = faWandMagicSparkles;
  public readonly success: IconDefinition = faCheck;

  public readonly aiPoweredPerks: string[] = [
    'simpleToUse.aiSection.perks.automaticTranslations',
    'simpleToUse.aiSection.perks.preservePlaceholders',
    'simpleToUse.aiSection.perks.chooseModel',
    'simpleToUse.aiSection.perks.batchProcessing',
  ];
  private readonly environmentService: EnvironmentService = inject(EnvironmentService);
  public readonly version: string = this.environmentService.version;
}
