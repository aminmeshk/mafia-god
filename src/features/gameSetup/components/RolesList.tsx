import { Role } from '@models';
import { FlatList } from 'native-base';
import React from 'react';
import ItemSeparator from './ItemSeparator';
import RoleRow from './RoleRow';

type Props = {
  roles: Role[];
};

const RolesList: React.FC<Props> = ({ roles }) => {
  const renderItem = ({ item }: { item: Role }) => {
    return <RoleRow role={item} />;
  };
  return (
    <FlatList
      data={roles}
      renderItem={renderItem}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default RolesList;
