import { AlertModalPart } from '@components/common';
import { useModalTargetEl, usePreventScroll } from '@hooks/index';
import useOpenModalByErrorMessage from '@hooks/modal/useOpenModalByErrorMessage';
import { AlertModal } from 'badahertz52-react-modules-components';

interface CountAlertModalProps {
  errorMessage: string;
}

const CountAlertModal = (props: CountAlertModalProps) => {
  const { modalTargetEl } = useModalTargetEl();
  const { openModal, setOpenModal } = useOpenModalByErrorMessage({ errorMessage: props.errorMessage });
  usePreventScroll({ targetEl: document.body as HTMLElement, isPreventScroll: openModal });

  return (
    <>
      {modalTargetEl && (
        <AlertModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          contents={<AlertModalPart.Contents message={props.errorMessage} />}
          buttonContainerJustifyContent="center"
          button={<AlertModalPart.ConfirmButton text="확인" />}
          modalTargetEl={modalTargetEl}
          contentsPadding={window.innerWidth <= 435 ? '10px' : undefined}
        />
      )}
    </>
  );
};

export default CountAlertModal;
