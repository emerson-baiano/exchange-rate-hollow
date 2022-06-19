import TextField from "@mui/material/TextField";
import NumberFormat from "react-number-format";

export default function BasicCurrencyInputFrom({ amount, setAmount }) {
  const handleInputChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setAmount(value.replace(/\D/g, ""));
  };
  return (
    <NumberFormat
      thousandSeparator={true}
      value={amount}
      label="Amount"
      onChange={handleInputChange}
      customInput={TextField}
      placeholder="Desire Amount..."
      className="amount-input"
      sx={{
        width: "100%",
        "& > :not(style)": {
          color: "hsl(0deg 2% 40%)",
          fontSize: "1.8rem",
          fontFamily: "Poppins",
        },
      }}
    />
  );
}
