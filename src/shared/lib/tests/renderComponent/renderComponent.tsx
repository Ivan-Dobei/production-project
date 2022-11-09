import {ReactNode} from 'react';
import {I18nextProvider} from 'react-i18next';
import i18nForTest from 'shared/config/i18n/i18nForTest';
import {render} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';

interface renderComponentOptions {
   route?: string,
}

export const renderComponent = (children: ReactNode, options: renderComponentOptions = {}) => {

   const {
      route = '/',
   } = options;

   render (
      <MemoryRouter initialEntries={[route]}>
         <I18nextProvider i18n={i18nForTest}>
            {children}
         </I18nextProvider>,
      </MemoryRouter>,
   );
};
