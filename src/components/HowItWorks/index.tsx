import { Card } from "../Cards";
import { HowItWorksContainer, CardsContainer } from "./styles";

export function HowItWorks() {
  return (
    <HowItWorksContainer>
      <span>
        <h2>Sobre o CadêMeu.pet</h2>
        <p>
          O CadêMeu.pet foi criado com uma missão clara: ajudar tutores a
          reencontrarem seus animais de estimação desaparecidos. Trata-se de um
          serviço completamente gratuito, sem nenhum tipo de cobrança.
          Desenvolvemos a plataforma pensando no momento difícil e
          emocionalmente delicado que as pessoas enfrentam quando perdem seus
          companheiros de quatro patas.
        </p>
        <br />
        <CardsContainer>
          <Card
            title={"Nossa Comunidade"}
            content="Nossa força está na comunidade que construímos entre tutores e pessoas
          engajadas na causa animal por todo o Brasil. Criamos uma rede nacional
          de voluntários que, ao se cadastrarem, informam seu CEP de residência
          ou da região onde passam mais tempo. Este é o diferencial do
          CadêMeu.pet!"
          />
          <Card
            title="Como funciona"
            content="Quando um tutor perde seu animal e registra na plataforma o CEP do
          local onde ocorreu o desaparecimento, nosso sistema age imediatamente:
          enviamos alertas por e-mail e SMS para todas as pessoas cadastradas
          nas proximidades. Assim, mobilizamos instantaneamente um grande número
          de pessoas atentas que podem ajudar a localizar o animal perdido."
          />
          <Card
            title="Processo de localização"
            content="O processo é simples e eficiente: quando alguém encontra o animal
          desaparecido, comunica diretamente pela plataforma. O tutor é
          notificado imediatamente, recebendo todos os dados sobre a localização
          do seu pet."
          />
        </CardsContainer>

        <h2>Nossa missão</h2>
        <p>
          Acreditamos que, juntos, podemos fazer a diferença na vida de muitas
          famílias e ajudar nossos queridos animais a reencontrarem seu lar!
          Esta é a essência do CadêMeu.pet: uma comunidade unida pelo amor aos
          animais e pela solidariedade.
        </p>
      </span>
    </HowItWorksContainer>
  );
}