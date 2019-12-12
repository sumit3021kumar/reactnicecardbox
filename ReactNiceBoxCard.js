import React from 'react';
import './style.css';

export default class ReactNiceBoxCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
     <BodyOfCard backgroudColor={this.props.backgroudColor} title={this.props.title}  message={this.props.message} />
    );
  }
}

function BoxBackground(props) {
  return (
    <div className={ props.backgroudColor ? props.backgroudColor +' BoxBackground' : 'BoxBackground' }>
      {props.children}
    </div>
  );
}


function BodyOfCard(props) {
  return (
    <BoxBackground backgroudColor={props.backgroudColor}>
      {props.title ? (<h1 className="modal-title"> {props.title} </h1>) : '' }
      {props.message ? (<p className="modal-message"> {props.message} </p>) : '' }
    </BoxBackground>
  );
}
