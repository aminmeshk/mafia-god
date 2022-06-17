import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList } from '@types';
import { Center, HStack, VStack } from 'native-base';
import { HomeButton } from '../components';

type Props = NativeStackScreenProps<AppStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = () => {
  return (
    <Center flex={1}>
      <VStack w="100%" h="70%" p="4" space={3}>
        <HomeButton
          iconPack="Ionicons"
          iconName="play"
          text="بازی جدید"
          flex={2}
          mafiaImage
        />
        <HStack flex={1} space={3}>
          <HomeButton
            iconPack="MaterialCommunityIcons"
            iconName="history"
            text="تاریخچه"
            flex={1}
          />
          <HomeButton
            iconPack="Ionicons"
            iconName="bar-chart"
            text="آمار و ارقام"
            flex={1}
          />
        </HStack>
        <HStack flex={1} space={3}>
          <HomeButton
            iconPack="MaterialCommunityIcons"
            iconName="help"
            text="راهنما"
            flex={1}
          />
          <HomeButton
            iconPack="Ionicons"
            iconName="settings-sharp"
            text="تنظیمات"
            flex={1}
          />
        </HStack>
      </VStack>
    </Center>
  );
};

export default HomeScreen;
