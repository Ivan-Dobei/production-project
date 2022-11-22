import {StateSchema} from 'shared/config/storeConfig/StateSchema';

export const getProfileIsLoading = (state: StateSchema) => state.profile?.isLoading;
