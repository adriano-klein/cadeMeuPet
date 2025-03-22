import { FoundContainer, DescriptionContainer } from "./styles";
import { User, MagnifyingGlass, Table } from 'phosphor-react'

export function Found(){
  return (
    <FoundContainer>
      <h2>Encontrei</h2>
      <DescriptionContainer>
        <span>
          <User />
          <p>
            Caso seja o seu primeiro acesso, realize o seu cadastro antes de
            começar. Ele é importante para criarmos uma comunidade com o máximo
            de pessoas para ajudar a encontrar o tutor.
          </p>
        </span>
        <span>
          <MagnifyingGlass />
          <p>
            Baseado nas características do animal fornecidas por você,
            enviaremos um email para todos os tutores que estão procurando o seu
            PET e que coincidam com as características dos animais que estão
            sendo procurados.
          </p>
        </span>
        <span>
          <Table />
          <p>
            Preencha o formulário com as características do PET que você
            encontrou e suba algumas fotos para facilitar a busca. Forneça a
            maior quantidade possível, pois assim a busca será mais assertiva.
          </p>
        </span>
      </DescriptionContainer>
    </FoundContainer>
  );
}