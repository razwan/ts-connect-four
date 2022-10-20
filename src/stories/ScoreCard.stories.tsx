import {ScoreCard} from "../components";
import {Story} from "@storybook/react";

export default {
    title: "ScoreCard",
    component: ScoreCard,
}

const Template: Story = (args: any) => <ScoreCard {...args}/>

export const LeftScoreCard = Template.bind({});
LeftScoreCard.args = {
    position: 'left',
    player: "PLAYER 1",
    score: 12,
}
export const RightScoreCard = Template.bind({});
RightScoreCard.args = {
  position: "right",
  player: "PLAYER 2",
  score: 23,
};