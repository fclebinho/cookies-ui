import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  backgroundColor: '$gray900',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',
  display: 'flex',
  alignItems: 'center',

  variants: {
    size: {
      small: {
        padding: '$2 $3',
      },
      medium: {
        padding: '$3 $4',
      },
      large: {
        padding: '$4 $5',
      },
    },

    color: {
      primary: {
        '&:has(input:focus)': {
          borderColor: '$primary300',
        },
      },
      secondary: {
        '&:has(input:focus)': {
          borderColor: '$secondary300',
        },
      },
      danger: {
        '&:has(input:focus)': {
          borderColor: '$error300',
        },
      },
    },
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
})

export const Prefix = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray400',
  fontWeight: 'regular',
})

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: 'regular',
  background: 'transparent',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$gray400',
  },
})
