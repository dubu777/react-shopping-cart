import modalScroll from "@/utils/modal";
import * as S from "./Modal.styles";
import ModalPortal from "./ModalPortal";
import { useEffect } from "react";

interface IModalProps {
  children: React.ReactNode;
  isVisible: boolean;
  onClose: () => void;
}

export default function Modal({ children, isVisible, onClose }: IModalProps) {
  const { preventScroll, allowScroll } = modalScroll();

  useEffect(() => {
    if (isVisible) {
      const prevScrollY = preventScroll();
      return () => {
        allowScroll(prevScrollY);
      };
    }
  }, [isVisible]);

  if (!isVisible) return null;
  return (
    <>
      {isVisible && (
        <ModalPortal>
          <S.ModalBackground onClick={onClose}>
            <S.ModalContent onClick={(e) => e.stopPropagation()}>
              {children}
            </S.ModalContent>
          </S.ModalBackground>
        </ModalPortal>
      )}
    </>
  );
}
