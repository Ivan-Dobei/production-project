import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import {ButtonHTMLAttributes, ReactNode} from 'react';

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
    children: ReactNode,
}

export const Button = (props: ButtonProps) => {

   const {
      className,
      theme = ButtonTheme.CLEAR,
      size = ButtonSize.M,
      children,
      square,
      ...otherProps
   } = props;

   const additional: string[] = [
      className,
      cls[theme],
      cls[size],
   ];

   return (
      <button
         className={classNames(cls.Button, {[cls.square]: square}, additional)}
         {...otherProps}
      >
         {children}
      </button>
   );
};
