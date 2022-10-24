import { Story } from '@storybook/react';
import { Board } from "../components";

export default {
    title: 'Board',
    component: Board,
}

const Template: Story = (args: any) => <Board {...args} />;

export const BoardPlayer1Turn = Template.bind({});
BoardPlayer1Turn.args = {
};

export const BoardPlayer2Turn = Template.bind({});
BoardPlayer2Turn.args = {
};