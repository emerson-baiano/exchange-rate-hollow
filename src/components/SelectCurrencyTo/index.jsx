import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState, useEffect } from "react";
import useGlobalContext from "../../hooks/useGlobalContext";

function SelectCurrencyTo({ label }) {
  const { setTo, to, symbols } = useGlobalContext();
  const [currency, setCurrency] = useState(to);
  const ITEM_HEIGHT = 50;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    transition: 0,
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      },
    },
  };
  const handleChange = (event) => {
    setCurrency(event.target.value);
    return setTo(event.target.value);
  };

  useEffect(() => {
    return setCurrency(to);
  }, [to]);
  return (
    <Box sx={{ minWidth: 202, width: "100%" }}>
      <FormControl fullWidth>
        <InputLabel
          id="demo-simple-select-label"
          sx={{ fontSize: "1.8rem", color: "hsl(0deg 2% 40%)" }}
        >
          {label}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={currency}
          label={label}
          onChange={handleChange}
          MenuProps={MenuProps}
          sx={{ fontSize: "1.8rem", color: "hsl(0deg 2% 40%)" }}
        >
          {symbols &&
            symbols.map((symbol, index) => (
              <MenuItem
                key={index}
                value={index}
                sx={{ fontSize: "1.8rem", color: "hsl(0deg 2% 40%)" }}
              >
                {symbol.description}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default SelectCurrencyTo;
