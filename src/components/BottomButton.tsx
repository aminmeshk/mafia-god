import { Button } from 'native-base';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {} & React.ComponentProps<typeof Button>;

export const BottomButton: React.FC<Props> = ({ children, ...props }) => {
  const insets = useSafeAreaInsets();
  return (
    <Button
      bg="primary.600"
      roundedBottom="none"
      roundedTop="lg"
      py="3"
      _ios={{
        pb: insets.bottom,
      }}
      _text={{
        fontSize: 'lg',
      }}
      _pressed={{
        bg: 'primary.600:alpha.80',
      }}
      {...props}>
      {children}
    </Button>
  );
};
