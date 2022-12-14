import {memo} from 'react';
import cls from './NotFoundPage.module.scss';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage = memo(({className}: NotFoundPageProps) => {

   const {t} = useTranslation();

   return (
      <div className={classNames(cls.NotFoundPage, {}, [className])}>
         {t('Page not found')}
      </div>
   );
});
