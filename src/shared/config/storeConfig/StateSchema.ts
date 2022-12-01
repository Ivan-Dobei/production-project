import {CounterSchema} from 'entities/Counter';
import {UserSchema} from 'entities/User';
import {LoginSchema} from 'features/AuthByUserName';
import {AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject} from '@reduxjs/toolkit';
import {ProfileSchema} from 'entities/Profile';
import {AxiosInstance} from 'axios';
import {To} from 'react-router-dom';
import {NavigateOptions} from 'react-router';
import {ArticleDetailsSchema} from 'entities/Article';


export interface StateSchema {
   counter: CounterSchema;
   user: UserSchema;

   // async reducers
   profile?: ProfileSchema;
   loginForm?: LoginSchema;
   articleDetails?: ArticleDetailsSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
   getReducerMap: () => ReducersMapObject<StateSchema>;
   reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
   add: (key: StateSchemaKey, reducer: Reducer) => void;
   remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithReducerManager extends EnhancedStore<StateSchema>{
   reducerManager: ReducerManager;
}

export interface ThunkApiArg {
   api: AxiosInstance;
   navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkApiConfig<T> {
   rejectValue: T;
   extra: ThunkApiArg;
}
