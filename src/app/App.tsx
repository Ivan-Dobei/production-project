import {classNames} from 'shared/lib/classNames/classNames';
import {useTheme} from 'app/providers/ThemeProvider';
import {Suspense} from 'react';
import './styles/style.scss';
import {AppRouter} from 'app/providers/AppRounter';
import {NavBar} from 'widgets/NavBar';
import {SideBar} from 'widgets/SideBar';

const App = () => {

   const {theme} = useTheme();

   return (
      <div className={classNames('app', {}, [theme])}>
         <Suspense fallback="">
            <NavBar/>
            <div className="content-page">
               <SideBar/>
               <AppRouter/>
            </div>
         </Suspense>
      </div>
   );
};

export default App;
