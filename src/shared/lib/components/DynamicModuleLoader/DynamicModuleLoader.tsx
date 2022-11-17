import {FC, ReactNode, useEffect} from 'react';
import {useDispatch, useStore} from 'react-redux';
import {Reducer} from '@reduxjs/toolkit';
import {ReduxStoreWithReducerManager, StateSchemaKey} from 'shared/config/storeConfig/StateSchema';

export type ReducersList = {
   [name in StateSchemaKey]?: Reducer;
}

type ReducersListEntry = [StateSchemaKey, Reducer];

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
      Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
         store.reducerManager.add(name, reducer);
         dispatch({type: `@INIT ${name} reducer`});
      });

      return () => {
         if (removeAfterUnmount) {
            Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
               store.reducerManager.remove('loginForm');
               dispatch({type: `@INIT ${name} reducer`});
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
