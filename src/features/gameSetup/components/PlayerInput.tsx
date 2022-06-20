import { Input } from 'native-base';
import React from 'react';

type Props = {
  value: string;
  setValue: (value: string) => void;
  onSubmit: () => void;
};

const PlayerInput: React.FC<Props> = ({ value, setValue, onSubmit }) => {
  return (
    <Input
      value={value}
      onChangeText={setValue}
      placeholder="نام و نام خانوادگی بازیکن"
      flex={1}
      textAlign="right"
      fontSize="xl"
      lineHeight="md"
      autoCorrect={false}
      blurOnSubmit={false}
      onSubmitEditing={onSubmit}
    />
  );
};

export default PlayerInput;
