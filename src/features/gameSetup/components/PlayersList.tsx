import { Player } from '@models';
import { FlatList } from 'native-base';
import React from 'react';
import ItemSeparator from './ItemSeparator';
import PlayerRow from './PlayerRow';

type Props = {
  players: Player[];
  onRemove: (index: number) => void;
};

const PlayersList: React.FC<Props> = ({ players, onRemove }) => {
  const renderItem = ({
    item,
    index,
  }: {
    item: { name: string };
    index: number;
  }) => {
    return <PlayerRow name={item.name} onDelete={() => onRemove(index)} />;
  };

  return (
    <FlatList
      flex={1}
      data={players}
      renderItem={renderItem}
      ItemSeparatorComponent={ItemSeparator}
      keyboardShouldPersistTaps="handled"
    />
  );
};

export default PlayersList;
