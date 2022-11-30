import {RouteProps} from 'react-router-dom';
import {MainPage} from 'pages/MainPage';
import {AboutPage} from 'pages/AboutPage';
import {NotFoundPage} from 'pages/NotFoundPage';
import {ProfilePage} from 'pages/ProfilePage';
import {ArticlesPage} from 'pages/ArticlesPage';
import {ArticleDetailsPage} from 'pages/ArticleDetailsPage';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    // NOT_FOUND last
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
   [AppRoutes.MAIN]: '/',
   [AppRoutes.ABOUT]: '/about',
   [AppRoutes.PROFILE]: '/profile',
   [AppRoutes.ARTICLES]: '/articles',
   [AppRoutes.ARTICLE_DETAILS]: '/article/', // + :id
   // NOT_FOUND last
   [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
   [AppRoutes.MAIN]: {
      path: RoutePath.main,
      element: <MainPage/>,
   },
   [AppRoutes.ABOUT]: {
      path: RoutePath.about,
      element: <AboutPage/>,
   },
   [AppRoutes.PROFILE]: {
      path: RoutePath.profile,
      element: <ProfilePage/>,
   },
   [AppRoutes.ARTICLES]: {
      path: RoutePath.articles,
      element: <ArticlesPage/>,
   },
   [AppRoutes.ARTICLE_DETAILS]: {
      path: RoutePath.article_details + ':id',
      element: <ArticleDetailsPage/>,
   },
   // NOT_FOUND last
   [AppRoutes.NOT_FOUND]: {
      path: RoutePath.not_found,
      element: <NotFoundPage/>,
   },
};
