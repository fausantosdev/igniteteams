import { BackButton, BackIcon, Container, Logo } from './styles'

import logoIcon from '@assets/images/logo.png'

type TypeProps = {
  showBackButton?: boolean
}

export const Header = ({ showBackButton = false }: TypeProps) => {
  return (
    <Container>
      {
        showBackButton && 
        <BackButton>
          <BackIcon />
        </BackButton>
      }
      <Logo source={logoIcon}/>
    </Container>
  )
}