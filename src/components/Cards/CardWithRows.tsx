import React from 'react';
// Components
import TitledCard from './TitledCard';
import CardRow from './CardRow';
// Models
import {CardRowModel} from '../../models/cardRow';

interface CardWithRowProps {
  title: string;
  contentRows: CardRowModel[];
}

const CardWithRows = ({title, contentRows}: CardWithRowProps) => {
  return (
    <TitledCard title={title}>
      {contentRows.map((row, index) => (
        <CardRow row={row} isLast={index === contentRows.length - 1} />
      ))}
    </TitledCard>
  );
};

export default CardWithRows;
