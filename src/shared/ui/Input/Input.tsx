import React, {InputHTMLAttributes, memo} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps{
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
   const {
      className,
      value,
      onChange,
      type = 'text',
      placeholder,
      ...otherProps
   } = props;

   const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
   };

   return (
      <label className={classNames(cls.InputWrapper, {}, [className])}>
         <input
            className={cls.input}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChangeHandler}
            {...otherProps}
         />
      </label>
   );
});
