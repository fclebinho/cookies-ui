import * as Checkbox from '@radix-ui/react-checkbox'
import { styled } from '../../styles'

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  width: '$6',
  height: '$6',
  backgroundColor: '$actionActive',
  borderRadius: '$xs',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid $divider',

  variants: {
    color: {
      primary: {
        '&[data-state="checked"]': {
          backgroundColor: '$primary500',
        },

        '&:focus, &[data-state="checked"]': {
          border: '2px solid $primary500',
        },

        '&:disabled': {
          backgroundColor: '$actionDisabled',
          border: '2px solid $actionDisabled',
          cursor: 'not-allowed',
        },
      },
      secondary: {
        '&[data-state="checked"]': {
          backgroundColor: '$secondary500',
        },

        '&:focus, &[data-state="checked"]': {
          border: '2px solid $secondary500',
        },

        '&:disabled': {
          backgroundColor: '$actionDisabled',
          border: '2px solid $actionDisabled',
          cursor: 'not-allowed',
        },
      },
      danger: {
        '&[data-state="checked"]': {
          backgroundColor: '$error500',
        },

        '&:focus, &[data-state="checked"]': {
          border: '2px solid $error500',
        },

        '&:disabled': {
          backgroundColor: '$actionDisabled',
          border: '2px solid $actionDisabled',
          cursor: 'not-allowed',
        },
      },
    },
  },

  defaultVariants: {
    color: 'primary',
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$white',
  width: '$4',
  height: '$4',
})
