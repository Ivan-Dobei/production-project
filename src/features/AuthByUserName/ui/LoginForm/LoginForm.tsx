import {memo, useCallback} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import {Input} from 'shared/ui/Input/Input';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {loginActions} from '../../model/slice/loginSlice';
import {getLoginState} from '../../model/selectors/getLoginState/getLoginState';

interface LoginFormProps {
    className?: string
}

export const LoginForm = memo(({className}: LoginFormProps) => {
   const {t} = useTranslation();
   const dispatch = useDispatch();
   const state = useSelector(getLoginState);

   const onChangeUsername = useCallback((value: string) => {
      dispatch(loginActions.setUsername(value));
   }, [dispatch]);

   const onChangePassword = useCallback((value: string) => {
      dispatch(loginActions.setPassword(value));
   }, [dispatch]);

   return (
      <div className={classNames(cls.LoginForm, {}, [className])}>
         <Input
            className={cls.input}
            placeholder={t('Enter your username')}
            onChange={onChangeUsername}
            value={state.username}
         />
         <Input
            className={cls.input}
            placeholder={t('Enter your password')}
            onChange={onChangePassword}
            value={state.password}
         />
         <Button
            className={cls.loginBtn}
            theme={ButtonTheme.OUTLINE}
         >
            {t('Login')}
         </Button>
      </div>
   );
});
