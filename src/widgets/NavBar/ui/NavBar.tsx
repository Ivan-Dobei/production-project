import {useCallback, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './NavBar.module.scss';
import {useTranslation} from 'react-i18next';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {LoginModal} from 'features/AuthByUserName';
import {getUserAuthData, userActions} from 'entities/User';
import {loginActions} from 'features/AuthByUserName/model/slice/loginSlice';

interface NavBarProps {
    className?: string
}

export const NavBar = ({className}: NavBarProps) => {

   const {t} = useTranslation();
   const [isAuthModal, setIsAuthModal] = useState(false);
   const authData = useSelector(getUserAuthData);
   const dispatch = useDispatch();

   const onOpenModal = useCallback(() => {
      setIsAuthModal(true);
   }, []);

   const onCloseModal = useCallback(() => {
      setIsAuthModal(false);
      dispatch(loginActions.setError(''));
      dispatch(loginActions.setUsername(''));
      dispatch(loginActions.setPassword(''));
   }, [dispatch]);

   const logout = useCallback(() => {
      dispatch(userActions.logout());
      setIsAuthModal(false);
   }, [dispatch]);

   if (authData) {
      return (
         <div className={classNames(cls.NavBar, {}, [cls[className]])}>
            <Button
               onClick={logout}
               className={cls.authBtn}
               theme={ButtonTheme.CLEAR_INVERTED}
            >
               {t('Logout')}
            </Button>
         </div>
      );
   }

   return (
      <div className={classNames(cls.NavBar, {}, [cls[className]])}>
         <Button
            onClick={onOpenModal}
            className={cls.authBtn}
            theme={ButtonTheme.CLEAR_INVERTED}
         >
            {t('Login')}
         </Button>
         <LoginModal
            isOpen={isAuthModal}
            onClose={onCloseModal}
         />
      </div>
   );
};
