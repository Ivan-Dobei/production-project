import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string,
    short: boolean,
}

export const LangSwitcher = (props: LangSwitcherProps) => {

   const {
      className,
      short,
   } = props;

   const {t, i18n} = useTranslation();

   const onToggle = () => {
      i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
   };

   return (
      <Button
         theme={ButtonTheme.CLEAR_INVERTED}
         onClick={onToggle}
         className={classNames('', {}, [className])}
      >
         {t(short ? 'ShortLanguage' : 'Language')}
      </Button>
   );
};
