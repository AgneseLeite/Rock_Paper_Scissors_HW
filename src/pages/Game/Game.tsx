import { useState, useEffect } from 'react';
import { GiStoneBlock } from 'react-icons/gi';
import { HiScissors, HiOutlineNewspaper } from 'react-icons/hi';
import { FaRegHandRock } from 'react-icons/fa';
import styles from './Game.module.css';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";


const Game = () => {
  const [playerChoice, setPlayerChoice] = useState(0);
  const [computerChoice, setComputerChoice] = useState(0);
  const [timer, setTimer] = useState(3);
  const [runTimer, setRunTimer] = useState(false);
  const [result, setResult] = useState({
    winner: '',
    message: ''
  });
  const [score, setScore] = useState({
    player: 0,
    computer: 0
  });

  const { t } = useTranslation();


  useEffect(() => {
    if(runTimer && timer > 0) {
      setTimeout(() => {
        setTimer(timer - 1);
      }, 1000)
    } else if (runTimer && timer < 1) {
      setRunTimer(false);
      setTimer(3);
      getGameLogic();
    }
  }, [runTimer, timer]);


  const options = [
    {
      name: 'rock',
      icon: <GiStoneBlock size={60} />
    },
    {
      name: 'paper',
      icon: <HiOutlineNewspaper size={60} />
    },
    {
      name: 'scissors',
      icon: <HiScissors size={60} />
    },
    {
      name: 'play',
      icon: <FaRegHandRock size={60} />
    }
  ]


  const selectOption = (choiceIndex: number) => {
      setResult({ winner: '', message: ''});
      setPlayerChoice(choiceIndex);
  }

  const generateComputerChoice = () => {
      let randomNumber = Math.floor(Math.random() * 3);
      setComputerChoice(randomNumber);
  }

  const start = () => {
      setResult({winner: '', message: ''});
      setRunTimer(true);
      generateComputerChoice();
  }


  const getGameLogic = () => {
      if (options[playerChoice].name === 'rock' && options[computerChoice].name === 'rock') {
        setResult({ winner: 'both equal', message: 'DRAW!' });
      } else if (options[playerChoice].name === 'paper' && options[computerChoice].name === 'paper') {
        setResult({ winner: 'both equal', message: 'DRAW!' });
      } else if (options[playerChoice].name === 'scissors' && options[computerChoice].name === 'scissors') {
        setResult({ winner: 'both equal', message: 'DRAW!' });
      } else if (options[playerChoice].name === 'rock' && options[computerChoice].name === 'scissors') {
        setResult({ winner: 'player', message: 'ROCK BEATS SCISSORS!' });
        setScore({...score, player: score.player + 1});
      } else if (options[playerChoice].name === 'scissors' && options[computerChoice].name === 'paper') {
        setResult({ winner: 'player', message: 'SCISSORS BEATS PAPER!' });
        setScore({...score, player: score.player + 1});
      } else if (options[playerChoice].name === 'paper' && options[computerChoice].name === 'rock') {
        setResult({ winner: 'player', message: 'PAPER BEATS ROCK!' });
        setScore({...score, player: score.player + 1});
      } else if (options[playerChoice].name === 'scissors' && options[computerChoice].name === 'rock') {
        setResult({ winner: 'computer', message: 'ROCK BEATS SCISSORS!' });
        setScore({...score, computer: score.computer + 1});
      } else if (options[playerChoice].name === 'paper' && options[computerChoice].name === 'scissors') {
        setResult({ winner: 'computer', message: 'SCISSORS BEATS PAPER!' });
        setScore({...score, computer: score.computer + 1});
      } else if (options[playerChoice].name === 'rock' && options[computerChoice].name === 'paper') {
        setResult({ winner: 'computer', message: 'PAPER BEATS ROCK!' });
        setScore({...score, computer: score.computer + 1});
      } 
  }

  // console.log("playerChoice is: ", playerChoice);
  // console.log("computerChoice is: ", computerChoice);


  return (
    <div className={styles.container}>
        <div className={styles.titleContainer}>
            <h1>{t('ROCK PAPER SCISSORS')}</h1>
            <h3>{t('BRING IT ON')}!!</h3>
        </div>

        <div className={styles.scoreContainer}>
            <div className={styles.score}>
                <h3 className={styles.scoreHeading}>{t('Player')}</h3>
                <p className={styles.scorePoints}>{t('Score')}: {score.player}</p>
            </div>
            <div className={styles.score}>
                <h3 className={styles.scoreHeading}>{t('Computer')}</h3>
                <p className={styles.scorePoints}>{t('Score')}: {score.computer}</p>
            </div>
        </div>

        <div className={styles.results}>
          <div className={styles.playerChoice}>
              {runTimer && <div className={styles.playerHand}>{options[3].icon}</div>}
              {result?.winner && (
                <>
                  {options[playerChoice].icon}
                  <span>{options[playerChoice].name}</span>
              </>
              )}
          </div>

          <div className={styles.resultColumn}>
              { runTimer && <span className={styles.timer}>{timer}</span>}
              {result?.winner && (
                <>
                  <p className={styles.winner}>{t('Winner')}: <br />{result.winner}</p>
                  <p className={styles.winnerMessage}>{result.message}</p>
                </>
              )}
          </div>

          <div className={styles.computerChoice}>
              {runTimer && <div className={styles.computerHand}>{options[3].icon}</div>}
              {result?.winner && (
                <>
                  {options[computerChoice].icon}
                  <span>{options[computerChoice].name}</span>
              </>
              )}
          </div>
        </div>

        <div className={styles.choiceBtnContainer}>
          <button className={`${styles.choiceBtn} ${playerChoice === 0 ? styles.activeChoice : ''}`} onClick={() => selectOption(0)}>
              <GiStoneBlock size={60} />
              {t('Rock')}
          </button>
          <button className={`${styles.choiceBtn} ${playerChoice === 1 ? styles.activeChoice : ''}`} onClick={() => selectOption(1)}>
              <HiOutlineNewspaper size={60} />
              {t('Paper')}
          </button>
          <button className={`${styles.choiceBtn} ${playerChoice === 2 ? styles.activeChoice : ''}`} onClick={() => selectOption(2)}>
              <HiScissors size={60} />
              {t('Scissors')}
          </button>
        </div>

        <button className={styles.playBtn} onClick={start}>
        {t('Play')}
        </button>
    </div>
  )
}

export default Game;