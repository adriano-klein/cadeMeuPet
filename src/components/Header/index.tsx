import { HeaderContainer, ButtonsContainer, RegisterButton } from "./styles";
import Logo from "../../../public/Logo2.png";
import Image from "next/image";
import LoginDialog from "../UI/LoginDialog";

export default function Header(){
  return (
    <HeaderContainer>
      <Image src={Logo} alt="Logo" width={140} height={45} />
      <ButtonsContainer>
        <LoginDialog />
        <RegisterButton>Registre-se</RegisterButton>
      </ButtonsContainer>
    </HeaderContainer>
  );
}