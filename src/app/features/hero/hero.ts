import { NgOptimizedImage, UpperCasePipe, ViewportScroller } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FaIconComponent, IconDefinition } from '@fortawesome/angular-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, TranslatePipe, UpperCasePipe, FaIconComponent],
  host: {
    class: 'flex flex-col justify-center relative min-h-[calc(100vh-79px)]',
  },
})
export class Hero {
  public readonly chevronDownIcon: IconDefinition = faChevronDown;
  private readonly viewportScroller: ViewportScroller = inject(ViewportScroller);

  public scrollToGettingStarted(): void {
    this.viewportScroller.scrollToPosition([0, window.innerHeight]);
  }
}
