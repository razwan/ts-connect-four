import {ScoreCard} from "../components/ScoreCard/ScoreCard";
import {Story} from "@storybook/react";

export default {
    title: "ScoreCard",
    component: ScoreCard,
}

const Template: Story = (args: any) => <ScoreCard {...args}/>

export const LeftScoreCard = Template.bind({});
LeftScoreCard.args = {
    position: 'left',
    player: "Player 1",
    score: 12,
}
export const RightScoreCard = Template.bind({});
RightScoreCard.args = {
  position: "right",
  player: "Player 2",
  score: 23,
};