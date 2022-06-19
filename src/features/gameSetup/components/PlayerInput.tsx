import { Input } from 'native-base';
import React from 'react';

type Props = {};

const PlayerInput: React.FC<Props> = () => {
  return (
    <Input placeholder="نام و نام خانوادگی بازیکن" autoComplete="name-given" />
  );
};

export default PlayerInput;
