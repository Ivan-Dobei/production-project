import {Story} from '@storybook/react';
import {StateSchema} from 'shared/config/storeConfig/StateSchema';
import {StoreProvider} from 'app/providers/StoreProvider';
import {loginReducer} from 'features/AuthByUserName/model/slice/loginSlice';
import {ReducersList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
   loginForm: loginReducer,
};

export const StoreDecorator = (
   state: DeepPartial<StateSchema>,
   asyncReducers?: ReducersList,
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
