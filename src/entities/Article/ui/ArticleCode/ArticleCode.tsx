import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ArticleBlockCodeComponent.module.scss';

interface ArticleBlockCodeComponentProps {
    className?: string
}

export const ArticleCode = ({className}: ArticleBlockCodeComponentProps) => {
   return (
      <div className={classNames(cls.ArticleBlockCodeComponent, {}, [className])}>

      </div>
   );
};
