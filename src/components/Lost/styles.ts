import styled from "styled-components";

export const LostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 3.12rem;

  h2 {
    color: ${(props) => props.theme.colors.secondary};
    text-transform: uppercase;
  }
`;

export const LostDescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch; /* Garante que todos os spans tenham a mesma altura */
  margin-top: 2.5rem;
  gap: 2rem;
  max-width: 80%;

  span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color: ${(props) => props.theme.colors.secondary};
    font-size: 1rem;
    font-weight: 200;
    line-height: 1.5rem;
    border: 1px solid ${(props) => props.theme.colors.secondary};
    border-radius: 0.5rem;
    padding: 1.5rem;
    flex: 1;
    min-width: 200px;
    gap: 1rem;

    svg {
      width: 2.5rem;
      height: 2.5rem;
      color: ${(props) => props.theme.colors.white};
      margin: 0 auto;
    }
  }

  @media (max-width: 768px) {
    gap: 0;
    flex-direction: column;
    max-width: 100%;

    span {
      width: 100%;
      margin-bottom: 1rem;
      padding: 1rem;
    }
  }
`;
