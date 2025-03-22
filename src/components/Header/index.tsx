import { HeaderContainer, ButtonsContainer, LoginButton, RegisterButton } from "./styles";
import Logo from "../../../public/Logo2.png";
import Image from "next/image";

export default function Header(){
  return (
    <HeaderContainer>
        <Image src={Logo} alt="Logo" />
        <ButtonsContainer>
          <LoginButton>Login</LoginButton>
          <RegisterButton>Registre-se</RegisterButton>
        </ButtonsContainer>
    </HeaderContainer>
  );
}