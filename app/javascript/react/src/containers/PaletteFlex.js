import React from 'react';
import 'react-reflex/styles.css'
import {
  ReflexContainer,
  ReflexSplitter,
  ReflexElement
} from 'react-reflex'

class PaletteFlex extends React.Component {

  render () {

    return (
      <ReflexContainer orientation="vertical">

        <ReflexElement className="left-pane">
          <div className="pane-content">
            <label>
            Left Pane (resizable)
            </label>
          </div>
        </ReflexElement>

        <ReflexSplitter propagate={true}/>

        <ReflexElement className="middle-pane">
          <div className="pane-content">
            <label>
            Middle Pane 1 (resizable)
            </label>
          </div>
        </ReflexElement>

        <ReflexSplitter propagate={true}/>

        <ReflexElement className="middle-pane">
          <div className="pane-content">
            <label>
            Middle Pane 2 (resizable)
            </label>
          </div>
        </ReflexElement>

        <ReflexSplitter propagate={true}/>

        <ReflexElement className="right-pane">
          <div className="pane-content">
            <label>
            Right Pane (resizable)
            </label>
          </div>
        </ReflexElement>

      </ReflexContainer>
    )
  }
}

export default PaletteFlex;
