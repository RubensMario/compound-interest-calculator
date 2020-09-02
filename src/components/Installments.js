import React, { useEffect, useState } from 'react';
import Installment from './Installment';

export default function Installments({ capital, interestRate, period }) {
  const [finalResult, setFinalResult] = useState([]);
  useEffect(() => {
    // Calcula juros composto, rendimento(lucro)/prejuízo
    const compoundInterest = (capitalValue, interestRateValue, periodValue) => {
      const parcialResult = [];
      for (let i = 1; i <= periodValue; i++) {
        const interest = interestRateValue / 100;

        const amount = capitalValue * (1 + interest) ** i;

        const profit = amount - capitalValue;

        // Se capitalValue=truthy (/= 0) calcula porcentagem
        // Caso contrário (capitalValue = falsy(= 0)), percentage=0
        // Para evitar o NaN quando capitalValue = 0
        const percentage = capitalValue ? (profit / capitalValue) * 100 : 0;

        parcialResult.push({
          id: i,
          amount,
          profit,
          percentage,
        });

        // console.log(`${i} Montante: ${amount}`);
        // console.log(`${i} Lucro: ${profit}`);
        // console.log(`${i} Porcentagem: ${percentage}%`);
      }
      setFinalResult(parcialResult);
    };
    compoundInterest(capital, interestRate, period);
  }, [capital, interestRate, period]);
  return (
    <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap' }}>
      {finalResult.map(({ id, amount, profit, percentage }) => {
        return (
          <div key={id}>
            <Installment
              amountValue={amount}
              profitValue={profit}
              percentageValue={percentage}
              idValue={id}
            />
          </div>
        );
      })}
    </div>
  );
}
