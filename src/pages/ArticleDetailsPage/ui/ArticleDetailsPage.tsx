import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import {ArticleDetails} from 'entities/Article';

interface ArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage = ({className}: ArticleDetailsPageProps) => {
   return (
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
         <ArticleDetails/>
      </div>
   );
};

export default ArticleDetailsPage;
