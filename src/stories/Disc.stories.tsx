import Disc from "../components/Disc";
import { IDisc } from "../components/Disc/Disc";
import { Story } from "@storybook/react";
import { ThemeProvider } from 'styled-components';
import { theme } from "../styles/Theme.style";

export default {
    title: 'Disc',
    component: Disc,
}
const Template: Story<IDisc> = (args: any) => <ThemeProvider theme={theme}><Disc {...args} /></ThemeProvider>;

export const DiscPlayer1 = Template.bind({});
DiscPlayer1.args = {
    color: theme.colors.pink,
    winner: false,
};

export const DiscPlayer2 = Template.bind({});
DiscPlayer2.args = {
    color: theme.colors.yellow,
    winner: true,
};
