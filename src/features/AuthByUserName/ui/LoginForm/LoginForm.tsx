import {memo, useCallback} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import {Input} from 'shared/ui/Input/Input';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {loginActions} from '../../model/slice/loginSlice';
import {getLoginState} from '../../model/selectors/getLoginState/getLoginState';
import {loginByUsername} from '../../model/services/loginByUsername/loginByUsername';
import {Text, TextTheme} from 'shared/ui/Text/Text';

interface LoginFormProps {
    className?: string
}

export const LoginForm = memo(({className}: LoginFormProps) => {
   const {t} = useTranslation();
   const dispatch = useDispatch();
   const {username, password, isLoading, error} = useSelector(getLoginState);

   const onChangeUsername = useCallback((value: string) => {
      dispatch(loginActions.setUsername(value));
   }, [dispatch]);

   const onChangePassword = useCallback((value: string) => {
      dispatch(loginActions.setPassword(value));
   }, [dispatch]);

   const onClickHandler = useCallback(() => {
      dispatch(loginByUsername({username, password}));
   }, [dispatch, password, username]);

   return (
      <div className={classNames(cls.LoginForm, {}, [className])}>
         <Text
            title={t('Auth Form')}
            className={cls.formTitle}
         />
         {
            error &&
            <Text
               theme={TextTheme.ERROR}
               text={t('Invalid login or password')}
            />
         }
         <Input
            className={cls.input}
            placeholder={t('Enter your username')}
            onChange={onChangeUsername}
            value={username}
         />
         <Input
            className={cls.input}
            placeholder={t('Enter your password')}
            onChange={onChangePassword}
            value={password}
         />
         <Button
            className={cls.loginBtn}
            theme={ButtonTheme.OUTLINE}
            onClick={onClickHandler}
            disabled={isLoading}
         >
            {t('Login')}
         </Button>
      </div>
   );
});
