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
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Story />
            </View>
        ),
    ],
    args: {
        label: 'Chip Title',
        size: 'medium',
        active: false,
        icon: <></>,
        iconReversed: false
    }
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Active: Story = {
    args: {
        active: true,
    }
}

export const Icon: Story = {
    args: {
        icon: <Ionicons name="information-circle-outline" size={24} color="black" />,
    }
} 

export const IconReversed: Story = {
    args: {
        icon: <Ionicons name="information-circle-outline" size={32} color="black" />,
        iconReversed: true
    }
} 