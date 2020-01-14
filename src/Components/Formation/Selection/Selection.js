import React from 'react';
import { Pane, Combobox } from 'evergreen-ui';

const formations = [
  { name: '3-4-3', rows: 4, playersPerRow: [3, 4, 3, 1] },
  { name: '3-5-2', rows: 4, playersPerRow: [2, 5, 3, 1] },
  { name: '4-2-3-1', rows: 5, playersPerRow: [1, 3, 2, 4, 1] },
  { name: '4-3-3', rows: 4, playersPerRow: [3, 3, 4, 1] },
  { name: '4-4-2', rows: 4, playersPerRow: [2, 4, 4, 1] },
];

const handleFormationSelection = (selectedFormation, setFormation) => {
  let returnObj = {};

  formations.forEach(formation => {
    if (formation.name === selectedFormation) {
      returnObj = formation;
    }
  });

  setFormation(returnObj);
};

const returnFormations = () => {
  return formations.map(formation => formation.name);
};

const Selection = ({ setFormation }) => {
  return (
    <Pane border={'default'}>
      <Combobox
        openOnFocus
        items={returnFormations()}
        onChange={selected => handleFormationSelection(selected, setFormation)}
        placeholder={'Select a formation'}
      />
    </Pane>
  );
};

export default Selection;
