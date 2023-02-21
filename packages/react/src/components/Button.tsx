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
    boxShadow: '0 0 0 2px $colors$grey100',
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
          color: '$gray100',
          backgroundColor: '$gray400',
        },
      },
      secondary: {
        backgroundColor: '$secondary500',
        color: 'white',
        '&:not(:disabled):hover': {
          backgroundColor: '$secondary900',
        },
        '&:disabled': {
          color: '$gray100',
          backgroundColor: '$gray400',
        },
      },
      danger: {
        backgroundColor: '$error500',
        color: 'white',
        '&:not(:disabled):hover': {
          backgroundColor: '$error900',
        },
        '&:disabled': {
          color: '$gray100',
          backgroundColor: '$gray400',
        },
      },
    },
    size: {
      small: {
        fontSize: '$xs',
        padding: '3px 9px',
        lineHeight: '$base',
      },

      medium: {
        fontSize: '$sm',
        padding: '5px 15px',
        lineHeight: '$base',
      },
      large: {
        fontSize: '$md',
        padding: '7px 21px',
        lineHeight: '$base',
      },
    },
    text: {
      true: {
        background: 'transparent',
      },
    },
    contained: {
      true: {},
    },
    outlined: {
      true: {},
    },
  },

  compoundVariants: [
    {
      color: 'primary',
      text: true,
      css: {
        color: '$primary500',
        background: 'transparent',
        border: 0,

        '&:not(:disabled):hover': {
          color: '$primary900',
          background: 'transparent',
        },

        '&:disabled': {
          color: '$gray400',
          background: 'transparent',
        },
      },
    },
    {
      color: 'primary',
      outlined: true,
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
          color: '$gray400',
          background: 'transparent',
          border: '1px solid $gray400',
        },
      },
    },
    {
      color: 'secondary',
      text: true,
      css: {
        color: '$secondary500',
        background: 'transparent',
        border: 0,

        '&:not(:disabled):hover': {
          color: '$secondary900',
          background: 'transparent',
        },

        '&:disabled': {
          color: '$gray400',
          background: 'transparent',
        },
      },
    },
    {
      color: 'secondary',
      outlined: true,
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
          color: '$gray400',
          background: 'transparent',
          border: '1px solid $gray400',
        },
      },
    },
    {
      color: 'danger',
      text: true,
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
      outlined: true,
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
    contained: true,
    color: 'primary',
    size: 'medium',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
