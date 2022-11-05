import {classNames} from 'shared/lib/classNames/classNames';
import cls from './NavBar.module.scss';
import {AppLink, LinkTheme} from 'shared/ui/AppLink/AppLink';
import {useTranslation} from 'react-i18next';

interface NavBarProps {
    className?: string
}

export const NavBar = ({className}: NavBarProps) => {

   const {t} = useTranslation();

   return (
      <div className={classNames(cls.NavBar, {}, [cls[className]])}>
         <div className={cls.links}>
            <AppLink
               className={cls.mainLink}
               theme={LinkTheme.SECONDARY}
               to="/"
            >
               {t('Main page')}
            </AppLink>
            <AppLink
               theme={LinkTheme.SECONDARY}
               to="/about"
            >
               {t('About page')}
            </AppLink>
         </div>
      </div>
   );
};
