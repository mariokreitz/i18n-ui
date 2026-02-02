import { DOCUMENT } from '@angular/common';
import {
  Component,
  computed,
  DestroyRef,
  ElementRef,
  inject,
  OnInit,
  Signal,
  signal,
  viewChild,
  viewChildren,
  WritableSignal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FaIconComponent, IconDefinition } from '@fortawesome/angular-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons/faLanguage';
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons/faWandMagicSparkles';
import { Language, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ClickOutsideDirective } from '../../../shared/directives';
import { ToastService } from '../../services';

const HUMAN_TRANSLATED_LANGUAGES: readonly string[] = ['de', 'en'];

@Component({
  selector: 'app-language-switch',
  imports: [FaIconComponent, TranslatePipe, ClickOutsideDirective],
  templateUrl: './language-switch.html',
  styleUrl: './language-switch.css',
})
export class LanguageSwitch implements OnInit {
  public readonly langIcon: IconDefinition = faLanguage;
  public readonly aiIcon: IconDefinition = faWandMagicSparkles;
  public isCurrentLanguage = computed<(lang: Language) => boolean>(() => {
    const current: string | null = this.currentLanguage();
    return (lang: Language) => lang === current;
  });
  private readonly toggleBtn: Signal<ElementRef<HTMLButtonElement>> = viewChild.required<ElementRef<HTMLButtonElement>>('toggleBtn');
  private readonly langButtons: Signal<readonly ElementRef<HTMLButtonElement>[]> =
    viewChildren<ElementRef<HTMLButtonElement>>('langButton');
  private readonly _languageList: WritableSignal<readonly Language[]> = signal<readonly Language[]>([]);
  public readonly languages: Signal<readonly Language[]> = this._languageList.asReadonly();
  private readonly _isMenuOpen: WritableSignal<boolean> = signal<boolean>(false);
  public readonly isMenuOpen: Signal<boolean> = this._isMenuOpen.asReadonly();
  private readonly _currentLanguage: WritableSignal<Language | null> = signal<Language | null>(null);
  public readonly currentLanguage: Signal<Language | null> = this._currentLanguage.asReadonly();
  private focusedIndex = -1;
  private readonly translate: TranslateService = inject(TranslateService);
  private readonly document: Document = inject(DOCUMENT);
  private readonly toastService: ToastService = inject(ToastService);
  private readonly destroyRef: DestroyRef = inject(DestroyRef);

  constructor() {
    this._languageList.set([...this.translate.getLangs()]);
  }

  public isAiTranslated = (lang: Language): boolean => !HUMAN_TRANSLATED_LANGUAGES.includes(lang);

  public ngOnInit(): void {
    // Subscribe to language changes to keep currentLanguage in sync
    this.translate.onLangChange.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((event) => {
      this._currentLanguage.set(event.lang);
    });

    // Set initial language from current state (may be set by App.ngOnInit)
    const currentLang = this.translate.currentLang || this.translate.defaultLang;
    if (currentLang) {
      this._currentLanguage.set(currentLang);
    }
  }

  public toggleMenuSelection(): void {
    if (this._isMenuOpen()) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  public closeMenu(): void {
    this._isMenuOpen.set(false);
    this.focusedIndex = -1;
  }

  public openMenu(): void {
    this._isMenuOpen.set(true);
  }

  public onSelectLang(lang: Language): void {
    this.document.documentElement.lang = lang;
    this.translate.use(lang);
    this._currentLanguage.set(lang);

    if (this.isAiTranslated(lang)) {
      this.toastService.show('tostify.aiTranslatedHint', 'info', 5000);
    }

    this.closeMenu();
    this.toggleBtn().nativeElement.focus();
  }

  public onToggleKeydown(event: KeyboardEvent): void {
    if (['Enter', ' ', 'ArrowDown', 'ArrowUp'].includes(event.key)) {
      event.preventDefault();
      this.openMenu();
      setTimeout(() => this.focusFirstItem());
    }
  }

  public onMenuKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      event.preventDefault();
      this.closeMenu();
      this.toggleBtn().nativeElement.focus();
      return;
    }

    const buttons: readonly ElementRef<HTMLButtonElement>[] = this.langButtons();
    if (!buttons.length) return;

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.focusedIndex = (this.focusedIndex + 1) % buttons.length;
      buttons[this.focusedIndex]?.nativeElement.focus();
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.focusedIndex = (this.focusedIndex - 1 + buttons.length) % buttons.length;
      buttons[this.focusedIndex]?.nativeElement.focus();
    } else if (event.key === 'Home') {
      event.preventDefault();
      this.focusedIndex = 0;
      buttons[0]?.nativeElement.focus();
    } else if (event.key === 'End') {
      event.preventDefault();
      this.focusedIndex = buttons.length - 1;
      buttons[buttons.length - 1]?.nativeElement.focus();
    }
  }

  private focusFirstItem(): void {
    const buttons: readonly ElementRef<HTMLButtonElement>[] = this.langButtons();
    if (buttons.length > 0) {
      this.focusedIndex = 0;
      buttons[0]?.nativeElement.focus();
    }
  }
}
