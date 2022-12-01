import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ArticleDetails.module.scss';
import {DynamicModuleLoader, ReducersList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {articleDetailsReducer} from '../../model/slice/articleDetailsSlice';
import {memo, useEffect} from 'react';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch';
import {fetchArticleById} from '../../model/services/fetchArticleById/fetchArticleById';

interface ArticleDetailsProps {
    className?: string
}

const initialReducers: ReducersList = {
   articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(({className}: ArticleDetailsProps) => {
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(fetchArticleById('1'));
   }, [dispatch]);

   return (
      <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount >
         <div className={classNames(cls.ArticleDetails, {}, [className])}>
            Article Details
         </div>
      </DynamicModuleLoader>
   );
});
