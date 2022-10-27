import { Timer } from "../components";
import { Story } from "@storybook/react";
import AppContext, { withContextProvider } from '../AppContext';

export default {
   title: "Timer",
   component: Timer,
}

const TimerWithContext = withContextProvider( ( props: any ) => {
   return (
      <Timer { ...props } />
   )
} );

const Template: Story = (args: any) => <TimerWithContext {...args}/>

export const TimerStory =  Template.bind({});
TimerStory.args = {
   player: "PLAYER 1",
};