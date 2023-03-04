import { User } from 'phosphor-react'
import { ComponentProps, FC } from 'react'
import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {
  size?: 'small' | 'medium' | 'large'
}

export const Avatar: FC<AvatarProps> = ({ size, ...props }) => {
  return (
    <AvatarContainer size={size}>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'
