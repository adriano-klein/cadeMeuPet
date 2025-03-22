import Image from "next/image";
import { BannerContainer, ContentContainer, LostAndFoundButton} from "./styles";
import Logo from "../../../public/Logo2.png";

export function Banner() {
  return (
    <BannerContainer>
      <ContentContainer>
        <Image src={Logo} width={433} height={129} alt="Logo" />
        <h2>
          Ajudamos você a <br /> <span>encontrar</span> o seu <span>pet</span>!
        </h2>
        <span>
          <LostAndFoundButton>Encontrei</LostAndFoundButton>
          <LostAndFoundButton>Perdi</LostAndFoundButton>
        </span>
        <p>
          Uma comunidade que ama os animais e que juntam forças para <br />
          ajudar a encontrar nossos filhos de 4 patas!
        </p>
      </ContentContainer>
    </BannerContainer>
  );
}