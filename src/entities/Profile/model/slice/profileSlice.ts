import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ProfileData, ProfileSchema} from '../types/ProfileSchema';
import {fetchProfileData} from '../services/fetchProfileData';

const initialState: ProfileSchema = {
   isLoading: false,
   readonly: true,
   data: undefined,
   error: undefined,
};

export const profileSlice = createSlice({
   name: 'profile',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchProfileData.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
         })
         .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<ProfileData>) => {
            state.isLoading = false;
            state.data = action.payload;
         })
         .addCase(fetchProfileData.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
         });
   },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
