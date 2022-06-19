import { useEffect, useState } from "react";
import useGlobalContext from "../../hooks/useGlobalContext";
import { convertAmount } from "../../services/exchange";
import NumberFormat from "react-number-format";
import "./styles.css";

export default function BasicCurrencyInputTo({ amount }) {
  const { from, to, symbols } = useGlobalContext();
  const [value, setValue] = useState("");

  const handleConvert = async () => {
    const convertedAmount = await convertAmount(
      symbols[from].code,
      symbols[to].code,
      amount
    );

    return setValue(convertedAmount.data.result);
  };

  useEffect(() => {
    if (!amount) {
      return setValue("");
    }
    handleConvert();
  }, [amount, from, to]);

  return (
    value && (
      <h3 className="number-output-text">
        <NumberFormat
          thousandSeparator={true}
          value={value}
          prefix={value && `${symbols[to].description}: (${symbols[to].code}) `}
          decimalScale={2}
          displayType={"text"}
        />
      </h3>
    )
  );
}
