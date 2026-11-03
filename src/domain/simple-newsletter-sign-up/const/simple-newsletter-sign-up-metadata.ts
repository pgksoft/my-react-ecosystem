import type { TEntityMetadata } from '../../../app-infrastructure/entity-metadata/types';

export const simpleNewsletterSignUpMetaData = {
  dataLoadingMode: 'all'
} as const satisfies TEntityMetadata;
