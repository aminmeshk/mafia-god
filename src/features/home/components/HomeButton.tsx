import React from 'react';
import { MaterialCommunityIcons, Ionicons } from '@native-base/icons';
import { Icon, Image, Pressable, Spacer, Text, View } from 'native-base';
import { images } from '@constants';

type Props = React.ComponentProps<typeof Pressable> & {
  iconName: string;
  text: string;
  iconPack: 'Ionicons' | 'MaterialCommunityIcons';
  mafiaImage?: boolean;
};

const HomeButton: React.FC<Props> = ({
  iconPack,
  iconName,
  mafiaImage = false,
  text,
  ...props
}) => {
  return (
    <Pressable
      rounded="lg"
      alignItems="center"
      justifyContent="center"
      bg="gray.300:alpha.10"
      _light={{
        bg: 'gray.100',
        shadow: '2',
        _pressed: { bg: 'white' },
      }}
      _pressed={{ bg: 'gray.400:alpha.20' }}
      {...props}>
      {mafiaImage ? (
        <Image
          source={images.mafia}
          alt="Mafia Icon"
          size="16"
          tintColor="white"
          _light={{
            tintColor: 'black',
          }}
        />
      ) : (
        <Icon
          as={iconPack === 'Ionicons' ? Ionicons : MaterialCommunityIcons}
          name={iconName}
          size="3xl"
          color="white"
          _light={{
            color: 'black',
          }}
        />
      )}
      <View h="2" />
      <Text fontSize="xl">{text}</Text>
    </Pressable>
  );
};

export default HomeButton;
