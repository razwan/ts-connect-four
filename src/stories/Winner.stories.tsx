import { Winner } from "../components";
import { Story } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/Theme.style";


export default {
  title: "Winner",
  component: Winner,
};

const Template: Story = (args: any) => (
  <ThemeProvider theme={theme}>
    <Winner {...args} />
  </ThemeProvider>
);

export const WinnerStory = Template.bind({});

WinnerStory.args = {
  player: "PLAYER 1"
};
