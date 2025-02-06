import { motion, AnimatePresence } from "framer-motion"; // Importa AnimatePresence
import { useModal } from "./useModal";
import { useState, useEffect } from "react";

const Modal = () => {
  const {
    isOpen,
    closeModal,
    modalContent,
    modalTitle,
    modalIcon,
    modalHeight,
    modalWidth,
  } = useModal();

  // Estado para forzar la reinicialización de la animación cuando el contenido cambia
  const [modalKey, setModalKey] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setModalKey((prevKey) => prevKey + 1); // Incrementar la clave cada vez que el contenido cambia
    }
  }, [modalContent, isOpen]); // Solo se ejecuta cuando cambia el contenido o el estado isOpen

  return (
    <AnimatePresence mode="wait">
      {isOpen && ( // Condición para que solo se renderice si está abierto
        <motion.div
          key={modalKey} // Usamos la clave para reiniciar la animación cada vez que cambia
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
          onClick={() => closeModal()}
          className="fixed w-full h-full z-[1200] backdrop-blur-md flex justify-center items-center"
        >
          <motion.div
            initial={{ x: -50, opacity: 0.1 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }} // Agregamos animación de desplazamiento y opacidad
            className="bg-[#1b1a1a] rounded-2xl relative"
            style={{ width: modalWidth, height: modalHeight }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#0e0e10] w-full rounded-t-2xl p-1">
              <p className="text-white m-5 font-bold text-4xl">
                {modalTitle}
                <i className={`${modalIcon} m-2`}></i>
              </p>
            </div>
            <motion.div
              className="p-3 h-full w-full relative"
              animate={{ x: [-200, 0] }}
              exit={{ x: [0, -200] }} // Agregamos animación de salida también
            >
              {modalContent}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
