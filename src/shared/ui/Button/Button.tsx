import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import {ButtonHTMLAttributes, ReactNode} from 'react';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    theme?: ThemeButton,
    children: ReactNode,
}

export const Button = (props: ButtonProps) => {

   const {
      className,
      theme = ThemeButton.CLEAR,
      children,
      ...otherProps
   } = props;

   return (
      <button
         className={classNames(cls.Button, {}, [className, cls[theme]])}
         {...otherProps}
      >
         {children}
      </button>
   );
};
