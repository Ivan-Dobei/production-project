import {createAsyncThunk} from '@reduxjs/toolkit';
import {ThunkApiConfig} from 'shared/config/storeConfig/StateSchema';
import {ProfileData} from '../types/ProfileSchema';

export const fetchProfileData = createAsyncThunk<ProfileData, void, ThunkApiConfig<string>>(
   'profile/fetchProfileData',
   async (_, thunkAPI) => {
      const {extra, rejectWithValue} = thunkAPI;

      try {
         const response = await extra.api.get<ProfileData>('/profile');

         if (!response.data) {
            throw new Error();
         }

         return response.data;
      } catch (e) {
         console.log(e);
         return rejectWithValue('error');
      }
   },
);
