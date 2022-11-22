import {Additional, classNames, Mods} from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import {ButtonHTMLAttributes, memo, ReactNode} from 'react';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
   M = 'size_m',
   L = 'size_l',
   XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    theme?: ButtonTheme,
    size?: ButtonSize,
    square?: boolean,
    disabled?: boolean;
    children?: ReactNode,
}

export const Button = memo((props: ButtonProps) => {

   const {
      className,
      theme = ButtonTheme.CLEAR,
      size = ButtonSize.M,
      children,
      square,
      disabled,
      ...otherProps
   } = props;

   const mods: Mods = {
      [cls.square]: square,
      [cls.disabled]: disabled,
   };

   const additional: Additional = [
      className,
      cls[theme],
      cls[size],
   ];

   return (
      <button
         className={classNames(cls.Button, mods, additional)}
         disabled={disabled}
         {...otherProps}
      >
         {children}
      </button>
   );
});
