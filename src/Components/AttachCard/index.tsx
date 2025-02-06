import { motion } from "framer-motion";

interface attachCardsProps {
  height: string;
  width: string;
  imgSrc: string;
  className?: string;
  postString: string;
  icon?: string;
}

const AttachCard = (props: attachCardsProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, cursor: "pointer" }}
      className={props.className}
      style={{ height: props.height, width: props.width }}
    >
      <img
        className="w-full h-full object-cover rounded-lg"
        src={props.imgSrc}
      ></img>
      <div className="flex items-center justify-center">
        {props.icon ? (
          <i className={`${props.icon} text-2xl text-red-700`}></i>
        ) : null}
        <p className="font-bold text-white text-center m-2 break-words text-ellipsis whitespace-nowrap overflow-hidden">
          {props.postString}
        </p>
      </div>
    </motion.div>
  );
};

export default AttachCard;
