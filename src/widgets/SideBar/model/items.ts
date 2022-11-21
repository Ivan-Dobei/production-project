import React from 'react';
import {RoutePath} from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about-icon.svg';
import MainIcon from 'shared/assets/icons/main-icon.svg';
import ProfileIcon from 'shared/assets/icons/profile-icon.svg';

export interface SideBarItemType {
   text: string;
   path: string;
   Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SideBarItemList: SideBarItemType[] = [
   {
      path: RoutePath.main,
      text: 'Main page',
      Icon: MainIcon,
   },
   {
      path: RoutePath.about,
      text: 'About page',
      Icon: AboutIcon,
   },
   {
      path: RoutePath.profile,
      text: 'Profile page',
      Icon: ProfileIcon,
   },
];
