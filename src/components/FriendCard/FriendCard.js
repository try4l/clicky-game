import React from "react";
import "./FriendCard.css";

class FriendCard extends React.Component {
  state = {
      value: null,
      count: 0,
      hiScore: 3,
    };

  wasClicked = () => {
    this.props.wasClicked();
    this.setState({value: 'true'});
    this.setState({count: this.state.count + 1 });
    this.setState({hiScore: (this.state.count>=this.state.hiScore)? this.state.count + 1: this.state.hiScore});
    console.log('Finishing FriendCard.wasClicked');
  };

  render() {
    return (
      <button className="card" onClick={this.wasClicked}>
        {this.state.value}
        {this.state.count}
        {this.state.hiScore}

        <div className="img-container">
          <img alt={this.props.name} src={this.props.image} />
        </div>

        <div className="content">
          <p>Click Count: {this.state.count} | Hi Score: {this.state.count}</p>
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