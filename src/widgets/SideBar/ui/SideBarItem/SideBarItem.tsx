import {memo} from 'react';
import cls from './SideBarItem.module.scss';
import {AppLink, LinkTheme} from 'shared/ui/AppLink/AppLink';
import {useTranslation} from 'react-i18next';
import {SideBarItemType} from '../../model/items';
import {classNames} from 'shared/lib/classNames/classNames';

interface SideBarItemProps {
    item: SideBarItemType;
    collapsed: boolean;
}

export const SideBarItem = memo(({item, collapsed}: SideBarItemProps) => {
   const {t} = useTranslation();

   return (
      <AppLink
         className={classNames(cls.link, {[cls.collapse]: collapsed})}
         theme={LinkTheme.INVERTED}
         to={item.path}
      >
         <item.Icon className={cls.icons}/>
         <span
            className={cls.linkText}
         >
            {t(item.text)}
         </span>
      </AppLink>
   );
});
