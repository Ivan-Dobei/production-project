import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import {Text} from 'shared/ui/Text/Text';
import {useTranslation} from 'react-i18next';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {Input, InputTheme} from 'shared/ui/Input/Input';
import {useSelector} from 'react-redux';
import {getProfileData} from '../../model/selectors/getProfileData/getProfileData';
import {getProfileError} from '../../model/selectors/getProfileError/getProfileError';
import {getProfileIsLoading} from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';

interface ProfileCardProps {
    className?: string
}

export const ProfileCard = ({className}: ProfileCardProps) => {
   const {t} = useTranslation('profile');
   const data = useSelector(getProfileData);

   return (
      <div className={classNames(cls.ProfileCard, {}, [className])}>
         <div className={cls.header}>
            <Text title={t('Profile')}/>
            <Button
               className={cls.editBtn}
               theme={ButtonTheme.OUTLINE}
            >
               {t('Edit')}
            </Button>
         </div>
         <ul className={cls.items}>
            <li className={cls.item}>
               <Input
                  value={data?.firstname}
                  theme={InputTheme.CLEAR}
               />
            </li>
            <li className={cls.item}>
               <Input
                  value={data?.lastname}
                  theme={InputTheme.CLEAR}
               />
            </li>
         </ul>
      </div>
   );
};
