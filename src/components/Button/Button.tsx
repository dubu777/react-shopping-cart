type ButtonTheme = "dark" | "light" | "social" | "text";
type ButtonSize = "small" | "medium" | "large";

interface IButtonProps {
  theme: ButtonTheme;
  children: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
  size?: ButtonSize;
}

const dark = "text-white bg-primary";
const light = "text-primary bg-white";
const social = "text-white bg-social";
const text = "text-white bg-transparent";
// tailwind 변형 속성 hover:, focus:, active:, disabled:등이 있다.
// 해당 속성을 가질 때 해당 스타일이 적용된다.
const disabledStyle = "disabled:text-mono200 disabled:bg-mono100";

const color: Record<ButtonTheme, string> = {
  dark,
  light,
  social,
  text,
};

const sizeStyles: Record<ButtonSize, string> = {
  small: "h-8 text-sm px-4",
  medium: "h-[59px] w-full text-base",
  large: "h-[70px] w-full text-lg",
};

export default function Button({
  theme,
  children,
  onClick,
  disabled,
  size = 'medium',
}: IButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`rounded-button-default ${disabledStyle} ${color[theme]} ${sizeStyles[size]}`}
    >
      {children}
    </button>
  );
}
