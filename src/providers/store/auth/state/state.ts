import { AuthState } from '@providers/store/auth/state/types';

export const authState: AuthState = {
    isAuth: true,
    error: {
        hasError: false,
        toastMessage: {
            detail: '',
            summary: '',
            life: 4000,
        }
    }
};
