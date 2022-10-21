import { ModalWrapper } from "./Modal.style";

export interface IModal {
  showModal: boolean;
  children: React.ReactNode;
  className?: string;
}

const Modal: React.FC<IModal> = ({
  showModal,
  children,
  className = ''
}) => {
  return (
    <ModalWrapper className={`${showModal ? 'show' : 'hide'} ${className}`}>
      {children}
    </ModalWrapper>
  );
};

export default Modal;