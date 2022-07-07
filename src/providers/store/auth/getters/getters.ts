import { GetterTree } from 'vuex';
import { State as RootState } from '@providers/store';
import { AuthState as State } from '@providers/store/auth/state/types';
import { AuthGetters as Getters } from '@providers/store/auth/getters/types';

export const authGetters: GetterTree<State, RootState> & Getters = {
    isAuth: (state: State) => state.isAuth,
};
