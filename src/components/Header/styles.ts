import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;

  img {
    width: 10rem;
    height: 4rem;
  }

  @media (max-width: 768px) {
    gap: 1rem;
    padding: 0.5rem 0;

    img {
      width: 6rem;
      height: 2rem;
    }
  }
`;

export const ButtonsContainer = styled.span`
  display: flex;
  gap: 1rem;
`

export const LoginButton = styled.button`
  border: 2px solid ${(props) => props.theme.colors.primary};
  background: none;
  padding: 1rem;
  border-radius: 5px;
  width: 9rem;
`;

export const RegisterButton = styled.button`
  border: 2px solid ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primary};
  background: ${(props) => props.theme.colors.secondary};
  padding: 1rem;
  border-radius: 5px;
  width: 9rem;
`;