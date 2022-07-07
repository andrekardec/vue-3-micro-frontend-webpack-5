import { ActionTree } from 'vuex';
import { State as RootState } from '@providers/store';
import { AuthActions, AuthActionTypes } from '@providers/store/auth/actions/types';
import { AuthState as State } from '@providers/store/auth/state';

export const authActions: ActionTree<State, RootState> & AuthActions = {
  async [AuthActionTypes.REQUEST_USER_AUTHENTICATION](): Promise<void> {
    console.log('Authenticated');
  }
};
