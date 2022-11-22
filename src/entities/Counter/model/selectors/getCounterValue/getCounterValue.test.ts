import {getCounterValue} from './getCounterValue';
import {StateSchema} from 'shared/config/storeConfig/StateSchema';


describe('getCounterValue.test', () => {
   test('should return counter value', () => {
      const state: DeepPartial<StateSchema> = {
         counter: {
            value: 10,
         },
      };
      expect(getCounterValue(state as StateSchema)).toEqual(10);
   });
});
