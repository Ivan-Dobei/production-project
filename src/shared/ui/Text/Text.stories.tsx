import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';
import {Text, TextTheme} from './Text';

export default {
   title: 'shared/Text',
   component: Text,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
   title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Accusamus ad alias aperiam aspernatur',
   text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Accusamus ad alias aperiam aspernatur',
};

export const Error = Template.bind({});
Error.args = {
   title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Accusamus ad alias aperiam aspernatur',
   text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Accusamus ad alias aperiam aspernatur',
   theme: TextTheme.ERROR,
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
   title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Accusamus ad alias aperiam aspernatur',
};

export const onlyText = Template.bind({});
onlyText.args = {
   text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Accusamus ad alias aperiam aspernatur',
};
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
   title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Accusamus ad alias aperiam aspernatur',
   text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Accusamus ad alias aperiam aspernatur',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
   title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Accusamus ad alias aperiam aspernatur',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
   text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Accusamus ad alias aperiam aspernatur',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
