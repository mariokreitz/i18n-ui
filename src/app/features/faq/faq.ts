import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { FAQ_ITEMS } from '../../core/constants/faq.constant';
import { FaqItem } from '../../core/interfaces';

@Component({
  selector: 'app-faq',
  imports: [TranslatePipe],
  templateUrl: './faq.html',
  styleUrl: './faq.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Faq {
  public readonly faqItems: readonly FaqItem[] = FAQ_ITEMS;
}
