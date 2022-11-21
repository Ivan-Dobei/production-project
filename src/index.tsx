import {render} from 'react-dom';
import App from './app/App';
import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider} from 'app/providers/ThemeProvider';
import 'shared/config/i18n/i18n';
import {StoreProvider} from 'app/providers/StoreProvider';
import {ErrorBoundary} from 'app/providers/ErrorBoundary/ui/ErrorBoundary';
import 'app/styles/style.scss';


render(
   <BrowserRouter>
      <StoreProvider>
         <ErrorBoundary>
            <ThemeProvider>
               <App/>
            </ThemeProvider>
         </ErrorBoundary>
      </StoreProvider>
   </BrowserRouter>,
   document.getElementById('root'),
);
