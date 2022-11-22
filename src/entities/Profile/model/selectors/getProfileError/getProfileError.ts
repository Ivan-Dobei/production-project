import {StateSchema} from 'shared/config/storeConfig/StateSchema';

export const getProfileError = (state: StateSchema) => state.profile?.error;
