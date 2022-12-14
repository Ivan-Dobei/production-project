import {StateSchema} from 'shared/config/storeConfig/StateSchema';
import {getLoginUsername} from './getLoginUsername';

describe('getLoginError.test', () => {

   test('should return value', () => {
      const state: DeepPartial<StateSchema> = {
         loginForm: {
            username: 'lorem',
         },
      };
      expect(getLoginUsername(state as StateSchema)).toEqual('lorem');
   });

   test('should work with empty state', () => {
      const state: DeepPartial<StateSchema> = {};
      expect(getLoginUsername(state as StateSchema)).toEqual('');
   });
});
