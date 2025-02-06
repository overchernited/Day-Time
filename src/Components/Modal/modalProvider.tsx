import { createContext, useState, ReactNode } from "react";

interface ModalContextType {
  isOpen: boolean;
  openModal: (
    title: string,
    height: string,
    width: string,
    content: ReactNode,
    modalIcon?: string
  ) => void;
  closeModal: () => void;
  modalContent: ReactNode | null;
  modalTitle: string;
  modalIcon?: string;
  modalHeight: string;
  modalWidth: string;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);
  const [modalTitle, setModalTitle] = useState<string>("");
  const [modalIcon, setModalIcon] = useState<string | undefined>(undefined); // Asegurar compatibilidad con undefined
  const [modalHeight, setModalHeight] = useState<string>("15%");
  const [modalWidth, setModalWidth] = useState<string>("15%");

  const openModal = (
    title: string,
    height: string,
    width: string,
    content: ReactNode,
    modalIcon?: string // Se mantiene opcional aquí
  ) => {
    setModalTitle(title);
    setModalIcon(modalIcon ?? ""); // Asegurar que no sea undefined
    setModalHeight(height);
    setModalWidth(width);
    setModalContent(content);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalContent(null);
    setModalTitle("");
    setModalIcon(undefined); // Resetear correctamente
    setModalHeight("auto");
    setModalWidth("auto");
  };

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        openModal,
        closeModal,
        modalContent,
        modalTitle,
        modalIcon, // Ahora opcional y seguro
        modalHeight,
        modalWidth,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
