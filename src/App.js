import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

import "./App.css";
// eslint-disable-next-line
import image0 from "./images/RWS_Tarot_00_Fool.jpg"
// eslint-disable-next-line
import image1 from "./images/RWS_Tarot_01_Magician.jpg"
// eslint-disable-next-line
import image2 from "./images/RWS_Tarot_02_High_Priestess.jpg"
// eslint-disable-next-line
import image3 from "./images/RWS_Tarot_03_Empress.jpg"
// eslint-disable-next-line
import image4 from "./images/RWS_Tarot_04_Emperor.jpg"
// eslint-disable-next-line
import image5 from "./images/RWS_Tarot_05_Hierophant.jpg"
// eslint-disable-next-line
import image6 from "./images/RWS_Tarot_06_Lovers.jpg"
// eslint-disable-next-line
import image7 from "./images/RWS_Tarot_07_Chariot.jpg"
// eslint-disable-next-line
import image8 from "./images/RWS_Tarot_08_Strength.jpg"
// eslint-disable-next-line
import image9 from "./images/RWS_Tarot_09_Hermit.jpg"
// eslint-disable-next-line
import image10 from "./images/RWS_Tarot_10_Wheel_of_Fortune.jpg"
// eslint-disable-next-line
import image11 from "./images/RWS_Tarot_11_Justice.jpg"
// eslint-disable-next-line
import image12 from "./images/RWS_Tarot_12_Hanged_Man.jpg"
// eslint-disable-next-line
import image13 from "./images/RWS_Tarot_13_Death.jpg"
// eslint-disable-next-line
import image14 from "./images/RWS_Tarot_14_Temperance.jpg"
// eslint-disable-next-line
import image15 from "./images/RWS_Tarot_15_Devil.jpg"
// eslint-disable-next-line
import image16 from "./images/RWS_Tarot_16_Tower.jpg"
// eslint-disable-next-line
import image17 from "./images/RWS_Tarot_17_Star.jpg"
// eslint-disable-next-line
import image18 from "./images/RWS_Tarot_18_Moon.jpg"
// eslint-disable-next-line
import image19 from "./images/RWS_Tarot_19_Sun.jpg"
// eslint-disable-next-line
import image20 from "./images/RWS_Tarot_20_Judgement.jpg"
// eslint-disable-next-line
import image21 from "./images/RWS_Tarot_21_World.jpg"

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    friends,
    //highScore
    };
  }

    componentDidMount = () => {
        const originalOrder = friends;
        console.log("componentDidMount: originalOrder: ", originalOrder);
        this.setState({originalOrder: friends});
    };
  // Setting this.state.friends to the friends json array
  // state = {
  //   friends
  // };

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };
  
  // clickFriend = i => {
  //   // Set wasClicked for friend with an id equal to the id being clicked
  //   const friends = this.state.friends.slice();
  //   friends[i].wasClicked=true;
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // }
  
  // handleClick(i) {
  //   const squares = this.state.squares.slice();
  //   if (calculateWinner(squares) || squares[i]) {
  //     return;
  //   }
  //   squares[i] = this.state.xIsNext ? 'X' : 'O';
  //   this.setState({
  //     squares: squares,
  //     xIsNext: !this.state.xIsNext,
  //   });      
  // }
 
  // shuffle(a) {
  //   for (let i = a.length - 1; i > 0; i--) {
  //       const j = Math.floor(Math.random() * (i + 1));
  //       [a[i], a[j]] = [a[j], a[i]];
  //   }
  //   return a;
  // }

  shuffleFriends = () => {
    console.log('Calling shuffleFriends');
    //friends = shuffle(friends);
    console.log("friends: ", friends);
    console.log("originalOrder: ", this.originalOrder);
    let newFriends = shuffle(friends);
    //console.log("friends: ", friends, newFriends);
    this.setState({friends: newFriends});
  };

  wasClicked = () => {
    console.log('App.wasClicked');
    this.setState({ originalOrder: this.state.friends });
    this.shuffleFriends();
  };

   // handleIncrement increases this.state.count by 1
  handleIncrement = () => {
    console.log("App: handleIncrement: ");
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };

  // handleDecrement decreases this.state.count by 1
  handleReset = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: 0 });
    //this.setState({this.state.friends});
    window.location.reload();
  };


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <button onClick={this.shuffleFriends}>shuffle</button>
        <button onClick={this.handleIncrement}>inc</button>
        <button onClick={this.handleReset}>rst</button>
        <counter 
          count={this.state.count}
        />
        <Title>Clicky Game</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            image={friend.image}
            onClick={friend.wasClicked}
            wasClicked={this.wasClicked}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a.map(item => { return item; });
}

