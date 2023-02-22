import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@cookies-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    alt: 'Example',
    size: 'medium',
  },
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: {
        type: 'inline-radio',
      },
    },
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
