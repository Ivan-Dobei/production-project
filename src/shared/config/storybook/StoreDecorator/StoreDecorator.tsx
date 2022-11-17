import {Story} from '@storybook/react';
import {DeepPartial, ReducersMapObject} from '@reduxjs/toolkit';
import {StateSchema} from 'shared/config/storeConfig/StateSchema';
import {StoreProvider} from 'app/providers/StoreProvider';
import {loginReducer} from 'features/AuthByUserName/model/slice/loginSlice';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
   loginForm: loginReducer,
};

export const StoreDecorator = (
   state: DeepPartial<StateSchema>,
   asyncReducers: DeepPartial<ReducersMapObject<StateSchema>>,
) => (StoryComponent: Story) => {

   return (
      <StoreProvider
         initialState={state}
         asyncReducers={{...defaultAsyncReducers, ...asyncReducers}}
      >
         <StoryComponent/>
      </StoreProvider>
   );
};
