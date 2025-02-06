import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const AnimatedText = () => {
  const words = [
    " your notes",
    " your workspace's",
    " your feed",
    " your team",
    " your objectives",
    " your day",
    " your progress",
    " your tasks",
    " your ideas",
    " your goals",
    " your projects",
    " your calendar",
    " your reminders",
    " your focus",
    " your achievements",
  ];
  const [currentWord, setCurrentWord] = useState(0);

  // Cambiar la palabra cada 1.5 segundos, pero solo hasta que llegue a "everything"
  useEffect(() => {
    if (currentWord < words.length) {
      const interval = setInterval(() => {
        setCurrentWord((prev) => prev + 1);
      }, 200); // Cambia la palabra cada 1.5 segundos

      return () => clearInterval(interval);
    }
  }, [currentWord, words.length]); // Solo se ejecuta cuando currentWord cambia

  return (
    <motion.p
      className="text-container text-6xl text-white font-extrabold w-[40%]"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <motion.span
        key={currentWord}
        initial={{ opacity: 0, y: -20 }} // Empieza desde arriba
        animate={{ opacity: 1, y: 0 }} // Se mueve a la posición original
        exit={{ opacity: 0, y: 20 }} // Se mueve hacia abajo al desaparecer
        transition={{
          duration: 0.2,
          ease: "easeInOut",
        }}
        className="text-animation"
      >
        The same space to
        {currentWord === words.length ? " everything" : words[currentWord]}{" "}
      </motion.span>
    </motion.p>
  );
};

export default AnimatedText;
