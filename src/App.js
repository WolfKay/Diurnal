import React, { Fragment, Component } from 'react';
import germanDictionary from './utils/germanDictionary';
import './App.scss';

const getRandomNumber = max => Math.floor(Math.random() * Math.floor(max));

const WordOfTheDay = props => {
  return (
    <div>
      {props.word}: {props.trans}
    </div>
  );
};

class App extends Component {
  getRandomWordFromDictionary = dictionary => {
    const wordsArray = Object.keys(dictionary);
    const maxNumber = wordsArray.length;
    const word = wordsArray[getRandomNumber(maxNumber)];

    const randomWordFromDictionary = {
      word,
      trans: dictionary[word]
    };

    return this.setState({ wordOftheDay: randomWordFromDictionary });
  };

  state = {
    dictionaryData: germanDictionary,
    wordOftheDay: null
  };

  componentWillMount() {
    this.getRandomWordFromDictionary(this.state.dictionaryData);
  }

  render() {
    console.log(this.state.wordOftheDay);
    const { wordOftheDay } = this.state;
    return (
      <Fragment>
        <div className="App__wrapper">
          <h3 className="App__header">Diurnal!</h3>
          {wordOftheDay && (
            <WordOfTheDay
              className="Wotd__container"
              word={wordOftheDay.word}
              trans={wordOftheDay.trans}
            />
          )}
        </div>
      </Fragment>
    );
  }
}

export default App;
