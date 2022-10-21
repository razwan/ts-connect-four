import { Winner } from "../components";
import { Story } from "@storybook/react";

export default {
  title: "Winner",
  component: Winner,
};

const Template: Story = (args: any) => <Winner {...args} />;

export const WinnerStory = Template.bind({});
WinnerStory.args = {
  player: "PLAYER 1"
};
