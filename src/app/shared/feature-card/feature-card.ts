import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { TranslatePipe } from '@ngx-translate/core';
import { i18nExcelManagerFeature } from '../../core/interfaces';

@Component({
  selector: 'app-feature-card',
  imports: [FaIconComponent, TranslatePipe],
  templateUrl: './feature-card.html',
  styleUrl: './feature-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureCard {
  public readonly feature: InputSignal<i18nExcelManagerFeature> = input.required<i18nExcelManagerFeature>();
}
