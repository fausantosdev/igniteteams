import { Container, SubTitle, Title } from './styles'

type TypeProps = {
  title: string
  subtitle: string
}

export function Highlight ({ title, subtitle }: TypeProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Container>
  )
}