import {StateSchema} from 'shared/config/storeConfig/StateSchema';

export const getProfileData = (state: StateSchema) => state.profile?.data;
