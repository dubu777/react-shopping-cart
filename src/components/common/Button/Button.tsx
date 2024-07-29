import * as S from "./Button.styles";

export type ButtonTheme = "dark" | "light" | "gray" | "text";
export type ButtonSize = "small" | "medium" | "large";

export interface IButtonProps {
  $buttonTheme: ButtonTheme;
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isDisable?: boolean;
  size?: ButtonSize;
}

export default function Button({
  $buttonTheme,
  children,
  onClick,
  isDisable = false,
  size = 'medium',
}: IButtonProps) {
  return (
    <S.Button
      onClick={onClick}
      disabled={isDisable}
      size={size}
      $buttonTheme={$buttonTheme}
    >
      {children}
    </S.Button>
  );
}
