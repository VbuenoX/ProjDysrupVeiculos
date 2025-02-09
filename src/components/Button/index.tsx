import { Container, Title } from "./styles";

interface ButtonProps {
  title: string;
}

export function Button({ title }: ButtonProps) {
  return (
    <Container activeOpacity={0.7}>
      <Title>{title}</Title>
    </Container>
  );
}
