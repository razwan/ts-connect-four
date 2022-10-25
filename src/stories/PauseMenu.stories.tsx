import { Story } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { PauseMenu } from "../components";
import { theme } from "../styles/Theme.style";

export default {
    title: "PauseMenu",
    component: PauseMenu,
}

const Template: Story = (args: any) => <ThemeProvider theme={theme}><PauseMenu /></ThemeProvider>;

export const PauseMenuStory =  Template.bind({});