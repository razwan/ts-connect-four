import { Story } from '@storybook/react';
import { Board } from "../components";
import { IBoard } from "../components/Board/Board";

export default {
    title: 'Board',
    component: Board,
}

const Template: Story<IBoard> = (args: any) => <Board {...args} />;

export const BoardPlayer1Turn = Template.bind({});
BoardPlayer1Turn.args = {
    player: 'player1',
    currentPointerIndex: 0
};

export const BoardPlayer2Turn = Template.bind({});
BoardPlayer2Turn.args = {
    player: 'player2',
    currentPointerIndex: 0
};