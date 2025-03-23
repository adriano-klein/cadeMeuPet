import Image from "next/image";
import { BannerContainer, BackgroundImage, ContentContainer, LostAndFoundButton } from "./styles";
import Logo from "../../../public/Logo2.png";
import BannerImage from "../../../public/BannerImage.png";

export function Banner() {
  return (
    <BannerContainer>
      <BackgroundImage src={BannerImage} alt="Banner Background" quality={75} priority/>
      <ContentContainer>
        <Image src={Logo} width={384} height={114} alt="Logo" quality={75} priority />
        <h2>
          Ajudamos você a <br /> <span>encontrar</span> o seu <span>pet</span>!
        </h2>
        <span>
          <LostAndFoundButton variant="lost">Encontrei</LostAndFoundButton>
          <LostAndFoundButton variant="found">Perdi</LostAndFoundButton>
        </span>
        <p>
          Uma comunidade que ama os animais e que juntam forças para <br />
          ajudar a encontrar nossos filhos de 4 patas!
        </p>
      </ContentContainer>
    </BannerContainer>
  );
}