import {Story} from '@storybook/react';
import {DeepPartial} from '@reduxjs/toolkit';
import {StateSchema} from 'shared/config/storeConfig/StateSchema';
import {StoreProvider} from 'app/providers/StoreProvider';

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: Story) => {
   return (
      <StoreProvider initialState={state}>
         <StoryComponent/>
      </StoreProvider>
   );
};
