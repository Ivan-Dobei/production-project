import React, {InputHTMLAttributes, memo} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

export enum InputTheme {
   'PRIMARY' = 'primary',
   'CLEAR' = 'clear',
}

interface InputProps extends HTMLInputProps{
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    theme?: InputTheme;
}

export const Input = memo((props: InputProps) => {
   const {
      className,
      value,
      onChange,
      type = 'text',
      placeholder,
      theme = InputTheme.PRIMARY,
      ...otherProps
   } = props;

   const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
   };

   return (
      <label className={classNames(cls.InputWrapper, {}, [className])}>
         <input
            className={classNames(cls.input, {}, [cls[theme]])}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChangeHandler}
            {...otherProps}
         />
      </label>
   );
});
