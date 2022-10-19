import Button from "../components/Button";
import { IButton } from "../components/Button/Button";
import { Story } from '@storybook/react';
import Heading from "../components/Heading";
import { theme } from "../styles/Theme.style";
import { ThemeProvider } from "styled-components";

export default {
  title: 'Button',
  component: Button,
}

const Template: Story<IButton> = (args: any) => <ThemeProvider theme={theme}><Button {...args} /></ThemeProvider>;

export const Emphasized = Template.bind({});
Emphasized.args = {
  backgroundColor: theme.colors.pink,
  children: <Heading size='M'>Quit game</Heading>,
  alignment: 'center',
  onClick: () => {}
};

export const Plain = Template.bind({});
Plain.args = {
  variant:'plain',
  children: <Heading size='XS' color={theme.colors.white}>Menu</Heading>,
  onClick: () => {}
};