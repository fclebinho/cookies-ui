import { styled } from '../../styles'
import { Text } from '../text'

export const MultiStepContainer = styled('div', {})

export const Label = styled(Text, {
  color: '$textPrimary',

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
  backgroundColor: '$actionDisabled',

  variants: {
    color: {
      default: {
        backgroundColor: '$actionDisabled',
      },
      primary: {
        backgroundColor: '$actionDisabled',
      },
      secondary: {
        backgroundColor: '$actionDisabled',
      },
      danger: {
        backgroundColor: '$actionDisabled',
      },
    },

    active: {
      true: {
        backgroundColor: '$actionActive',
      },
    },
  },

  compoundVariants: [
    {
      active: true,
      color: 'default',
      css: {
        backgroundColor: '$actionActive',
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
