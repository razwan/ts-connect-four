import { Winner } from "../components";
import { Story } from "@storybook/react";

export default {
  title: "Winner",
  component: Winner,
};

const Template: Story = (args: any) => <Winner {...args} />;

export const WinnerStory = Template.bind({});
<<<<<<< HEAD
WinnerStory.args = {
  player: "PLAYER 1"
};
=======
WinnerStory.args = {};
>>>>>>> cac4cd20eebf5b9289f9b826dad530fccb3bfac2
