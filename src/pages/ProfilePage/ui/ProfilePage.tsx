import {memo, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';
import {DynamicModuleLoader, ReducersList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {fetchProfileData, profileReducer} from 'entities/Profile';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch';
import {ProfileCard} from 'entities/Profile';

interface ProfilePageProps {
    className?: string
}

const initialReducers: ReducersList = {
   profile: profileReducer,
};

const ProfilePage = memo(({className}: ProfilePageProps) => {
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(fetchProfileData());
   }, [dispatch]);

   return (
      <DynamicModuleLoader
         reducers={initialReducers}
         removeAfterUnmount
      >
         <div className={classNames('', {}, [className])}>
            <ProfileCard/>
         </div>
      </DynamicModuleLoader>
   );
});

export default ProfilePage;
