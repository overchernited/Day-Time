import { ReactNode, useRef } from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "primary" | "styled" | "error" | "success";
  className?: string;
  disabled?: boolean;
  enterAsClick?: boolean;
}

const MagicButton = ({
  children,
  onClick,
  type = "primary",
  className = "",
  disabled = false,
}: ButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null); // Referencia al botón

  const baseStyle =
    "rounded-full font-semibold hover:cursor-pointer border-3 p-2 text-2xl m-2";
  const typeStyles = {
    primary: "bg-[#222121] border-[#393939] text-white",
    styled: "bg-[#3a89b6] border-[#296283] text-white",
    error: "bg-[#b30008] border-[#980004] text-white",
    success: "bg-[#00cc4c] border-[#00a63e] text-white",
  };
  const hoverStyles = {
    primary: "#393939",
    styled: "#296283",
    error: "#980004",
    success: "#00a63e",
  };

  return (
    <motion.button
      ref={buttonRef}
      whileHover={{
        scale: 1.15,
        backgroundColor: hoverStyles[type],
      }}
      transition={{
        type: "tween",
        ease: "easeInOut",
        duration: 0.15,
      }}
      className={`${className} ${baseStyle} ${typeStyles[type]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
};

export default MagicButton;
