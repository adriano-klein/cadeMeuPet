import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";
import { UserPlus } from "phosphor-react";

const DialogOverlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  inset: 0;
  z-index: 1000;
`;

const DialogContent = styled(Dialog.Content)`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  width: 500px;
  margin: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const DialogTitle = styled(Dialog.Title)`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  border: none;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 4px;
`;

const RegisterButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 4px;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.secondary};
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    font-weight: bold;
    transition: font-weight 0.5s;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;

    span {
      display: none;
    }
  }
`;

const RegisterDialog = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <RegisterButton title="Registre-se">
        <UserPlus size={28} />
        <span>Cadastre-se</span>
      </RegisterButton>
    </Dialog.Trigger>
    <Dialog.Portal>
      <DialogOverlay />
      <DialogContent>
        <DialogTitle>Registre-se</DialogTitle>
        <Fieldset>
          <Label htmlFor="name">Seu nome</Label>
          <Input id="name" type="text" />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="username">E-mail</Label>
          <Input id="username" type="email" />
        </Fieldset>

        <Fieldset>
          <Label htmlFor="username">Senha</Label>
          <Input id="username" type="password" />
        </Fieldset>

        <Fieldset>
          <Label htmlFor="username">Confirme sua senha</Label>
          <Input id="username" type="password" />
        </Fieldset>
        <Dialog.Close asChild>
          <RegisterButton aria-label="Close">Enviar</RegisterButton>
        </Dialog.Close>
      </DialogContent>
    </Dialog.Portal>
  </Dialog.Root>
);

export default RegisterDialog;
