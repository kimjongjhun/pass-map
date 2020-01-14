import React, { Component } from 'react';
import { Pane } from 'evergreen-ui';
import Selection from './Selection/Selection';
import Naming from './Naming/Naming';
import Team from './Team/Team';

class Formation extends Component {
  state = {
    selected: true,
    playersSet: true,
    possession: true,
    passIndex: 0,
    current: '',
    formation: { name: '4-3-3', rows: 4, playersPerRow: [3, 3, 4, 1] },
    team: {
      2: { name: 'Messi', number: '10' },
      4: { name: 'Sergio', number: '5' },
    },
    passArray: [],
  };

  clearAll = () => {
    this.setState({
      formation: {},
      team: {},
      selected: false,
      playersSet: false,
    });
  };

  fouledThem = () => {
    this.setState({ possession: false }, () => {
      console.log('fouledThem');
    });
  };

  fouledUs = () => {
    this.setState({ possession: false }, () => {
      console.log('fouledUs');
    });
  };

  outOfBounds = () => {
    this.setState({ possession: false }, () => {
      console.log('outOfBounds');
    });
  };

  recordPass = ({ to }) => {
    const { passIndex, passArray, current } = this.state;

    const pass = { to, from: current };
    const newPassArray = [];

    newPassArray.push(pass);

    this.setState({ passArray: newPassArray }, () => {
      console.log('pass array', this.state.passArray);
    });
  };

  setFormation = formation => {
    this.setState({ formation, selected: true });
  };

  setPlayerInfo = (playerNumber, infoTitle, infoData) => {
    const { team } = this.state;

    this.setState({
      team: {
        ...team,
        [playerNumber]: {
          ...this.state.team[playerNumber],
          [infoTitle]: infoData,
        },
      },
    });
  };

  setPlayersToFalse = () => {
    this.setState({ playersSet: false });
  };

  setPlayersToTrue = () => {
    this.setState({ playersSet: true });
  };

  setSelectedToTrue = () => {
    this.setState({ selected: true });
  };

  setSelectedToFalse = () => {
    this.setState({ selected: false });
  };

  stolen = () => {
    console.log('stolen');
  };

  render() {
    const { selected, formation, playersSet, team } = this.state;

    return (
      <Pane border={'default'} display={'flex'}>
        {!selected && <Selection setFormation={this.setFormation} />}
        {selected && formation && !playersSet && (
          <Naming
            formation={formation}
            setPlayerInfo={this.setPlayerInfo}
            clearAll={this.clearAll}
            setPlayers={this.setPlayersToTrue}
          />
        )}
        {playersSet && (
          <Team
            formation={formation}
            roster={team}
            outOfBounds={this.outOfBounds}
            fouledUs={this.fouledUs}
            fouledThem={this.fouledThem}
            stolen={this.stolen}
            recordPass={this.recordPass}
          />
        )}
      </Pane>
    );
  }
}

export default Formation;
