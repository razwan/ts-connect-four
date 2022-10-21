import { OverlayRules } from "../components";
import { Story } from "@storybook/react";

export default {
    title: "Overlay Rules",
    component: OverlayRules,
}

const Template: Story = (args: any) => <OverlayRules {...args}/>

export const Rules = Template.bind({});
Rules.args =  {
    
}