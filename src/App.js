import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: friends,
    friendsClicked: [0],
    score: 0,
    highScore: 0
  };

  removeFriend = id => {
    let newFriendsClicked = this.state.friendsClicked;
    if (newFriendsClicked.includes(id)) {
      this.gameOver();
    } else {
      this.scoreUp();
      newFriendsClicked.push(id);
      this.setState({ friendsClicked: newFriendsClicked });
    }
    this.shuffle();
  };

  gameOver = () => {
    let newHighScore = this.state.score;
    if (this.state.highScore < newHighScore) {
      this.setState({highScore: newHighScore});
    }
    this.setState({score: 0, friendsClicked: [0]});
  }

  scoreUp = () => {
    this.setState({score: this.state.score + 1})
  }

  shuffle = () => {
    let arr = this.state.friends;
    var ctr = arr.length, temp, index;
    while (ctr > 0) {
      index = Math.floor(Math.random() * ctr);
      ctr--;
      temp = arr[ctr];
      arr[ctr] = arr[index];
      arr[index] = temp;
    }
    this.setState({ friends: arr });
  }

  componentDidMount() {
    this.shuffle();
  }

  style = {
    score: {
      width: "100%",
      textAlign: "center"
    }
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>GoT Clicker Game!</Title>
        <h3 style={this.style.score}>Score: {this.state.score}   High Score: {this.state.highScore}</h3>
        {
          this.state.friends.map(friend => (
            <FriendCard
              removeFriend={this.removeFriend}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              occupation={friend.occupation}
              location={friend.location}
            />
          ))}
      </Wrapper>
    );
  }
}

export default App;
