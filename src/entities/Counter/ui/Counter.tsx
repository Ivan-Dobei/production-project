import React from 'react';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {useDispatch, useSelector} from 'react-redux';
import {counterActions} from '../model/slice/counterSlice';
import {getCounterValue} from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {

   const dispatch = useDispatch();
   const value = useSelector(getCounterValue);

   const increment = () => {
      dispatch(counterActions.increment());
   };

   const decrement = () => {
      dispatch(counterActions.decrement());
   };

   return (
      <div>
         <h1 data-testid={'counter-value'}>{value}</h1>
         <Button
            data-testid={'increment-btn'}
            onClick={increment}
            theme={ButtonTheme.BACKGROUND_INVERTED}
         >
            Increment
         </Button>
         <Button
            data-testid={'decrement-btn'}
            onClick={decrement}
            theme={ButtonTheme.BACKGROUND_INVERTED}
         >
            Decrement
         </Button>
      </div>
   );
};
