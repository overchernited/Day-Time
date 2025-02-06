import { createContext, useState, ReactNode } from "react";

interface ModalContextType {
  isOpen: boolean;
  openModal: (
    title: string,
    content: ReactNode,
    modalIcon?: string
  ) => void;
  closeModal: () => void;
  modalContent: ReactNode | null;
  modalTitle: string;
  modalIcon?: string;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);
  const [modalTitle, setModalTitle] = useState<string>("");
  const [modalIcon, setModalIcon] = useState<string | undefined>(undefined); // Asegurar compatibilidad con undefined

  const openModal = (
    title: string,
    content: ReactNode,
    modalIcon?: string // Se mantiene opcional aquí
  ) => {
    setModalTitle(title);
    setModalIcon(modalIcon ?? ""); // Asegurar que no sea undefined
    setModalContent(content);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalContent(null);
    setModalTitle("");
    setModalIcon(undefined); // Resetear correctamente
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
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
