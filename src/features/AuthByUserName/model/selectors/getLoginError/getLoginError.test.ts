import {getLoginError} from './getLoginError';
import {StateSchema} from 'shared/config/storeConfig/StateSchema';

describe('getLoginError.test', () => {

   test('should return value', () => {
      const state: DeepPartial<StateSchema> = {
         loginForm: {
            error: 'error',
         },
      };
      expect(getLoginError(state as StateSchema)).toEqual('error');
   });

   test('should work with empty state', () => {
      const state: DeepPartial<StateSchema> = {};
      expect(getLoginError(state as StateSchema)).toEqual('');
   });
});
