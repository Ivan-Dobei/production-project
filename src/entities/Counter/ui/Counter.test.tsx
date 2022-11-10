import {screen} from '@testing-library/react';
import {renderComponent} from 'shared/lib/tests/renderComponent/renderComponent';
import {Counter} from './Counter';
import {userEvent} from '@storybook/testing-library';

describe('Counter.test', () => {

   test('Render test', () => {
      renderComponent(<Counter/>, {
         initialState: { counter: { value: 10 } },
      });
      expect(screen.getByTestId('counter-value')).toHaveTextContent('10');
   });

   test('increment test', () => {
      renderComponent(<Counter/>, {
         initialState: { counter: { value: 10 } },
      });
      userEvent.click(screen.getByTestId('increment-btn'));
      expect(screen.getByTestId('counter-value')).toHaveTextContent('11');
   });

   test('decrement test', () => {
      renderComponent(<Counter/>, {
         initialState: { counter: { value: 10 } },
      });
      userEvent.click(screen.getByTestId('decrement-btn'));
      expect(screen.getByTestId('counter-value')).toHaveTextContent('9');
   });
});
