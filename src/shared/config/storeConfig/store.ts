import {configureStore, ReducersMapObject} from '@reduxjs/toolkit';
import {StateSchema} from './StateSchema';
import {counterReducer} from 'entities/Counter';
import {userReducer} from 'entities/User';
import {loginReducer} from 'features/AuthByUserName';

export function createReduxStore (initialState?: StateSchema) {
   const RootReducer: ReducersMapObject<StateSchema> = {
      counter: counterReducer,
      user: userReducer,
      loginData: loginReducer,
   };

   return configureStore<StateSchema>({
      reducer: RootReducer,
      preloadedState: initialState,
   });
}
