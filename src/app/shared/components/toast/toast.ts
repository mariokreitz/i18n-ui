import { Component, computed, inject, Signal } from '@angular/core';
import { FaIconComponent, IconDefinition } from '@fortawesome/angular-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons/faExclamationCircle';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import { TranslatePipe } from '@ngx-translate/core';
import { Toast, ToastService } from '../../../core/services';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.html',
  standalone: true,
  imports: [FaIconComponent, TranslatePipe],
})
export class ToastComponent {
  public readonly successIcon: IconDefinition = faCheckCircle;
  public readonly infoIcon: IconDefinition = faInfoCircle;
  public readonly errorIcon: IconDefinition = faExclamationCircle;
  private readonly toastService: ToastService = inject(ToastService);
  public readonly toast: Signal<Toast | null> = this.toastService.toast;
  public readonly visible: Signal<boolean> = computed(() => !!this.toast());
}
