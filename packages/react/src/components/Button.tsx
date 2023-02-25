import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$xs',
  fontFamily: '$default',
  textAlign: 'center',
  boxSizing: 'border-box',
  padding: '0 $4',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$actionHover',
  },

  variants: {
    color: {
      primary: {
        backgroundColor: '$primary500',
        color: 'white',
        '&:not(:disabled):hover': {
          backgroundColor: '$primary900',
        },
        '&:disabled': {
          color: '$textDisabled',
          backgroundColor: '$actionDisabled',
        },
      },
      secondary: {
        backgroundColor: '$secondary500',
        color: 'white',
        '&:not(:disabled):hover': {
          backgroundColor: '$secondary900',
        },
        '&:disabled': {
          color: '$textDisabled',
          backgroundColor: '$actionDisabled',
        },
      },
      danger: {
        backgroundColor: '$error500',
        color: 'white',
        '&:not(:disabled):hover': {
          backgroundColor: '$error900',
        },
        '&:disabled': {
          color: '$textDisabled',
          backgroundColor: '$actionDisabled',
        },
      },
    },
    size: {
      small: {
        fontSize: '$sm',
        padding: '3px 9px',
        lineHeight: '$base',
      },

      medium: {
        fontSize: '$md',
        padding: '5px 15px',
        lineHeight: '$base',
      },
      large: {
        fontSize: '$lg',
        padding: '7px 21px',
        lineHeight: '$base',
      },
    },
    variant: {
      text: { background: 'transparent' },
      contained: {},
      outlined: {},
    },
  },

  compoundVariants: [
    {
      color: 'primary',
      variant: 'text',
      css: {
        color: '$primary500',
        background: 'transparent',
        border: 0,

        '&:not(:disabled):hover': {
          color: '$primary900',
          background: 'transparent',
        },

        '&:disabled': {
          color: '$textDisabled',
          background: 'transparent',
        },
      },
    },
    {
      color: 'primary',
      variant: 'outlined',
      css: {
        color: '$primary500',
        background: 'transparent',
        border: '1px solid $primary500',

        '&:not(:disabled):hover': {
          color: '$primary900',
          background: 'transparent',
          border: '1px solid $primary900',
        },

        '&:disabled': {
          color: '$textDisabled',
          background: 'transparent',
          border: '1px solid $actionDisabled',
        },
      },
    },
    {
      color: 'secondary',
      variant: 'text',
      css: {
        color: '$secondary500',
        background: 'transparent',
        border: 0,

        '&:not(:disabled):hover': {
          color: '$secondary900',
          background: 'transparent',
        },

        '&:disabled': {
          color: '$textDisabled',
          background: 'transparent',
        },
      },
    },
    {
      color: 'secondary',
      variant: 'outlined',
      css: {
        color: '$secondary500',
        background: 'transparent',
        border: '1px solid $secondary500',

        '&:not(:disabled):hover': {
          color: '$secondary900',
          background: 'transparent',
          border: '1px solid $secondary900',
        },

        '&:disabled': {
          color: '$textDisabled',
          background: 'transparent',
          border: '1px solid $actionDisabled',
        },
      },
    },
    {
      color: 'danger',
      variant: 'text',
      css: {
        color: '$error500',
        background: 'transparent',
        border: 0,

        '&:not(:disabled):hover': {
          color: '$error900',
          background: 'transparent',
        },

        '&:disabled': {
          color: '$gray400',
          background: 'transparent',
        },
      },
    },
    {
      color: 'danger',
      variant: 'outlined',
      css: {
        color: '$error500',
        background: 'transparent',
        border: '1px solid $error500',

        '&:not(:disabled):hover': {
          color: '$error900',
          background: 'transparent',
          border: '1px solid $error900',
        },

        '&:disabled': {
          color: '$gray400',
          background: 'transparent',
          border: '1px solid $gray400',
        },
      },
    },
  ],

  defaultVariants: {
    variant: 'contained',
    color: 'primary',
    size: 'medium',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
