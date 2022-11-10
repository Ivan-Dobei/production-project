import {ReactNode} from 'react';
import {I18nextProvider} from 'react-i18next';
import i18nForTest from 'shared/config/i18n/i18nForTest';
import {render} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {StoreProvider} from 'app/providers/StoreProvider';
import {DeepPartial} from '@reduxjs/toolkit';
import {StateSchema} from 'shared/config/storeConfig/StateSchema';

interface renderComponentOptions {
   route?: string,
   initialState?: DeepPartial<StateSchema>;
}

export const renderComponent = (children: ReactNode, options: renderComponentOptions = {}) => {

   const {
      route = '/',
      initialState,
   } = options;

   render (
      <StoreProvider initialState={initialState}>
         <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18nForTest}>
               {children}
            </I18nextProvider>
         </MemoryRouter>
      </StoreProvider>,
   );
};
