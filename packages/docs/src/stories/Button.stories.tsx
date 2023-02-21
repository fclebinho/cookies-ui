import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@cookies-ui/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Example',
    variant: 'text',
    size: 'small',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ['text', 'contained', 'outlined'],
      control: {
        type: 'inline-radio',
      },
    },
    color: {
      options: ['primary', 'secondary', 'danger'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: { action: 'clicked' },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    color: 'secondary',
    children: 'Create new',
  },
}

export const Danger: StoryObj<ButtonProps> = {
  args: {
    color: 'danger',
    children: 'Cancel',
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Próximo passo
        <ArrowRight weight="bold" />
      </>
    ),
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}
