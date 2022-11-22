import {getCounter} from './getCounter';
import {StateSchema} from 'shared/config/storeConfig/StateSchema';

describe('getCounter.test', () => {
   test('should return counter', () => {
      const state: DeepPartial<StateSchema> = {
         counter: {
            value: 10,
         },
      };
      expect(getCounter(state as StateSchema)).toEqual({value: 10});
   });
});
