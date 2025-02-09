import { TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, onPress }: ButtonProps) {
  return (
    <Container activeOpacity={0.7} onPress={onPress}>
      <Title>{title}</Title>
    </Container>
  );
}
