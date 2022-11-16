import {Suspense, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {AppRouter} from 'app/providers/AppRounter';
import {NavBar} from 'widgets/NavBar';
import {SideBar} from 'widgets/SideBar';
import {userActions} from 'entities/User';
import {classNames} from 'shared/lib/classNames/classNames';

const App = () => {

   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(userActions.initAuthData());
   }, [dispatch]);

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
