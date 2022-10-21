import { PlayAgain } from "../components";
import { Story } from "@storybook/react";

export default {
  title: "Play Again",
  component: PlayAgain,
};

const Template: Story = (args: any) => <PlayAgain {...args} />;

export const PlayAgainStory = Template.bind({});
PlayAgainStory.args = {
};
