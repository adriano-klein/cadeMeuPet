import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 24rem;
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 6px;
  padding: 1rem;

  h2 {
    color: ${(props) => props.theme.colors.primary};
    text-align: center;
    font-size: 2rem !important;
    font-weight: 900;
    line-height: normal;
    margin-top: 1rem;
  }
`