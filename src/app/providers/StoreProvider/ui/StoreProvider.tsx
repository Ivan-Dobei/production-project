import {Provider} from 'react-redux';
import {ReactNode} from 'react';
import {createReduxStore} from 'shared/config/storeConfig/store';
import {StateSchema} from 'shared/config/storeConfig/StateSchema';
import {DeepPartial, ReducersMapObject} from '@reduxjs/toolkit';


interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider = (props: StoreProviderProps) => {

   const {
      initialState,
      children,
      asyncReducers,
   } = props;

   const store = createReduxStore(
      initialState as StateSchema,
      asyncReducers as ReducersMapObject<StateSchema>,
   );

   return (
      <Provider store={store}>
         {children}
      </Provider>
   );
};
