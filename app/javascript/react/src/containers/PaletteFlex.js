import React from 'react';
import { Rows, Columns, Cell, Splitter } from 'react-resizable-grid';

class EffectContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Rows>
        <Cell width="50%">left</Cell>
        <Splitter />
        <Cell>right</Cell>
      </Rows>
    );
  }
}

export default EffectContainer;
