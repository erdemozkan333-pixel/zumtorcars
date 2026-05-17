import React, { useState, useEffect } from "react";
import { formatPrice } from "../lib/utils";
import { useAppContext } from "../context/AppContext";

interface FinanceCalculatorProps {
  price: number;
}

export function FinanceCalculator({ price }: FinanceCalculatorProps) {
  const { currency } = useAppContext();
  const [downPaymentPct, setDownPaymentPct] = useState(20);
  const [durationMonths, setDurationMonths] = useState(60);
  const [interestRate, setInterestRate] = useState(5.5);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  useEffect(() => {
    const downPayment = (price * downPaymentPct) / 100;
    const principal = price - downPayment;
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = durationMonths;

    if (monthlyInterestRate === 0) {
      setMonthlyPayment(principal / numberOfPayments);
    } else {
      const payment = 
        principal * 
        (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / 
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
      setMonthlyPayment(payment);
    }
  }, [price, downPaymentPct, durationMonths, interestRate]);

  return (
    <div className="bg-apex-surface border border-white/5 rounded-2xl p-6">
      <h3 className="font-bold text-white mb-6">Finance Estimator</h3>
      
      <div className="space-y-6">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-400">Down Payment ({downPaymentPct}%)</span>
            <span className="text-white">{formatPrice((price * downPaymentPct) / 100, currency)}</span>
          </div>
          <input 
            type="range" 
            min="0" 
            max="100" 
            step="5" 
            value={downPaymentPct}
            onChange={(e) => setDownPaymentPct(Number(e.target.value))}
            className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-apex-accent-cyan"
          />
        </div>

        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-400">Loan Term</span>
            <span className="text-white">{durationMonths} Months</span>
          </div>
          <input 
            type="range" 
            min="12" 
            max="84" 
            step="12" 
            value={durationMonths}
            onChange={(e) => setDurationMonths(Number(e.target.value))}
            className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-apex-accent-cyan"
          />
        </div>

        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-400">Interest Rate (APR)</span>
            <span className="text-white">{interestRate.toFixed(1)}%</span>
          </div>
          <input 
            type="range" 
            min="0" 
            max="20" 
            step="0.1" 
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-apex-accent-cyan"
          />
        </div>

        <div className="flex justify-between items-end pt-6 border-t border-white/5">
          <span className="text-sm text-gray-400">Est. Monthly</span>
          <span className="text-3xl font-display font-medium text-apex-accent-cyan">
            {formatPrice(Math.round(monthlyPayment), currency)}<span className="text-sm text-gray-500 font-sans">/mo</span>
          </span>
        </div>
      </div>
    </div>
  );
}
