import {StateSchema} from 'shared/config/storeConfig/StateSchema';

export const getUserAuthData = (state: StateSchema) => state.user.authData;
