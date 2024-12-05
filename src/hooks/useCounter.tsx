import { useState } from "react";
export default function useCounter() {
  const [count, setcount] = useState(0);
  const handleClickPlus = () => {
    setcount((currectCount) => currectCount + 1);
  };

  const handleClicLess = () => {
    setcount((currectCount) => currectCount - 1);
  };
  return { count, handleClickPlus, handleClicLess };
}
