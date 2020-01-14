import React from 'react';
import { Pane, TextInput, Button } from 'evergreen-ui';

const generatePlayerInput = (numberOfPlayersArray, setPlayerInfo) => {
  let playerCount = 0;
  const returnArray = [];

  for (let i = 0; i <= numberOfPlayersArray.length; i++) {
    const formationRow = [];

    for (let j = 0; j < numberOfPlayersArray[i]; j++) {
      formationRow.push(
        <Pane border={'default'} margin={8} width={200}>
          <TextInput
            name={`${playerCount}_name`}
            placeholder={"Players's name"}
            onChange={input => {
              const playerIndex = input.target.name.split('_')[0];
              const name = input.target.name.split('_')[1];
              const { value } = input.target;

              setPlayerInfo(playerIndex, name, value);
            }}
            width={'100%'}
            textAlign={'center'}
          />
          <TextInput
            name={`${playerCount}_number`}
            placeholder={"Players's number"}
            onChange={input => {
              const playerIndex = input.target.name.split('_')[0];
              const name = input.target.name.split('_')[1];
              const { value } = input.target;

              setPlayerInfo(playerIndex, name, value);
            }}
            width={'100%'}
            textAlign={'center'}
          />
        </Pane>,
      );

      playerCount++;
    }

    returnArray.push(
      <Pane border={'default'} display={'flex'} justifyContent={'space-around'}>
        {formationRow}
      </Pane>,
    );
  }

  return returnArray;
};

const Naming = ({ formation, setPlayerInfo, clearAll, setPlayers }) => {
  return (
    <Pane border={'default'} width={'75%'}>
      <Pane>
        <Button marginRight={12} iconBefore={'arrow-left'} onClick={clearAll}>
          Select another formation
        </Button>
      </Pane>
      {generatePlayerInput(formation.playersPerRow, setPlayerInfo)}
      <Pane>
        <Pane>
          <Button marginRight={12} onClick={setPlayers}>
            Save Team
          </Button>
        </Pane>
      </Pane>
    </Pane>
  );
};

export default Naming;
