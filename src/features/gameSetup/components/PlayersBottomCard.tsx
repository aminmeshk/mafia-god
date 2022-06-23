import { Button } from 'native-base';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
  playersCount: number;
};

const PlayerBottomCard: React.FC<Props> = ({ playersCount }) => {
  const text = `ادامه با ${playersCount} بازیکن`;
  const insets = useSafeAreaInsets();

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
      _ios={{
        pb: insets.bottom,
      }}
      _text={{
        fontSize: 'lg',
      }}
      _pressed={{
        bg: 'primary.600:alpha.80',
      }}>
      {text}
    </Button>
  );
};

export default PlayerBottomCard;
