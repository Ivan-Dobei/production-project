import {LoginSchema} from '../types/LoginSchema';
import {DeepPartial} from '@reduxjs/toolkit';
import {loginActions, loginReducer} from './loginSlice';

describe('loginSlice.test', () => {
   test('test set username', () => {
      const state: DeepPartial<LoginSchema> = {
         username: 'lorem',
      };
      expect(loginReducer(
         state as LoginSchema,
         loginActions.setUsername('ipsum'),
      )).toEqual({username: 'ipsum'});
   });

   test('test set password', () => {
      const state: DeepPartial<LoginSchema> = {
         password: '123',
      };
      expect(loginReducer(
         state as LoginSchema,
         loginActions.setPassword('456'),
      )).toEqual({password: '456'});
   });
});
