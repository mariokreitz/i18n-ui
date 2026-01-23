import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import {
  I18N_EXCEL_MANAGER_AI_POWERED_FEATURES,
  I18N_EXCEL_MANAGER_CODE_ANALYSIS_FEATURES,
  I18N_EXCEL_MANAGER_CORE_FEATURES,
  I18N_EXCEL_MANAGER_DEV_EXPERIENCE_FEATURES,
} from '../../core/constants';
import { i18nExcelManagerFeature } from '../../core/interfaces';
import { FeatureCard } from '../../shared/components/feature-card/feature-card';

@Component({
  selector: 'app-features',
  imports: [FeatureCard, TranslatePipe],
  templateUrl: './features.html',
  styleUrl: './features.css',
})
export class Features {
  public readonly coreFeatures: i18nExcelManagerFeature[] = I18N_EXCEL_MANAGER_CORE_FEATURES;
  public readonly codeAnalysisFeature: i18nExcelManagerFeature[] = I18N_EXCEL_MANAGER_CODE_ANALYSIS_FEATURES;
  public readonly aiPoweredFeature: i18nExcelManagerFeature[] = I18N_EXCEL_MANAGER_AI_POWERED_FEATURES;
  public readonly developerExperience: i18nExcelManagerFeature[] = I18N_EXCEL_MANAGER_DEV_EXPERIENCE_FEATURES;
}
