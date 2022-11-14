import {classNames} from 'shared/lib/classNames/classNames';
import {Suspense} from 'react';
import {AppRouter} from 'app/providers/AppRounter';
import {NavBar} from 'widgets/NavBar';
import {SideBar} from 'widgets/SideBar';

const App = () => {

   return (
      <div className={classNames('app', {}, [])}>
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
