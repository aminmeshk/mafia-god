import React from 'react';
import { Icon, Image, Pressable, Text, View } from 'native-base';
import { images } from '@constants';
import { IconPackName } from '@types';
import { useIconPack } from '@hooks';

type Props = React.ComponentProps<typeof Pressable> & {
  iconName: string;
  text: string;
  iconPack: IconPackName;
  mafiaImage?: boolean;
};

const HomeButton: React.FC<Props> = ({
  iconPack,
  iconName,
  mafiaImage = false,
  text,
  ...props
}) => {
  const selectedIconPack = useIconPack(iconPack);
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
          source={images.mafiaBold}
          alt="Mafia Icon"
          size="16"
          tintColor="white"
          _light={{
            tintColor: 'black',
          }}
        />
      ) : (
        <Icon
          as={selectedIconPack}
          name={iconName}
          size="3xl"
          color="white"
          _light={{
            color: 'black',
          }}
        />
      )}
      <View h={mafiaImage ? '3' : '2'} />
      <Text fontSize="xl" fontFamily="heading">{text}</Text>
    </Pressable>
  );
};

export default HomeButton;
