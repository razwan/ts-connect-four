import { Story } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { StartMenu } from "../components";
import { theme } from "../styles/Theme.style";

export default {
    title: "StartMenu",
    component: StartMenu,
}

const Template: Story = (args: any) => <ThemeProvider theme={theme}><StartMenu /></ThemeProvider>;

export const StartMenuStory =  Template.bind({});