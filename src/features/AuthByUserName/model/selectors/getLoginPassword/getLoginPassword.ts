import {StateSchema} from 'shared/config/storeConfig/StateSchema';

export const getLoginPassword = (state: StateSchema) => state?.loginForm?.password || '';
