import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ArticleBlockImageComponent.module.scss';

interface ArticleBlockImageComponentProps {
    className?: string
}

export const ArticleImage = ({className}: ArticleBlockImageComponentProps) => {
   return (
      <div className={classNames(cls.ArticleBlockImageComponent, {}, [className])}>

      </div>
   );
};
