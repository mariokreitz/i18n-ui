import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowRightArrowLeft';
import { faCode } from '@fortawesome/free-solid-svg-icons/faCode';
import { faLanguage } from '@fortawesome/free-solid-svg-icons/faLanguage';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons/faLayerGroup';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons/faShieldHalved';
import { faTerminal } from '@fortawesome/free-solid-svg-icons/faTerminal';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons/faTriangleExclamation';
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons/faWandMagicSparkles';
import { i18nExcelManagerFeature } from '../interfaces';

export const I18N_EXCEL_MANAGER_NPM_INSTALL_COMMAND = 'npm i i18n-excel-manager --save-dev';

export const I18N_EXCEL_MANAGER_CORE_FEATURES: i18nExcelManagerFeature[] = [
  {
    title: 'features.coreConversion.biDirectional.title',
    description: 'features.coreConversion.biDirectional.description',
    icon: faArrowRightArrowLeft,
  },
  {
    title: 'features.coreConversion.nestedSupport.title',
    description: 'features.coreConversion.nestedSupport.description',
    icon: faLayerGroup,
  },
  {
    title: 'features.coreConversion.languageMapping.title',
    description: 'features.coreConversion.languageMapping.description',
    icon: faLanguage,
  },
  {
    title: 'features.coreConversion.validation.title',
    description: 'features.coreConversion.validation.description',
    icon: faTriangleExclamation,
  },
];

export const I18N_EXCEL_MANAGER_CODE_ANALYSIS_FEATURES: i18nExcelManagerFeature[] = [
  {
    title: 'features.codebaseAnalysis.missingKeyDetection.title',
    description: 'features.codebaseAnalysis.missingKeyDetection.description',
    icon: faMagnifyingGlass,
  },
  {
    title: 'features.codebaseAnalysis.unusedKeyDetection.title',
    description: 'features.codebaseAnalysis.unusedKeyDetection.description',
    icon: faCode,
  },
];

export const I18N_EXCEL_MANAGER_AI_POWERED_FEATURES: i18nExcelManagerFeature[] = [
  {
    title: 'features.aiPowered.geminiIntegration.title',
    description: 'features.aiPowered.geminiIntegration.description',
    icon: faWandMagicSparkles,
  },
];

export const I18N_EXCEL_MANAGER_DEV_EXPERIENCE_FEATURES: i18nExcelManagerFeature[] = [
  {
    title: 'features.developerExperience.interactiveCli.title',
    description: 'features.developerExperience.interactiveCli.description',
    icon: faTerminal,
  },
  {
    title: 'features.developerExperience.dryRunMode.title',
    description: 'features.developerExperience.dryRunMode.description',
    icon: faShieldHalved,
  },
];
