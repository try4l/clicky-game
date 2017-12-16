import React from "react";
import "./FriendCard.css";

class FriendCard extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
      value: null,
    };
  }
  render() {
    return (
      <button className="card" onClick={() => this.setState({value: 'true'})}>
        {this.state.value}

        <div className="img-container">
          <img alt={this.props.name} src={this.props.image} />
        </div>

        <div className="content">

        </div>

        <span>
          X
        </span>

      </button>
    );
  }
}

// const FriendCard = props => (
//   <div className="card">
//     <div className="img-container">
//       <img alt={props.name} src={props.image} />
//     </div>
//     <div className="content">

//     </div>
//     <span onClick={() => props.clickFriend(props.id)} className="remove">
//       𝘅
//     </span>
//   </div>
// );

export default FriendCard;