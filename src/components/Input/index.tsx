import { TextInputProps } from 'react-native'
import { useTheme } from 'styled-components/native'

import { Container } from  './styles'

type TypeProps = TextInputProps & {}

export function Input({ ...rest }: TypeProps) {
  const { COLORS } = useTheme()

  return (
    <Container 
      placeholderTextColor={COLORS.GRAY_300}
      {...rest} />
  )
}