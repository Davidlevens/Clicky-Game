import React, { Component } from "react";

import Thumbnail from "./components/Thumbnail";
import Score from "./components/Score";

class App extends Component {

  state = {
    tiles: [
      "../../assets/img/acura_PNG113.png",
      "../../assets/img/audi_PNG1771.png",
      "../../assets/img/bentley_PNG28.png",
      "../../assets/img/bmw_PNG1670.png",

      "../../assets/img/bugatti_PNG12.png",
      "../../assets/img/camaro_PNG35.png",
      "../../assets/img/dodge_PNG7.png",
      "../../assets/img/ferrari_PNG10657.png",

      "../../assets/img/lamborghini_PNG10682.png",
      "../../assets/img/lexus_PNG45.png",
      "../../assets/img/maserati_PNG60.png",
      "../../assets/img/Mclaren_PNG64.png",

      "../../assets/img/mercedes_PNG80153.png",
      "../../assets/img/mustang_PNG43.png",
      "../../assets/img/porsche_PNG10624.png",
      "../../assets/img/subaru_PNG11960.png"

    ],
    score: 0
  };

  clickedTiles = [

  ];


  handleTileClick = (evt) => {

    const clickedTile = evt.target.src;

    if (this.clickedTiles.includes(clickedTile)) {
      this.setState({ score: 0 });
      console.log('ERRRR: already clicked, score: ', this.state.score);
      return;
    }

    const newScore = this.state.score + 1;
    const topScore = newScore > this.state.topScore ?
      newScore :
      this.state.topScore;

    this.clickedTiles.push(clickedTile);
    console.log('score: ', this.state.score)

    const shuffled = this.state.tiles.sort(() => 0.5 - Math.random());
    this.setState({
      tiles: shuffled,
      score: newScore,
      topScore: topScore
    });
  }

  render() {
    return (
      <div className="App">
        <Score score={this.state.score} topScore={this.state.topScore} />
        {
          this.state.tiles.map((tile, idx) => <Thumbnail
            src={tile} key={idx} onClick={this.handleTileClick}
          />)
        }

      </div>
    );
  }
}

export default App;
