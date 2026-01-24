import { ChangeDetectionStrategy, Component, computed, Signal, signal, WritableSignal } from '@angular/core';
import { FaIconComponent, IconDefinition } from '@fortawesome/angular-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons/faCircleCheck';
import { faCopy } from '@fortawesome/free-regular-svg-icons/faCopy';
import { TranslatePipe } from '@ngx-translate/core';
import {
  I18N_EXCEL_MANAGER_NPM_INSTALL_COMMAND,
  I18N_EXCEL_MANAGER_PNPM_INSTALL_COMMAND,
  I18N_EXCEL_MANAGER_YARN_INSTALL_COMMAND,
  INSTALL_WITH_PKG_MANAGER_COMMANDS,
} from '../../core/constants';
import { copyTextToClipboard } from '../../shared/utils';

@Component({
  selector: 'app-getting-started',
  imports: [TranslatePipe, FaIconComponent],
  templateUrl: './getting-started.html',
  styleUrl: './getting-started.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GettingStarted {
  public readonly pkgManager: string[] = INSTALL_WITH_PKG_MANAGER_COMMANDS;
  public readonly copyIcon: IconDefinition = faCopy;
  public readonly successIcon: IconDefinition = faCircleCheck;

  private readonly _selectedPkgManager: WritableSignal<string> = signal<string>('npm');
  public readonly selectedPkgManager: Signal<string> = this._selectedPkgManager.asReadonly();
  public readonly currentInstallCommand: Signal<string> = computed(() => {
    const selected: string = this._selectedPkgManager();
    switch (selected) {
      case 'yarn':
        return I18N_EXCEL_MANAGER_YARN_INSTALL_COMMAND;
      case 'pnpm':
        return I18N_EXCEL_MANAGER_PNPM_INSTALL_COMMAND;
      case 'npm':
      default:
        return I18N_EXCEL_MANAGER_NPM_INSTALL_COMMAND;
    }
  });
  private readonly _isCopySuccess: WritableSignal<boolean> = signal<boolean>(false);
  public readonly isCopySuccess: Signal<boolean> = this._isCopySuccess.asReadonly();

  public selectPackageManager(manager: string): void {
    this._selectedPkgManager.set(manager);
  }

  public async copyToClipboard(): Promise<void> {
    try {
      await copyTextToClipboard(this.currentInstallCommand());
      this._isCopySuccess.set(true);
      setTimeout(() => this._isCopySuccess.set(false), 2000);
    } catch (e) {
      console.error('Failed to copy text to clipboard:', e);
    }
  }
}
