import React from 'react';

import Background from '../../../../lib/components/presentation/Background';
import Title from '../../../../lib/components/presentation/Title';

import transactionSrc from '../images/bitcoin-transaction.png';

export default function () {
  return (
    <Background>
      <Title>Transactions</Title>
      <img src={ transactionSrc } alt="digital transaction" />
    </Background>);
}
