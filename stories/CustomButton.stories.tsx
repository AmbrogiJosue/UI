import type { Meta, StoryObj } from "@storybook/react-native-web-vite";

import Button from "./../app/components/Button/Button";
import { View } from "react-native";

import { fn } from "storybook/test";
import { action } from 'storybook/actions';

const meta = {
    title: 'Custom/Button',
    component: Button,
    tags: ['autodocs'],
      decorators: [
        (Story) => (
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Story />
          </View>
        ),
      ],
    args: {
        onPress: fn(),
        disabled: false,
        weight: 'normal',
        size: 'medium',
        text: 'Title'
    }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        variant: 'filled',
        color: 'primary',
    }
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    color: 'primary',
  }
}

export const Text: Story ={
  args: {
    variant: 'text',
    color: 'primary'
  },
}

export const Disabled: Story = {
  args: {
    variant: 'filled',
    color: 'primary',
    disabled: true
  }
}

export const OutlineDisabled: Story = {
  args: {
    variant: 'outline',
    color: 'primary',
    disabled: true
  }
}

export const TextDisabled: Story = {
  args: {
    variant: 'text',
    disabled: true,
    color: 'primary'
  }
}