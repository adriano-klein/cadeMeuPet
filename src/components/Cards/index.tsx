import { ComponentType} from "react";
import { CardContainer } from "./style";
import { IconProps } from "phosphor-react";

type PhosphorIcon = ComponentType<IconProps>;

interface CardProps {
  title: string;
  content: string;
  icon: PhosphorIcon;
}

export function Card({title, content, icon: Icon}: CardProps){
  return (
    <CardContainer>
      <Icon size={48} />
      <h2>{title}</h2>
      <p>{content}</p>
    </CardContainer>  
  );
}