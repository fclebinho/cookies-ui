import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@cookies-ui/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Example',
    size: 'small',
    disabled: false,
  },
  argTypes: {
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

export const TextButton: StoryObj<ButtonProps> = {
  args: {
    variant: 'text',
    size: 'medium',
    color: 'primary',
  },
}

export const ContainedButton: StoryObj<ButtonProps> = {
  args: {
    variant: 'contained',
    size: 'medium',
    color: 'primary',
  },
}

export const OutlinedButton: StoryObj<ButtonProps> = {
  args: {
    variant: 'outlined',
    size: 'medium',
    color: 'primary',
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    variant: 'contained',
    size: 'medium',
    color: 'primary',
    children: (
      <>
        Example
        <ArrowRight weight="bold" />
      </>
    ),
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    variant: 'contained',
    size: 'medium',
    disabled: true,
    color: 'primary',
  },
}
