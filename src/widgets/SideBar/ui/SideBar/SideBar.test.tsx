import {fireEvent, render, screen} from '@testing-library/react';
import {SideBar} from 'widgets/SideBar';
import {renderWithTranslation} from 'shared/lib/tests/renderComponent/renderWithTranslation';

describe('SideBar test', () => {

   test('Render test', () => {
      render(<SideBar/>);
      expect(screen.getByTestId('sidebar')).toBeInTheDocument();
   });

   test('Toggle button test', () => {
      renderWithTranslation(<SideBar/>);
      const toggleBtn = screen.getByTestId('sidebar-toggle');
      fireEvent.click(toggleBtn);
      expect(screen.getByTestId('sidebar')).toHaveClass('collapse');
   });
});
