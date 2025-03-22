import styled from 'styled-components';
import Image from 'next/image';

export const BannerContainer = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.62) 0%,
      rgba(0, 0, 0, 0.62) 100%
    );
    z-index: 1;
  }
`;

export const BackgroundImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

export const ContentContainer = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;

  h2 {
    color: #fff;
    text-align: center;
    font-family: Roboto;
    font-size: 96px;
    font-weight: 900;
    line-height: normal;

    span {
      color: #f38200;
    }
  }

  p {
    color: #fff;
    text-align: center;
    font-family: Roboto;
    font-weight: 300;
    font-size: 22px;
    line-height: 2rem;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 3rem;
    }

    p {
      padding: 0 2rem;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 2rem;

  button {
    display: flex;
    width: 321px;
    height: 100px;
    padding: 27px 55px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: #fff;
    border-radius: 6px;
    border: 1px solid #f38200;
    background: #000;
    transition: background 0.5s;

    &:hover {
      cursor: pointer;
      background: #f38200;
      color: #000;
      border-color: #000;
    }
  }
`;

interface LostAndFoundButtonProps {
  variant: 'lost' | 'found';
}

export const LostAndFoundButton = styled.button<LostAndFoundButtonProps>`
  border: 1px solid ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primary};
  background: ${(props) => props.theme.colors.secondary};
  padding: 1rem;
  border-radius: 5px;
  width: 9rem;
  margin-left: 1rem;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.secondary};
    transition: 0.5s;
  }
`;