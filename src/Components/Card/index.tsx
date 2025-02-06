import { motion } from "framer-motion";
import { ReactNode } from "react";

interface cardProps {
  height: string;
  width: string;
  className?: string;
  imgSrc: string;
  children: ReactNode;
}

const Card = (props: cardProps) => {
  return (
    <motion.div
      style={{ height: props.height, width: props.width }}
      whileHover={{ scale: 1.05, cursor: "pointer" }}
      transition={{
        type: "spring",
        stiffness: "200",
        damping: "10",
      }}
      className={`flex relative ${props.className} m-2 z-10 hover:z-40`}
    >
      <img
        className="w-full h-full object-cover filter opacity-60 rounded-2xl  transition-all hover:opacity-100 "
        src={props.imgSrc}
      ></img>
      <p className="text-white m-5 text-4xl absolute bottom-0 left-0">
        {props.children}
      </p>
    </motion.div>
  );
};

export default Card;
