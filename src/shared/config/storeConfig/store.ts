import {configureStore, ReducersMapObject} from '@reduxjs/toolkit';
import {StateSchema} from './StateSchema';
import {counterReducer} from 'entities/Counter';
import {userReducer} from 'entities/User';
import {createReducerManager} from './createReducerManager';
import {$api} from 'shared/api/api';
import {NavigateOptions} from 'react-router';
import {To} from 'react-router-dom';

export function createReduxStore (
   initialState?: StateSchema,
   asyncReducers?: ReducersMapObject<StateSchema>,
   navigate?: (to: To, options?: NavigateOptions) => void,
) {
   const RootReducer: ReducersMapObject<StateSchema> = {
      ...asyncReducers,
      counter: counterReducer,
      user: userReducer,
   };

   const reducerManager = createReducerManager(RootReducer);

   const store = configureStore({
      reducer: reducerManager.reduce,
      devTools: __IS_DEV__,
      preloadedState: initialState,
      middleware: getDefaultMiddleware => getDefaultMiddleware({
         thunk: {
            extraArgument: {
               api: $api,
               navigate,
            },
         },
      }),
   });

   // fix it!!!
   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
   // @ts-ignore
   store.reducerManager = reducerManager;

   return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
