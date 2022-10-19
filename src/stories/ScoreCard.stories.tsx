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
}
export const RightScoreCard = Template.bind({});
RightScoreCard.args = {
    position: "right",
};