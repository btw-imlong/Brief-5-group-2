import React from "react";

type props = {
  label: string;
};
const button = ({ label }: props) => {
  return (
    <button className="bg-[#6A0DAD] text-white font-bold py-2 px-4 rounded-full text-4xl font-[Cinzel]">
      {label}
    </button>
  );
};

export default button;
