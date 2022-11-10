import {Provider} from 'react-redux';
import {ReactNode} from 'react';
import {createReduxStore} from 'shared/config/storeConfig/store';
import {StateSchema} from 'shared/config/storeConfig/StateSchema';
import {DeepPartial} from '@reduxjs/toolkit';


interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider = (props: StoreProviderProps) => {

   const {
      initialState,
      children,
   } = props;

   const store = createReduxStore(initialState as StateSchema);

   return (
      <Provider store={store}>
         {children}
      </Provider>
   );
};
