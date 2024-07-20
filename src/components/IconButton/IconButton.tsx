import { Button } from "./IconButton.styles";

interface IIconButtonProps {
  iconPath: string;
  alt: string;
  // 이렇게 이벤트 핸들러로 넣어줄때는 prop으로 넘기는 함수에 꼭 이벤트를 파라미터로 받도록 설정을 해줘야한다. 
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export default function IconButton({iconPath, onClick, alt}: IIconButtonProps) {
  return (
    <Button onClick={onClick}>
      <img src={iconPath} alt={alt}/>
    </Button>
  )
}