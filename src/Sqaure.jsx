import { useState } from "react";

const Square = ({ value, onSquareClick }) => {
  return (
    <button
      value={value}
      className="border-2 border-black py-4 px-8 text-xl w-20 h-20"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};

export default Square;
