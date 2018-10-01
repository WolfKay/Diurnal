import React, { Fragment, Component } from 'react';
import germanDictionary from './utils/germanDictionary';
import './App.scss';

const getRandomNumber = max => Math.floor(Math.random() * Math.floor(max));

const WordOfTheDay = props => {
  return (
    <div className="Wotd__container">
      <div className="Wotd__word">{props.word}</div>
      <div className="Wotd__trans">{props.trans}</div>
    </div>
  );
};

const AppIcon = props => {
  const theme = {
    default: '#8affe8',
    dark: 'black',
    light: 'white'
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 100 125"
      fill={theme[props.theme]}
      height="50px"
      width="30px"
    >
      <path d="M86.56,5H21.88A11.26,11.26,0,0,0,10.63,16.25v67.5A11.26,11.26,0,0,0,21.88,95H86.56a2.81,2.81,0,0,0,2.81-2.81V7.81A2.81,2.81,0,0,0,86.56,5ZM21.88,89.38a5.63,5.63,0,0,1-5.62-5.62V16.25a5.63,5.63,0,0,1,5.63-5.62H27.5V89.38Zm61.88,0H33.13V10.63h22.5V37.34l8.44-8.44,8.44,8.44V10.63H83.75Z" />
    </svg>
  );
};

const ConjugationSection = props => {
  return (
    <div className="Section">
      <div className="Section__word">Word here</div>
      <div className="Section__tense">tense</div>
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
    // this.getRandomWordFromDictionary(this.state.dictionaryData);
    fetch(
      'https://github.com/hathibelagal/German-English-JSON-Dictionary/blob/master/german_english.json'
    )
      .then(response => response.json())
      .then(data => console.log(data));
  }

  render() {
    const { wordOftheDay } = this.state;
    return (
      <Fragment>
        <div className="App__wrapper">
          <div className="App__header">
            <AppIcon className="App__header__icon" theme="default" />
            <span className="App__header__title">Diurnal</span>
          </div>
          {wordOftheDay && (
            <WordOfTheDay word={wordOftheDay.word} trans={wordOftheDay.trans} />
          )}
          <ConjugationSection />
        </div>
      </Fragment>
    );
  }
}

export default App;
