import {useState} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './NavBar.module.scss';
import {useTranslation} from 'react-i18next';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {LoginModal} from 'features/AuthByUserName';

interface NavBarProps {
    className?: string
}

export const NavBar = ({className}: NavBarProps) => {

   const {t} = useTranslation();
   const [isAuthModal, setIsAuthModal] = useState(false);

   const onToggleModal = () => {
      setIsAuthModal(prevState => !prevState);
   };

   return (
      <div className={classNames(cls.NavBar, {}, [cls[className]])}>
         <Button
            onClick={onToggleModal}
            className={cls.authBtn}
            theme={ButtonTheme.CLEAR_INVERTED}
         >
            {t('Login')}
         </Button>
         <LoginModal
            isOpen={isAuthModal}
            onClose={onToggleModal}
         />
      </div>
   );
};
