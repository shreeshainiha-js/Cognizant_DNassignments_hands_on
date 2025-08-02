import React, { useState } from 'react';

const CurrencyConvertor = () => {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState('');
  const [convertedTo, setConvertedTo] = useState('');

  const rate = 0.011; // 1 INR = 0.011 EUR

  // INR → EUR
  const handleSubmit = (e) => {
    e.preventDefault();
    const result = rupees * rate;
    setEuro(result.toFixed(2));
    setConvertedTo('EUR');
  };

  // EUR → INR
  const handleEuroToInr = (e) => {
    e.preventDefault();
    const result = euro / rate;
    setRupees(result.toFixed(2));
    setConvertedTo('INR');
  };

  return (
    <div>
      <h2>Currency Convertor: INR ⇄ EUR</h2>

      {/* INR to EUR */}
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
          placeholder="Enter INR"
        />
        <button type="submit">Convert to Euro</button>
      </form>

      {/* EUR to INR */}
      <form onSubmit={handleEuroToInr}>
        <input
          type="number"
          value={euro}
          onChange={(e) => setEuro(e.target.value)}
          placeholder="Enter EUR"
        />
        <button type="submit">Convert to INR</button>
      </form>

      {/* Output */}
      {convertedTo === 'EUR' && <h3>Converted Amount: €{euro}</h3>}
      {convertedTo === 'INR' && <h3>Converted Amount: ₹{rupees}</h3>}
    </div>
  );
};

export default CurrencyConvertor;
