import { Container, Title, Slogan } from "./styles";
import { Button } from "../../components/Button";
import backgroundImg from "../../assets/background.png";

export function SignIn() {
  return (
    <Container source={backgroundImg}>
      <Title>Dysrup Veiculos</Title>
      <Slogan>Gestão de uso de veículos</Slogan>
      <Button title="Entrar com o Google"></Button>
    </Container>
  );
}
