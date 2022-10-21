import { OverlayRulesCheck } from "../components";
import { Story } from "@storybook/react";

export default {
  title: "Overlay Rules Check",
  component: OverlayRulesCheck,
};

const Template: Story = (args: any) => <OverlayRulesCheck {...args} />;

export const RulesCheck = Template.bind({});
RulesCheck.args = {};
