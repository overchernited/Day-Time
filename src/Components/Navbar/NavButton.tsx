import { motion } from "framer-motion";
import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";

interface LinkProps {
  icon: string;
  children: ReactNode;
  className?: string;
  route: string;
}

const NavButton = (props: LinkProps) => {
  const [isHover, setHover] = useState<boolean>(false);

  return (
    <>
      <Link to={props.route} className="h-full w-[8%]">
        <motion.button
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          whileTap={{ scale: 1.5 }}
          whileHover={{ scale: 1.2 }}
          initial={{ backgroundColor: "#ffff" }}
          className={`h-full w-full hover:cursor-pointer text-2xl items-center flex justify-center ${props.className}`}
        >
          <motion.div
            className={`h-6 absolute bottom-14 bg-[#fff] p-2 flex items-center rounded-md transition-all duration-300 text-sm ${
              isHover ? "opacity-100" : "opacity-0 translate-y-16"
            }`}
          >
            {props.children}
          </motion.div>

          <i className={`${props.icon} fa-gradient text-2xl`}></i>
        </motion.button>
      </Link>
    </>
  );
};

export default NavButton;
