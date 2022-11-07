import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {SideBar} from './SideBar';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';

export default {
   title: 'widgets/SideBar',
   component: SideBar,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as ComponentMeta<typeof SideBar>;

const Template: ComponentStory<typeof SideBar> = (args) => <SideBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

