import {FC, useEffect} from 'react';
import {useDispatch, useStore} from 'react-redux';
import {Reducer} from '@reduxjs/toolkit';
import {ReduxStoreWithReducerManager, StateSchemaKey} from 'shared/config/storeConfig/StateSchema';

export type ReducersList = {
   [name in StateSchemaKey]?: Reducer;
}

interface DynamicModuleLoaderProps {
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
   const {
      children,
      reducers,
      removeAfterUnmount,
   } = props;

   const store = useStore() as ReduxStoreWithReducerManager;
   const dispatch = useDispatch();

   useEffect(() => {
      Object.entries(reducers).forEach(([name, reducer]) => {
         store.reducerManager.add(name as StateSchemaKey, reducer);
         dispatch({type: `@INIT ${name} reducer`});
      });

      return () => {
         if (removeAfterUnmount) {
            Object.entries(reducers).forEach(([name, reducer]) => {
               store.reducerManager.remove('loginForm');
               dispatch({type: `@INIT ${name as StateSchemaKey} reducer`});
            });
         }
      };
      //eslint-disable-next-line
   }, []);

   return (
      <>
         {children}
      </>
   );
};
