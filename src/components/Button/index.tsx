import { TouchableOpacityProps } from 'react-native'

import { Container, Title, TypeButtonStylesProps } from  './styles'

type TypeProps = TouchableOpacityProps & {
  title: string
  type?: TypeButtonStylesProps 
}

export function Button({ title, type = 'PRIMARY', ...rest }: TypeProps) {
  return (
    <Container type={type} {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}