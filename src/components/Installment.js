import React from 'react';
import { formatNumber } from '../helpers/numberFormat';

export default function Installment({
  idValue,
  amountValue,
  profitValue,
  percentageValue,
}) {
  const formattedAmount = formatNumber(amountValue);
  const formattedProfit = formatNumber(profitValue);

  return (
    <div style={styles.installments}>
      <div>
        <div>
          <strong style={{ fontSize: '1.5rem', color: '#95a5a6' }}>
            {idValue}
          </strong>
        </div>
      </div>
      <div
        style={profitValue >= 0 ? styles.positiveValue : styles.negativeValue}
      >
        <div>
          <strong>{formattedAmount}</strong>
        </div>
        <div>
          <strong>{formattedProfit}</strong>
        </div>
        <div>{`${percentageValue.toFixed(2)} %`}</div>
      </div>
    </div>
  );
}

// { flexDirection: 'column', marginLeft: '5%' }
const styles = {
  installments: {
    border: '1px solid black',
    borderRadius: '4px',
    borderColor: '#95a5a6',
    width: '9.6rem',
    height: '80px',
    margin: '0.5rem',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '5%',
  },

  positiveValue: {
    flexDirection: 'column',
    marginLeft: '5%',
    color: '#3DADF2',
  },

  negativeValue: {
    flexDirection: 'column',
    marginLeft: '5%',
    color: '#ff3838',
  },
};
