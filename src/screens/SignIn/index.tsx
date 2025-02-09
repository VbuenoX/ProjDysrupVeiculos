import { Container, Title, Slogan } from "./styles";
import { Button } from "../../components/Button";
import backgroundImg from "../../assets/background.png";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { WEB_CLIENT_ID, IOS_CLIENT_ID } from "@env";
import { useState } from "react";
import { Alert } from "react-native";

GoogleSignin.configure({
  scopes: ["email", "profile"],
  webClientId: WEB_CLIENT_ID,
  iosClientId: IOS_CLIENT_ID,
});

export function SignIn() {
  async function handleGoogleSignIn() {
    try {
      const response = await GoogleSignin.signIn();
    } catch (error) {
      console.error(error);
      Alert.alert("Não foi possível fazer login com o Google");
    }
  }

  return (
    <Container source={backgroundImg}>
      <Title>Dysrup Veiculos</Title>
      <Slogan>Gestão de uso de veículos</Slogan>
      <Button title="Entrar com o Google" onPress={handleGoogleSignIn} />
    </Container>
  );
}
