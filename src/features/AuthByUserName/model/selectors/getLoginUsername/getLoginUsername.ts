import {StateSchema} from 'shared/config/storeConfig/StateSchema';

export const getLoginUsername = (state: StateSchema) => state?.loginForm?.username || '';
