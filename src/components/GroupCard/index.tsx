import { TouchableOpacityProps } from 'react-native'
import { Container, Icon, Title } from  './styles'

type TypeProps = TouchableOpacityProps & {
  title: string
}

export function GroupCard ({ title, ...rest }: TypeProps) {
  return (
    <Container {...rest}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  )
}