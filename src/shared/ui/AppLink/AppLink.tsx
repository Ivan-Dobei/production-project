import {memo} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import {Link, LinkProps} from 'react-router-dom';

export enum LinkTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
}

interface AppLinkProps extends LinkProps {
    className?: string,
    theme?: LinkTheme
}

export const AppLink = memo((props: AppLinkProps) => {

   const {
      to,
      className,
      children,
      theme = LinkTheme.PRIMARY,
      ...otherProps
   } = props;

   return (
      <Link
         to={to}
         className={classNames(cls.AppLink, {}, [className, cls[theme]])}
         {...otherProps}
      >
         {children}
      </Link>
   );
});
