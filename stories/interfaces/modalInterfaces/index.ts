export interface ModalProps {
  children: React.ReactNode;
  showModal: boolean;
}

export interface SlideModalProps extends ModalProps {
  slideDirection: "vertical" | "horizontal";
}
export interface SlideModalHookProps {
  showModal: boolean;
  slideDirection: "vertical" | "horizontal";
}
