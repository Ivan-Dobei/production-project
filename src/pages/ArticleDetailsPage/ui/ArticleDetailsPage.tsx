import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage = ({className}: ArticleDetailsPageProps) => {
   return (
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
         Article Detail Page
      </div>
   );
};

export default ArticleDetailsPage;
