import {ScoreCardEmoji} from "../components";
import {Story} from "@storybook/react";

export default {
    title: "ScoreCardEmoji",
    component: ScoreCardEmoji,
}

const Template: Story = (args: any) => <ScoreCardEmoji position={args.position} />

export const ScoreCardEmojiStory =  Template.bind({});
ScoreCardEmojiStory.args = {
    position: "left"
}