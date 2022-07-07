import { ActionContext } from 'vuex';
import { State as RootState } from '@providers/store';
import { AuthMutations as Mutations } from '@providers/store/auth/mutations/types';
import { AuthState as State } from '@providers/store/auth/state/types';

export enum AuthActionTypes {
    REQUEST_USER_AUTHENTICATION = 'REQUEST_USER_AUTHENTICATION',
}

export interface AuthActions {
    [AuthActionTypes.REQUEST_USER_AUTHENTICATION](
        { commit }: AugmentedActionContext
        ): Promise<void>
}

export type AugmentedActionContext = {
    commit<K extends keyof Mutations>(
        key: K,
        payload?: Parameters<Mutations[K]>[1],
    ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, RootState>, 'commit'>;
