import Chip from "@/app/components/Chip/Chip";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View } from "react-native";

const meta = {
    title: 'Custom/Chip',
    component: Chip,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <View style={{ flex: 1, alignItems: 'center', padding: 5 }}>
                <Story />
            </View>
        ),
    ],
    args: {
        label: 'Chip Title',
        size: 'medium',
        active: false,
        icon: 'info',
        iconReversed: false,
        disabled: false,
        variant: 'filled'
    }
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Active: Story = {
    args: {
        active: true,
    }
}

export const NoIcon: Story = {
    args: {
        icon: undefined,
    }
} 

export const IconReversed: Story = {
    args: {
        icon: 'info',
        iconReversed: true
    }
} 

export const Disabled: Story = {
    args: {
        disabled: true
    }
}

export const Small: Story = {
    args: {
        size: 'small'
    }
}

export const Medium: Story = {
    args: {
        size: 'medium'
    }
}

export const Large: Story = {
    args: {
        size: 'large'
    }
}

export const Outline: Story = {
    args: {
        variant: 'outline'
    },
    decorators: [
        (Story) => (
            <View style={{ flex: 1, alignItems: 'center', backgroundColor:'black', padding: 5 }}>
                <Story />
            </View>
        )
    ]
}