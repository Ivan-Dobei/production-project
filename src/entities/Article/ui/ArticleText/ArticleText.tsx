import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ArticleBlockTextComponent.module.scss';

interface ArticleBlockTextComponentProps {
    className?: string
}

export const ArticleText = ({className}: ArticleBlockTextComponentProps) => {
   return (
      <div className={classNames(cls.ArticleBlockTextComponent, {}, [className])}>

      </div>
   );
};
