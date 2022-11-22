import {memo} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './SideBar.module.scss';
import {useState} from 'react';
import {ThemeSwitcher} from 'widgets/ThemeSwitcher';
import {LangSwitcher} from 'widgets/LangSwitcher';
import {Button, ButtonSize, ButtonTheme} from 'shared/ui/Button/Button';
import {useTranslation} from 'react-i18next';
import {SideBarItemList} from '../../model/items';
import {SideBarItem} from '../SideBarItem/SideBarItem';

interface SideBarProps {
    className?: string
}

export const SideBar = memo(({className}: SideBarProps) => {

   const [collapsed, setCollapsed] = useState(false);

   const onToggle = () => {
      setCollapsed(prev => !prev);
   };

   return (
      <div
         data-testid={'sidebar'}
         className={classNames(cls.SideBar, {[cls.collapse]: collapsed}, [className])}
      >
         <div className={cls.links}>
            {SideBarItemList.map(item => (
               <SideBarItem
                  key={item.path}
                  item={item}
                  collapsed={collapsed}
               />
            ))}
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
});
