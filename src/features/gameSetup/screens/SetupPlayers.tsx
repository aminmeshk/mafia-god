import React from 'react';
import { FlatList, VStack } from 'native-base';
import { AppStackParamList } from '@types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ItemSeparator, PlayerInput, PlayerRow } from '../components';

type Props = NativeStackScreenProps<AppStackParamList, 'SetupPlayers'>;

const dummyData = [
  { name: 'امین' },
  { name: 'غزل' },
  { name: 'عسل' },
  { name: 'نیکو' },
];

const SetupPlayersScreen: React.FC<Props> = () => {
  const renderItem = ({ item }: { item: { name: string } }) => {
    return <PlayerRow name={item.name} />;
  };
  return (
    <VStack flex={1}>
      <FlatList
        flex={1}
        data={dummyData}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparator}
        ListHeaderComponent={PlayerInput}
      />
    </VStack>
  );
};

export default SetupPlayersScreen;
