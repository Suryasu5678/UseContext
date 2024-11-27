/*import React, { useState } from "react";

const MortgageCalculator = () => {
  const [amount, setAmount] = useState("");
  const [term, setTerm] = useState("");
  const [rate, setRate] = useState("");
  const [type, setType] = useState("Repayment");
  const [result, setResult] = useState(null);

  const calculateRepayments = () => {
    const principal = parseFloat(amount);
    const annualRate = parseFloat(rate) / 100;
    const monthlyRate = annualRate / 12;
    const months = parseFloat(term) * 12;

    if (type === "Repayment") {
      // Formula for monthly repayment on repayment mortgage
      const monthlyRepayment =
        (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
      setResult(monthlyRepayment.toFixed(2));
    } else if (type === "Interest Only") {
      // Formula for monthly interest-only repayment
      const monthlyRepayment = principal * monthlyRate;
      setResult(monthlyRepayment.toFixed(2));
    }
  };

  const resetForm = () => {
    setAmount("");
    setTerm("");
    setRate("");
    setType("Repayment");
    setResult(null);
  };

  return (
    <div className="calculator">
      <h2>Mortgage Calculator</h2>
      <div>
        <label>Mortgage Amount (£):</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <label>Mortgage Term (years):</label>
        <input
          type="number"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </div>
      <div>
        <label>Interest Rate (%):</label>
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
      </div>
      <div>
        <label>Mortgage Type:</label>
        <div>
          <label>
            <input
              type="radio"
              value="Repayment"
              checked={type === "Repayment"}
              onChange={() => setType("Repayment")}
            />
            Repayment
          </label>
          <label>
            <input
              type="radio"
              value="Interest Only"
              checked={type === "Interest Only"}
              onChange={() => setType("Interest Only")}
            />
            Interest Only
          </label>
        </div>
      </div>
      <button onClick={calculateRepayments}>Calculate Repayments</button>
      <button onClick={resetForm}>Clear All</button>
      {result && <h3>Monthly Payment: £{result}</h3>}
    </div>
  );
};

export default MortgageCalculator;
*/