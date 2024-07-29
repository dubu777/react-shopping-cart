import { StyledDivider } from "./Divider.styles";


export interface IDividerProps {
  size?: 'small' | 'medium';
  $color?: 'dark' | 'gray';
}

export default function Divider({size = 'small', $color = 'dark'}: IDividerProps) {
  return <StyledDivider size={size} $color={$color}/>;
}
