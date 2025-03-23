import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;

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