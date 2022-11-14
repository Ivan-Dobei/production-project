import {classNames} from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import {Input} from 'shared/ui/Input/Input';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {useTranslation} from 'react-i18next';

interface LoginFormProps {
    className?: string
}

export const LoginForm = ({className}: LoginFormProps) => {
   const {t} = useTranslation();

   return (
      <div className={classNames(cls.LoginForm, {}, [className])}>
         <Input
            className={cls.input}
            placeholder={t('Enter your username')}
         />
         <Input
            className={cls.input}
            placeholder={t('Enter your password')}
         />
         <Button
            className={cls.loginBtn}
            theme={ButtonTheme.OUTLINE}
         >
            {t('Login')}
         </Button>
      </div>
   );
};
