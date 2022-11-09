import {useState} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './NavBar.module.scss';
import {useTranslation} from 'react-i18next';
import {Modal} from 'shared/ui/Modal/Modal';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';

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
         <Modal
            isOpen={isAuthModal}
            onClose={onToggleModal}
         >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusamus ad alias aperiam aspernatur blanditiis consequuntur
            cupiditate, distinctio error, nihil non provident quam quas reprehenderit rerum similique ut,
            voluptates. Repudiandae, vitae.
         </Modal>
      </div>
   );
};
