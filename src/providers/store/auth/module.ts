import { Module } from 'vuex';
import { State as RootState } from '@providers/store';
import { AuthState as State, authState } from '@providers/store/auth/state';
import { authMutations } from '@providers/store/auth/mutations';
import { authActions } from '@providers/store/auth/actions';
import { authGetters } from '@providers/store/auth/getters';

export const AuthModule: Module<State, RootState> = {
  state: authState,
  mutations: authMutations,
  actions: authActions,
  getters: authGetters,
};
