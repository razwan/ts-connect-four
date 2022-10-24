import { Timer } from "../components";
import { Story } from "@storybook/react";

export default {
   title: "Timer",
   component: Timer,
}

const Template: Story = (args: any) => <Timer {...args}/>

export const TimerStory =  Template.bind({});
TimerStory.args = {
   player: "PLAYER 1",
   time: 15,
};