import React, { Component } from "react";
import TomatoCard from "./components/TomatoCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import tomatoes from "./images";

class App extends Component {
  // Setting this.state.tomatoes to the tomatoes array
  state = {
    tomatoes,
    count: 0
  };
  

  // Shuffle functions
  shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  shuffleTomatoes = () => {
    console.log("shuffflleee")
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const shuffledTomatoes = this.shuffle(this.state.tomatoes.slice());
    // Set this.state.friends equal to the new friends array
    this.setState({ tomatoes: shuffledTomatoes });
  };



  // Scoring function

  handleClick(id) {
    if(id )
    this.setState({ clicked: true})
    console.log("button clicked")
  }

  handleIncrement = (id) => {
    console.log(id)
    this.setState({ count: this.state.count + 1 });
  };

  comboFunction = (id) => {
    this.handleIncrement(id);
    this.handleClick(id);
    this.shuffleTomatoes();
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
      <Title>Clicky Tomatoes</Title>
      <div className="card-body">
          <p className="card-text">Click Count: {this.state.count}</p>
      </div>
        {this.state.tomatoes.map(tomato => (
          <TomatoCard
            id={tomato.id}
            key={tomato.id}
            image={tomato.image}
            comboFunction={this.comboFunction}
            clickedTomato={tomato.clicked}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;


/*****
1. We want to hold a counter in our component’s state just like we hold the tomato list
2. We want to create a function in the same component that when called, calls this.setState and updates our counter
3. We want to probably pass this function to each TomatoCard like we do with the shuffle function
4. We want to run this function every time we click on a card, just like we do with the shuffle function!
Oh and 5. You want to render the counter somewhere on the page so you can see the counter updating :]
 */