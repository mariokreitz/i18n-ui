import { NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Signal, signal, WritableSignal } from '@angular/core';
import { FaIconComponent, IconDefinition } from '@fortawesome/angular-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons/faCircleCheck';
import { faCopy } from '@fortawesome/free-regular-svg-icons/faCopy';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
import { TranslatePipe } from '@ngx-translate/core';
import { I18N_EXCEL_MANAGER_NPM_INSTALL_COMMAND } from '../../core/constants';
import { copyTextToClipboard } from '../../shared/utils';

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
  public readonly copyIcon: IconDefinition = faCopy;
  public readonly successIcon: IconDefinition = faCircleCheck;
  public readonly chevronDownIcon: IconDefinition = faChevronDown;
  public readonly installCommand: string = I18N_EXCEL_MANAGER_NPM_INSTALL_COMMAND;

  private readonly _isCopySuccess: WritableSignal<boolean> = signal<boolean>(false);
  public readonly isCopySuccess: Signal<boolean> = this._isCopySuccess.asReadonly();

  public async copyToClipboard(): Promise<void> {
    try {
      await copyTextToClipboard(this.installCommand);
      this._isCopySuccess.set(true);
      setTimeout(() => this._isCopySuccess.set(false), 2000);
    } catch (e) {
      console.error('Failed to copy text to clipboard:', e);
    }
  }
}
