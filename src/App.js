// O cálculo é feito em Installments com useEffect
// Acredito que para o React monitorar os inputs e reagir automaticamente
// às modificações dos seus valores

import React, { useState } from 'react';
import Form from './components/Form';
import Installments from './components/Installments';

export default function App() {
  const [capital, setCapital] = useState(0);
  const [interestRate, setinterestRate] = useState(0);
  const [period, setPeriod] = useState(0);

  const handleCapital = (event) => {
    const newCapital = +event.target.value;
    setCapital(newCapital);
  };

  const handleInterestRate = (event) => {
    const newinterestRate = +event.target.value;
    setinterestRate(newinterestRate);
  };

  const handlePeriod = (event) => {
    const newPeriod = +event.target.value;
    setPeriod(newPeriod);
  };

  return (
    <div className="container ">
      <h1 className="center" style={{ color: 'white' }}>
        React - Juros Compostos
      </h1>
      <div className="row ">
        <Form
          label={'Capital inicial:'}
          value={capital}
          onChangeNumber={handleCapital}
          step={'100'}
        />
        <Form
          label={'Taxa de juros (mensal):'}
          value={interestRate}
          onChangeNumber={handleInterestRate}
          step={'0.1'}
        />
        <Form
          label={'Período (meses):'}
          value={period}
          onChangeNumber={handlePeriod}
          step={'1'}
          min={'0'}
        />
      </div>
      <Installments
        capital={capital}
        interestRate={interestRate}
        period={period}
      />
    </div>
  );
}

// EXPLICAÇÃO DO FLUXO DE CONTROLE DA APLICAÇÃO

// O componente (Form) tem monitores de eventos nos inputs
// quando o evento ocorre ele chama o evento sintético (que ele recebeu via props)
// o evento sintético (declarado na tag do componente) chama a função hendler
// p/ usar o event.target.value (daquele input)
// essa função altera os valores de estado com useState
// (os valores dados pelo usuário via input)
// os valores (capital,interestRate,period) descem p/ a tag do component Installments
// o componente Installments recebe recebe esses valores como props
// e os usa como entrada para a função que calcula juros, lucro e porcentagem
// a função gera esses valores e salva em um array de objetos
// esse array é passado para um outro array que é um estado do componente
// evitando que o estado do componente seja alterado "manualmente"
// A função que calcula juros, lucro e porcentagem é criada dentro de useEffect
// que monitora essas 3 quantidades, para que sempre que elas forem alteradas
// elas gerem a renderização da estrutura criada no componente (os cards)
