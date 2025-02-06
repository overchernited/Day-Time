import { motion, AnimatePresence } from "framer-motion";
import { useInput } from "./useProvider";
import { useState, useEffect, useRef } from "react";

interface InputProps {
  placeholder: string;
  icon?: string;
  type: string;
  name: string;
  className?: string;
  scale?: string;
  allowSpaces?: boolean;
  inputAttributes?: React.InputHTMLAttributes<HTMLInputElement>;
}

const Input = (props: InputProps) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [displayedValue, setDisplayedValue] = useState<string>("");
  const textContainerRef = useRef<HTMLDivElement>(null);
  const { inputValues, setInputValue } = useInput();
  const charRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    if (!props.allowSpaces) value = value.replace(/\s/g, "");
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    debounceTimeout.current = setTimeout(() => {
      setInputValue(props.name, value);
    }, 15);
    setDisplayedValue(value);
  };

  useEffect(() => {
    setDisplayedValue(inputValues[props.name] || "");
  }, [inputValues, props.name]);

  useEffect(() => {
    if (displayedValue.length < charRefs.current.length) {
      charRefs.current = charRefs.current.slice(0, displayedValue.length);
    }
    if (charRefs.current.length < displayedValue.length) {
      while (charRefs.current.length < displayedValue.length) {
        charRefs.current.push(null);
      }
    }
  }, [displayedValue.length]);

  const displayedText =
    props.type === "password"
      ? displayedValue.replace(/./g, "•")
      : displayedValue;

  return (
    <div
      style={{ scale: `${props.scale}` }}
      className={` ${props.className || ""} relative text-4xl`}
    >
      <motion.div
        className={`text-3xl rounded-full select-none absolute transition-all font-semibold flex items-center gap-2 ${
          isFocus || displayedValue.length > 0
            ? "text-[#3a89b6] -translate-y-[50%] bg-[#1b1a1a] pl-4 pr-4"
            : "text-[#424242] translate-y-[50%] left-[5%]"
        }`}
      >
        {props.icon && <i className={props.icon}></i>}
        <p>{props.placeholder}</p>
      </motion.div>

      <input
        ref={inputRef}
        onChange={handleInputChange}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        value={displayedValue}
        type={props.type}
        {...props.inputAttributes}
        className={`border-[#2d2d2d] transition-all border-2 outline-0 bg-[#151515] focus:border-[#3a89b6] text-white pl-5 p-2 rounded-4xl w-full h-full m-2 no-underline styledInput text-3xl font-bold`}
      />

      <div
        ref={textContainerRef}
        className="absolute w-[95%] top-1/2 -translate-y-[40%] left-[1.87rem] flex whitespace-nowrap overflow-hidden"
      >
        <AnimatePresence>
          {displayedText.split("").map((char, index) => (
            <motion.span
              ref={(el) => (charRefs.current[index] = el)}
              className="font-bold text-white select-none text-3xl"
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: [1, 0], y: 0 }}
              exit={{ opacity: [1, 0], y: -8 }}
              transition={{ duration: 0.5 }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Input;
