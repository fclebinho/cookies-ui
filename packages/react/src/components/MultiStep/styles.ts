import { styled } from '../../styles'
import { Text } from '../Text'

export const MultiStepContainer = styled('div', {})

export const Label = styled(Text, {
  color: '$gray200',

  defaultVariants: {
    size: 'xs',
  },
})

export const Steps = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(var(--steps-size), 1fr)',
  gap: '$2',
  marginTop: '$1',
})

export const Step = styled('div', {
  height: '$1',
  borderRadius: '$px',
  backgroundColor: '$gray600',

  variants: {
    color: {
      default: {
        backgroundColor: '$gray600',
      },
      primary: {
        backgroundColor: '$gray600',
      },
      secondary: {
        backgroundColor: '$gray600',
      },
      danger: {
        backgroundColor: '$gray600',
      },
    },

    active: {
      true: {
        backgroundColor: '$gray100',
      },
    },
  },

  compoundVariants: [
    {
      active: true,
      color: 'default',
      css: {
        backgroundColor: '$gray100',
      },
    },
    {
      active: true,
      color: 'primary',
      css: {
        backgroundColor: '$primary300',
      },
    },
    {
      active: true,
      color: 'secondary',
      css: {
        backgroundColor: '$secondary300',
      },
    },
    {
      active: true,
      color: 'danger',
      css: {
        backgroundColor: '$error300',
      },
    },
  ],

  defaultVariants: {
    color: 'default',
  },
})
