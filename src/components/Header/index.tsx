import { HeaderContainer, ButtonsContainer } from "./styles";
import Logo from "../../../public/Logo2.png";
import Image from "next/image";
import LoginDialog from "../UI/LoginDialog";
import RegisterDialog from "../UI/RegisterDialog";

export default function Header(){
  return (
    <HeaderContainer>
      <Image src={Logo} alt="Logo" width={256} height={76} />
      <ButtonsContainer>
        <LoginDialog />
        <RegisterDialog />
      </ButtonsContainer>
    </HeaderContainer>
  );
}