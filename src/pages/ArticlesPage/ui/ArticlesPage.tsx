import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';
import {useTranslation} from 'react-i18next';

interface ArticlesPageProps {
    className?: string
}

const ArticlesPage = ({className}: ArticlesPageProps) => {
   const {t} = useTranslation('articles');

   return (
      <div className={classNames(cls.ArticlesPage, {}, [className])}>
         {t('Articles Page')}
      </div>
   );
};

export default ArticlesPage;
