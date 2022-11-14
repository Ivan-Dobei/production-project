import {classNames} from 'shared/lib/classNames/classNames';
import {useTheme} from 'app/providers/ThemeProvider';
import {Suspense, useEffect, useState} from 'react';
import {AppRouter} from 'app/providers/AppRounter';
import {NavBar} from 'widgets/NavBar';
import {SideBar} from 'widgets/SideBar';

const App = () => {

   const [bug, setBug] = useState(false);

   useEffect(() => {
      if (bug) {
         throw new Error();
      }
   }, [bug]);

   return (
      <div className={classNames('app', {}, [])}>
         <Suspense fallback="">
            <NavBar/>
            <button onClick={() => setBug(prevState => !prevState)}>bug</button>
            <div className="content-page">
               <SideBar/>
               <AppRouter/>
            </div>
         </Suspense>
      </div>
   );
};

export default App;
