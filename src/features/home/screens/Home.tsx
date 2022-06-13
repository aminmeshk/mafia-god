import React from 'react';
import { Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList } from '@types';

type Props = NativeStackScreenProps<AppStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default HomeScreen;
