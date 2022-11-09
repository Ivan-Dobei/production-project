import {classNames} from 'shared/lib/classNames/classNames';
import cls from './SideBar.module.scss';
import {useState} from 'react';
import {ThemeSwitcher} from 'widgets/ThemeSwitcher';
import {LangSwitcher} from 'widgets/LangSwitcher';
import {Button, ButtonSize, ButtonTheme} from 'shared/ui/Button/Button';
import {AppLink, LinkTheme} from 'shared/ui/AppLink/AppLink';
import {useTranslation} from 'react-i18next';
import {RoutePath} from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about-icon.svg';
import MainIcon from 'shared/assets/icons/main-icon.svg';

interface SideBarProps {
    className?: string
}

export const SideBar = ({className}: SideBarProps) => {

   const [collapsed, setCollapsed] = useState(false);
   const [t] = useTranslation();

   const onToggle = () => {
      setCollapsed(prev => !prev);
   };

   return (
      <div
         data-testid={'sidebar'}
         className={classNames(cls.SideBar, {[cls.collapse]: collapsed}, [className])}
      >
         <div className={cls.links}>
            <AppLink
               className={cls.link}
               theme={LinkTheme.INVERTED}
               to={RoutePath.main}
            >
               <MainIcon className={cls.icons}/>
               <span
                  className={cls.linkText}
               >
                  {t('Main page')}
               </span>
            </AppLink>
            <AppLink
               className={cls.link}
               theme={LinkTheme.INVERTED}
               to={RoutePath.about}
            >
               <AboutIcon className={cls.icons}/>
               <span
                  className={cls.linkText}
               >
                  {t('About page')}
               </span>
            </AppLink>
         </div>
         <Button
            data-testid={'sidebar-toggle'}
            className={cls.collapseBtn}
            onClick={onToggle}
            theme={ButtonTheme.BACKGROUND_INVERTED}
            square
            size={ButtonSize.L}
         >
            {collapsed ? '>' : '<'}
         </Button>
         <div className={cls.switchers}>
            <ThemeSwitcher/>
            <LangSwitcher
               className={cls.langSwitcher}
               short={collapsed}
            />
         </div>
      </div>
   );
};
