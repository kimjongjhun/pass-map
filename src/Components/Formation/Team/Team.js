import React from 'react';
import { Button, Pane, Heading } from 'evergreen-ui';

const renderActionButtons = ({ outOfBounds, fouledUs, fouledThem, stolen }) => {
  const actionButtonsArray = [];
  const actionsArray = [
    { title: 'Out of Bounds', function: outOfBounds },
    { title: 'Fouled Us', function: fouledUs },
    { title: 'Fouled Them', function: fouledThem },
    { title: 'Stolen', function: stolen },
  ];

  actionsArray.forEach(action => {
    actionButtonsArray.push(
      <Button
        width={200}
        height={'auto'}
        justifyContent={'center'}
        onClick={action.function}
      >
        <Pane>
          <Heading
            size={900}
            width={200}
            height={'auto'}
            justifyContent={'center'}
          >
            {action.title}
          </Heading>
        </Pane>
      </Button>,
    );
  });

  return (
    <Pane display={'flex'} justifyContent={'space-around'} margin={16}>
      {actionButtonsArray}
    </Pane>
  );
};

const renderGoalButton = () => {
  return (
    <Button width={400} height={'auto'} justifyContent={'center'}>
      <Pane>
        <Heading
          size={900}
          width={200}
          height={'auto'}
          justifyContent={'center'}
        >
          GOAL!!!
        </Heading>
      </Pane>
    </Button>
  );
};

const renderPlayers = ({ roster, formation, recordPass }) => {
  let playerCount = 0;
  const { playersPerRow } = formation;

  const returnArray = [];

  for (let i = 0; i < playersPerRow.length; i++) {
    const playerRow = [];

    for (let j = 0; j < playersPerRow[i]; j++) {
      playerRow.push(
        <Button
          width={200}
          height={'auto'}
          justifyContent={'center'}
          onClick={() => recordPass({ to: roster[playerCount] })}
        >
          <Pane>
            <Heading size={900} width={'100%'} textAlign={'center'}>
              {roster[playerCount] ? roster[playerCount].name : ''}
            </Heading>
            <Heading size={900} width={'100%'} textAlign={'center'}>
              {roster[playerCount] ? roster[playerCount].number : ''}
            </Heading>
          </Pane>
        </Button>,
      );

      playerCount++;
    }

    returnArray.push(
      <Pane display={'flex'} justifyContent={'space-around'} margin={16}>
        {playerRow}
      </Pane>,
    );
  }

  return returnArray;
};

const Team = ({
  roster,
  formation,
  outOfBounds,
  fouledUs,
  fouledThem,
  stolen,
  recordPass,
}) => {
  return (
    <Pane border={'default'} width={'75%'}>
      <Pane display={'flex'} justifyContent={'space-around'} margin={16}>
        {renderGoalButton()}
      </Pane>
      {renderPlayers({ roster, formation, recordPass })}
      {renderActionButtons({ outOfBounds, fouledUs, fouledThem, stolen })}
    </Pane>
  );
};

export default Team;
