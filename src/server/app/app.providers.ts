
import { App } from './app.model';

export const appProviders = [
  {
    provide: 'App_REPOSITORY',
    useValue: App,
  },
];
