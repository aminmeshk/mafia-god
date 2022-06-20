import { Button } from 'native-base';
import React from 'react';

type Props = {
  playersCount: number;
};

const PlayerBottomCard: React.FC<Props> = ({ playersCount }) => {
  const text = `ادامه با ${playersCount} بازیکن`;

  if (playersCount === 0) {
    return null;
  }
  return (
    <Button
      bg="primary.600"
      roundedBottom="none"
      roundedTop="lg"
      isDisabled={playersCount < 5}
      py="3"
      _text={{
        fontSize: 'xl',
      }}
      _pressed={{
        bg: 'primary.600:alpha.80',
      }}>
      {text}
    </Button>
  );
};

export default PlayerBottomCard;
