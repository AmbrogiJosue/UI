import type { Meta, StoryObj } from "@storybook/react-native-web-vite";

import CheckBox from "../app/components/CheckBox/CheckBox";
import { View } from "react-native";

import { fn } from "storybook/test";
import { action } from 'storybook/actions';

const meta = {
    title: 'Custom/CheckBox',
    component: CheckBox,
    tags: ['autodocs'],
      decorators: [
        (Story) => (
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Story />
          </View>
        ),
      ],
    args: {
        on: false,
        disabled: false,
        size: 'medium',
        color: 'primary'
    },
} satisfies Meta<typeof CheckBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args : {
    on: true,
  }
}

export const Off: Story = {
  args: {
    on: false,
  }
}

export const Disabled: Story = {
  args : {
    disabled: true
  }
}
