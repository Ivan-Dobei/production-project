import {StateSchema} from 'shared/config/storeConfig/StateSchema';

export const getLoginError = (state: StateSchema) => state?.loginForm?.error || '';
