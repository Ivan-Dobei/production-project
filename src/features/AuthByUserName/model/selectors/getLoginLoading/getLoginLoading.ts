import {StateSchema} from 'shared/config/storeConfig/StateSchema';

export const getLoginLoading = (state: StateSchema) => state?.loginForm?.isLoading || false;
