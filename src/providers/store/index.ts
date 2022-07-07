import { createLogger, createStore } from 'vuex';

import {
  AuthModule,
  Store as AuthStore,
  AuthState,
} from '@providers/store/auth';

export type State = {
    auth: AuthState,
}

export type Store = AuthStore<Pick<State, 'auth'>>
                    // & [Module]Store<Pick<State, '[modulename]'>>

export const store = createStore({
  plugins:
        process.env.NODE_ENV === 'production'
          ? []
          : [createLogger()],
  modules: {
    auth: AuthModule,
  },
});

export function useStore(): Store {
  return store as Store;
}

export default store;
