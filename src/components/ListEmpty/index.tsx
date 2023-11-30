import { Container, Message } from "./styles"

type TypeProps = {
  message: string
}

export function ListEmpty({ message }: TypeProps) {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  )
}