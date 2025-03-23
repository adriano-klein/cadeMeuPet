import { CardContainer } from "./style";

interface CardProps {
  title: string;
  content: string;
}

export function Card({title, content}: CardProps){
  return (
    <CardContainer>
      <h2>{title}</h2>
      <p>{content}</p>
    </CardContainer>
  );
}