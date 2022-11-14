import {classNames} from 'shared/lib/classNames/classNames';
import cls from './PageError.module.scss';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {useTranslation} from 'react-i18next';

interface PageErrorProps {
    className?: string
}

const reloadPage = () => {
   window.location.reload();
};

export const PageError = ({className}: PageErrorProps) => {

   const {t} = useTranslation();

   return (
      <div className={classNames(cls.PageError, {}, [className])}>
         <h1 className={cls.title}>{t('An unexpected error has occurred')}</h1>
         <Button
            onClick={reloadPage}
            theme={ButtonTheme.OUTLINE}
            className={cls.bugBtn}
         >
            {t('Reload page')}
         </Button>
      </div>
   );
};
