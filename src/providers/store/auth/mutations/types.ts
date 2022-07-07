import { AuthState as State } from '@providers/store/auth/state'; 

export enum AuthMutationTypes {
    SET_AUTHENTICATION_STATE = 'SET_AUTHENTICATION_STATE'
}

export type AuthMutations<S = State> = {
    [AuthMutationTypes.SET_AUTHENTICATION_STATE](state: S, payload: any): void;
}
