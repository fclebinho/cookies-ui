import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$xs',
  fontSize: '$sm',
  // fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  // minWidth: 120,
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
          backgroundColor: '$primary300',
        },
      },
      secondary: {
        backgroundColor: '$secondary500',
        color: 'white',
        '&:not(:disabled):hover': {
          backgroundColor: '$secondary900',
        },
        '&:disabled': {
          backgroundColor: '$secondary300',
        },
      },
      danger: {
        backgroundColor: '$error500',
        color: 'white',
        '&:not(:disabled):hover': {
          backgroundColor: '$error900',
        },
        '&:disabled': {
          backgroundColor: '$error300',
        },
      },
    },
    text: {
      true: {},
    },
    contained: {
      true: {},
    },
    outlined: {
      true: {},
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
  },

  compoundVariants: [
    {
      color: 'primary',
      text: true,
      css: {
        background: 'transparent',
        border: 0,
      },
    },
  ],

  // variants: {
  //   variant: {
  //     text: {
  //       background: 'transparent',
  //     },
  //     contained: {},
  //     outlined: {
  //       border: '1px solid #fff',
  //       background: 'transparent',
  //     },
  //   },
  //   color: {
  //     primary: {
  //       color: '$white',
  //       background: '$primary500',
  //
  //       '&:not(:disabled):hover': {
  //         background: '$primary900',
  //       },
  //
  //       '&:disabled': {
  //         backgroundColor: '$grey200',
  //       },
  //     },
  //     secondary: {
  //       color: '$white',
  //       background: '$secondary500',
  //
  //       '&:not(:disabled):hover': {
  //         background: '$secondary900',
  //       },
  //
  //       '&:disabled': {
  //         backgroundColor: '$grey200',
  //       },
  //     },
  //     danger: {
  //       color: '$white',
  //       background: '$error500',
  //
  //       '&:not(:disabled):hover': {
  //         background: '$error900',
  //       },
  //
  //       '&:disabled': {
  //         backgroundColor: '$grey200',
  //       },
  //     },
  //   },
  //
  //   size: {
  //     small: {
  //       fontSize: '$xs',
  //       padding: '3px 9px',
  //       lineHeight: '$base',
  //     },
  //
  //     medium: {
  //       fontSize: '$sm',
  //       padding: '5px 15px',
  //       lineHeight: '$base',
  //     },
  //     large: {
  //       fontSize: '$md',
  //       padding: '7px 21px',
  //       lineHeight: '$base',
  //     },
  //   },
  // },
  //

  defaultVariants: {
    text: true,
    color: 'primary',
    size: 'small',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
