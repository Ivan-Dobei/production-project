import {memo, useCallback} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import {Input} from 'shared/ui/Input/Input';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {loginActions, loginReducer} from '../../model/slice/loginSlice';
import {loginByUsername} from '../../model/services/loginByUsername/loginByUsername';
import {Text, TextTheme} from 'shared/ui/Text/Text';
import {getLoginUsername} from '../../model/selectors/getLoginUsername/getLoginUsername';
import {getLoginPassword} from '../../model/selectors/getLoginPassword/getLoginPassword';
import {getLoginError} from '../../model/selectors/getLoginError/getLoginError';
import {getLoginLoading} from '../../model/selectors/getLoginLoading/getLoginLoading';
import {DynamicModuleLoader, ReducersList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch';

export interface LoginFormProps {
    className?: string;
    onSuccess?: () => void;
}

const initialReducers: ReducersList = {
   loginForm: loginReducer,
};

const LoginForm = memo(({className, onSuccess}: LoginFormProps) => {
   const {t} = useTranslation();
   const dispatch = useAppDispatch();
   const username = useSelector(getLoginUsername);
   const password = useSelector(getLoginPassword);
   const error = useSelector(getLoginError);
   const isLoading = useSelector(getLoginLoading);

   const onChangeUsername = useCallback((value: string) => {
      dispatch(loginActions.setUsername(value));
   }, [dispatch]);

   const onChangePassword = useCallback((value: string) => {
      dispatch(loginActions.setPassword(value));
   }, [dispatch]);

   const onLoginClick = useCallback( async () => {
      const result = await dispatch(loginByUsername({username, password}));
      if (result.meta.requestStatus === 'fulfilled') {
         onSuccess?.();
      }
   }, [dispatch, onSuccess, password, username]);

   return (
      <DynamicModuleLoader
         reducers={initialReducers}
         removeAfterUnmount={true}
      >
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
               onClick={onLoginClick}
               disabled={isLoading}
            >
               {t('Login')}
            </Button>
         </div>
      </DynamicModuleLoader>
   );
});

export default LoginForm;
