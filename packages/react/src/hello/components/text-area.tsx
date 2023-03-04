import { ComponentProps } from 'react'
import { styled } from '../../styles'

export const TextArea = styled('textarea', {
  backgroundColor: '$backgroundDefault',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $divider',

  fontFamily: '$default',
  fontSize: '$sm',
  color: '$textPrimary',
  fontWeight: '$regular',
  resize: 'vertical',
  minHeight: 80,

  '&:focus': {
    outline: 0,
    borderColor: '$actionHover',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$textSecondary',
  },
})

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}

TextArea.displayName = 'TextArea'
