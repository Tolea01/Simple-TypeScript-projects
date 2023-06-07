import React from 'react';
import { Block } from './Block';
import { Stack } from '@mui/material';

function App() {
  const [rates, setRates] = React.useState<Record<string, number>>({});
  const [fromCurrency, setFromCurrency] = React.useState<string>('USD');
  const [toCurrency, setToCurrency] = React.useState<string>('EUR');
  const [fromPrice, setFromPrice] = React.useState<number>(0);
  const [toPrice, setToPrice] = React.useState<number>(0);

  React.useEffect(() => {
    fetch('https://v6.exchangerate-api.com/v6/7e3be179aa44ea728b26c028/latest/USD')
      .then(response => response.json())
      .then(ratesData => setRates(ratesData.conversion_rates))
      .catch(() => alert('Server Error!'))
  }, []);

  const onChangeFromPrice = (value: number) => {
    const price = value / rates[fromCurrency];
    const result = price * rates[toCurrency];
    setToPrice(result);
    setFromPrice(value);
  };

  const onChangeToPrice = (value: number) => {
    const result = (rates[fromCurrency] / rates[toCurrency]) * value;
    setFromPrice(result);
    setToPrice(value);
  };

  // React.useEffect(() => {
  //   onChangeFromPrice(fromPrice)
  // }, [fromCurrency, fromPrice])

  // React.useEffect(() => {
  //   onChangeToPrice(toPrice)
  // }, [toCurrency, toPrice])

  return (
    <Stack
      padding="30px"
      display="flex"
      flexDirection="row"
      bgcolor="#fff"
      boxShadow="0 10px 20px rgba(0, 0, 0, 0.05)"
      borderRadius="15px"
    >
      <Block
        currency={fromCurrency}
        value={fromPrice}
        mr={7}
        onChangeCurrency={setFromCurrency}
        onChangeValue={onChangeFromPrice} />
      <Block
        currency={toCurrency}
        value={toPrice}
        onChangeCurrency={setToCurrency}
        onChangeValue={onChangeToPrice} />
    </Stack >
  );
}

export default App;