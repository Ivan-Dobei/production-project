import {fireEvent, render, screen} from '@testing-library/react';
import {SideBar} from 'widgets/SideBar';
import {renderComponent} from 'shared/lib/tests/renderComponent/renderComponent';

describe('SideBar test', () => {

   test('Render test', () => {
      renderComponent(<SideBar/>);
      expect(screen.getByTestId('sidebar')).toBeInTheDocument();
   });

   test('Toggle button test', () => {
      renderComponent(<SideBar/>);
      const toggleBtn = screen.getByTestId('sidebar-toggle');
      fireEvent.click(toggleBtn);
      expect(screen.getByTestId('sidebar')).toHaveClass('collapse');
   });
});
