import { useEffect } from "react";
import { useState } from "react";
import SelectCurrencyTo from "../SelectCurrencyTo";
import SelectCurrencyFrom from "../SelectCurrencyFrom";
import useGlobalContext from "../../hooks/useGlobalContext";
import { getSymbols } from "../../services/exchange";
import BasicCurrencyInputFrom from "../BasicCurrencyInputFrom";
import BasicCurrencyInputTo from "../BasicCurrencyInputTo";
import ButtonExchange from "../ButtonExchange";
import "./styles.css";

function Main() {
  const { setFrom, from, setTo, to, setSymbols, symbols } = useGlobalContext();
  const [amount, setAmount] = useState("");

  const handleClick = () => {
    const localFrom = from;
    const localTo = to;
    setFrom(localTo);
    return setTo(localFrom);
  };
  useEffect(() => {
    const symbols = async () => {
      const response = await getSymbols();
      const symbolsData = response.data.symbols;
      const { BRL, CAD, CHF, EUR, GBP, JPY, USD } = symbolsData;
      return setSymbols(Object.values({ BRL, CAD, CHF, EUR, GBP, JPY, USD }));
    };
    symbols();
  }, []);
  return (
    <main className="main-container">
      <div className="main-container-inputs">
        <BasicCurrencyInputFrom amount={amount} setAmount={setAmount} />

        <div className="main-inputs">
          <SelectCurrencyFrom label="From" />
          <ButtonExchange onClick={handleClick} className="main-btn-exchange" />
          <SelectCurrencyTo label="To" />
          <BasicCurrencyInputTo amount={amount} />
        </div>
      </div>
    </main>
  );
}

export default Main;
