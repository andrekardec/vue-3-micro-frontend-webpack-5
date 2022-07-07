import { CommitOptions, DispatchOptions, Store as VuexStore } from 'vuex'
  
import { AuthMutations as Mutations } from '@providers/store/auth/mutations';
import { AuthGetters as Getters } from '@providers/store/auth/getters';
import { AuthActions as Actions } from '@providers/store/auth/actions';

export interface AuthState {
    isAuth: boolean;
    error: {
        hasError: boolean;
        toastMessage: ErrorToast;
    }
}

export type ErrorToast = {
    detail: string;
    summary: string;
    life?: number;
}

export type Store<S = AuthState> = Omit<VuexStore<S>,
'commit' | 'getters' | 'dispatch'
> & {
commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload?: P,
    options?: CommitOptions
): ReturnType<Mutations[K]>
} & {
getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>
}
} & {
dispatch<K extends keyof Actions>(
    key: K,
    payload?: Parameters<Actions[K]>[1],
    options?: DispatchOptions
): ReturnType<Actions[K]>
}
  