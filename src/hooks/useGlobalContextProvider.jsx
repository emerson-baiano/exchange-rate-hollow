import { useState } from "react";

function useGlobalContextProvider() {
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(3);
  const [symbols, setSymbols] = useState(null);
  return {
    from,
    setFrom,
    to,
    setTo,
    symbols,
    setSymbols,
  };
}

export default useGlobalContextProvider;
