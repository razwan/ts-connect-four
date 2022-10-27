import Disc from "../components/Disc";
import { IDisc } from "../components/Disc/Disc";
import { Story } from "@storybook/react";

export default {
    title: 'Disc',
    component: Disc,
}

const Template: Story<IDisc> = (args: any) => <Disc {...args} />;

export const DiscPlayer1 = Template.bind({});
DiscPlayer1.args = {
    color: '#FD6687',
    winner: false,
};

export const DiscPlayer2 = Template.bind({});
DiscPlayer2.args = {
    color: '#FFCE67',
    winner: true,
};
