import { useState, createContext, type ReactNode, useContext } from "react";

type BookingModal = {
  isOpen: boolean;
  toggleOpen: () => void;
};

export const ModalContext = createContext<BookingModal | undefined>(undefined);

export const ModelProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <ModalContext.Provider value={{ isOpen, toggleOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error(
      "useModal muss innerhalb von ModalProvider verwendet werden!"
    );
  }
  return context; // Garantiert, dass context den Typ BookingModal hat
};
