import React from "react";
import { motion } from "framer-motion";
type Props = {
  label: string;
  onClick?: () => void;
  className?: string;
};

const Button = ({ label, onClick, className }: Props) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-4 py-2 bg-[#6A0DAD] text-white font-semibold rounded-3xl shadow-lg transition-transform duration-300 ${className}`}
      onClick={onClick}
    >
      {label}
    </motion.button>
  );
};

export default Button;
