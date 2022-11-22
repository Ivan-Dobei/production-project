import {createAsyncThunk} from '@reduxjs/toolkit';
import {User, userActions} from 'entities/User';
import {LOCAL_STORAGE_USER_KEY} from 'shared/const/localStorage';
import {ThunkApiConfig} from 'shared/config/storeConfig/StateSchema';

interface loginByUsernameProps {
   username: string;
   password: string;
}

export const loginByUsername = createAsyncThunk<User, loginByUsernameProps, ThunkApiConfig<string>>(
   'login/loginByUsername',
   async (authData, thunkAPI) => {
      const {dispatch, extra, rejectWithValue} = thunkAPI;

      try {
         const response = await extra.api.post<User>('/login', authData);

         if (!response.data) {
            throw new Error();
         }

         localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(response.data));
         dispatch(userActions.setAuthData(response.data));
         extra?.navigate?.('about');

         return response.data;
      } catch (e) {
         console.log(e);
         return rejectWithValue('error');
      }
   },
);
