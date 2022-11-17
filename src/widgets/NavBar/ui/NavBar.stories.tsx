import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';
import {NavBar} from './NavBar';
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
   title: 'widgets/NavBar',
   component: NavBar,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
   ThemeDecorator(Theme.DARK),
   StoreDecorator({}),
];

export const Auth = Template.bind({});
Auth.args = {};
Auth.decorators = [StoreDecorator({
   user: {authData: {}},
})];
