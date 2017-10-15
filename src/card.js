import Draggable, {DraggableCore} from 'react-draggable';
import React from 'react';
import ReactDOM from 'react-dom';
import './card.css';
class Card extends React.Component {
    constructor(props) {
    super(props);
    }
render() {
    return (
        <Draggable 
            onStart={this.props.onStart} 
            onDrag={this.props.onDrag}
            onStop={this.props.onStop}
            defaultPosition={{x: this.props.x, y: this.props.y}} >
          <div className={"card "+this.props.cardhouse+" "+this.props.cardNum}
          style={{
              background:'url('+this.props.imageUrl+')',
              backgroundSize:"200px"
          }}
          >
          </div>
        </Draggable>
    );
  }
}
module.exports = Card;