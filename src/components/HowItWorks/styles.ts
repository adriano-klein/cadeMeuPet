import { styled } from "styled-components";

export const HowItWorksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 1000px;

  h2 {
    color: ${(props) => props.theme.colors.black};
    text-align: center;
    font-size: 3rem;
    font-weight: 900 !important;
    line-height: normal;
    margin-top: 2rem;
  }

  span {
    padding: 2rem 0;
    text-align: center;
    p {
      color: ${(props) => props.theme.colors.black};
      text-align: center;
      font-size: 1rem;
      font-weight: 300;
      line-height: 1.5rem;
    }
  }

  @media (max-width: 768px) {
    h2:first-child {
      font-size: 3rem;
      margin-top: 0;
    }

    span {
      padding: 1rem;
    }
  }
`;


export const CardsContainer = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
`