import {memo, useCallback, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './NavBar.module.scss';
import {useTranslation} from 'react-i18next';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {LoginModal} from 'features/AuthByUserName';
import {getUserAuthData, userActions} from 'entities/User';

interface NavBarProps {
    className?: string
}

export const NavBar = memo(({className}: NavBarProps) => {

   const {t} = useTranslation();
   const [isAuthModal, setIsAuthModal] = useState(false);
   const authData = useSelector(getUserAuthData);
   const dispatch = useDispatch();

   const onOpenModal = useCallback(() => {
      setIsAuthModal(true);
   }, []);

   const onCloseModal = useCallback(() => {
      setIsAuthModal(false);
   }, []);

   const logout = useCallback(() => {
      dispatch(userActions.logout());
   }, [dispatch]);

   if (authData) {
      return (
         <div className={classNames(cls.NavBar, {}, [className])}>
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
      <div className={classNames(cls.NavBar, {}, [className])}>
         <Button
            onClick={onOpenModal}
            className={cls.authBtn}
            theme={ButtonTheme.CLEAR_INVERTED}
         >
            {t('Login')}
         </Button>
         {
            isAuthModal &&
            <LoginModal
               isOpen={isAuthModal}
               onClose={onCloseModal}
            />
         }
      </div>
   );
});
