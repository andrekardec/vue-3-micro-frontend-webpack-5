import { 
    AuthMutations,
    AuthMutationTypes
} from '@providers/store/auth/mutations/types';
import { AuthState  as State} from '@providers/store/auth/state';
import { MutationTree } from 'vuex';

export const authMutations: MutationTree<State> & AuthMutations = {
    [AuthMutationTypes.SET_AUTHENTICATION_STATE](state: State, payload: any): void {
      const TEMP = state;
      TEMP.isAuth = true;
      state = TEMP;
    },
}

