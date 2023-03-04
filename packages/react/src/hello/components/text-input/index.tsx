import { ComponentProps, forwardRef, ElementRef } from 'react'
import { Input, Prefix, TextInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
  color?: 'primary' | 'secondary' | 'danger'
  sizes?: 'small' | 'medium' | 'large'
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  (
    { prefix, sizes = 'medium', color = 'primary', ...props }: TextInputProps,
    ref,
  ) => {
    return (
      <TextInputContainer size={sizes} color={color}>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} {...props} />
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'
