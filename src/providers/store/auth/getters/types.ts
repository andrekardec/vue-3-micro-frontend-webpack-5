import { AuthState as State } from '@providers/store/auth/state/types';

export type AuthGetters = {
    isAuth(state: State): boolean;
}