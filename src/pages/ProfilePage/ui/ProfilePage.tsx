import {memo} from 'react';
import {useTranslation} from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ProfilePage.module.scss';
import {DynamicModuleLoader, ReducersList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {profileReducer} from 'entities/Profile';

interface ProfilePageProps {
    className?: string
}

const initialReducers: ReducersList = {
   profile: profileReducer,
};

const ProfilePage = memo(({className}: ProfilePageProps) => {
   const {t} = useTranslation('profile');

   return (
      <DynamicModuleLoader
         reducers={initialReducers}
         removeAfterUnmount
      >
         <div className={classNames(cls.ProfilePage, {}, [className])}>
            {t('Profile Page')}
         </div>
      </DynamicModuleLoader>
   );
});

export default ProfilePage;
