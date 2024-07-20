import { StyledText } from "./Text.styles";

export interface ITextProps {
  type?: 'title' | 'subtitle' | 'body' | 'notification';
  children: string;
}

export default function Text({type, children}: ITextProps) {
  return (
    <StyledText type={type}>{children}</StyledText>
  )
}