import { IDocsNav } from '@sharedtypes/docs';
import { besDocsNav } from './bes';

export const docsNav: Record<string, IDocsNav> = {
  bes: besDocsNav,
  index: [],
};