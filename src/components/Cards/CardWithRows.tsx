import React from 'react';
import {FlatList} from 'react-native';
// Components
import TitledCard from './TitledCard';
import CardRow from './CardRow';
// Models
import {CardRowModel} from '../../models/ui/cardRow';

interface CardWithRowProps {
  title: string;
  contentRows: CardRowModel[];
}

const CardWithRows = ({title, contentRows}: CardWithRowProps) => {
  const renderRow = ({item, index}: {item: CardRowModel; index: number}) => {
    return (
      <CardRow
        row={item}
        isFirst={index === 0}
        isLast={index === contentRows.length - 1}
      />
    );
  };

  return (
    <TitledCard title={title}>
      <FlatList
        data={contentRows}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        renderItem={renderRow}
        keyExtractor={item => item.text}
      />
    </TitledCard>
  );
};

export default CardWithRows;
