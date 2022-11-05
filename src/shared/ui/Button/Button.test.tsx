import {render, screen} from '@testing-library/react';
import {Button} from 'shared/ui/Button/Button';

describe('Button test', () => {
   test('Render test', () => {
      render(<Button>Test</Button>);
      expect(screen.getByText('Test')).toBeInTheDocument();
   });
});
