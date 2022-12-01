import {createAsyncThunk} from '@reduxjs/toolkit';
import {ThunkApiConfig} from 'shared/config/storeConfig/StateSchema';
import {Article} from '../../types/article';

export const fetchArticleById = createAsyncThunk<Article, string, ThunkApiConfig<string>>(
   'articleDetails/fetchArticleById',
   async (articleId, thunkAPI) => {
      const {extra, rejectWithValue} = thunkAPI;

      try {
         const response = await extra.api.get<Article>('/articles/' + articleId);

         return response.data;
      } catch (e) {
         console.log(e);
         return rejectWithValue('error');
      }
   },
);
