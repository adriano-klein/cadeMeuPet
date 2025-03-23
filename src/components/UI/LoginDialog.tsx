 
import * as Dialog from '@radix-ui/react-dialog';
import styled from 'styled-components';

const DialogOverlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  inset: 0;
  z-index: 1000; /* Ajuste o z-index para garantir que a sobreposição fique acima de outros elementos */
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
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 4px;
`;

const DialogButton = styled.button`
  padding: 0.5rem 4rem;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 4px;
  color: ${props => props.theme.colors.secondary};
  cursor: pointer;
  background-color: transparent;
  
  &:hover {
    font-weight: bold;
    transition: font-weight 0.5s;
  }
`;

const LoginButton = styled.button`
  padding: 0.5rem 4rem;
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 4px;
  color: ${(props) => props.theme.colors.secondary};
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.primary};

  &:hover {
    font-weight: bold;
    transition: font-weight 0.5s;
  }
`;

const LoginDialog = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <DialogButton>Login</DialogButton>
    </Dialog.Trigger>
    <Dialog.Portal>
      <DialogOverlay />
      <DialogContent>
        <DialogTitle>Login</DialogTitle>
        <Fieldset>
          <Label htmlFor="name">Digite seu e-mail</Label>
          <Input id="name"/>
        </Fieldset>
        <Fieldset>
          <Label htmlFor="username">Digite sua senha</Label>
          <Input id="username" type='password'/>
        </Fieldset>
        <Dialog.Close asChild>
          <LoginButton aria-label="Close">Entrar</LoginButton>
        </Dialog.Close>
      </DialogContent>
    </Dialog.Portal>
  </Dialog.Root>
);

export default LoginDialog;